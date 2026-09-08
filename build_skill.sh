#!/usr/bin/env bash
# Build one .skill zip per skill from the canonical source in skill_extract/.
#
#   dist/earth-star.skill            core framework
#   dist/earth-star-research.skill   veracity protocol (framework-agnostic)
#   dist/heliosphere-data.skill      verified space-weather data catalog + models
#   earth-star.skill                 backward-compatible copy of the core skill
#
# The .skill zips are generated output — never edit them directly.
# Usage: ./build_skill.sh            (build all)
#        ./build_skill.sh --check    (build to a temp dir and diff against committed zips)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
SRC="$ROOT/skill_extract"
DIST="$ROOT/dist"
SKILLS=(earth-star earth-star-research heliosphere-data)

check_only=0
[[ "${1:-}" == "--check" ]] && check_only=1

build_one() {
  local name="$1" out="$2"
  [[ -f "$SRC/$name/SKILL.md" ]] || { echo "missing $SRC/$name/SKILL.md" >&2; exit 1; }
  # Validate frontmatter: name matches directory, description ≤ 1024 chars.
  python3 - "$SRC/$name/SKILL.md" "$name" <<'PY'
import re, sys
path, name = sys.argv[1], sys.argv[2]
text = open(path, encoding="utf-8").read()
m = re.match(r"---\n(.*?)\n---\n", text, re.S)
assert m, f"{path}: no frontmatter"
fm = m.group(1)
n = re.search(r"^name:\s*(\S+)\s*$", fm, re.M)
d = re.search(r'^description:\s*"(.*)"\s*$', fm, re.M)
assert n and n.group(1) == name, f"{path}: frontmatter name must be {name}"
assert d, f"{path}: description must be a double-quoted string"
assert len(d.group(1)) <= 1024, f"{path}: description is {len(d.group(1))} chars (>1024)"
size = len(text.encode("utf-8"))
if size > 24_000:
    print(f"  warning: {path} is {size} bytes (target ≤ ~20 KB)", file=sys.stderr)
PY
  rm -f "$out"
  (cd "$SRC" && zip -q -X -r "$out" "$name" -x '*.DS_Store' -x '__MACOSX/*')
  echo "  built $(basename "$out") ($(du -h "$out" | cut -f1 | tr -d ' '))"
}

if (( check_only )); then
  TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT
  status=0
  for s in "${SKILLS[@]}"; do
    build_one "$s" "$TMP/$s.skill" >/dev/null
    for target in "$DIST/$s.skill" $([[ "$s" == earth-star ]] && echo "$ROOT/earth-star.skill"); do
      if [[ ! -f "$target" ]]; then echo "MISSING $target"; status=1; continue; fi
      # Compare contents (zip metadata may differ), not bytes.
      if diff <(unzip -p "$TMP/$s.skill" | shasum -a 256) <(unzip -p "$target" | shasum -a 256) >/dev/null \
         && diff <(unzip -Z1 "$TMP/$s.skill" | sort) <(unzip -Z1 "$target" | sort) >/dev/null; then
        echo "OK      $target matches skill_extract/$s"
      else
        echo "STALE   $target differs from skill_extract/$s — run ./build_skill.sh"; status=1
      fi
    done
  done
  exit $status
fi

mkdir -p "$DIST"
echo "Building skills from $SRC"
for s in "${SKILLS[@]}"; do
  build_one "$s" "$DIST/$s.skill"
done
cp "$DIST/earth-star.skill" "$ROOT/earth-star.skill"
echo "  copied dist/earth-star.skill -> earth-star.skill (compat)"
echo "done."

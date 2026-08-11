#!/usr/bin/env bash
# Rebuild earth-star.skill from the canonical source in skill_extract/.
# The .skill zip is generated output — never edit it directly.
set -euo pipefail
cd "$(dirname "$0")/skill_extract"
rm -f ../earth-star.skill
zip -r ../earth-star.skill earth-star -x '*.DS_Store'
echo "earth-star.skill rebuilt from skill_extract/"

# Meta-Gomen Toolset Architecture
## Agent-Specific Tool Integration v0.5

---

## Overview

Each agent in Meta-Gomen has access to specific tools that extend its capabilities beyond pure language generation. Tools are organized into categories and assigned based on agent function.

**Design Principles:**
1. **Right tool for right task** - LLMs orchestrate, tools compute
2. **Provenance tracking** - Every tool output is marked with `tool-calculation` provenance
3. **Reproducibility** - Tool outputs are deterministic and verifiable
4. **Graceful degradation** - Agents work without tools, just less precisely

---

## 1. Tool Categories

### 1.1 Computation Tools

| Tool | Purpose | Output Type |
|------|---------|-------------|
| **SymPy** | Symbolic math, algebra, calculus | Exact solutions |
| **NumPy** | Numerical computation, linear algebra | Numerical results |
| **SciPy** | Scientific computing, statistics | Statistical analysis |
| **Pint** | Unit conversions | Converted values |
| **mpmath** | Arbitrary precision arithmetic | High-precision numbers |

### 1.2 Chemistry/Biology Tools

| Tool | Purpose | Output Type |
|------|---------|-------------|
| **RDKit** | Molecular structure, properties | SMILES, molecular data |
| **PubChemPy** | Chemical database lookup | Compound information |
| **Biopython** | Sequence analysis | Biological data |
| **ChEMBL** | Bioactivity database | Drug/target data |

### 1.3 Graph/Network Tools

| Tool | Purpose | Output Type |
|------|---------|-------------|
| **NetworkX** | Graph algorithms | Metrics, paths, communities |
| **igraph** | Large-scale graph analysis | Network statistics |
| **PyVis** | Graph visualization | Interactive HTML |

### 1.4 Data Analysis Tools

| Tool | Purpose | Output Type |
|------|---------|-------------|
| **Pandas** | Data manipulation | DataFrames, statistics |
| **Polars** | Fast data processing | Query results |
| **DuckDB** | SQL on local data | Query results |

### 1.5 External API Tools

| Tool | Purpose | Output Type |
|------|---------|-------------|
| **Wolfram Alpha** | General computation oracle | Verified answers |
| **Semantic Scholar** | Academic paper search | Citations, abstracts |
| **arXiv API** | Preprint access | Paper metadata |
| **CrossRef** | DOI/citation lookup | Bibliographic data |

### 1.6 Visualization Tools

| Tool | Purpose | Output Type |
|------|---------|-------------|
| **Matplotlib** | Static plots | PNG/SVG images |
| **Plotly** | Interactive charts | HTML widgets |
| **Mermaid** | Diagrams from text | SVG diagrams |
| **Graphviz** | Graph layouts | DOT/SVG |

### 1.7 Document Tools

| Tool | Purpose | Output Type |
|------|---------|-------------|
| **PyMuPDF** | PDF extraction | Text, images |
| **python-docx** | Word document handling | Structured text |
| **Pandoc** | Format conversion | Multiple formats |
| **BibTeX** | Citation management | Formatted citations |

---

## 2. Agent Tool Assignments

### 2.1 FORAGER Tools

**Purpose**: Extract, parse, and structure incoming content

```yaml
forager_tools:
  document_processing:
    - pymupdf        # PDF text/image extraction
    - python-docx    # Word document parsing
    - markdownify    # HTML to markdown
    - trafilatura    # Web content extraction
    
  metadata_extraction:
    - crossref       # DOI lookup for citations
    - arxiv_api      # arXiv paper metadata
    - youtube_transcript  # Video transcript extraction
    
  content_analysis:
    - langdetect     # Language detection
    - dateparser     # Date extraction
    - spacy          # NER for entity extraction
    
  not_assigned:
    # FORAGER doesn't need computation tools
    # It extracts, doesn't analyze
```

**Example FORAGER Tool Use**:
```python
# FORAGER receives PDF
pdf_text = pymupdf.extract_text(pdf_path)
doi = extract_doi(pdf_text)
metadata = crossref.get_metadata(doi)

# Output note with provenance
note = {
    "content": pdf_text,
    "provenance": {
        "type": "llm-extraction",
        "source": {"doi": doi, "title": metadata.title},
        "tools_used": ["pymupdf", "crossref"]
    }
}
```

### 2.2 WEAVER Tools

**Purpose**: Analyze connections, compute graph metrics, detect patterns

```yaml
weaver_tools:
  graph_analysis:
    - networkx       # Core graph algorithms
    - community      # Community detection (Louvain)
    - igraph         # Large-scale graph metrics
    
  text_analysis:
    - sklearn        # TF-IDF, clustering
    - sentence_transformers  # Semantic similarity
    - rapidfuzz      # Fuzzy string matching
    
  statistics:
    - scipy.stats    # Statistical tests
    - numpy          # Numerical operations
    
  visualization:
    - pyvis          # Interactive graph viz
    - matplotlib     # Static plots
    
  database:
    - sqlite3        # FTS5 queries
    - duckdb         # Analytical queries
```

**Example WEAVER Tool Use**:
```python
# WEAVER analyzing vault graph
G = networkx.read_gpickle(graph_path)

# Compute centrality
centrality = networkx.pagerank(G)
communities = community.best_partition(G)

# Find bridge notes
bridges = networkx.bridges(G)

# Output with tool provenance
analysis = {
    "high_centrality_notes": top_k(centrality, 10),
    "community_count": len(set(communities.values())),
    "bridge_notes": list(bridges),
    "provenance": {
        "type": "tool-calculation",
        "tools": ["networkx", "community"],
        "reproducible": True
    }
}
```

### 2.3 DREAMER Tools

**Purpose**: Minimal tools - DREAMER is about speculation, not precision

```yaml
dreamer_tools:
  # DREAMER intentionally has FEW tools
  # Its job is creative speculation, not verification
  
  sampling:
    - random         # Random note selection
    - numpy.random   # Weighted sampling
    
  optional_lookup:
    - wikipedia_api  # Quick fact checks (rarely used)
    
  not_assigned:
    # No computation tools - dreams should be free
    # No verification tools - that's SCIENTIST's job
    # No citation tools - that's SCHOLAR's job
```

**DREAMER Philosophy**: 
> Dreams don't need to be verified. They need to be generative. Tools constrain; DREAMER should be unconstrained.

### 2.4 SCHOLAR Tools

**Purpose**: Academic rigor, citations, literature review

```yaml
scholar_tools:
  literature_search:
    - semantic_scholar  # Paper search by topic
    - arxiv_api         # Preprint search
    - crossref          # DOI/citation lookup
    - openalex          # Open academic graph
    
  citation_management:
    - bibtexparser      # BibTeX parsing
    - citeproc          # Citation formatting
    - habanero          # CrossRef client
    
  text_analysis:
    - spacy             # NER, dependency parsing
    - sklearn           # Topic modeling
    
  verification:
    - scholarly         # Google Scholar (careful with rate limits)
    
  formatting:
    - pandoc            # Academic format conversion
    - latex             # Equation rendering
```

**Example SCHOLAR Tool Use**:
```python
# SCHOLAR verifying a claim
claim = "Quantum coherence persists in photosynthesis at room temperature"

# Search literature
papers = semantic_scholar.search(
    query="quantum coherence photosynthesis",
    year_range=(2015, 2025),
    min_citations=50
)

# Check claim support
supporting = [p for p in papers if supports_claim(p.abstract, claim)]
contradicting = [p for p in papers if contradicts_claim(p.abstract, claim)]

# Output with full citations
analysis = {
    "claim": claim,
    "verdict": "supported" if len(supporting) > len(contradicting) else "contested",
    "supporting_papers": [format_citation(p) for p in supporting[:5]],
    "contradicting_papers": [format_citation(p) for p in contradicting[:3]],
    "provenance": {
        "type": "tool-calculation",
        "tools": ["semantic_scholar"],
        "search_date": datetime.now().isoformat()
    }
}
```

### 2.5 SCIENTIST Tools

**Purpose**: Quantitative analysis, empirical verification, methodology

```yaml
scientist_tools:
  computation:
    - sympy           # Symbolic math
    - numpy           # Numerical computation
    - scipy           # Scientific computing
    - mpmath          # Arbitrary precision
    
  chemistry:
    - rdkit           # Molecular analysis
    - pubchempy       # Chemical database
    - openbabel       # Format conversion
    
  statistics:
    - scipy.stats     # Statistical tests
    - statsmodels     # Regression, time series
    - pingouin        # Statistical testing
    
  data_analysis:
    - pandas          # Data manipulation
    - polars          # Fast processing
    - duckdb          # SQL analytics
    
  visualization:
    - matplotlib      # Static plots
    - plotly          # Interactive charts
    - seaborn         # Statistical viz
    
  external_computation:
    - wolfram_alpha   # Computation oracle
    
  units_and_constants:
    - pint            # Unit handling
    - scipy.constants # Physical constants
```

**Example SCIENTIST Tool Use**:
```python
# SCIENTIST verifying a quantitative claim
claim = "The molecular weight of glucose is approximately 180 g/mol"

# Verify with RDKit
from rdkit import Chem
from rdkit.Chem import Descriptors

glucose = Chem.MolFromSmiles("OC[C@H]1OC(O)[C@H](O)[C@@H](O)[C@@H]1O")
mw = Descriptors.MolWt(glucose)

# Output with exact calculation
verification = {
    "claim": claim,
    "calculated_value": f"{mw:.4f} g/mol",
    "claim_accuracy": "correct" if abs(mw - 180) < 1 else "incorrect",
    "provenance": {
        "type": "tool-calculation",
        "tool": "rdkit",
        "version": rdkit.__version__,
        "input": "SMILES: OC[C@H]1OC(O)[C@H](O)[C@@H](O)[C@@H]1O",
        "reproducible": True,
        "confidence": "exact"
    }
}
```

### 2.6 SAGE Tools

**Purpose**: Synthesis coordination, Earth Star alignment, quorum management

```yaml
sage_tools:
  synthesis:
    - jinja2          # Template rendering for outputs
    - markdown        # Markdown processing
    
  graph_traversal:
    - networkx        # Pattern finding across vault
    
  quorum_coordination:
    - asyncio         # Parallel agent coordination
    - structured_output  # JSON schema validation
    
  earth_star_metrics:
    - custom.coherence  # ∇𝒞 calculation
    - custom.scale_analysis  # Fractal scale mapping
    
  visualization:
    - mermaid         # Diagram generation
    - graphviz        # Relationship viz
    
  not_assigned:
    # SAGE doesn't do primary computation
    # It synthesizes what SCHOLAR and SCIENTIST produce
```

---

## 3. Tool Interface Specification

### 3.1 Standard Tool Interface

```python
# tools/interface.py

from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import Any, Dict, Optional
from datetime import datetime

@dataclass
class ToolResult:
    """Standard output from any tool"""
    success: bool
    output: Any
    provenance: Dict
    execution_time: float
    error: Optional[str] = None

@dataclass
class ToolProvenance:
    """Provenance metadata for tool outputs"""
    tool_name: str
    tool_version: str
    input_hash: str
    output_hash: str
    executed_at: datetime
    reproducible: bool
    confidence: str  # "exact", "approximate", "estimated"

class Tool(ABC):
    """Abstract base class for all tools"""
    
    @property
    @abstractmethod
    def name(self) -> str:
        pass
    
    @property
    @abstractmethod
    def version(self) -> str:
        pass
    
    @property
    @abstractmethod
    def capabilities(self) -> list[str]:
        pass
    
    @abstractmethod
    def execute(self, **kwargs) -> ToolResult:
        pass
    
    def get_provenance(self, input_data: Any, output_data: Any) -> ToolProvenance:
        return ToolProvenance(
            tool_name=self.name,
            tool_version=self.version,
            input_hash=hash_data(input_data),
            output_hash=hash_data(output_data),
            executed_at=datetime.now(),
            reproducible=True,
            confidence="exact"
        )
```

### 3.2 Tool Registry

```yaml
# config/tools.yaml

tool_registry:
  version: "2025-12-19"
  
  categories:
    computation:
      sympy:
        package: sympy
        version: "1.13+"
        agents: [scientist]
        capabilities: [symbolic_math, equation_solving, calculus]
        
      numpy:
        package: numpy
        version: "1.26+"
        agents: [scientist, weaver]
        capabilities: [numerical_computation, linear_algebra]
        
    chemistry:
      rdkit:
        package: rdkit
        version: "2024.03+"
        agents: [scientist]
        capabilities: [molecular_weight, structure_analysis, similarity]
        install_note: "conda install -c conda-forge rdkit"
        
    graph:
      networkx:
        package: networkx
        version: "3.0+"
        agents: [weaver, sage]
        capabilities: [centrality, communities, paths, bridges]
        
    literature:
      semantic_scholar:
        package: semanticscholar
        version: "0.8+"
        agents: [scholar]
        capabilities: [paper_search, citation_lookup, author_info]
        rate_limit: "100/5min"
        
    external:
      wolfram_alpha:
        package: wolframalpha
        agents: [scientist]
        capabilities: [general_computation, verification]
        requires_api_key: true
        env_var: WOLFRAM_APP_ID
```

---

## 4. Tool Orchestration

### 4.1 Agent Tool Router

```python
# tools/router.py

class ToolRouter:
    """Routes tool requests to appropriate implementations"""
    
    def __init__(self, config_path: str):
        self.config = load_config(config_path)
        self.tool_instances = {}
        
    def get_tools_for_agent(self, agent_name: str) -> list[Tool]:
        """Returns tools available to a specific agent"""
        agent_tools = []
        for category, tools in self.config['categories'].items():
            for tool_name, tool_config in tools.items():
                if agent_name in tool_config.get('agents', []):
                    agent_tools.append(self.get_tool(tool_name))
        return agent_tools
    
    def execute_tool(
        self, 
        tool_name: str, 
        agent_name: str,
        **kwargs
    ) -> ToolResult:
        """Execute a tool with permission checking"""
        # Verify agent has access
        tool_config = self.get_tool_config(tool_name)
        if agent_name not in tool_config.get('agents', []):
            raise PermissionError(f"{agent_name} cannot use {tool_name}")
        
        # Execute with timing
        start = time.time()
        tool = self.get_tool(tool_name)
        result = tool.execute(**kwargs)
        result.execution_time = time.time() - start
        
        # Log for audit
        self.log_tool_use(agent_name, tool_name, result)
        
        return result
```

### 4.2 Tool Call Protocol

```yaml
# How agents request tool use

tool_call_format:
  request:
    tool: "rdkit"
    action: "calculate_molecular_weight"
    params:
      smiles: "C6H12O6"
    agent: "scientist"
    context: "Verifying glucose MW claim"
    
  response:
    success: true
    result:
      molecular_weight: 180.1559
      unit: "g/mol"
    provenance:
      tool: "rdkit"
      version: "2024.03.1"
      confidence: "exact"
      reproducible: true
      calculation_method: "Descriptors.MolWt"
    execution_time_ms: 12
```

---

## 5. Implementation Phases

### Phase 1: Core Tools (Week 1)

**Desktop (FORAGER/WEAVER/DREAMER)**:
```bash
pip install sympy numpy scipy networkx pandas sqlite3
pip install trafilatura markdownify dateparser
```

**MacBook (SCHOLAR/SCIENTIST/SAGE)**:
```bash
pip install sympy numpy scipy networkx pandas
pip install semanticscholar arxiv crossref-commons
pip install rdkit-pypi  # or conda install rdkit
pip install matplotlib plotly seaborn
pip install wolframalpha  # + API key
```

### Phase 2: Extended Tools (Week 2)

```bash
# Literature tools
pip install scholarly habanero bibtexparser

# Chemistry extended
pip install pubchempy openbabel-wheel

# Visualization
pip install pyvis graphviz mermaid-py

# Document processing
pip install pymupdf python-docx pandoc
```

### Phase 3: Custom Tools (Week 3)

```python
# Custom Earth Star metrics

class CoherenceCalculator(Tool):
    """Calculate ∇𝒞 across scales"""
    
    name = "coherence_calculator"
    version = "0.1.0"
    capabilities = ["coherence_gradient", "scale_analysis"]
    
    def execute(self, vault_graph, note_id: str) -> ToolResult:
        # Measure coherence contribution of a note
        local_coherence = self.measure_local(vault_graph, note_id)
        cross_scale = self.measure_cross_scale(vault_graph, note_id)
        
        return ToolResult(
            success=True,
            output={
                "coherence_gradient": local_coherence + cross_scale,
                "local_contribution": local_coherence,
                "cross_scale_contribution": cross_scale
            },
            provenance=self.get_provenance(...)
        )
```

---

## 6. Tool-Aware Prompts

### 6.1 SCIENTIST System Prompt (with tools)

```
You are SCIENTIST, an empirical researcher with access to computational tools.

AVAILABLE TOOLS:
- sympy: Symbolic math (solve equations, calculus, algebra)
- numpy: Numerical computation
- rdkit: Molecular analysis (MW, structure, similarity)
- scipy.stats: Statistical tests
- wolfram_alpha: General computation verification

TOOL USE PROTOCOL:
1. When you need to verify a quantitative claim, USE A TOOL
2. Do not estimate what you can calculate
3. Always include tool provenance in your output
4. If a tool fails, note the failure and explain limitations

EXAMPLE:
User: "Is the claim that aspirin has MW ~180 correct?"

Your response should:
1. Call rdkit with aspirin SMILES
2. Report exact calculated MW
3. Compare to claim
4. Include full provenance

DO NOT guess molecular weights, physical constants, or statistical results.
USE THE TOOLS.
```

### 6.2 SCHOLAR System Prompt (with tools)

```
You are SCHOLAR, an academic researcher with access to literature tools.

AVAILABLE TOOLS:
- semantic_scholar: Search academic papers by topic
- arxiv_api: Search preprints
- crossref: Look up DOIs and citations
- bibtexparser: Format citations

TOOL USE PROTOCOL:
1. When citing claims, VERIFY with literature search
2. Provide full citations in standard academic format
3. Note publication dates and citation counts
4. Distinguish peer-reviewed from preprints

EXAMPLE:
User: "Is there evidence for quantum effects in biology?"

Your response should:
1. Search semantic_scholar for relevant papers
2. Identify seminal works and recent advances
3. Cite specific papers with authors, year, journal
4. Note the state of scientific consensus

DO NOT fabricate citations. USE THE TOOLS to find real papers.
```

---

## 7. Summary: Agent-Tool Matrix

| Agent | Primary Tools | Secondary Tools | Forbidden Tools |
|-------|--------------|-----------------|-----------------|
| **FORAGER** | pymupdf, crossref, trafilatura | arxiv_api, dateparser | computation tools |
| **WEAVER** | networkx, sklearn, sqlite3 | scipy.stats, matplotlib | external APIs |
| **DREAMER** | random, numpy.random | (minimal by design) | verification tools |
| **SCHOLAR** | semantic_scholar, crossref, bibtex | arxiv_api, spacy | computation tools |
| **SCIENTIST** | sympy, rdkit, scipy, wolfram | numpy, pandas, matplotlib | literature tools |
| **SAGE** | networkx, jinja2, mermaid | custom coherence | primary analysis tools |

---

## 8. Provenance Integration

All tool outputs feed into the provenance system:

```yaml
# Example note with tool-derived content

---
title: "Glucose Molecular Properties"
date: 2025-12-19
type: synthesis

provenance:
  type: tool-calculation
  primary_tool: rdkit
  tool_version: "2024.03.1"
  agent: scientist
  
  calculations:
    - tool: rdkit
      function: Descriptors.MolWt
      input: "OC[C@H]1OC(O)[C@H](O)[C@@H](O)[C@@H]1O"
      output: 180.1559
      confidence: exact
      
    - tool: rdkit
      function: Descriptors.TPSA
      input: "OC[C@H]1OC(O)[C@H](O)[C@@H](O)[C@@H]1O"
      output: 110.38
      confidence: exact
      
  reproducible: true
  verification_command: |
    from rdkit import Chem
    from rdkit.Chem import Descriptors
    mol = Chem.MolFromSmiles("OC[C@H]1OC(O)[C@H](O)[C@@H](O)[C@@H]1O")
    print(Descriptors.MolWt(mol))  # Should output: 180.1559
---
```

---

*Tools extend agents' capabilities while maintaining reproducibility and provenance.* 🔧🌱

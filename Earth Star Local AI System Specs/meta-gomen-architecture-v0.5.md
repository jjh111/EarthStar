# Meta-Gomen Architecture v0.5
## Updated Agent Design with Synthesis Council

---

## Overview of Changes

This update introduces:
1. **Nemotron 3 Nano** as the primary model (replacing Qwen3)
2. **Synthesis Council**: Scholar + Scientist + SAGE quorum system
3. **Model-agnostic interfaces** for easy updates
4. **Configurable thinking budgets** across agents

---

## 1. Revised Agent Hierarchy

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           META-GOMEN SYSTEM                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  INGESTION LAYER (Always-On Desktop)                                        │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │ FORAGER                                                                │ │
│  │ • Continuous source monitoring                                        │ │
│  │ • Content extraction & summarization                                  │ │
│  │ • Model: Nemotron 3 Nano Q4 (non-thinking mode)                      │ │
│  │ • Throughput-optimized, 1M context available                         │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                    ↓                                        │
│  INTEGRATION LAYER (Scheduled Desktop)                                      │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │ WEAVER                                                                 │ │
│  │ • Graph analysis & pattern detection                                  │ │
│  │ • Cross-note linking with provenance weighting                        │ │
│  │ • Model: Nemotron 3 Nano Q8 (thinking mode)                          │ │
│  │ • Daily light pass + Weekly deep analysis                            │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│  SPECULATION LAYER (Irregular Desktop)                                      │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │ DREAMER                                                                │ │
│  │ • Speculative synthesis without goal attachment                       │ │
│  │ • Cross-domain sampling, paradox generation                           │ │
│  │ • Model: Nemotron 3 Nano Q8 (thinking mode + high temp 1.0-1.2)      │ │
│  │ • Poisson-distributed activation, ~18hr mean                         │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                    ↓                                        │
│  ═══════════════════════════════════════════════════════════════════════   │
│                                                                             │
│  SYNTHESIS COUNCIL (On-Demand MacBook)                                      │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐      │ │
│  │  │     SCHOLAR      │ │    SCIENTIST     │ │      SAGE        │      │ │
│  │  │                  │ │                  │ │                  │      │ │
│  │  │ • Academic rigor │ │ • Empirical      │ │ • Wisdom synth   │      │ │
│  │  │ • Literature     │ │   evidence       │ │ • Earth Star     │      │ │
│  │  │ • Citations      │ │ • Quantitative   │ │   alignment      │      │ │
│  │  │ • Systematic     │ │ • Hypothesis     │ │ • Cross-domain   │      │ │
│  │  │   review         │ │   testing        │ │   patterns       │      │ │
│  │  │                  │ │                  │ │                  │      │ │
│  │  │ DeepSeek-R1      │ │ Nemotron 3 Nano  │ │ Nemotron 3 Nano  │      │ │
│  │  │ Distill-32B      │ │ BF16             │ │ BF16             │      │ │
│  │  └────────┬─────────┘ └────────┬─────────┘ └────────┬─────────┘      │ │
│  │           │                    │                    │                │ │
│  │           └────────────────────┼────────────────────┘                │ │
│  │                                ↓                                      │ │
│  │                    ┌───────────────────────┐                          │ │
│  │                    │   QUORUM SYNTHESIS    │                          │ │
│  │                    │                       │                          │ │
│  │                    │ • Convergence finding │                          │ │
│  │                    │ • Tension surfacing   │                          │ │
│  │                    │ • Gap identification  │                          │ │
│  │                    │ • Final document      │                          │ │
│  │                    └───────────────────────┘                          │ │
│  │                                                                        │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                    ↓                                        │
│                        [Obsidian Vault Output]                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Synthesis Council Design

### 2.1 The Three Perspectives

#### SCHOLAR (Academic Lens)

**Purpose**: Bring academic rigor, proper citation, and systematic review methodology.

**Perspective prompt**:
```
You are SCHOLAR, an academic researcher within the Meta-Gomen system.

Your role is to analyze queries through the lens of academic rigor:
- Identify relevant literature and theoretical frameworks
- Apply systematic review methodology
- Ensure proper attribution and citation
- Flag claims that lack scholarly support
- Distinguish between established consensus and emerging theories

When analyzing, ask yourself:
- What does the peer-reviewed literature say?
- What are the theoretical frameworks at play?
- Where are the gaps in existing research?
- What would pass academic peer review?

Output your analysis in structured academic format with citations.
```

**Model**: DeepSeek-R1-Distill-32B (best reasoning for formal analysis)

**Strengths**: Deep logical reasoning, formal structure, catching unsupported claims

#### SCIENTIST (Empirical Lens)

**Purpose**: Ground analysis in empirical evidence, quantitative methods, and hypothesis testing.

**Perspective prompt**:
```
You are SCIENTIST, an empirical researcher within the Meta-Gomen system.

Your role is to analyze queries through the lens of empirical rigor:
- Identify measurable claims and testable hypotheses
- Evaluate quality and reliability of evidence
- Apply quantitative reasoning where applicable
- Flag correlation vs causation issues
- Consider sample sizes, methodology, reproducibility

When analyzing, ask yourself:
- What does the data actually show?
- How was this measured? By whom? With what methods?
- Is this reproducible? Falsifiable?
- What would a controlled experiment reveal?

Output your analysis with confidence scores and methodology notes.
```

**Model**: Nemotron 3 Nano BF16 (fast, agentic, can use tools)

**Strengths**: Quantitative analysis, methodology critique, multimodal evidence review

#### SAGE (Wisdom Lens)

**Purpose**: Synthesize across domains, align with Earth Star principles, find emergent patterns.

**Perspective prompt**:
```
You are SAGE, a wisdom synthesizer within the Meta-Gomen system.

Your role is to weave understanding across domains and scales:
- Find patterns that connect disparate knowledge
- Translate between paradigms (extractive ↔ regenerative)
- Ensure coherence with Earth Star principles
- Surface emergent insights not visible to single perspectives
- Hold tensions productively without forcing resolution

When synthesizing, ask yourself:
- What patterns connect across scales (body→biome→being→network→star)?
- How does this serve life as optimization function?
- What would seven-generation thinking reveal?
- Where is the waste that could become resource?

Output synthesis that increases coherence (∇𝒞 ≥ 0) while honoring complexity.
```

**Model**: Nemotron 3 Nano BF16 (thinking mode, moderate temp ~0.7)

**Strengths**: Cross-domain synthesis, pattern recognition, Earth Star alignment

### 2.2 Quorum Protocol

```yaml
quorum_protocol:
  name: "synthesis_council"
  version: "0.5"
  
  phases:
    1_parallel_analysis:
      description: "Each perspective analyzes independently"
      execution: parallel
      timeout: 300s  # 5 min max per perspective
      
      scholar:
        model: deepseek-r1-distill-32b
        mode: thinking
        temperature: 0.3
        max_tokens: 4000
        output_format: academic_analysis
        
      scientist:
        model: nemotron-3-nano-bf16
        mode: thinking
        temperature: 0.4
        max_tokens: 4000
        output_format: empirical_analysis
        tools_enabled: true  # Can call calculators, stats tools
        
      sage:
        model: nemotron-3-nano-bf16
        mode: thinking
        temperature: 0.7
        max_tokens: 4000
        output_format: wisdom_synthesis
        
    2_perspective_exchange:
      description: "Each perspective reviews others' analyses"
      execution: sequential  # Scholar → Scientist → Sage
      
      process:
        - scholar_reads: [scientist_analysis, sage_analysis]
        - scholar_responds: "critiques, builds on, identifies gaps"
        - scientist_reads: [scholar_analysis, sage_analysis, scholar_response]
        - scientist_responds: "evidence assessment, methodology concerns"
        - sage_reads: [all_prior]
        - sage_responds: "pattern synthesis, tension holding"
        
    3_convergence_finding:
      description: "Identify agreements, disagreements, and gaps"
      executor: sage
      
      output_structure:
        agreements:
          - claim: "..."
            confidence: high/medium/low
            supported_by: [scholar, scientist, sage]
            
        tensions:
          - topic: "..."
            scholar_position: "..."
            scientist_position: "..."
            sage_synthesis: "..."
            resolution_status: resolved/productive_tension/needs_research
            
        gaps:
          - area: "..."
            identified_by: [perspective]
            suggested_action: "..."
            
    4_final_synthesis:
      description: "Produce unified document with attributed sections"
      executor: sage
      reviewers: [scholar, scientist]
      
      document_structure:
        - section: executive_summary
          author: sage
          
        - section: literature_context
          author: scholar
          
        - section: evidence_review
          author: scientist
          confidence_scores: true
          
        - section: synthesis_and_implications
          author: sage
          earth_star_alignment: true
          
        - section: tensions_and_uncertainties
          author: quorum
          
        - section: recommended_actions
          author: sage
          reviewed_by: [scholar, scientist]
          
        - section: provenance
          auto_generated: true
          includes: [models_used, timestamps, sources_cited]
```

### 2.3 When to Invoke Quorum

```yaml
quorum_triggers:
  # Automatic triggers
  automatic:
    - weekly_synthesis: "Sunday 8am"
    - dream_promotion: "When DREAMER output is flagged for elevation"
    - high_stakes_query: "User marks query as important"
    
  # Manual triggers
  manual:
    - command: "/quorum"
    - command: "/council"
    
  # Skip quorum (single-agent response)
  bypass:
    - simple_factual_query: true
    - time_constraint: "<30s expected"
    - user_preference: "quick mode"
```

---

## 3. Model Configuration

### 3.1 Model Registry

```yaml
model_registry:
  version: "2025-12-19"
  
  models:
    nemotron-3-nano-q4:
      source: nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-Q4_K_M
      vram_required: ~8GB
      context_window: 1000000
      capabilities:
        - thinking_toggle
        - tool_calling
        - long_context
      best_for: [forager]
      
    nemotron-3-nano-q8:
      source: nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-Q8
      vram_required: ~16GB  # With CPU offload on RTX 2070
      context_window: 1000000
      capabilities:
        - thinking_toggle
        - tool_calling
        - long_context
      best_for: [weaver, dreamer]
      
    nemotron-3-nano-bf16:
      source: nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-BF16
      vram_required: ~60GB  # Fits on M2 Max 96GB
      context_window: 1000000
      capabilities:
        - thinking_toggle
        - tool_calling
        - long_context
        - highest_quality
      best_for: [sage, scientist]
      
    deepseek-r1-distill-32b:
      source: deepseek-ai/DeepSeek-R1-Distill-Qwen-32B
      vram_required: ~65GB  # M2 Max 96GB
      context_window: 128000
      capabilities:
        - extended_reasoning
        - formal_analysis
      best_for: [scholar]
      
    # Future additions
    nemotron-3-super:
      available: false
      expected: "2026-H1"
      
    llama-4-scout-int4:
      available: false
      expected: "2026-Q1"
      notes: "10M context, multimodal"
```

### 3.2 Agent-Model Mapping

```yaml
agent_assignments:
  forager:
    primary: nemotron-3-nano-q4
    fallback: qwen3-8b
    mode: non-thinking
    temperature: 0.3
    thinking_budget: minimal
    
  weaver:
    primary: nemotron-3-nano-q8
    fallback: qwen3-30b-a3b
    mode: thinking
    temperature: 0.5
    thinking_budget: moderate
    
  dreamer:
    primary: nemotron-3-nano-q8
    fallback: qwen3-8b
    mode: thinking
    temperature: 1.0-1.2
    thinking_budget: unlimited
    
  scholar:
    primary: deepseek-r1-distill-32b
    fallback: qwen3-32b
    mode: thinking
    temperature: 0.3
    thinking_budget: high
    
  scientist:
    primary: nemotron-3-nano-bf16
    fallback: qwen3-30b-a3b
    mode: thinking
    temperature: 0.4
    thinking_budget: moderate
    tools_enabled: true
    
  sage:
    primary: nemotron-3-nano-bf16
    fallback: qwen3-32b
    mode: thinking
    temperature: 0.7
    thinking_budget: high
```

---

## 4. Updatability Infrastructure

### 4.1 Model Interface Abstraction

```python
# models/interface.py

from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import Optional, List, Dict, Any

@dataclass
class ModelCapabilities:
    thinking_mode: bool
    tool_calling: bool
    max_context: int
    multimodal: bool
    
@dataclass
class GenerationConfig:
    temperature: float
    max_tokens: int
    thinking_enabled: bool
    thinking_budget: Optional[str]  # minimal, moderate, high, unlimited
    tools: Optional[List[str]]

class ModelInterface(ABC):
    """Abstract interface - any model must implement this"""
    
    @abstractmethod
    def generate(
        self, 
        prompt: str, 
        config: GenerationConfig,
        context: Optional[List[Dict]] = None
    ) -> str:
        pass
    
    @abstractmethod
    def get_capabilities(self) -> ModelCapabilities:
        pass
    
    @abstractmethod
    def health_check(self) -> bool:
        pass
    
    @abstractmethod
    def get_current_load(self) -> float:
        """Returns 0-1 indicating current utilization"""
        pass

class NemotronInterface(ModelInterface):
    """Implementation for Nemotron 3 family"""
    
    def __init__(self, model_path: str, quantization: str):
        self.model_path = model_path
        self.quantization = quantization
        # ... initialization
        
    def generate(self, prompt: str, config: GenerationConfig, context=None) -> str:
        # Handle thinking mode toggle
        if config.thinking_enabled:
            system_prompt = self._get_thinking_prompt(config.thinking_budget)
        else:
            system_prompt = self._get_direct_prompt()
        # ... generation logic
        
    # ... other methods

class DeepSeekInterface(ModelInterface):
    """Implementation for DeepSeek R1 family"""
    # ... similar structure
```

### 4.2 Hot-Swap Manager

```python
# models/swap_manager.py

class ModelSwapManager:
    """Manages model swapping without downtime"""
    
    def __init__(self, registry_path: str):
        self.registry = self._load_registry(registry_path)
        self.active_models: Dict[str, ModelInterface] = {}
        self.swap_lock = asyncio.Lock()
        
    async def swap_model(
        self, 
        agent_name: str, 
        new_model_name: str,
        graceful: bool = True
    ) -> bool:
        """
        Swap model for an agent.
        
        Args:
            agent_name: Which agent to update
            new_model_name: Model from registry to load
            graceful: If True, drain current requests first
        """
        async with self.swap_lock:
            # 1. Validate compatibility
            agent_requirements = self.get_agent_requirements(agent_name)
            new_model_caps = self.registry.get_capabilities(new_model_name)
            
            if not self._is_compatible(agent_requirements, new_model_caps):
                raise IncompatibleModelError(
                    f"{new_model_name} doesn't meet {agent_name} requirements"
                )
            
            # 2. Graceful drain (if enabled)
            if graceful:
                await self.active_models[agent_name].drain(timeout=30)
            
            # 3. Load new model
            new_model = await self._load_model(new_model_name)
            
            # 4. Health check
            if not await new_model.health_check():
                raise ModelLoadError(f"Health check failed for {new_model_name}")
            
            # 5. Swap
            old_model = self.active_models[agent_name]
            self.active_models[agent_name] = new_model
            
            # 6. Cleanup old model
            await old_model.unload()
            
            # 7. Log swap
            self._log_swap(agent_name, old_model.name, new_model_name)
            
            return True
```

### 4.3 Update Monitoring

```yaml
# config/update_monitor.yaml

update_sources:
  huggingface:
    organizations:
      - nvidia  # Nemotron releases
      - deepseek-ai
      - meta-llama
      - Qwen
      - RWKV
    check_interval: daily
    
  github:
    repos:
      - BlinkDL/RWKV-LM  # RWKV-7 updates
      - QwenLM/Qwen3
    check_interval: daily
    
notifications:
  channels:
    - type: file
      path: /vault/_meta/model_updates.md
    - type: webhook  # Optional
      url: "${WEBHOOK_URL}"
      
  triggers:
    - new_release: true
    - major_version: true
    - keywords: ["Nemotron", "RWKV-7", "Llama-4", "Scout"]
```

---

## 5. Migration Path

### From v0.4 to v0.5

| Component | v0.4 | v0.5 | Migration |
|-----------|------|------|-----------|
| FORAGER model | Qwen3-8B | Nemotron 3 Nano Q4 | Download + config update |
| WEAVER model | Qwen3-30B | Nemotron 3 Nano Q8 | Download + config update |
| DREAMER model | Qwen3-8B | Nemotron 3 Nano Q8 | Download + config update |
| SAGE | Qwen3-32B | Nemotron 3 Nano BF16 | Download + config update |
| SCHOLAR | (new) | DeepSeek-R1-Distill-32B | New agent + download |
| SCIENTIST | (new) | Nemotron 3 Nano BF16 | New agent |
| Quorum system | (new) | Full protocol | New implementation |

### Migration Script

```bash
#!/bin/bash
# migrate-to-v05.sh

echo "=== Meta-Gomen v0.5 Migration ==="

# 1. Download new models
echo "Downloading Nemotron 3 Nano..."
huggingface-cli download nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-Q4_K_M
huggingface-cli download nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-Q8
huggingface-cli download nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-BF16

echo "Downloading DeepSeek R1 Distill..."
huggingface-cli download deepseek-ai/DeepSeek-R1-Distill-Qwen-32B

# 2. Update config
echo "Updating configuration..."
cp config/models.yaml config/models.yaml.v04.backup
cp config/models-v05.yaml config/models.yaml

# 3. Test models
echo "Running health checks..."
python -m metagomen.health check --all-models

# 4. Create new agents
echo "Initializing Scholar and Scientist agents..."
python -m metagomen.agents.init scholar scientist

# 5. Test quorum
echo "Testing quorum protocol..."
python -m metagomen.quorum test "What are the key patterns in regenerative systems?"

echo "=== Migration complete ==="
```

---

## 6. Summary

### What's New in v0.5

1. **Nemotron 3 Nano** as unified model (1M context, agentic-optimized)
2. **Synthesis Council**: Scholar + Scientist + SAGE quorum
3. **Perspective diversity**: Academic, empirical, and wisdom lenses
4. **Model-agnostic interfaces**: Easy swapping without code changes
5. **Thinking budget control**: Dial cost/quality per agent
6. **Update infrastructure**: Monitor releases, hot-swap models

### Key Files

```
/meta-gomen/
├── config/
│   ├── models.yaml           # Model registry
│   ├── agents.yaml           # Agent configurations
│   ├── quorum.yaml           # Synthesis council protocol
│   └── update_monitor.yaml   # Release monitoring
│
├── models/
│   ├── interface.py          # Abstract model interface
│   ├── nemotron.py          # Nemotron implementation
│   ├── deepseek.py          # DeepSeek implementation
│   └── swap_manager.py      # Hot-swap logic
│
├── agents/
│   ├── forager.py
│   ├── weaver.py
│   ├── dreamer.py
│   ├── scholar.py           # NEW
│   ├── scientist.py         # NEW
│   └── sage.py
│
└── quorum/
    ├── protocol.py          # Quorum orchestration
    ├── synthesis.py         # Final document generation
    └── templates/           # Output templates
```

---

*Architecture v0.5 - Designed for coherence, diversity, and adaptability.* 🌱

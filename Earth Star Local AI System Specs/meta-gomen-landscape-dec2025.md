# Meta-Gomen Model Landscape Survey
## December 2025 Update

---

## Executive Summary

**The landscape has shifted dramatically since November 2025.** The key development is **NVIDIA Nemotron 3 Nano** - a hybrid Mamba-Transformer MoE model explicitly designed for multi-agent agentic systems. This changes our architecture recommendations significantly.

### Top-Line Changes

| Previous Plan | Updated Recommendation | Why |
|---------------|----------------------|-----|
| Qwen3-8B for FORAGER | **Nemotron 3 Nano 30B-A3B** | 1M context, 3.3x faster, designed for agents |
| Qwen3-30B for WEAVER | **Nemotron 3 Nano 30B-A3B** | Same model, thinking mode toggle |
| Qwen3-32B for SAGE | **Nemotron 3 Super** (when released) or Llama 4 Scout | Better reasoning, massive context |
| Multiple model types | **Single model family** | Unified API, easier updates |

---

## 1. NVIDIA Nemotron 3 (Game-Changer)

### Why This Changes Everything

Nemotron 3 models utilize a hybrid Mamba-Transformer MoE architecture to provide best-in-class throughput while having better or on-par accuracy than standard Transformers.

**Key specs for Meta-Gomen:**

| Feature | Nemotron 3 Nano | Significance |
|---------|-----------------|--------------|
| Total params | 30B | Same class as Qwen3-30B |
| Active params | 3.2B | Ultra-efficient inference |
| Context window | **1M tokens** | Entire vault analysis possible |
| Architecture | Mamba-2 + Transformer MoE | Best of both worlds |
| Throughput | 3.3x faster than Qwen3-30B-A3B | Lower latency, more agents |
| Reasoning | Toggle on/off at inference | Perfect for FORAGER vs SAGE modes |

Nemotron 3 Nano delivers up to 4× higher token throughput compared with Nemotron 2 Nano and reduces reasoning-token generation by up to 60%, significantly lowering inference costs. With a 1-million-token context window, Nemotron 3 Nano remembers more, making it more accurate and better capable of connecting information over long, multistep tasks.

### What Makes It Perfect for Meta-Gomen

1. **Built for agentic multi-agent systems**: NVIDIA announced Nemotron 3, a new family of open large language models designed specifically for agentic AI systems: applications where multiple AI agents collaborate, reason over long horizons, and route work between specialized models.

2. **Open everything**: NVIDIA is also releasing the open datasets used throughout the model's development, providing unprecedented transparency into how high-performance, trustworthy models are built.

3. **Works with your tools**: Download Nemotron 3 Nano now from Hugging Face, or experiment with it through Llama.cpp and LM Studio.

4. **Configurable thinking budget**: Nemotron 3 Nano brings advanced reasoning and agentic capabilities with high efficiency using hybrid Transformer-Mamba MoE architecture and a configurable thinking budget—so you can dial accuracy, throughput, and cost to match your real‑world needs.

### Model Family Roadmap

| Model | Status | Active Params | Best For |
|-------|--------|---------------|----------|
| **Nano** | Available now | 3B | Your RTX 2070 + CPU offload |
| **Super** | H1 2026 | 10B | Higher accuracy, multi-agent |
| **Ultra** | H1 2026 | 50B | Complex reasoning, your M2 Max |

---

## 2. Other Model Updates

### Qwen3 (Still Excellent)

Qwen3 comprises a series of large language models (LLMs) designed to advance performance, efficiency, and multilingual capabilities. A key innovation in Qwen3 is the integration of thinking mode and non-thinking mode into a unified framework.

**Updates since our last review:**
- Qwen3-2507 (July 2025): Improved reasoning
- On September 10, 2025, Qwen3-Next was released. Qwen3-Next introduces several key improvements over the Qwen3 architecture: a hybrid attention mechanism, a highly sparse mixture-of-experts (MoE) structure, training-stability-friendly optimizations, and a multi-token prediction mechanism for faster inference.

**Recommendation**: Qwen3 remains excellent, but Nemotron 3 is better optimized for our specific use case (multi-agent agentic systems).

### DeepSeek V3.1/V3.2

In August 2025, DeepSeek released DeepSeek-V3.1, a major update that combines the strengths of V3 and R1 into a single hybrid model. It features a total of 671B parameters (37B activated) and supports context lengths up to 128K. Hybrid thinking mode: V3.1 can switch between "thinking" (chain-of-thought reasoning like R1) and "non-thinking" (direct answers like V3) just by changing the chat template.

**R2 Status**: There were reports that R2, the intended successor to R1, was originally planned for release in early May 2025. However, on 28 May 2025, R1 was instead updated to version R1-0528. As of early July, R2 was not yet released, as Liang Wenfeng was not yet satisfied with its performance.

**Recommendation**: DeepSeek distilled models (R1-Distill-Qwen-32B) remain excellent for SAGE-tier reasoning, but require more resources than Nemotron 3 Nano.

### RWKV-7 "Goose"

RWKV-7 is a new sequence modeling architecture with constant memory usage and constant inference time per token. Despite being trained on dramatically fewer tokens than other top models, our 2.9 billion parameter language model achieves a new 3B SoTA on multilingual tasks.

**Current status:**
- Please use the RWKV7-G1 2.9B model. Thanks to the latest architectural design and the newest World v3.5 dataset (totaling 5.16T tokens), the RWKV7-G1 model has strong reasoning, coding, and mathematical capabilities. After the RWKV7-G1 7B/14B models complete training, they will completely replace the existing RWKV-6-World 7B/14B models.

**Recommendation**: Still excellent for always-on monitoring (infinite context, constant memory), but Nemotron 3's hybrid architecture incorporates Mamba benefits while adding transformer strengths.

### Llama 4 Scout/Maverick

Llama 4 Scout, a 17 billion active parameter model with 16 experts, is the best multimodal model in the world in its class. Additionally, Llama 4 Scout offers an industry-leading context window of 10M and delivers better results than Gemma 3, Gemini 2.0 Flash-Lite, and Mistral 3.1.

**Hardware reality check:**
- Scout (109B total) fits on single H100
- Using 8xH100, vLLM can serve Scout with 1M context and Maverick with about 430K.
- INT4 quantized version coming

**Recommendation**: Llama 4 Scout could be excellent for SAGE on your M2 Max (96GB might handle it quantized), but wait for INT4 support to mature.

---

## 3. Comparative Analysis

### For Your Hardware

| Agent | Your Hardware | Previous Plan | New Recommendation |
|-------|--------------|---------------|-------------------|
| FORAGER | RTX 2070 (8GB) + CPU | Qwen3-8B | Nemotron 3 Nano Q4 |
| WEAVER | RTX 2070 + CPU | Qwen3-30B Q4 | Nemotron 3 Nano (same model, different config) |
| DREAMER | RTX 2070 | Qwen3-8B high temp | Nemotron 3 Nano (thinking mode + high temp) |
| SAGE | M2 Max 96GB | Qwen3-32B | Nemotron 3 Nano BF16 → Super when available |
| SCHOLAR | M2 Max 96GB | (new) | DeepSeek-R1-Distill-32B |
| SCIENTIST | M2 Max 96GB | (new) | Llama 4 Scout Q4 (when ready) |

### Benchmark Comparison (Relevant Tasks)

| Model | Agentic Tasks | Reasoning | Throughput | Context |
|-------|--------------|-----------|------------|---------|
| Nemotron 3 Nano | **Best** | Excellent | **3.3x faster** | **1M** |
| Qwen3-30B-A3B | Good | Excellent | 1x baseline | 128K |
| DeepSeek-R1-Distill-32B | Good | **Best** | 0.7x | 128K |
| Llama 4 Scout | Excellent | Excellent | 0.8x | **10M** |

---

## 4. Architecture for Updatability

### The Problem

The AI landscape moves so fast that any system we build today will need model updates within months.

### Solution: Model-Agnostic Agent Interface

Composability: New tools or models can be inserted as modules without retraining the entire agent, provided interfaces remain compatible. Task specific execution graphs: The agent can reconfigure itself into different pipelines, for example retrieval plus synthesis, or planning plus actuation.

**Design principles for Meta-Gomen:**

```yaml
agent_interface:
  # Each agent talks to models through a standard interface
  # Models can be swapped without changing agent code
  
  model_registry:
    forager_model:
      current: nemotron-3-nano-q4
      fallback: qwen3-8b
      interface: completion_with_tools
      
    weaver_model:
      current: nemotron-3-nano-bf16
      fallback: qwen3-30b-a3b
      interface: completion_with_thinking
      
    sage_model:
      current: nemotron-3-nano-bf16
      fallback: deepseek-r1-distill-32b
      interface: completion_with_thinking
      
  # Abstraction layer
  model_capabilities:
    thinking_mode: [nemotron-3, qwen3, deepseek-r1]
    tool_calling: [nemotron-3, qwen3, llama-4]
    long_context: [nemotron-3, llama-4-scout]
    multimodal: [llama-4, qwen3-vl]
```

### Hot-Swap Protocol

```python
# Pseudo-code for model swapping

class ModelRegistry:
    def swap_model(self, agent_name: str, new_model: str):
        """Swap model without stopping agent"""
        # 1. Validate new model has required capabilities
        required = self.agents[agent_name].required_capabilities
        if not self.models[new_model].supports(required):
            raise IncompatibleModelError()
        
        # 2. Gracefully drain current model
        self.models[agent_name].drain()
        
        # 3. Load new model
        self.models[agent_name] = self.load_model(new_model)
        
        # 4. Verify health
        self.models[agent_name].health_check()
        
        # 5. Resume agent
        self.agents[agent_name].resume()
```

### Configuration-Driven Updates

```yaml
# models.yaml - Version controlled, easy to update

version: "2025-12-19"
models:
  nemotron-3-nano:
    source: huggingface
    repo: nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-BF16
    quantizations:
      bf16: 60GB
      q8: 30GB
      q4: 16GB
    capabilities:
      - thinking_toggle
      - tool_calling
      - long_context_1m
    compatible_runtimes:
      - lm-studio
      - ollama
      - vllm
      
  # When new models release, add entry here
  nemotron-3-super:
    source: huggingface
    repo: nvidia/NVIDIA-Nemotron-3-Super-100B  # Placeholder
    available: false
    expected: 2026-H1
```

---

## 5. Updated Agent Architecture

### New Three-Tier Synthesis Layer (SAGE → Scholar + Scientist + SAGE)

Based on your request for quorum-based document synthesis:

```
┌─────────────────────────────────────────────────────────────┐
│  SYNTHESIS COUNCIL (Quorum-based final outputs)            │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   SCHOLAR   │  │  SCIENTIST  │  │    SAGE     │        │
│  │  (Academic) │  │ (Empirical) │  │ (Wisdom)    │        │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘        │
│         │                │                │                │
│         └────────────────┼────────────────┘                │
│                          ↓                                 │
│                   ┌──────────────┐                         │
│                   │   QUORUM     │                         │
│                   │  SYNTHESIS   │                         │
│                   └──────────────┘                         │
│                          ↓                                 │
│                 [Final Document]                           │
└─────────────────────────────────────────────────────────────┘
```

### Agent Perspectives

| Agent | Perspective | Model Suggestion | Strength |
|-------|-------------|------------------|----------|
| **SCHOLAR** | Academic rigor, citations, systematic review | DeepSeek-R1-Distill-32B | Deep reasoning, formal structure |
| **SCIENTIST** | Empirical evidence, quantitative analysis, hypothesis testing | Llama 4 Scout (Q4) | Multimodal, massive context for papers |
| **SAGE** | Wisdom synthesis, Earth Star alignment, cross-domain patterns | Nemotron 3 Nano | Fast iteration, agentic optimization |

### Quorum Protocol

```yaml
quorum_synthesis:
  trigger: on_demand OR scheduled
  
  process:
    1_parallel_analysis:
      - scholar: "Analyze from academic perspective, cite sources"
      - scientist: "Analyze empirically, identify evidence quality"
      - sage: "Synthesize patterns, align with Earth Star principles"
      
    2_perspective_sharing:
      - Each agent sees others' analyses
      - Each agent critiques and builds on others
      
    3_convergence:
      - Identify agreements (high confidence)
      - Surface disagreements (mark as tensions)
      - Note gaps (areas needing more research)
      
    4_synthesis:
      - SAGE produces final document
      - Scholar adds formal citations
      - Scientist adds confidence scores
      
  output:
    format: markdown with provenance
    sections:
      - executive_summary (SAGE)
      - evidence_review (SCIENTIST)
      - literature_context (SCHOLAR)
      - synthesis_and_recommendations (QUORUM)
      - tensions_and_uncertainties (ALL)
      - earth_star_alignment (SAGE)
```

---

## 6. Revised Model Stack

### Immediate (December 2025)

| Agent | Model | Hardware | Mode |
|-------|-------|----------|------|
| FORAGER | Nemotron 3 Nano Q4 | Desktop RTX 2070 | Non-thinking, continuous |
| WEAVER | Nemotron 3 Nano Q8 | Desktop + CPU | Thinking, scheduled |
| DREAMER | Nemotron 3 Nano Q8 | Desktop | Thinking + high temp |
| SCHOLAR | DeepSeek-R1-Distill-32B | MacBook M2 Max | Thinking, on-demand |
| SCIENTIST | Nemotron 3 Nano BF16 | MacBook M2 Max | Thinking, on-demand |
| SAGE | Nemotron 3 Nano BF16 | MacBook M2 Max | Thinking, quorum lead |

### Near-term (H1 2026)

| Agent | Upgrade Path | Why |
|-------|--------------|-----|
| FORAGER | RWKV-7 7B (when ready) | Infinite context, even lower memory |
| WEAVER | Nemotron 3 Super (when ready) | Higher accuracy for graph analysis |
| SCIENTIST | Llama 4 Scout INT4 (when ready) | 10M context for full paper analysis |
| SAGE | Nemotron 3 Super | Better reasoning coordination |

---

## 7. Key Decisions

### Why Nemotron 3 Over Qwen3?

1. **Designed for exactly our use case**: Multi-agent agentic systems
2. **Hybrid architecture**: Mamba for efficiency + Transformer for quality
3. **1M context**: Can analyze entire vault sections
4. **Thinking toggle**: Same model for FORAGER (fast) and WEAVER (deep)
5. **Open everything**: Weights, data, recipes - future-proofs customization
6. **NVIDIA ecosystem**: Best tooling support (TensorRT-LLM, NIM)

### Why Keep DeepSeek-R1-Distill for SCHOLAR?

1. **Best-in-class reasoning**: Still unmatched for deep academic analysis
2. **Available now**: Don't need to wait
3. **Different perspective**: Diversity in the quorum improves outputs

### Why Add Scholar/Scientist Split?

1. **Perspective diversity**: Different lenses catch different patterns
2. **Quality through tension**: Disagreements surface important nuances
3. **Earth Star alignment**: SAGE maintains coherence while others probe
4. **Accountability**: Each perspective is attributed, reviewable

---

## 8. Implementation Priorities

### Phase 1: Model Migration (Week 1)

1. Download Nemotron 3 Nano (BF16 and Q4)
2. Update LM Studio / Ollama configs
3. Test thinking/non-thinking toggle
4. Benchmark against current Qwen3 setup
5. Update model registry configuration

### Phase 2: Quorum Architecture (Week 2-3)

1. Define SCHOLAR/SCIENTIST/SAGE prompts
2. Build parallel execution pipeline
3. Implement perspective-sharing protocol
4. Design quorum synthesis template
5. Test with sample research questions

### Phase 3: Updatability Infrastructure (Week 3-4)

1. Build model registry abstraction
2. Implement hot-swap protocol
3. Create model capability testing suite
4. Set up model update monitoring (HuggingFace releases)
5. Document upgrade procedures

---

## 9. Monitoring the Landscape

### Models to Watch

| Model | Expected | Why It Matters |
|-------|----------|----------------|
| Nemotron 3 Super | H1 2026 | 10B active, higher accuracy |
| Nemotron 3 Ultra | H1 2026 | 50B active, research-grade |
| RWKV-7 7B/14B | Q1 2026 | Infinite context FORAGER |
| Llama 4 Scout INT4 | Q1 2026 | 10M context on consumer hardware |
| DeepSeek R2 | Unknown | Could be next-gen reasoning |
| Qwen3.5 | 2026 | Qwen3-Next architecture refined |

### Update Triggers

Set alerts for:
- New model releases from NVIDIA Nemotron team
- RWKV-7 7B/14B release announcement
- Llama 4 quantization improvements
- Any model claiming >3.3x throughput at similar quality

---

## Summary

**The biggest change**: Nemotron 3 Nano is purpose-built for what we're building. Its hybrid Mamba-Transformer architecture, 1M context, and agentic optimization make it the new default for FORAGER/WEAVER/DREAMER/SAGE.

**The new addition**: Scholar + Scientist + SAGE quorum provides diverse perspectives and higher-quality synthesis through structured disagreement and convergence.

**The key principle**: Build model-agnostic interfaces now so we can swap in Nemotron 3 Super, RWKV-7 7B, or whatever comes next without rewriting agent code.

🌱 *The system tends itself toward coherence by staying adaptable.*

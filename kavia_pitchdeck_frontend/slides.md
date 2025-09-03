---
# Global deck settings
theme: default
title: Kavia – Code Generation Platform for Teams
info: |
  Kavia Investor Deck — 20 slides
  Dark theme aligned to new Kavia ember/orange palette with elevated panels.
class: "text-left kavia-canvas"
mdc: true
transition: slide-left
fonts:
  sans: Inter, "Helvetica Neue", Arial, sans-serif
  mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
css: |
  @import "./style.css";

---
# KAVIA AI 
<div class="kavia-title-slide with-hero-glow">
  <div class="hero-copy">
    <img class="logo" src="./assets/kavia_logo.svg" alt="Kavia logo" />
    <h2 class="text-hero">Transforming Enterprise Software Development to AI-Native</h2>
    <p class="subtitle text-md">An agentic workflow platform and knowledge graph that modernizes and accelerates the entire SDLC</p>
    <div class="subtitle text-xs">Founders: Labeeb Ismail, Anita Ganti, Rich Saffir • Date: 2025-08-31 • Contact: labeeb@kavia.ai</div>
    <div class="hero-ctas">
      <button class="btn-primary">Explore Deck</button>
      <button class="btn-secondary">Contact</button>
    </div>
  </div>
</div>

---

# The Problem

<div class="problem-grid">
  <div class="problem-card">
    <div class="problem-eyebrow">Bottlenecks</div>
    <h3 class="problem-title">Enterprise SDLC is slow and costly</h3>
    <ul class="problem-points">
      <li>Large codebases and complex dependencies</li>
      <li>Tribal knowledge and undocumented processes</li>
      <li>Slow iteration cycles and high engineering costs</li>
    </ul>
  </div>

  <div class="problem-card">
    <div class="problem-eyebrow">Urgency</div>
    <h3 class="problem-title">Pressure to modernize keeps rising</h3>
    <ul class="problem-points">
      <li>Constant upgrades and refactoring in a fast-moving stack</li>
      <li>Low barriers enable disruptors to ramp quickly</li>
    </ul>
  </div>

  <div class="problem-card">
    <div class="problem-eyebrow">AI Gap</div>
    <h3 class="problem-title">Generative AI adoption stalls in practice</h3>
    <ul class="problem-points">
      <li>Single-step tools lack complete view of context</li>
      <li>Hard to integrate with real-world repos and CI/CD</li>
      <li>Enterprise assets not AI-native; context is fragmented</li>
      <li>Limited collaboration and governance</li>
    </ul>
  </div>
</div>


---

# Our Solution

<section class="solution">
  <header class="solution__header">
    <h2>Our Solution</h2>
    <p class="solution__subhead">
      Kavia: a multi-agent orchestration platform for E2E Software Development with a Custom Knowledge Graph.
    </p>
  </header>

  <div class="kpi-grid">
    <article class="kpi-card">
      <div class="kpi-value">3–5x</div>
      <div class="kpi-label">FASTER DELIVERY</div>
    </article>
    <article class="kpi-card">
      <div class="kpi-value">1/3</div>
      <div class="kpi-label">RESOURCES</div>
    </article>
    <article class="kpi-card">
      <div class="kpi-value">100s</div>
      <div class="kpi-label">ENGINEERS SUPPORTED</div>
    </article>
  </div>

  <div class="card-grid three mt-1">
    <div class="feature-card vbar">
      <span class="badge">AGENTS</span>
      <h3 class="feature-title">Specialized micro-agents</h3>
      <p class="muted">Planning, coding, testing, docs, bug fixing, code-scanning, deployment, etc.</p>
    </div>

    <div class="feature-card vbar">
      <span class="badge">WORKFLOW</span>
      <h3 class="feature-title">Enterprise-integrated</h3>
      <p class="muted">CI-aware, repository-native, aligned to enterprise processes/tools</p>
    </div>

    <div class="feature-card vbar">
      <span class="badge">KNOWLEDGE GRAPH</span>
      <h3 class="feature-title">Unified enterprise context</h3>
      <p class="muted">Custom Knowledge Graph powering all agents for deep understanding</p>
    </div>
  </div>
</section>


---

# Product Overview

<div class="split-cols mt-2">
  <div class="left">
    <div class="feature-card vbar">
      <h3 class="feature-title">Inspect</h3>
      <p class="muted">Analyze codebase, requirements, and enterprise assets</p>
    </div>
    <div class="feature-card vbar">
      <h3 class="feature-title">Plan</h3>
      <p class="muted">Create Requirements, Design, Architecture, and Test Plans</p>
    </div>
    <div class="feature-card vbar">
      <h3 class="feature-title">Build</h3>
      <p class="muted">Write, refactor, migrate, test, and integrate based on the plan</p>
    </div>
  </div>
  <div class="right">
    <div class="glass-frame">
      <div class="glow-badge pill">Product</div>
      <div class="frame-placeholder">Product screenshot / UI mock placeholder</div>
    </div>
  </div>
</div>

---

# KAVIA Differentiators

<div class="mt-1">
  <div class="feature-card vbar">
    <h3 class="feature-title">Kavia Knowledge Graph</h3>
    <p class="muted">LLM-friendly, unified enterprise context</p>
  </div>
  <div class="feature-card vbar">
    <h3 class="feature-title">Lifecycle Orchestration</h3>
    <p class="muted">End-to-end workflows across the SDLC</p>
  </div>
  <div class="feature-card vbar">
    <h3 class="feature-title">Customizable</h3>
    <p class="muted">Adaptable workflows for team-specific needs</p>
  </div>
  <div class="feature-card vbar">
    <h3 class="feature-title">Enterprise Integrations</h3>
    <p class="muted">Connectors for tools and platforms used at scale</p>
  </div>
</div>

---

# How It Works (Architecture)

```mermaid
%% Dark-mode styling for presentations
%% (You can tweak colors below to match brand palette)
%% Suggested: view on a dark slide background
%%{init: {
  "theme": "dark",
  "themeVariables": {
    "primaryTextColor": "#E6EDF3",
    "secondaryTextColor": "#C9D1D9",
    "tertiaryColor": "#0B1220",
    "primaryColor": "#0B1220",
    "lineColor": "#6E7681",
    "fontFamily": "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
  }
}}%%

flowchart TD

%% ====== Dark palette classes (high-contrast on dark bg)
classDef portal fill:#0B1220,stroke:#7AA2FF,stroke-width:1.5px,rx:10,ry:10,color:#E6EDF3;
classDef ui fill:#0F1A2B,stroke:#58A6FF,stroke-width:1.2px,rx:10,ry:10,color:#E6EDF3;
classDef engine fill:#1C1A14,stroke:#FFB86C,stroke-width:1.2px,rx:10,ry:10,color:#E6EDF3;
classDef doc fill:#112016,stroke:#7EE787,stroke-width:1.2px,rx:10,ry:10,color:#E6EDF3;
classDef data fill:#121A10,stroke:#C5E478,stroke-width:1.2px,rx:10,ry:10,color:#E6EDF3;

%% =======================
%% Inspect Portal
%% =======================
subgraph InspectPortal["Inspect"]
  direction TB
  InspectUI["🔍 Inspect UI"]
  KGAPI["🧭 KG API"]
  KG["🕸️ Enterprise KG"]
  InspectUI --> KGAPI --> KG
end
class InspectPortal portal
class InspectUI ui
class KGAPI engine
class KG data

%% =======================
%% Code Generation Portal
%% =======================
subgraph CodeGenPortal["Code Generation"]
  direction TB
  DevUI["🖥️ VS Code (UI)"]
  Orchestrator["🧠 Orchestrator"]
  AgentsCapsule["🛠️ Micro-Agents:\nCode • Analyze • Tests • DataGen • Run • Validate • Env • Security"]
  DevTools["⚙️ Dev Tools"]

  DevUI --> Orchestrator
  Orchestrator --> AgentsCapsule
  Orchestrator --> DevTools
end
class CodeGenPortal portal
class DevUI ui
class Orchestrator engine
class AgentsCapsule engine
class DevTools engine

%% =======================
%% Plan Portal
%% =======================
subgraph PlanPortal["Plan"]
  direction TB
  Req["🗂️ Requirements\n(Epics • Stories)"]
  Arch["📦 Architecture\n(Containers • Components)"]
  Tests["🧪 Test Plans\n(Suites • Cases)"]
  Req --> Arch --> Tests
end
class PlanPortal portal
class Req doc
class Arch doc
class Tests doc

%% =======================
%% Cross-Portal Story (minimal arrows)
%% =======================
linkStyle default stroke:#6E7681,stroke-width:1.2px;

KGAPI -- "impact insights" --> Req
Req -- "requirements" --> Orchestrator
Arch -- "target arch" --> Orchestrator
Orchestrator -- "artifacts & PRs" --> Arch
Orchestrator -- "test specs/results" --> Tests
Orchestrator -- "context queries" --> KGAPI
```


---

# Market Opportunity

<div class="kavia-split">
  <div class="left">
    <div class="feature-card vbar">
      <div class="eyebrow">TAM</div>
      <h3 class="feature-title">Software Dev Tools/Platforms</h3>
      <p class="muted">$60B+ globally (est.)</p>
    </div>
    <div class="feature-card vbar">
      <div class="eyebrow">SAM</div>
      <h3 class="feature-title">AI-assisted Dev & DevEx</h3>
      <p class="muted">Rapidly expanding with AI adoption</p>
    </div>
    <div class="feature-card vbar">
      <div class="eyebrow">Industries</div>
      <ul class="points-clean">
        <li>HealthTech, Automotive, SaaS, FinTech, </li>
        <li>Platform, Product Engineering</li>
      </ul>
    </div>
  </div>
  <div class="right">
    <div class="glass-frame tall">
      <div class="glow-badge pill">Market</div>
      <div class="frame-placeholder">Market size chart placeholder</div>
    </div>
  </div>
</div>

---

# Competitive Landscape

<div class="glass-frame wide mt-2">
  <div class="glow-badge pill">Matrix</div>
  <div class="frame-placeholder">Competitive matrix placeholder</div>
</div>

---

# Ideal Customer Profile (ICP)

<div class="avatars-grid mt-2">
  <div class="avatar-card">
    <div class="avatar-circle">Org</div>
    <div class="avatar-body">
      <span class="badge">ORGANIZATIONS</span>
      <h3 class="feature-title">Mid-market & Enterprise</h3>
      <p class="muted">50–1000+ engineers</p>
    </div>
  </div>

  <div class="avatar-card">
    <div class="avatar-circle">Team</div>
    <div class="avatar-body">
      <span class="badge">TEAM TRAITS</span>
      <ul class="points-clean">
        <li>Multiple services, complex CI/CD, strong governance</li>
        <li>Refactoring, migration, maintenance backlogs</li>
        <li>High cost and delivery time pressure</li>
      </ul>
    </div>
  </div>

  <div class="avatar-card">
    <div class="avatar-circle">Ind</div>
    <div class="avatar-body">
      <span class="badge">INDUSTRIES</span>
      <ul class="points-clean">
        <li>SaaS, FinTech, HealthTech</li>
        <li>E-commerce, Platform</li>
        <li>Product Engineering teams</li>
      </ul>
    </div>
  </div>
</div>

---

# Use Cases

<div class="masonry three mt-2">
  <div class="feature-card vbar"><h3 class="feature-title">New Feature Development</h3><p class="muted">On large codebases with tests and docs</p></div>
  <div class="feature-card vbar"><h3 class="feature-title">Refactoring at Scale</h3><p class="muted">Safely modernize legacy modules</p></div>
  <div class="feature-card vbar"><h3 class="feature-title">API-first Development</h3><p class="muted">Auto-generate OpenAPI and clients</p></div>
  <div class="feature-card vbar"><h3 class="feature-title">Test Coverage</h3><p class="muted">Expand tests and remediate flaky cases</p></div>
  <div class="feature-card vbar"><h3 class="feature-title">Security Hardening</h3><p class="muted">Secret scans, upgrades, policy checks</p></div>
  <div class="feature-card vbar"><h3 class="feature-title">Migrations</h3><p class="muted">New frameworks and languages</p></div>
  <div class="feature-card vbar"><h3 class="feature-title">Legacy Maintenance</h3><p class="muted">Ongoing upkeep and refactoring</p></div>
  <div class="feature-card vbar"><h3 class="feature-title">Documentation</h3><p class="muted">Architecture, API, runbooks</p></div>
  <div class="feature-card vbar"><h3 class="feature-title">Engineer Onboarding</h3><p class="muted">Quick-start for new engineersx</p></div>
</div>

---

# Business Model

<div class="pricing-split mt-2">
  <div class="pricing-col">
    <div class="feature-card vbar">
      <span class="badge">PRICING</span>
      <ul class="points-clean">
        <li>Subscription tiers by seats and usage</li>
        <li>Enterprise plan with SSO, VPC/on‑prem, SLAs</li>
      </ul>
    </div>
    <div class="glass-frame short">
      <div class="glow-badge pill">Pricing</div>
      <div class="frame-placeholder">Pricing table placeholder</div>
    </div>
  </div>
  <div class="pricing-col">
    <div class="feature-card vbar">
      <span class="badge">EXPANSION</span>
      <ul class="points-clean">
        <li>Add‑on modules: compliance packs, SOC2 helpers, custom agents</li>
        <li>Marketplace for community/partner templates</li>
      </ul>
    </div>
  </div>
</div>

---

# Go-To-Market Strategy

<div class="timeline">
  <div class="time-node">
    <div class="time-dot"></div>
    <div class="time-card">
      <div class="eyebrow">Bottom-up</div>
      <ul class="points-clean">
        <li>Free trials, self‑serve onboarding</li>
        <li>Individuals & small teams</li>
      </ul>
    </div>
  </div>
  <div class="time-node">
    <div class="time-dot"></div>
    <div class="time-card">
      <div class="eyebrow">Top-down</div>
      <ul class="points-clean">
        <li>Enterprise features, security reviews, on-prem options</li>
        <li>Mid‑market & enterprise orgs</li>
        <li>Onboarding, FDE, Customer success playbook</li>
      </ul>
    </div>
  </div>
  <div class="time-node">
    <div class="time-dot"></div>
    <div class="time-card">
      <div class="eyebrow">Channels</div>
      <ul class="points-clean">
        <li>Developer advocacy, content, workshops, universities</li>
        <li>Partnerships: ISVs, SIs, Cloud Providers</li>
      </ul>
    </div>
  </div>
</div>

---

# Traction and Metrics

<div class="stats-grid mt-2">
  <div class="kpi-card stat-card">
    <div class="kpi-value stat-number">1000+</div>
    <div class="kpi-label stat-label">USERS</div>
  </div>

  <div class="kpi-card stat-card">
    <div class="kpi-value stat-number">200</div>
    <div class="kpi-label stat-label">ENGINEERS (TATA)</div>
  </div>

  <div class="kpi-card stat-card">
    <div class="kpi-value stat-number">15</div>
    <div class="kpi-label stat-label">ENTERPRISE TRIALS</div>
  </div>
</div>

<div class="glass-frame mt-4 short">
  <div class="glow-badge pill">KPIs</div>
  <div class="frame-placeholder">KPI chart placeholder</div>
</div>

---

# Roadmap

<div class="timeline horiz mt-2">
  <div class="time-node">
    <div class="time-dot"></div>
    <div class="time-card">
      <div class="eyebrow">0–6 months</div>
      <ul class="points-clean">
        <li>Deeper CI integrations; broader language/framework coverage</li>
        <li>Unified Chat across agents</li>
        <li>VS Code extension</li>
        <li>Connectors for 50+ enterprise tools</li>
      </ul>
    </div>
  </div>
  <div class="time-node">
    <div class="time-dot future"></div>
    <div class="time-card">
      <div class="eyebrow">6–12 months</div>
      <ul class="points-clean">
        <li>Agent marketplace & partner templates</li>
        <li>Expanded compliance packs & governance</li>
      </ul>
    </div>
  </div>
  <div class="time-node">
    <div class="time-dot future"></div>
    <div class="time-card">
      <div class="eyebrow">12+ months</div>
      <ul class="points-clean">
        <li>Predictive delivery insights</li>
        <li>Autonomous refactoring missions with approval gates</li>
      </ul>
    </div>
  </div>
</div>

---

# Case Study

<div class="two-up mt-2">
  <div class="feature-card vbar">
    <span class="badge">CUSTOMER</span>
    <h3 class="feature-title">[Anonymized Mid‑Market SaaS]</h3>
    <ul class="points-clean">
      <li>Legacy codebase + 3 new services</li>
      <li>Estimated 5–9 FTE months</li>
    </ul>
  </div>
  <div class="feature-card vbar">
    <span class="badge">RESULTS</span>
    <h3 class="feature-title">2 weeks to completion</h3>
    <p class="muted">From ingestion to PRs and documentation</p>
  </div>
</div>

<div class="feature-card vbar mt-2">
  <span class="badge">KAVIA APPROACH</span>
  <ul class="points-clean">
    <li>Automatic ingestion of codebase</li>
    <li>Deep analysis of requirements</li>
    <li>End‑to‑end code, tests, and docs generation</li>
  </ul>
</div>

---

# Team

<div class="avatars-grid mt-2">
  <div class="avatar-card">
    <div class="avatar-img">LI</div>
    <div class="avatar-body">
      <h4 class="feature-title">Labeeb Ismail</h4>
      <p class="muted small">Product/Engineering leadership, AI, Enterprise SW Dev</p>
    </div>
  </div>
  <div class="avatar-card">
    <div class="avatar-img">AG</div>
    <div class="avatar-body">
      <h4 class="feature-title">Anita Ganti</h4>
      <p class="muted small">GTM/Executive leadership, Enterprise sales</p>
    </div>
  </div>
  <div class="avatar-card">
    <div class="avatar-img">RS</div>
    <div class="avatar-body">
      <h4 class="feature-title">Rich Saffir</h4>
      <p class="muted small">Ex‑Wurl, ex‑Tower Cloud</p>
    </div>
  </div>

  <div class="avatar-card">
    <div class="avatar-img">JC</div>
    <div class="avatar-body">
      <h4 class="feature-title">Joe Chow</h4>
      <p class="muted small">Ex‑Cisco, Ex‑Comscope</p>
    </div>
  </div>
  <div class="avatar-card">
    <div class="avatar-img">JS</div>
    <div class="avatar-body">
      <h4 class="feature-title">Joe Stockwell</h4>
      <p class="muted small">Ex‑Exodus</p>
    </div>
  </div>
  <div class="avatar-card">
    <div class="avatar-img">SS</div>
    <div class="avatar-body">
      <h4 class="feature-title">Sri Solar</h4>
      <p class="muted small">CEO, Kenmore Appliances</p>
    </div>
  </div>
  <div class="avatar-card">
    <div class="avatar-img">AJ</div>
    <div class="avatar-body">
      <h4 class="feature-title">Aljit Joy</h4>
      <p class="muted small">Ex‑Comcast</p>
    </div>
  </div>
</div>

---

# Financials & Use of Funds

<div class="kavia-split mt-2">
  <div class="left">
    <div class="feature-card vbar">
      <div class="eyebrow">Current</div>
      <ul class="points-clean">
        <li>Bootstrapped/pre‑seed: 1M</li>
        <li>B2C launch and initial customer acquisitions</li>
        <li>$2.5M SAFE raised/committed</li>
        <li>~9 months runway</li>
      </ul>
    </div>
  </div>
  <div class="right">
    <div class="glass-frame">
      <div class="glow-badge pill">Use of Funds</div>
      <div class="frame-placeholder">Use of funds pie chart placeholder</div>
    </div>
  </div>
</div>

---

# Ask & Contact

<div class="cta-band">
  <div class="cta-copy">
    <div class="overline">Fundraising</div>
    <h2 class="text-hero">Seeking additional $2.5M SAFE</h2>
    <p class="muted">Targets: 60–100 customers; $2.7M ARR by Q1 2026</p>
    <div class="cta-actions">
      <button class="btn-primary">Intro Us</button>
      <a href="mailto:labeeb@kavia.ai" class="btn-secondary">Email: labeeb@kavia.ai</a>
    </div>
  </div>
  <div class="cta-side">
    <div class="feature-card vbar">
      <span class="badge">HOW YOU CAN HELP</span>
      <ul class="points-clean">
        <li>Intros to design partners & enterprise customers</li>
        <li>Advisorship in governance/compliance & partnerships</li>
      </ul>
      <div class="muted small mt-4">www.kavia.ai</div>
    </div>
  </div>
</div>

<div class="mt-6 subtle">Press S for presenter mode • Press E to open editor • Use toolbar for PDF export</div>

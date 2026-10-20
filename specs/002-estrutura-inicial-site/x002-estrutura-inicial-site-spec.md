# Feature Specification: Estrutura Base e Layout Terracotta & Slate Executive

**Feature Branch**: `feature/criacao_spa`
**Status**: Updated (Conforme Constituição v3.0.0)

**Input**: Refatoração do layout base para a estética "Terracotta & Slate Executive" (Earthy editorial meets precision systems architecture). O Header e o canvas do site utilizam a cor Eggshell, os blocos de conteúdo utilizam a estrutura Bento-Box em Slate Grey, detalhes de destaque em Terracotta / Burnt Peach e tipografia exclusiva Space Grotesk.

## Requirements *(mandatory)*

### Functional Requirements
- **FR-001**: O sistema DEVE utilizar a estrutura Astro existente (`src/layouts/Layout.astro` e `public/assets/`).
- **FR-002**: O arquivo `public/assets/css/colors.css` DEVE ser substituído pela nova paleta oficial Terracotta & Slate Executive (Single Source of Truth).
- **FR-003**: A tipografia DEVE utilizar EXCLUSIVAMENTE a família 'Space Grotesk' em todos os elementos da aplicação, importada via Google Fonts. Fontes anteriores (como Montserrat e Poppins) DEVEM ser completamente removidas. O fundo global da página (`body`) DEVE ser Eggshell (`#f4f1de`).
- **FR-004**: O layout do `<header>` DEVE adotar o estilo editorial executivo com fundo Eggshell translúcido (`rgba(244, 241, 222, 0.94)` com `backdrop-filter: blur(12px)`), linha de divisão sutil em Slate e sem sombras pesadas.
- **FR-005**: A Identidade Profissional (esquerda do header) DEVE alinhar a foto redonda (com borda sutil, sem efeitos de brilho) junto ao Nome (Space Grotesk em Twilight Indigo) e Profissão (em Terracotta / Burnt Peach).
- **FR-006**: O Menu de Navegação DEVE ter links em Twilight Indigo. O item de menu "ativo" (ou em hover) DEVE ter um sublinhado na cor Terracotta (`var(--accent-terracotta)`).
- **FR-007**: As formas decorativas de fundo DEVEM complementar a estética terrosa e arquitetural, utilizando tons sutis e translúcidos de Terracotta e Slate sobre o canvas Eggshell, sem efeitos neon.
- **FR-008**: Contêineres e cartões Bento DEVEM ter `border-radius: 1rem` (16px), enquanto botões, tags, inputs e badges DEVEM usar `border-radius: 0.5rem` (8px), com destaque interno sutil `inset 0 1px 0 rgba(244, 241, 222, 0.1)`.

### Key Entities
- **Paleta de Cores de Referência (`colors.css`)**:
  ```css
  :root {
    --bg-eggshell: #f4f1de;
    --surface-slate: #2b2d42;
    --accent-terracotta: #e07a5f;
    --accent-peach: #e07a5f;
    --text-peach: #fad2bf;
    --text-twilight: #22223b;
    --text-slate: #2b2d42;
    --text-heading: var(--text-twilight);
    --text-body: var(--text-slate);
    --border-radius-container: 1rem;
    --border-radius-btn: 0.5rem;
    --bento-card-highlight: inset 0 1px 0 rgba(244, 241, 222, 0.1);
  }
  ```
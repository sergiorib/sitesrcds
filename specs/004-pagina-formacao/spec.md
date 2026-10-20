# Feature Specification: Página "Formação Acadêmica"

**Feature Branch**: `feature/pagina-formacao`
**Status**: Ready for Implementation

**Input**: Criação da página contendo o histórico acadêmico focado em dados e sistemas.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001 (Estrutura e Layout)**: O componente `src/pages/formacao.astro` DEVE herdar a base `Layout.astro` e ser renderizado na área principal sobre fundo preto (`--bg-main`).
- **FR-002 (Cabeçalho)**: Título "Formação Acadêmica" em fonte grande, branca (`--text-primary`), condensada e em negrito.
- **FR-003 (Visualização)**: As formações DEVEM ser dispostas em cartões horizontais de largura total, com fundo `--bg-cards` e bordas `--border-color`.
- **FR-004 (Conteúdo)**: Cada item acadêmico DEVE incluir:
  - **Curso**: Fonte em destaque, cor branca (`--text-primary`)[cite: 5].
  - **Instituição**: Nome da entidade em cor verde-limão (`--accent-lime`)[cite: 5].
  - **Período**: Alinhado à direita (se possível) ou logo abaixo da instituição, em fonte monoespaçada e cor cinza-claro (`--text-secondary`)[cite: 5].
- **FR-005 (Mapeamento de Dados)**:
  1. Superior em Ciência de Dados — Universidade Estácio de Sá — 2024 a 2026 (em andamento)[cite: 5].
  2. Superior em Análise e Desenvolvimento de Sistemas — Centro Universitário Estácio Radial de SP — 2013 a 2016[cite: 5].
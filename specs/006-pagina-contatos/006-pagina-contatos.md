# Feature Specification: Página "Contatos"

**Feature Branch**: `feature/pagina-contatos`
**Status**: Ready for Implementation

**Input**: Construção de uma interface limpa com links diretos de comunicação e perfis profissionais.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001 (Estrutura)**: O componente `src/pages/contatos.astro` DEVE usar `Layout.astro`.
- **FR-002 (Cabeçalho)**: Título "Contatos" em fonte condensada, branca (`--text-primary`) e negrito. Subtítulo: *"Conecte-se comigo para oportunidades, parcerias ou discussões técnicas."* (fonte monoespaçada, `--text-secondary`).
- **FR-003 (Grid de Contatos)**: Apresentar os contatos através de uma grade (Grid ou Flexbox) de "botões-cartão" interativos.
- **FR-004 (Estilo dos Cartões de Contato)**: Fundo escuro (`--bg-cards`), borda fina (`--border-color`), efeito de hover (mudança sutil de borda ou texto para `--accent-lime`), com um ícone representativo para cada canal.
- **FR-005 (Mapeamento de Dados)**:
  - **Email**: Sergio.rib@live.com[cite: 5] (Link `mailto:`).
  - **Telefone / WhatsApp**: (11) 98368-0639[cite: 5] (Link `wa.me` ou `tel:`).
  - **LinkedIn**: /in/sergio-ribeiro-cerqueira[cite: 5] (Link externo).
  - **GitHub**: /sergiorib[cite: 5] (Link externo).
  - **Localização**: Santo André - São Paulo[cite: 5] (Apenas texto com ícone de pin/mapa).
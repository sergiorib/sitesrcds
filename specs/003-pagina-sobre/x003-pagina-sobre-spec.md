# Feature Specification: Página "Sobre" (Bento-Grid Executive)

**Feature Branch**: `feature/pagina-sobre`
**Created**: 2026-10-15
**Status**: Implemented

**Input**: Refatoração da página "Sobre" utilizando a estrutura "Bento-Grid". Os contêineres de conteúdo atuarão como cartões Slate Grey densos flutuando sobre o canvas Eggshell.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Leitura do Resumo Profissional (Priority: P1)
Como recrutador ou visitante, quero acessar a página "Sobre" e ler um resumo profissional em uma interface Bento-Grid executiva, com alta legibilidade e contraste, para entender rapidamente o perfil analítico do candidato.

**Acceptance Scenarios**:
1. **Given** a página `/sobre` carregada no desktop, **When** eu visualizo a tela, **Then** vejo um layout estruturado em grid de 12 colunas, com os textos formatados com espaçamento confortável dentro de cartões na cor Slate Grey.
2. **Given** a página carregada em um dispositivo móvel, **When** eu visualizo a tela, **Then** os contêineres do Bento-Grid se empilham em uma única coluna fluida, mantendo as bordas arredondadas e o contraste sem quebrar o layout.

## Requirements *(mandatory)*

### Functional Requirements
- **FR-001**: O componente `src/pages/sobre.astro` DEVE usar o `Layout.astro` global.
- **FR-002**: A área principal da página "Sobre" DEVE utilizar um layout CSS Grid estruturado (Bento-Box) com 12 colunas no desktop (ex: um bloco maior para o resumo, e blocos auxiliares para habilidades/métricas) e colapso para 1 coluna no mobile.
- **FR-003**: Os cartões de conteúdo (Bento Cards) DEVEM possuir fundo Slate Grey (`var(--surface-slate)`), bordas arredondadas de `1rem` (16px), e uma linha de destaque interna muito sutil (`inset 0 1px 0 rgba(244, 241, 222, 0.1)`). Nenhuma sombra pesada deve ser usada; a elevação se dá pelo contraste.
- **FR-004**: O Título "RESUMO PROFISSIONAL" e os KPIs dentro dos cards DEVEM usar a cor Eggshell (`var(--bg-eggshell)`) com a fonte Space Grotesk em peso bold.
- **FR-005**: O texto de corpo da biografia DEVE usar a cor Peach Fuzz (`var(--text-peach)`) para reduzir a fadiga visual, com espaçamento de linha aberto (1.45 a 1.55).
- **FR-006**: O texto da biografia a ser inserido é EXATAMENTE: 
  "Sou um analista de dados que integra conhecimentos de engenharia de dados e programação para conectar as necessidades do negócio à tecnologia na construção de soluções analíticas precisas e escaláveis. Minha base em desenvolvimento de sistemas me permite conduzir iniciativas de ponta a ponta, aplicando rigor técnico, governança e automações confiáveis ao ecossistema de dados. 
  
  Possuo sólida base teórica e técnica em Analytics Engineering, podendo atuar desde a construção de pipelines de dados (ETL/ELT) até a definição de KPIs, criação de modelo dimensional e apresentação utilizando ferramentas consagradas como Databricks, Airflow, DBT, SQL, Python, PowerBI, Excel, etc. Adoto práticas estruturadas de utilização segura e controlada de Inteligência Artificial para acelerar a geração de insights, a documentação técnica e a produtividade."
- **FR-007**: Botões, tags (ex: chips de ferramentas de Data Science) e chamadas de ação primárias (CTAs) DEVEM utilizar bordas arredondadas de `0.5rem` (8px) e aplicar a cor de acento Burnt Peach (`var(--accent-peach)`).

## Success Criteria *(mandatory)*

### Measurable Outcomes
- **SC-001**: O layout em Bento-Grid se adapta responsivamente sem cortar o conteúdo dos cartões Slate Grey.
- **SC-002**: A tipografia Space Grotesk é a única renderizada na página, mantendo legibilidade perfeita e alto contraste WCAG.
- **SC-003**: As diretrizes visuais estabelecidas de cores, bordas, e elevação são estritamente respeitadas.
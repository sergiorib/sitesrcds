# Feature Specification: Estrutura Base e Layout Sci-Fi HUD com Astro

**Feature Branch**: `feature/criacao_spa`

**Created**: 2026-10-13

**Status**: Draft

**Input**: User description: "Construção de site pessoal em Astro com estética Sci-Fi/Cyberpunk HUD. Header fixo com botões de cantos cortados, bordas de neon brilhante e foto de perfil com anel tecnológico. Cores baseadas em tema escuro com Ciano e Roxo neon configuradas em colors.css. O menu deve ser lido dinamicamente via src/config/menu.json."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Roteamento Baseado em Arquivos (Priority: P1)
Como visitante, quero clicar no menu HUD e ser levado para a página correspondente (Projetos, Sobre, Experiências, etc.) de forma rápida, aproveitando o roteamento estático do Astro.

**Acceptance Scenarios**:
1. **Given** as páginas criadas em `src/pages/`, **When** eu clico no link correspondente no cabeçalho futurista, **Then** a página carrega perfeitamente exibindo o seu conteúdo de teste (ex: título da página) mantendo o Layout global intacto.

### User Story 2 - Renderização do Cabeçalho Sci-Fi (Priority: P1)
Como visitante, quero ver um cabeçalho horizontal e fixo no topo da página, projetado como uma interface de nave espacial (HUD). O cabeçalho deve exibir a identidade profissional à esquerda (foto envolta em um anel luminoso) e o menu de navegação à direita com botões geométricos neon.

**Acceptance Scenarios**:
1. **Given** o site acessado no desktop, **When** visualizado, **Then** o cabeçalho apresenta a foto redonda grande com bordas/box-shadow neon concêntricos, nome e profissão ("DATA SCIENTIST") com fonte tecnológica, e links à direita envoltos em contornos chanfrados com brilho.
2. **Given** o site acessado no mobile, **When** visualizado, **Then** os links à direita viram um botão toggle com a mesma estética tech.

## Requirements *(mandatory)*

### Functional Requirements
- **FR-001**: A IA DEVE iniciar o projeto Astro base na raiz do repositório.
- **FR-002**: A IA DEVE gerar obrigatoriamente a seguinte estrutura de arquivos:
  ```text
  src/
  ├── config/
  │   └── menu.json
  ├── layouts/
  │   └── Layout.astro
  └── pages/
      ├── index.astro
      ├── sobre.astro
      ├── experiencias.astro
      ├── formacao.astro
      ├── portfolio.astro
      ├── contatos.astro
      └── artigos.astro
  public/
  └── assets/
      ├── css/
      │   ├── style.css
      │   └── colors.css
      ├── js/
      │   └── app.js
      └── images/
          └── foto.jpg

- **FR-003**: O arquivo src/config/menu.json DEVE conter os links reais para as páginas. O Layout.astro deve iterar sobre ele para gerar o menu.

- **FR-004**: TODAS as páginas em src/pages/ DEVEM conter um card central HTML básico utilizando o <Layout>. Os contêineres/cards de conteúdo devem obrigatoriamente possuir cantos cortados (usando clip-path) e bordas com brilho neon, simulando painéis de dados.

- **FR-005**: O arquivo public/assets/css/colors.css DEVE ser gerado contendo exatamente as variáveis da paleta Sci-Fi HUD listadas nas Key Entities.

- **FR-006**: O CSS (style.css) DEVE importar do Google Fonts uma tipografia de aspecto técnico/futurista (como 'Orbitron', 'Rajdhani' ou 'Chakra Petch') para ser usada em títulos e menus.

- **FR-007**: A Identidade Profissional à esquerda do <header> DEVE ter a foto de perfil (foto.jpg) contida em uma moldura/anel com propriedades de box-shadow ou border concêntricos para simular um radar/lente tecnológica. As fontes do Nome devem ser grandes e as da profissão menores, estilizadas com text-shadow.

- **FR-008**: O Menu de Navegação à direita DEVE implementar links com o formato de botões geométricos. Os botões DEVEM utilizar clip-path: polygon() para cortar os cantos (ex: cantos superiores/inferiores chanfrados). Em estados de hover, os botões DEVEM acender com brilho intenso em box-shadow.

- **FR-009**: O arquivo app.js DEVE conter a lógica Vanilla JS mínima para o toggle do menu mobile.
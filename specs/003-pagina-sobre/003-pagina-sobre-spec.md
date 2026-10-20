# Feature Specification: Atualização da Seção "Sobre mim" e "Stack Tecnológica"

**Feature Branch**: `feature/update-pagina-sobre`
**Status**: Ready for Implementation (Conforme Constituição v4.0.0)

**Input**: Substituição do conteúdo da página "Sobre" por uma nova biografia focada em Machine Learning e Liderança, adição de novos botões de ação e criação de uma grade detalhada de "Stack Tecnológica".

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001 (Estrutura e Layout)**: O componente DEVE usar o `Layout.astro` global e ser renderizado dentro do contêiner da "Área principal"[cite: 4]. O fundo DEVE permanecer preto absoluto (`--bg-main`), com alinhamento à esquerda e espaçamento interno consistente[cite: 2]. Linhas horizontais finas e discretas DEVEM ser adicionadas na parte inferior da área principal.
- **FR-002 (Seção "Sobre Mim")**: 
  - O título "Sobre mim" DEVE usar fonte grande, branca (`--text-primary`), em negrito e com família condensada/robusta[cite: 2, 3].
  - O texto descritivo DEVE utilizar fonte monoespaçada/tecnológica, cor cinza-claro (`--text-secondary`) e tamanho moderado com altura de linha confortável[cite: 3, 4]. O texto exato é: *"Atuação sólida na intersecção entre modelagem matemática rigorosa, Machine Learning e Liderança técnica para tomada de decisões data-driven. Experiência na concepção e escala de soluções analíticas em ambientes corporativos e Fortune 500, traduzindo dados brutos em vantagem competitiva e alto retorno financeiro."*
  - Abaixo do texto, incluir um cartão horizontal com fundo azul-petróleo escuro (`--bg-cards`) e borda discreta em cinza-azulado escuro (`--border-color`)[cite: 2]. O cartão deve conter o texto "10+ Anos de Experiência" e um ícone de certificação verde-limão (`--accent-lime`).
- **FR-003 (Botões de Ação)**: Dois botões DEVEM ser renderizados lado a lado abaixo do cartão de experiência:
  - **Botão 1**: Texto "Baixar CV Completo", fundo verde-limão (`--accent-lime`), texto escuro e ícone de download.
  - **Botão 2**: Texto "Ver Trajetória Completa", fundo escuro, borda fina (`--border-color`), texto branco (`--text-primary`) e ícone de perfil.
  - Ambos os botões DEVEM usar fonte monoespaçada compacta[cite: 3], ter altura semelhante, espaçamento uniforme e comportamento interativo funcional via CSS puro (sem sombras pesadas)[cite: 1, 3].
- **FR-004 (Seção "Stack Tecnológica")**:
  - Posicionada abaixo de "Sobre mim" mantendo espaçamento vertical. Título "Stack Tecnológica" seguindo a mesma tipografia do título inicial.
  - Texto de introdução: *"Ferramentas, linguagens e frameworks dominados e aplicados em ambientes analíticos de missão crítica e escala produtiva."*
  - **Grade de Cartões**: Organização em 2 colunas e 2 linhas (grid 2x2). 
  - Cada cartão DEVE utilizar fundo azul-petróleo escuro (`--bg-cards`), borda fina em tom mais claro (`--border-color`) e títulos em verde-limão (`--accent-lime`) em maiúsculas[cite: 2].
  - O conteúdo dos cartões DEVE exibir listas de tecnologias com ícone à esquerda, nome e uma classificação por estrelas à direita (estrelas preenchidas em verde-limão `--accent-lime`, vazias em cinza `--text-secondary`)[cite: 2]. O conteúdo exato segue:
    - **Cartão 1 — MACHINE LEARNING & DEEP LEARNING**: PyTorch (5), TensorFlow (4), Scikit-Learn (5), XGBoost (5).
    - **Cartão 2 — IA GENERATIVA & LLMS**: LangChain (4), LLamaIndex (4), Transformers (5), OpenAI / Anthropic (5).
    - **Cartão 3 — BIG DATA & MLOPS**: Spark (5), MLflow (4), Docker (4), Kubernetes (4).
    - **Cartão 4 — LINGUAGENS & BANCOS**: Python (5), SQL (5), PostgreSQL (4), Snowflake (4).
- **FR-005 (Botão GitHub)**: Abaixo da grade de tecnologias, incluir um botão horizontal longo com texto *"Ver Repositórios & Arquiteturas no GitHub"*. Fundo escuro, borda discreta (`--border-color`), fonte monoespaçada compacta e ícone externo em verde-limão (`--accent-lime`)[cite: 2, 3].
- **FR-006 (Responsividade)**: Em dispositivos móveis e telas menores, a grade 2x2 da "Stack Tecnológica" DEVE ser adaptada (ex: para 1 coluna) e a barra lateral reorganizada de forma coerente sem cortes ou sobreposições[cite: 2].
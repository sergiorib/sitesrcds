# Feature Specification: Estrutura Base e Layout Dark Tech Dashboard

**Feature Branch**: `feature/estrutura-base-dark-tech-v2`
**Status**: Approved (Conforme Constituição v4.0.0)

**Input**: Refatoração do layout base para o design técnico em duas seções e ajustes de UI na barra lateral (foto, tipografia, status e iconografia).

## Requirements *(mandatory)*

### Functional Requirements
- **FR-001**: O sistema DEVE utilizar a estrutura Astro existente (`src/layouts/Layout.astro` e `public/assets/`).
- **FR-002**: O arquivo `public/assets/css/colors.css` DEVE ser o Single Source of Truth para todas as cores do projeto. A paleta implementa as seguintes diretrizes: 
  - Fundo principal: Preto quase absoluto.
  - Fundo da barra lateral: Azul-petróleo muito escuro.
  - Destaque/Acento: Verde-limão vibrante e Ciano (para gradientes).
  - Bordas: Cinza-azulado escuro.
- **FR-003**: O layout DEVE ter uma **Barra lateral fixa à esquerda** (ocupando ~27% da tela), visível durante toda a navegação e rolagem, separada por uma linha vertical discreta.
- **FR-004**: A **Área principal à direita** ocupa o espaço restante, com rolagem independente, fundo preto, alinhamento de texto à esquerda, espaçamento interno consistente e linhas horizontais finas na parte inferior.
- **FR-005**: A Barra lateral DEVE conter na ordem:
  1. **Foto de perfil**: circular, `object-fit: cover`, tamanho reduzido e compacto (aprox. 132x132px), no topo centralizado. **DEVE apresentar um anel externo de aproximadamente 4 a 5 pixels, com gradiente transitando de verde-limão para ciano, e uma separação discreta (gap) entre a fotografia e o contorno.**
  2. **Nome**: "Sérgio Ribeiro Cerqueira" em fonte grande, condensada, branca, negrito, em linha única.
  3. **Profissão**: "CIENTISTA DE DADOS", letras maiúsculas, cor verde-limão, com espaçamento entre caracteres e fonte com tamanho levemente ampliado em relação à versão anterior.
  4. **Status de Disponibilidade**: O texto "OPEN TO WORK !", em letras maiúsculas, na cor verde-limão vibrante (`--accent-lime`), posicionado logo abaixo do nome do cargo. **DEVE conter um pequeno indicador circular verde luminoso e pulsante posicionado imediatamente à sua esquerda.**
  5. **Menu vertical**: Composto por 6 itens ("Sobre mim", "Experiências Profissionais", "Formação Acadêmica", "Portfólio de Projetos", "Artigos e publicações", "Contatos").
- **FR-006**: Cada item do menu DEVE ser retangular, possuir fonte monoespaçada com um tamanho levemente ampliado para melhor legibilidade, borda fina e cantos sutilmente arredondados. 
  - **Ícones**: Cada item DEVE apresentar um ícone linear à esquerda com tamanho entre 26 e 30 pixels, traço fino e cor cinza-claro. O espaçamento entre ícone e texto deve ser consistente. Os ícones devem ser implementados via SVG inline ou biblioteca já existente, mapeados da seguinte forma:
    - Sobre mim: Perfil de usuário.
    - Experiências Profissionais: Gráfico ou maleta profissional.
    - Formação Acadêmica: Capelo de formatura.
    - Portfólio de Projetos: Pasta com projetos.
    - Artigos e publicações: Documento ou artigo.
    - Contatos: Envelope.
  - O item ativo recebe fundo verde-limão, texto escuro e os ícones devem adaptar sua cor para manter o contraste adequado.
- **FR-007**: Responsividade: Em telas menores (mobile), adaptar o layout reorganizando a barra lateral e o conteúdo de maneira coerente e sem sobreposições.

### Key Entities
- **Paleta de Cores de Referência (`colors.css`)**:
  ```css
  :root {
    --bg-main: #050505;
    --bg-sidebar: #06141b;
    --bg-cards: #0a1f26;
    --accent-lime: #a3e635; /* verde-limão vibrante */
    --accent-lime2: #d4d700;
    --accent-cyan: #06b6d4; /* ciano para gradiente */
    --text-primary: #f8f8f8;
    --text-secondary: #c0c0c0;
    --icon-color: #d1d5db; /* cinza-claro para ícones */
    --border-color: #2a3b45;
  }
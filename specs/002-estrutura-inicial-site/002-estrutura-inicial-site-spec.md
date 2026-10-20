# Feature Specification: Construção da Navegação e Estilo Base

**Feature Branch**: `feature/criacao_spa`
**Status**: Updated (Conforme Constituição v4.0.0)

**Input**: Criação da navegação e alinhamento dos estilos básicos do site de acordo com o design Dark Tech.

## Requirements *(mandatory)*

### Functional Requirements
- **FR-001**: O sistema DEVE utilizar a estrutura Astro existente (`src/layouts/Layout.astro` e `public/assets/`)[cite: 3].
- **FR-002**: O arquivo `public/assets/css/colors.css` DEVE ser substituído pela nova paleta oficial[cite: 3] refletindo as cores Azul-petróleo/Preto/Verde-limão.
- **FR-003**: O desenvolvimento da tipografia DEVE implementar a família condensada para Títulos (ex: Roboto Condensed, Oswald ou similar) e a monoespaçada para textos gerais, botões e listas (ex: Fira Code, JetBrains Mono, ou Roboto Mono).
- **FR-004**: Os itens do menu DEVEM possuir navegação funcional (âncoras para as seções). O item ativo DEVE atualizar dinamicamente para aplicar o destaque verde-limão e o indicador circular durante a rolagem.
- **FR-005**: Botões DEVEM ter comportamentos funcionais com links configuráveis (currículo, trajetória, GitHub), adotando o fundo escuro do card e bordas em cinza-azulado escuro, recebendo interatividade no hover sem uso de sombras pesadas.
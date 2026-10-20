# Portfólio de Data Science Constitution

## Core Principles

### I. Stack Tecnológica (Astro + Vanilla)
O projeto utilizará o framework **Astro** EXCLUSIVAMENTE para a estruturação de componentes (Layouts), sistema de rotas (file-based routing) e build estático[cite: 1]. 
- O estilo DEVE permanecer em CSS3 puro (Vanilla)[cite: 1].
- A interatividade no navegador DEVE permanecer em Vanilla JS[cite: 1].
- Proibida a instalação de integrações de UI externas (React, Tailwind, etc)[cite: 1].

### II. Separação de Preocupações (Astro Components)
Os arquivos `.astro` devem encapsular o HTML[cite: 1]. O CSS global e a lógica de UI ficam em `public/assets/css/` e `public/assets/js/`[cite: 1].

### III. Design e Identidade Visual (Dark Tech Dashboard)
O design expressa uma estética técnica, focada e imersiva.
- **Estética**: Estilo interface de desenvolvedor. Minimalista, livre de gradientes, sombras pesadas ou decorações desnecessárias.
- **Estrutura**: Layout dividido em duas áreas: Barra lateral fixa à esquerda (aprox. 27% da tela) com fundo azul-petróleo muito escuro e linha divisória sutil, e Área principal à direita rolável com fundo preto absoluto.
- **Elevação e Formas**: Formatos retangulares com bordas finas em cinza-azulado escuro e cantos discretamente arredondados. 

### IV. Sistema de Cores e Tipografia (Single Source of Truth)
A combinação tipográfica requer o uso de fonte condensada robusta/negrito para títulos e nome, e fonte monoespaçada/tecnológica compacta para textos descritivos, menus e listas.
Todas as cores DEVEM ser consumidas do arquivo `public/assets/css/colors.css`[cite: 1].
- **Regra de Contraste**: Fundo preto para conteúdo, azul-petróleo muito escuro para a sidebar, azul-petróleo escuro para cartões. Textos principais em branco ou cinza muito claro. Textos secundários em cinza-claro. Cor de destaque exclusiva em verde-limão vibrante.

## Padrões de Arquitetura de Conteúdo
A arquitetura baseia-se no sistema de rotas do Astro (File-based Routing)[cite: 1].

## Development Workflow & Git Conventions
O controle de versão (Git) é de responsabilidade EXCLUSIVA do desenvolvedor humano[cite: 1]. O agente NÃO DEVE executar comandos Git[cite: 1].

**Version**: 4.0.0 | **Ratified**: Atual
# Portfólio de Data Science Constitution

## Core Principles

### I. Stack Tecnológica (Astro + Vanilla)
O projeto utilizará o framework **Astro** EXCLUSIVAMENTE para a estruturação de componentes (Layouts), sistema de rotas (file-based routing) e build estático. 
- O estilo DEVE permanecer em CSS3 puro (Vanilla), sem Tailwind ou pré-processadores.
- A interatividade no navegador (client-side) DEVE permanecer em Vanilla JS (ES6+).
- É estritamente proibida a instalação de integrações de UI como React, Vue, Svelte ou bibliotecas de componentes externas.

### II. Separação de Preocupações (Astro Components)
Os arquivos `.astro` devem ser usados para encapsular o HTML e importar os estilos/scripts. O CSS global e a lógica de UI devem continuar isolados em arquivos dedicados em `public/assets/css/` e `public/assets/js/`.

### III. Design e Identidade Visual (Sci-Fi / Cyberpunk HUD)
O design deve adotar uma estética futurista "Sci-Fi / Cyberpunk HUD". 
- **Fundo**: Temas escuros profundos (Dark Mode absoluto) com elementos de interface que remetem a painéis de dados.
- **Geometria**: Uso intensivo de propriedades como `clip-path: polygon()` para criar botões, cards e contêineres com cantos cortados/chanfrados.
- **Iluminação (Neon)**: As bordas dos elementos ativos, cards e botões devem emitir brilho (glow) utilizando múltiplas camadas de `box-shadow` e `text-shadow` em tons de Ciano e Roxo. É estritamente proibido o uso de Glassmorphism (efeito de vidro fosco).

### IV. Sistema de Cores e Theming (Single Source of Truth)
Todas as cores e gradientes do site DEVEM ser obrigatoriamente consumidos através de variáveis nativas do CSS (CSS Custom Properties). A única fonte de verdade para a paleta de cores é o arquivo `public/assets/css/colors.css`. É terminantemente proibido o uso de cores "hardcoded" diretamente nos outros arquivos de estilo.

## Padrões de Arquitetura de Conteúdo
A arquitetura deve ser modular e baseada no sistema de rotas do Astro (File-based Routing). A criação de novas pastas e arquivos `.astro` dentro de `src/pages/` gerará automaticamente as páginas do site. O site compartilhará um Layout comum que contém o menu principal e a identidade visual fixos.

## Development Workflow & Git Conventions
O controle de versão (Git), a criação de branches, commits, Issues e Pull Requests são de responsabilidade EXCLUSIVA do desenvolvedor humano. O agente de IA NÃO DEVE executar comandos `git` ou `gh` em nenhuma circunstância. A atuação da IA é estritamente restrita a ler as especificações e gerar/modificar os arquivos de código e configuração localmente.

## Governance
Esta Constituição atua como a lei primária do projeto e sobrepõe quaisquer outras práticas de desenvolvimento ou sugestões da IA. O agente de desenvolvimento (Antigravity/GSK) DEVE validar a conformidade do código contra este documento antes de finalizar qualquer arquivo. 

**Version**: 1.3.0 | **Ratified**: 2026-10-13 | **Last Amended**: 2026-10-13
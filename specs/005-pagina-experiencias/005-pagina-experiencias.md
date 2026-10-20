# Feature Specification: Página "Experiências Profissionais"

**Feature Branch**: `feature/pagina-experiencias`
**Status**: Ready for Implementation

**Input**: Criação da página de experiências listando o histórico profissional em formato de timeline ou cartões sequenciais, com base nos dados do CV.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001 (Estrutura e Layout)**: O componente `src/pages/experiencias.astro` DEVE usar o `Layout.astro` global. O fundo DEVE ser preto absoluto (`--bg-main`) com alinhamento à esquerda e linha fina de fechamento na parte inferior.
- **FR-002 (Cabeçalho)**: Título "Experiências Profissionais" em fonte grande, branca (`--text-primary`), negrito e família condensada/robusta.
- **FR-003 (Estrutura dos Cartões)**: Cada experiência DEVE ser renderizada como um cartão retangular com fundo azul-petróleo escuro (`--bg-cards`), borda fina em cinza-azulado escuro (`--border-color`) e espaçamento interno amplo.
- **FR-004 (Conteúdo dos Cartões)**: Cada cartão DEVE conter:
  - **Empresa**: Em cor verde-limão (`--accent-lime`), fonte condensada, em destaque[cite: 5, 6].
  - **Cargo e Período**: Título do cargo em branco (`--text-primary`), seguido por Regime, Modelo e Período em cinza-claro (`--text-secondary`) com fonte monoespaçada[cite: 5, 6].
  - **Descrição**: Parágrafo explicativo utilizando fonte monoespaçada, cor cinza-claro (`--text-secondary`)[cite: 5, 6].
  - **Tecnologias**: Lista de tecnologias na parte inferior do cartão. Podem ser formatadas como texto simples com destaque ou "pills" (etiquetas) com fundo do painel (`--bg-sidebar`) e texto `--text-secondary`[cite: 5, 6].
- **FR-005 (Mapeamento de Dados)**: Os cartões DEVEM ser preenchidos na seguinte ordem:
  1. **Frete.com**: Analista de BI | PJ - Remoto | Logística | mai 25 a mar 26 (10 meses)[cite: 5]. *Descrição:* Reestruturação de ETL, redução de tempo de preparação em 80%[cite: 5]. *Tech:* SQL Server, Python, DuckDB, N8N, DBT, etc[cite: 5].
  2. **Verity Consultoria**: Analista de sistemas e desenvolvedor | CLT - Remoto | Seguros | mar 23 a mar 25 (2 anos)[cite: 5]. *Descrição:* Modelagem de dados para seguro agrícola, integração de sistemas legados[cite: 5]. *Tech:* Progress 4GL, SQL, Java, APIs, etc[cite: 5].
  3. **Arezzo&Co**: Analista de dados | PJ - Remoto | Varejo | mar/2021 a out/2022 (1 ano e 6 meses)[cite: 5]. *Descrição:* Soluções analíticas Databricks, visibilidade sobre vendas[cite: 5]. *Tech:* Databricks, SQL, PySpark, Power BI, etc[cite: 5].
  4. **CVC Viagens e Turismo**: Especialista em TI | CLT - Presencial | Turismo | jan/2018 a jan/2021 (4 anos)[cite: 6]. *Descrição:* Sustentação Oracle EBS, observabilidade Zabbix/Grafana, redução de custos em 60%[cite: 6]. *Tech:* Oracle EBS, SQL, Grafana, AWS, etc[cite: 6].
  5. **Submarino e B2W Digital**: Analista de sistemas / Líder técnico | CLT - Presencial | Varejo | jan/2015 a dez/2017 (3 anos)[cite: 6]. *Descrição:* Integração GDS Amadeus, soluções da área financeira[cite: 6]. *Tech:* SQL Server, Oracle, C#[cite: 6].
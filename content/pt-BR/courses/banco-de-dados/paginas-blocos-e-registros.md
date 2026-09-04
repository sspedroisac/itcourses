# Páginas, Blocos e Registros

## 1. Unidades físicas

Bancos de dados organizam informações em unidades físicas para tornar o armazenamento e a leitura mais eficientes. Os nomes variam entre SGBDs, mas os conceitos de páginas, blocos e registros são comuns.

- **registro**: representação física de uma linha;
- **página ou bloco**: conjunto de registros;
- **arquivo**: conjunto de páginas usado pelo banco.

---

## 2. Registros

Um registro contém os valores de uma linha da tabela. Seu tamanho pode ser fixo ou variável, dependendo dos tipos de dados armazenados.

Registros maiores podem reduzir a quantidade de linhas por página e aumentar o custo de leitura.

---

## 3. Páginas e blocos

A página é uma unidade de leitura e escrita do SGBD. Quando uma consulta precisa de um registro, o banco normalmente carrega a página que contém esse registro.

Por isso, uma consulta que acessa muitas páginas pode ser mais custosa do que uma consulta que acessa poucos blocos.

---

## 4. Espaço livre

Páginas precisam manter espaço para inserções e atualizações. Alterações que aumentam o tamanho de um registro podem exigir sua movimentação para outra página.

Esse processo pode causar fragmentação e aumentar o custo de acesso.

---

## 5. Localidade

Quando registros relacionados ficam próximos fisicamente, o SGBD pode carregá-los com menos operações de entrada e saída.

A localidade é relevante em tabelas acessadas por ordem, índices clusterizados e leituras sequenciais.

---

## 6. Impacto na performance

A quantidade de páginas lidas é uma métrica importante para avaliar o custo de uma consulta. Índices, particionamento e organização física podem reduzir leituras desnecessárias.

---

## 7. Boas práticas

- Escolher tipos de dados adequados;
- Evitar colunas excessivamente grandes;
- Monitorar fragmentação;
- Avaliar tamanho de páginas e registros;
- Analisar planos de execução.

---

## 8. Resumo

Registros, páginas e blocos formam a base física do armazenamento. Entender essa organização permite interpretar custos de leitura, fragmentação e decisões de otimização.

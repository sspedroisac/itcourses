# Álgebra Relacional

## 1. O que é Álgebra Relacional

A **álgebra relacional** é uma linguagem formal usada para manipular relações em bancos de dados relacionais. Ela define operações matemáticas sobre tabelas, permitindo consultar, combinar e transformar dados de maneira precisa.

Essa teoria serve de base para a linguagem SQL, que é a forma mais comum de interagir com bancos relacionais.

---

## 2. Objetivo da Álgebra Relacional

A álgebra relacional permite realizar operações como:

- seleção de linhas;
- projeção de colunas;
- junção de tabelas;
- união de conjuntos;
- diferença entre relações;
- agrupamento e agregação.

Essas operações ajudam a obter resultados específicos a partir dos dados armazenados.

---

## 3. Operações fundamentais

### 3.1 Seleção

A operação de **seleção** filtra linhas de uma tabela de acordo com uma condição.

Exemplo:

```text
σ (idade > 18) (Cliente)
```

Esse comando retorna apenas os clientes maiores de 18 anos.

### 3.2 Projeção

A operação de **projeção** escolhe determinadas colunas da tabela.

Exemplo:

```text
π (nome, cidade) (Cliente)
```

Esse comando retorna apenas as colunas nome e cidade.

### 3.3 Produto cartesiano

O **produto cartesiano** combina todas as linhas de duas tabelas. Esse processo pode gerar muitos resultados e geralmente é usado em conjunto com filtros para formar junções.

### 3.4 Junção

A **junção** combina registros de duas tabelas com base em uma condição comum, normalmente uma chave estrangeira e uma chave primária.

Exemplo:

```text
Cliente ⋈ Pedido
```

Essa operação relaciona clientes e seus pedidos.

---

## 4. Operações de conjuntos

A álgebra relacional também inclui operações típicas de conjuntos, como:

- **união**;
- **interseção**;
- **diferença**;
- **produtos cartesianos**;
- **junção**.

Essas operações ajudam a combinar resultados e comparar conjuntos de dados.

---

## 5. Relação com SQL

A álgebra relacional é a base teórica da linguagem SQL. Por exemplo:

- `SELECT` corresponde a projeção;
- `WHERE` corresponde a seleção;
- `JOIN` corresponde a junção;
- operações de conjunto podem ser comparadas à união e interseção.

Dessa forma, a álgebra relacional oferece uma forma formal e rigorosa de entender consultas SQL.

---

## 6. Importância da Álgebra Relacional

Compreender a álgebra relacional é valoroso porque ajuda a:

- pensar melhor em consultas;
- decompor operações complexas;
- entender o custo e a lógica de combinações entre tabelas;
- melhorar a qualidade de consultas SQL;
- fundamentar a teoria dos bancos de dados relacionais.

---

## 7. Resumo

A álgebra relacional é a base matemática dos bancos de dados relacionais. Por meio de operações como seleção, projeção e junção, ela permite manipular, combinar e consultar dados de forma precisa e estruturada.

Mesmo sem praticar cada operação formalmente no dia a dia, entender esse conjunto de conceitos é essencial para quem deseja dominar o modelo relacional e a linguagem SQL.

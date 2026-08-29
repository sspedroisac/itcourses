# Tipos e Classificações de Bancos de Dados

## 1. O que são classificações de bancos de dados

Os bancos de dados podem ser classificados de diferentes formas, de acordo com sua estrutura, finalidade, arquitetura e forma de armazenamento. Essa classificação ajuda a entender qual tipo de solução é mais adequado para cada cenário.

A escolha do tipo certo depende do problema de negócio, do volume de dados e da forma como os dados serão consultados e atualizados.

---

## 2. Classificação por modelo

### 2.1 Bancos relacionais

Os bancos relacionais armazenam os dados em tabelas estruturadas, com linhas e colunas. Eles usam chaves para representar relações entre entidades.

Exemplos:

- MySQL;
- PostgreSQL;
- Oracle;
- SQL Server.

### 2.2 Bancos NoSQL

Os bancos NoSQL foram criados para lidar com estruturas mais flexíveis, grande volume de dados e escalabilidade horizontal. Eles podem armazenar documentos, grafos, pares chave-valor e colunas.

Exemplos:

- MongoDB;
- Redis;
- Cassandra;
- Neo4j.

---

## 3. Classificação por uso

### 3.1 OLTP

**OLTP (Online Transaction Processing)** é usado para processar transações de negócios em tempo real, como vendas, pagamentos e cadastros.

Esse tipo de banco prioriza:

- velocidade;
- integridade;
- alto volume de operações curtas.

### 3.2 OLAP

**OLAP (Online Analytical Processing)** é usado para análise de dados históricos e relatórios. Ele prioriza consultas analíticas e agregações.

---

## 4. Classificação por arquitetura

### 4.1 Monolítico

O banco fica em um único sistema ou servidor, geralmente mais simples de administrar.

### 4.2 Distribuído

Os dados e o processamento são divididos entre vários nós ou servidores para aumentar disponibilidade e escalabilidade.

### 4.3 Cloud

O banco é hospedado em infraestrutura em nuvem, com recursos escaláveis, flexibilidade e gerenciamento mais automatizado.

---

## 5. Classificação por estrutura

### 5.1 Estruturados

Dados organizados em tabelas e esquemas bem definidos.

### 5.2 Semiestruturados

Dados com alguma organização, como JSON, XML ou documentos com campos variáveis.

### 5.3 Não estruturados

Dados sem esquema rígido, como textos, imagens, vídeos e arquivos de áudio.

---

## 6. Importância da classificação

A classificação dos bancos de dados ajuda equipes de desenvolvimento e arquitetura a escolher a solução correta para cada problema. Isso é especialmente importante em sistemas que exigem diferentes níveis de consistência, volume e complexidade.

---

## 7. Resumo

Existem vários tipos de bancos de dados, cada um com características e objetivos distintos. A classificação por modelo, uso, arquitetura e estrutura permite selecionar a solução mais adequada para o contexto do negócio e para as necessidades técnicas da aplicação.

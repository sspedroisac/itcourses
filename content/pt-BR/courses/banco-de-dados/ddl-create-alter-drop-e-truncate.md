# DDL: CREATE, ALTER, DROP e TRUNCATE

## 1. O que é DDL

**DDL (Data Definition Language)** é o conjunto de comandos SQL usado para criar, alterar e remover estruturas do banco de dados.

Essas estruturas incluem:

- tabelas;
- colunas;
- índices;
- views;
- schemas;
- restrições.

---

## 2. CREATE

O comando `CREATE` cria um novo objeto no banco de dados.

Exemplo:

```sql
CREATE TABLE produto (
  id_produto INTEGER PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  preco DECIMAL(10, 2) NOT NULL
);
```

A definição deve considerar tipos de dados, chaves e restrições necessárias.

---

## 3. ALTER

O comando `ALTER` modifica a estrutura de um objeto existente.

Exemplos:

```sql
ALTER TABLE produto ADD COLUMN estoque INTEGER NOT NULL DEFAULT 0;
```

```sql
ALTER TABLE produto RENAME COLUMN nome TO descricao;
```

Alterações em tabelas com muitos dados devem ser planejadas, pois podem bloquear operações ou consumir recursos.

---

## 4. DROP

O comando `DROP` remove um objeto e sua estrutura.

```sql
DROP TABLE produto;
```

Essa operação pode eliminar os dados da tabela e deve ser executada somente quando a remoção for realmente necessária.

---

## 5. TRUNCATE

O comando `TRUNCATE` remove todos os registros de uma tabela, mantendo sua estrutura.

```sql
TRUNCATE TABLE produto;
```

Ele é diferente de `DELETE` porque normalmente não permite filtrar linhas individualmente e pode possuir comportamento específico em cada SGBD.

---

## 6. DDL e migrações

Em aplicações, alterações de estrutura devem ser controladas por migrações versionadas. Cada migration deve representar uma mudança pequena, rastreável e reproduzível.

Exemplos de mudanças:

- criação de tabela;
- inclusão de coluna;
- criação de índice;
- alteração de restrição.

---

## 7. Boas práticas

- Testar alterações antes de aplicá-las em produção;
- Fazer backup quando houver risco de perda;
- Nomear objetos de forma consistente;
- Evitar `DROP` e `TRUNCATE` sem confirmação;
- Registrar mudanças em migrations.

---

## 8. Resumo

Os comandos `CREATE`, `ALTER`, `DROP` e `TRUNCATE` fazem parte da DDL e controlam a estrutura dos bancos relacionais. Seu uso exige planejamento porque mudanças estruturais podem afetar dados, aplicações e usuários.

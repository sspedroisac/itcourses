# Classificação dos Comandos SQL: DDL, DML, DCL e TCL

## 1. O que é SQL

**SQL (Structured Query Language)** é uma linguagem usada para definir estruturas, consultar dados, controlar acessos e gerenciar transações em bancos de dados relacionais.

Embora existam diferenças entre SGBDs, SQL oferece uma base comum para executar operações sobre tabelas, relacionamentos e objetos do banco.

---

## 2. Por que classificar os comandos

A classificação ajuda a compreender a finalidade de cada operação e a aplicar permissões adequadas. Os comandos SQL são normalmente organizados em quatro grupos principais:

- **DDL (Data Definition Language)**: definição da estrutura;
- **DML (Data Manipulation Language)**: manipulação dos dados;
- **DCL (Data Control Language)**: controle de acesso;
- **TCL (Transaction Control Language)**: controle de transações.

---

## 3. DDL

A **DDL** define e altera objetos do banco, como tabelas, índices e views.

Comandos comuns:

- `CREATE`;
- `ALTER`;
- `DROP`;
- `TRUNCATE`.

Exemplo:

```sql
CREATE TABLE cliente (
  id_cliente INTEGER PRIMARY KEY,
  nome VARCHAR(120) NOT NULL
);
```

---

## 4. DML

A **DML** manipula os registros armazenados.

Comandos comuns:

- `SELECT`;
- `INSERT`;
- `UPDATE`;
- `DELETE`.

Exemplo:

```sql
INSERT INTO cliente (id_cliente, nome)
VALUES (1, 'Ana');
```

---

## 5. DCL

A **DCL** controla permissões de usuários e roles.

Comandos principais:

- `GRANT` concede permissões;
- `REVOKE` remove permissões.

Exemplo:

```sql
GRANT SELECT ON cliente TO analista;
```

---

## 6. TCL

A **TCL** controla o resultado de operações agrupadas em transações.

Comandos principais:

- `COMMIT` confirma alterações;
- `ROLLBACK` desfaz alterações;
- `SAVEPOINT` cria um ponto intermediário de retorno.

---

## 7. Cuidados com comandos SQL

Alguns comandos possuem impacto amplo e devem ser executados com atenção. Antes de usar `UPDATE`, `DELETE`, `DROP` ou `TRUNCATE`, é importante validar filtros, permissões e backups disponíveis.

---

## 8. Resumo

DDL, DML, DCL e TCL organizam os comandos SQL de acordo com sua finalidade. Essa classificação facilita o aprendizado, a administração de permissões e o uso seguro da linguagem em sistemas reais.

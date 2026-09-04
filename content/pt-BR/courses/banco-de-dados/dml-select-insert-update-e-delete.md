# DML: SELECT, INSERT, UPDATE e DELETE

## 1. O que é DML

**DML (Data Manipulation Language)** é o conjunto de comandos SQL usado para consultar e modificar os registros armazenados nas tabelas.

Os principais comandos são:

- `SELECT` para consultar;
- `INSERT` para inserir;
- `UPDATE` para atualizar;
- `DELETE` para remover.

---

## 2. SELECT

O comando `SELECT` recupera dados de uma ou mais tabelas.

```sql
SELECT id_cliente, nome
FROM cliente;
```

É recomendável selecionar apenas as colunas necessárias em vez de usar `SELECT *` em aplicações e consultas de produção.

---

## 3. INSERT

O comando `INSERT` adiciona novos registros.

```sql
INSERT INTO cliente (id_cliente, nome, email)
VALUES (1, 'Ana', 'ana@example.com');
```

A quantidade e a ordem das colunas devem corresponder aos valores informados.

---

## 4. UPDATE

O comando `UPDATE` altera registros existentes.

```sql
UPDATE cliente
SET email = 'ana.nova@example.com'
WHERE id_cliente = 1;
```

O `WHERE` é essencial quando apenas alguns registros devem ser alterados. Sem ele, todas as linhas podem ser modificadas.

---

## 5. DELETE

O comando `DELETE` remove registros.

```sql
DELETE FROM cliente
WHERE id_cliente = 1;
```

Assim como no `UPDATE`, o filtro deve ser revisado antes da execução.

---

## 6. DML e transações

Operações de inserção, alteração e remoção podem ser agrupadas em transações. Isso permite confirmar o conjunto de mudanças com `COMMIT` ou desfazê-lo com `ROLLBACK`.

```sql
BEGIN;

UPDATE estoque
SET quantidade = quantidade - 1
WHERE id_produto = 10;

COMMIT;
```

---

## 7. Segurança e desempenho

Aplicações devem usar consultas parametrizadas para evitar SQL Injection. Também é importante criar filtros adequados, validar entradas e analisar o desempenho de consultas frequentes.

---

## 8. Resumo

Os comandos `SELECT`, `INSERT`, `UPDATE` e `DELETE` formam a base da manipulação de dados em SQL. Seu uso correto depende de filtros precisos, transações bem definidas e cuidado com segurança e integridade.

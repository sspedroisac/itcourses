# TCL: COMMIT, ROLLBACK e SAVEPOINT

## 1. O que é TCL

**TCL (Transaction Control Language)** reúne comandos usados para controlar transações no banco de dados.

Uma transação agrupa uma ou mais operações que devem ser tratadas como uma unidade lógica de trabalho.

---

## 2. COMMIT

O comando `COMMIT` confirma as alterações realizadas na transação.

```sql
BEGIN;

INSERT INTO pedido (id_pedido, id_cliente)
VALUES (100, 1);

COMMIT;
```

Depois do `COMMIT`, as alterações normalmente se tornam permanentes e visíveis conforme as regras de isolamento do SGBD.

---

## 3. ROLLBACK

O comando `ROLLBACK` desfaz as alterações realizadas desde o início da transação ou desde o último ponto confirmado.

```sql
BEGIN;

UPDATE conta
SET saldo = saldo - 100
WHERE id_conta = 1;

ROLLBACK;
```

Ele é útil quando ocorre um erro ou quando uma regra de negócio impede a conclusão da operação.

---

## 4. SAVEPOINT

O comando `SAVEPOINT` cria um ponto intermediário dentro da transação.

```sql
BEGIN;

UPDATE pedido
SET status = 'separacao'
WHERE id_pedido = 100;

SAVEPOINT depois_do_status;

UPDATE estoque
SET quantidade = quantidade - 1
WHERE id_produto = 10;

ROLLBACK TO SAVEPOINT depois_do_status;
COMMIT;
```

Nesse exemplo, apenas a operação posterior ao savepoint é desfeita.

---

## 5. Propriedades das transações

O controle transacional apoia as propriedades ACID:

- **atomicidade**: todas as operações são confirmadas ou nenhuma é;
- **consistência**: as regras do banco continuam válidas;
- **isolamento**: transações concorrentes não causam resultados indevidos;
- **durabilidade**: alterações confirmadas permanecem preservadas.

---

## 6. Quando usar transações

Transações são importantes em operações como:

- transferências financeiras;
- criação de pedidos e itens;
- atualização de estoque;
- processamento de pagamentos;
- alterações que envolvem várias tabelas.

Sem transação, uma falha intermediária pode deixar o sistema em estado incompleto.

---

## 7. Cuidados

- Manter transações curtas;
- Confirmar ou desfazer explicitamente quando necessário;
- Evitar esperar por entradas do usuário durante uma transação;
- Monitorar bloqueios e deadlocks;
- Testar cenários de erro e recuperação.

---

## 8. Resumo

`COMMIT`, `ROLLBACK` e `SAVEPOINT` permitem confirmar, desfazer ou controlar alterações dentro de uma transação. Esses comandos são essenciais para manter a consistência e a confiabilidade das operações do banco de dados.

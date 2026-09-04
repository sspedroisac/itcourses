# Transações e Propriedades ACID

## 1. O que é uma transação

Uma **transação** é um conjunto de operações tratado como uma unidade lógica de trabalho. Todas as operações devem ser concluídas corretamente ou o conjunto deve ser desfeito.

Exemplo: uma transferência bancária precisa debitar uma conta e creditar outra. Apenas uma dessas operações não representa um resultado válido.

---

## 2. Atomicidade

A **atomicidade** garante que a transação seja indivisível.

```text
Débito + Crédito
      │
      ├── sucesso: confirma os dois
      └── falha: desfaz os dois
```

---

## 3. Consistência

A **consistência** garante que uma transação leve o banco de um estado válido para outro estado válido.

Constraints, chaves e regras de negócio ajudam a preservar essa propriedade.

---

## 4. Isolamento

O **isolamento** controla como uma transação enxerga alterações feitas por outras transações concorrentes.

Sem isolamento adequado, podem ocorrer leituras sujas, leituras não repetíveis e linhas fantasmas.

---

## 5. Durabilidade

A **durabilidade** garante que alterações confirmadas permaneçam preservadas mesmo após falhas, conforme os mecanismos de recuperação do SGBD.

Logs, arquivos de recuperação e armazenamento persistente contribuem para essa garantia.

---

## 6. Exemplo

```sql
BEGIN;

UPDATE conta SET saldo = saldo - 100 WHERE id_conta = 1;
UPDATE conta SET saldo = saldo + 100 WHERE id_conta = 2;

COMMIT;
```

Se uma das operações falhar, a aplicação deve executar `ROLLBACK`.

---

## 7. Limites das propriedades ACID

ACID não elimina todos os problemas automaticamente. É necessário definir limites de transação, nível de isolamento, tratamento de erros e estratégia de retry.

---

## 8. Resumo

As propriedades ACID tornam as transações confiáveis: atomicidade, consistência, isolamento e durabilidade protegem operações críticas e ajudam o banco a manter um estado correto.

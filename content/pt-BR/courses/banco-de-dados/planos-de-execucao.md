# Planos de Execução

## 1. O que é um plano de execução

Um **plano de execução** descreve como o SGBD pretende executar uma consulta SQL.

Ele pode indicar:

- leitura completa da tabela;
- uso de índice;
- junções;
- ordenações;
- agregações;
- estimativas de custo e quantidade de linhas.

---

## 2. Plano estimado e plano real

Um plano estimado é criado antes da execução, usando estatísticas e informações do schema.

Um plano real registra também o que aconteceu durante a execução, permitindo comparar estimativas com valores observados.

---

## 3. EXPLAIN

Muitos SGBDs oferecem `EXPLAIN` para visualizar o plano.

```sql
EXPLAIN
SELECT *
FROM pedido
WHERE id_cliente = 10;
```

Alguns oferecem opções adicionais para medir tempo e linhas efetivamente processadas.

---

## 4. Operadores comuns

Os planos podem apresentar operadores como:

- table scan;
- index scan;
- index seek;
- nested loop;
- hash join;
- merge join;
- sort;
- aggregate.

Cada operador possui custos e situações de uso diferentes.

---

## 5. Estimativas incorretas

Quando o SGBD estima uma quantidade de linhas muito diferente da real, pode escolher um plano inadequado.

Isso pode acontecer por estatísticas antigas, dados muito desbalanceados ou filtros difíceis de estimar.

---

## 6. Como analisar

Ao analisar um plano, observe:

- maior custo relativo;
- quantidade de linhas;
- leituras físicas e lógicas;
- operações de sort;
- uso ou ausência de índices;
- diferença entre estimado e realizado.

---

## 7. Resumo

Planos de execução mostram como uma consulta será processada. Sua análise é essencial para encontrar gargalos e escolher mudanças de schema, índices ou consultas com base em evidências.

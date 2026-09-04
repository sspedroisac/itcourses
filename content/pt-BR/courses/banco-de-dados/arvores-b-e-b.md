# Árvores B e B+

## 1. O que são árvores B

Árvores B são estruturas de dados balanceadas usadas para organizar índices em bancos de dados.

Elas mantêm os caminhos da raiz até as folhas com profundidade semelhante, reduzindo o número de páginas acessadas durante uma busca.

---

## 2. Estrutura de uma árvore B

Uma árvore B possui nós que podem armazenar várias chaves e referências. Diferentemente de uma árvore binária simples, ela aproveita o armazenamento em páginas e reduz a altura da estrutura.

Operações de inserção e remoção podem dividir ou combinar nós para preservar o balanceamento.

---

## 3. Árvores B+

Nas árvores B+, os valores ou referências aos registros ficam principalmente nas folhas. As folhas podem ser ligadas em sequência, facilitando buscas por intervalo e varreduras ordenadas.

Essa característica torna a árvore B+ muito comum em índices de SGBDs relacionais.

---

## 4. Buscas pontuais

Uma busca por igualdade percorre a árvore desde a raiz até a folha correspondente. O balanceamento ajuda a manter o custo previsível mesmo com grande quantidade de registros.

---

## 5. Buscas por intervalo

Consultas como as seguintes podem se beneficiar das folhas encadeadas:

```sql
SELECT *
FROM pedido
WHERE data_pedido BETWEEN '2026-01-01' AND '2026-01-31';
```

Depois de encontrar o primeiro valor, o banco pode percorrer as folhas seguintes em ordem.

---

## 6. Atualizações

Inserções e exclusões podem causar divisão, fusão ou redistribuição de nós. Essas operações mantêm a estrutura eficiente, mas representam custo de manutenção.

---

## 7. Boas práticas

- Criar índices B-tree para filtros e intervalos quando adequado;
- Analisar cardinalidade e distribuição dos dados;
- Evitar indexar colunas sem uso real;
- Monitorar fragmentação e tamanho do índice.

---

## 8. Resumo

Árvores B e B+ são estruturas balanceadas eficientes para índices. As árvores B+ são especialmente úteis em buscas por igualdade, intervalos e ordenações devido à organização sequencial das folhas.

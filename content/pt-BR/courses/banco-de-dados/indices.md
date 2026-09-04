# Índices

## 1. O que são índices

Um **índice** é uma estrutura auxiliar que permite localizar registros sem percorrer toda a tabela.

Ele funciona de forma semelhante ao índice de um livro: aponta caminhos para encontrar informações específicas com menos esforço.

---

## 2. Exemplo

```sql
CREATE INDEX idx_cliente_email
ON cliente (email);
```

Com esse índice, consultas que filtram por `email` podem evitar uma varredura completa da tabela.

---

## 3. Benefícios

Índices podem melhorar:

- filtros;
- junções;
- ordenações;
- verificações de unicidade;
- buscas por intervalos.

O ganho depende do tamanho da tabela, seletividade e padrão de consultas.

---

## 4. Custos dos índices

Índices ocupam espaço e precisam ser atualizados em inserções, alterações e exclusões. Muitos índices podem tornar operações de escrita mais lentas.

Por isso, um índice deve existir para atender a um padrão de acesso real.

---

## 5. Índices compostos

Um índice pode usar várias colunas:

```sql
CREATE INDEX idx_pedido_cliente_data
ON pedido (id_cliente, data_pedido);
```

A ordem das colunas importa e deve refletir os filtros e ordenações mais frequentes.

---

## 6. Seletividade

A seletividade representa a capacidade de um filtro reduzir o conjunto de resultados. Colunas com muitos valores distintos tendem a ser boas candidatas, embora o padrão da consulta também seja importante.

---

## 7. Boas práticas

- Criar índices a partir de consultas reais;
- Evitar duplicar índices equivalentes;
- Verificar impacto em escritas;
- Usar nomes claros;
- Remover índices sem uso após análise.

---

## 8. Resumo

Índices aceleram buscas, mas possuem custo de armazenamento e manutenção. A boa indexação equilibra velocidade de leitura, desempenho de escrita e simplicidade operacional.

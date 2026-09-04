# Otimização de Consultas

## 1. O que é otimização de consultas

A **otimização de consultas** busca reduzir o tempo, as leituras e os recursos necessários para obter um resultado correto.

Ela envolve a consulta SQL, o modelo de dados, os índices, as estatísticas e a configuração do SGBD.

---

## 2. Começar pela medição

Antes de alterar uma consulta, é necessário medir:

- tempo de resposta;
- quantidade de chamadas;
- leituras;
- volume retornado;
- impacto em CPU e memória.

Sem medição, uma otimização pode apenas trocar um problema por outro.

---

## 3. Filtros eficientes

Filtros devem reduzir o conjunto de dados o mais cedo possível. Também é importante evitar aplicar funções sobre colunas indexadas quando isso impede o uso do índice.

Exemplo preferível:

```sql
WHERE data_pedido >= '2026-01-01'
  AND data_pedido < '2026-02-01'
```

---

## 4. Selecionar apenas o necessário

Evite `SELECT *` quando a aplicação precisa de poucas colunas. Retornar dados desnecessários aumenta leitura, rede, memória e processamento.

Paginação também deve ser planejada para grandes volumes.

---

## 5. Junções e subconsultas

Junções devem usar colunas relacionadas e possuir índices adequados quando necessário. Subconsultas, CTEs e views devem ser analisadas pelo plano, pois a forma mais legível nem sempre é a mais eficiente.

---

## 6. Índices

Um índice pode acelerar uma consulta, mas também aumenta custo de escrita. A coluna, a ordem e a combinação dos índices devem refletir consultas reais.

---

## 7. Evitar otimizações frágeis

Não se deve depender de alterações acidentais no plano ou de dicas específicas sem entender o comportamento do SGBD. Consultas devem continuar corretas e previsíveis após crescimento dos dados.

---

## 8. Processo recomendado

1. reproduzir o problema;
2. registrar uma medida inicial;
3. analisar o plano;
4. propor uma mudança;
5. testar com dados representativos;
6. comparar resultados;
7. monitorar em produção.

---

## 9. Resumo

Otimizar consultas significa melhorar o uso de recursos sem alterar o resultado. A abordagem mais segura combina medição, análise de plano, índices adequados e validação com dados próximos da realidade.

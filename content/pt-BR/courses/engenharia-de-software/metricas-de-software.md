# Métricas de Software

## 1. Introdução

As **métricas de software** são medidas utilizadas para compreender aspectos de um produto, processo ou projeto.

Elas ajudam a identificar tendências, acompanhar resultados e apoiar decisões. Uma métrica não substitui a análise humana: ela fornece evidências para uma conversa melhor.

---

## 2. O que pode ser medido

As métricas podem observar diferentes dimensões:

- Produto: código, desempenho, defeitos e complexidade;
- Processo: tempo de entrega, fluxo de trabalho e retrabalho;
- Projeto: prazo, esforço, escopo e riscos;
- Operação: disponibilidade, incidentes e tempo de recuperação.

Cada medida deve estar relacionada a uma pergunta real do negócio ou da equipe.

---

## 3. Métrica, medida e indicador

Uma **medida** é um valor obtido diretamente, como a quantidade de defeitos encontrados.

Uma **métrica** relaciona medidas ou define uma forma consistente de observação, como defeitos por versão.

Um **indicador** interpreta dados para apoiar uma decisão, como identificar que a taxa de falhas aumentou depois de uma mudança.

---

## 4. Boas métricas

Uma métrica útil deve ter:

- Objetivo claro;
- Definição conhecida pela equipe;
- Fonte de dados confiável;
- Periodicidade adequada;
- Contexto para interpretação;
- Relação com uma decisão possível.

Medir apenas porque uma ferramenta permite não garante que a informação será útil.

---

## 5. Métricas de qualidade do produto

Algumas métricas podem ajudar a acompanhar a qualidade técnica:

- Quantidade e severidade de defeitos;
- Taxa de falhas em produção;
- Cobertura de testes;
- Tempo médio de recuperação;
- Complexidade do código;
- Número de vulnerabilidades identificadas;
- Tempo de resposta.

Esses valores devem ser analisados em conjunto. Uma cobertura alta, por exemplo, não prova que os testes verificam os cenários mais importantes.

---

## 6. Métricas de fluxo

Métricas de fluxo ajudam a observar como o trabalho atravessa o processo de desenvolvimento.

Exemplos:

- Lead time: tempo entre a solicitação e a entrega;
- Cycle time: tempo gasto desde o início do trabalho até sua conclusão;
- Throughput: quantidade de itens concluídos em um período;
- Trabalho em progresso: itens iniciados e ainda não concluídos;
- Taxa de retrabalho: proporção de trabalho que precisou ser refeito.

Essas métricas podem revelar filas, gargalos e excesso de trabalho em andamento.

---

## 7. Métricas de projeto

Em um projeto, também podem ser acompanhados esforço, prazo, riscos, custos e evolução do escopo.

Comparar estimativas com resultados pode ajudar a melhorar o planejamento, mas não deve ser usado para punir pessoas. Estimativas são previsões sob incerteza, não promessas de precisão absoluta.

---

## 8. Interpretar com contexto

Uma métrica isolada pode levar a conclusões erradas.

Por exemplo, o aumento no número de defeitos registrados pode significar piora do produto, mas também pode indicar que a equipe passou a investigar e registrar problemas com mais rigor.

É necessário observar período, escopo, mudanças no processo e qualidade dos dados.

```text
Dados
  │
  ▼
Contexto
  │
  ▼
Interpretação
  │
  ▼
Decisão
```

---

## 9. Riscos do uso inadequado

Quando uma métrica se torna uma meta rígida, as pessoas podem otimizar o número em vez do resultado real.

Exemplos de comportamentos indesejados:

- Dividir tarefas artificialmente para aumentar a contagem;
- Reduzir a severidade de defeitos para melhorar indicadores;
- Escrever testes superficiais para aumentar cobertura;
- Evitar trabalhos importantes que não aparecem no relatório.

Métricas devem apoiar aprendizado e melhoria, não criar incentivos para distorcer o trabalho.

---

## 10. Definir uma métrica

Antes de adotar uma métrica, responda:

1. Qual pergunta queremos responder?
2. Qual decisão poderá ser tomada?
3. Como o valor será calculado?
4. De onde virão os dados?
5. Com que frequência será analisado?
6. Quais limitações e interpretações alternativas existem?

Esse cuidado evita painéis cheios de números que não orientam nenhuma ação.

---

## 11. Resumo

| Conceito   | Descrição                                        |
| ---------- | ------------------------------------------------ |
| Medida     | Valor obtido diretamente                         |
| Métrica    | Forma definida de relacionar ou observar medidas |
| Indicador  | Interpretação que apoia uma decisão              |
| Lead time  | Tempo entre solicitação e entrega                |
| Cycle time | Tempo desde o início até a conclusão             |
| Throughput | Quantidade concluída por período                 |

---

## 12. Boas práticas

- Começar por perguntas e decisões reais;
- Documentar definições e fontes dos dados;
- Analisar tendências, não apenas valores isolados;
- Combinar métricas quantitativas e qualitativas;
- Revisar periodicamente se a métrica continua útil;
- Evitar usar indicadores para avaliar pessoas individualmente;
- Tratar métricas como apoio ao aprendizado.

---

## 13. Conclusão

Métricas de software ajudam equipes a substituir impressões isoladas por evidências, desde que sejam interpretadas com contexto.

Uma boa métrica torna uma pergunta mais clara e ajuda a escolher uma ação. Um grande volume de números, por si só, não melhora o software.

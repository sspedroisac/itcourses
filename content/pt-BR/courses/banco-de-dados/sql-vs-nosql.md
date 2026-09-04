# SQL vs. NoSQL

## 1. Comparação inicial

SQL e NoSQL representam famílias de soluções com características diferentes. A escolha deve partir do domínio, das garantias e dos padrões de acesso, e não apenas de preferência tecnológica.

---

## 2. Modelo de dados

Bancos SQL geralmente usam tabelas, relações e schema estruturado. Bancos NoSQL podem usar documentos, pares chave-valor, colunas ou grafos.

SQL favorece relações explícitas; NoSQL costuma favorecer flexibilidade e modelos específicos de acesso.

---

## 3. Consistência e transações

Bancos relacionais tradicionalmente oferecem transações fortes e constraints abrangentes. Bancos NoSQL podem oferecer diferentes garantias, inclusive transações limitadas ao documento ou partição.

A comparação precisa considerar o produto específico.

---

## 4. Escalabilidade

Bancos relacionais podem escalar verticalmente e também horizontalmente em algumas arquiteturas. Muitos bancos NoSQL são projetados desde o início para distribuição horizontal.

Escalabilidade não depende apenas do tipo, mas também de modelagem e operação.

---

## 5. Consultas

SQL é adequado para filtros, agregações e junções estruturadas. NoSQL pode ser mais eficiente quando o padrão de consulta é conhecido e alinhado ao modelo escolhido.

---

## 6. Critérios de escolha

Considere:

- consistência exigida;
- formato dos dados;
- volume e velocidade;
- complexidade das consultas;
- maturidade da equipe;
- custo operacional;
- necessidade de distribuição.

---

## 7. Uso combinado

Uma arquitetura pode usar mais de um banco, desde que as responsabilidades sejam claras. Por exemplo, um relacional pode ser fonte transacional e um chave-valor pode servir como cache.

---

## 8. Resumo

SQL e NoSQL possuem forças diferentes. A decisão correta surge da análise do problema, dos acessos, da consistência, da escala e da capacidade operacional da equipe.

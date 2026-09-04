# Introdução aos Bancos NoSQL

## 1. O que são bancos NoSQL

**NoSQL** é um termo usado para descrever bancos de dados que não dependem exclusivamente do modelo relacional e de tabelas com schema rígido.

Esses bancos foram desenvolvidos para atender cenários com grande volume, alta velocidade, estrutura flexível ou distribuição entre vários nós.

---

## 2. Motivação

Bancos relacionais continuam sendo excelentes para muitos sistemas. NoSQL não é uma substituição universal, mas uma alternativa para necessidades específicas.

Entre as motivações estão:

- crescimento horizontal;
- dados sem estrutura fixa;
- baixa latência;
- alto volume de escrita;
- disponibilidade distribuída;
- modelos de acesso especializados.

---

## 3. Principais famílias

As principais famílias são:

- documentos;
- chave-valor;
- colunas largas;
- grafos;
- séries temporais.

Cada família organiza os dados de forma diferente e deve ser escolhida a partir dos acessos esperados.

---

## 4. Modelagem orientada ao acesso

Em muitos bancos NoSQL, o modelo é desenhado a partir das consultas mais importantes. Isso pode levar à duplicação controlada e à desnormalização para reduzir junções e melhorar latência.

---

## 5. Consistência e distribuição

Bancos NoSQL frequentemente permitem escolher entre diferentes níveis de consistência, disponibilidade e custo operacional.

A decisão deve considerar o impacto de dados temporariamente divergentes.

---

## 6. Boas práticas

- Definir padrões de acesso antes do schema;
- Escolher o modelo adequado ao domínio;
- Medir latência e escalabilidade;
- Documentar garantias de consistência;
- Não usar NoSQL apenas por tendência.

---

## 7. Resumo

Bancos NoSQL oferecem modelos alternativos para cenários que exigem flexibilidade, escala ou distribuição. A escolha deve ser orientada pelo domínio, pelo padrão de acesso e pelas garantias necessárias.

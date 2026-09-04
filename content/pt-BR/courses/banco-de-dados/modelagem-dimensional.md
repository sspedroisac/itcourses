# Modelagem Dimensional

## 1. O que é modelagem dimensional

A **modelagem dimensional** organiza dados para facilitar consultas analíticas, agregações e criação de relatórios.

Ela separa eventos mensuráveis de contextos usados para analisar esses eventos.

---

## 2. Fatos e dimensões

- **tabela fato**: registra eventos e medidas;
- **dimensão**: descreve o contexto do evento.

Em vendas, a fato pode guardar quantidade e valor, enquanto dimensões descrevem produto, cliente, loja e tempo.

---

## 3. Granularidade

A granularidade define o que exatamente representa uma linha da tabela fato.

Exemplo:

- uma linha por item de pedido;
- uma linha por pedido;
- uma linha por venda diária.

A granularidade deve ser definida antes das medidas.

---

## 4. Medidas

Medidas podem ser:

- aditivas, somáveis em todas as dimensões;
- semi-aditivas, somáveis apenas em algumas dimensões;
- não aditivas, como percentuais e médias.

---

## 5. Dimensões conformadas

Uma dimensão conformada possui definição e significado consistentes em diferentes Data Marts. A dimensão tempo, por exemplo, deve usar os mesmos períodos em relatórios de vendas e finanças.

---

## 6. Boas práticas

- Definir granularidade explicitamente;
- Usar chaves substitutas quando necessário;
- Documentar medidas;
- Evitar misturar granularidades;
- Validar o modelo com usuários analíticos.

---

## 7. Resumo

Modelagem dimensional organiza fatos, medidas e dimensões para tornar análises mais simples, rápidas e consistentes. Granularidade e definições de negócio são decisões centrais do modelo.

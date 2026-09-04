# OLTP e OLAP

## 1. O que são OLTP e OLAP

**OLTP (Online Transaction Processing)** e **OLAP (Online Analytical Processing)** representam necessidades diferentes de processamento de dados.

OLTP é voltado para operações do dia a dia. OLAP é voltado para análise, relatórios e tomada de decisão.

---

## 2. OLTP

Sistemas OLTP processam transações frequentes e geralmente curtas, como:

- cadastro de clientes;
- vendas;
- pagamentos;
- reservas;
- movimentações de estoque.

Eles priorizam consistência, baixa latência e integridade.

---

## 3. OLAP

Sistemas OLAP executam consultas analíticas sobre grandes volumes de dados históricos.

Exemplos:

- vendas por região;
- evolução mensal da receita;
- comportamento de clientes;
- indicadores de operação;
- análise de tendências.

---

## 4. Diferenças principais

| Característica | OLTP | OLAP |
| --- | --- | --- |
| Objetivo | Operações | Análises |
| Dados | Atuais e detalhados | Históricos e agregados |
| Consultas | Curtas e frequentes | Complexas e extensas |
| Modelo | Normalizado | Dimensional |
| Prioridade | Consistência e latência | Leitura e análise |

---

## 5. Integração

Dados de sistemas OLTP podem ser extraídos e transformados para alimentar ambientes OLAP. Essa separação evita que relatórios pesados afetem as transações do negócio.

---

## 6. Boas práticas

- Separar cargas transacionais e analíticas;
- Definir indicadores com o negócio;
- Controlar atraso entre origem e análise;
- Monitorar impacto das consultas;
- Documentar a origem dos dados.

---

## 7. Resumo

OLTP atende operações transacionais; OLAP atende análises históricas. A separação entre os dois permite preservar a performance das aplicações e oferecer informações úteis para decisões.

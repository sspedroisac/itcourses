# Estatísticas e Custo de Consultas

## 1. O que são estatísticas

**Estatísticas** são informações usadas pelo otimizador para estimar a distribuição dos dados e escolher um plano de execução.

Elas podem incluir quantidade de linhas, valores distintos, distribuição de frequências e seletividade de colunas.

---

## 2. Estimativa de cardinalidade

A cardinalidade representa a quantidade esperada de linhas em cada etapa da consulta. O otimizador usa essa estimativa para escolher entre varreduras, índices e algoritmos de junção.

Uma estimativa errada pode produzir um plano caro.

---

## 3. Custo estimado

O custo é uma medida interna usada para comparar alternativas de execução. Ele pode considerar leituras, CPU, ordenação, memória e operações de junção.

Custo estimado não é necessariamente tempo real, mas é um indicador importante.

---

## 4. Estatísticas desatualizadas

Quando os dados mudam muito, estatísticas antigas deixam de representar a realidade. Isso pode acontecer após:

- carga inicial de dados;
- grandes exclusões;
- alterações na distribuição;
- crescimento significativo da tabela.

Atualizar estatísticas pode permitir que o otimizador escolha um plano melhor.

---

## 5. Distribuição desigual

Uma coluna pode possuir poucos valores muito frequentes e muitos valores raros. Essa distribuição desigual dificulta estimativas baseadas apenas em médias.

Histogramas e amostragem ajudam o SGBD a representar melhor essa realidade.

---

## 6. Analisando o problema

Compare no plano:

- linhas estimadas;
- linhas reais;
- custo de cada operador;
- uso de índices;
- operações de memória e disco.

Grandes diferenças entre estimado e real são sinais para investigar estatísticas, filtros e parâmetros.

---

## 7. Boas práticas

- Atualizar estatísticas conforme a política do SGBD;
- Monitorar consultas regressivas;
- Usar dados representativos em testes;
- Evitar conclusões baseadas em uma única execução;
- Registrar mudanças e seus efeitos.

---

## 8. Resumo

Estatísticas orientam o otimizador na escolha de planos e na estimativa de custos. Mantê-las adequadas e comparar estimativas com resultados reais é essencial para preservar a performance das consultas.

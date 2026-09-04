# Bancos de Séries Temporais

## 1. O que são séries temporais

Uma **série temporal** é uma sequência de valores associados a momentos no tempo.

Exemplos incluem temperatura, métricas de aplicação, preços, leituras de sensores e eventos de infraestrutura.

---

## 2. Características

Séries temporais normalmente possuem:

- timestamp;
- valor observado;
- tags ou dimensões;
- alta taxa de inserção;
- consultas por intervalo de tempo.

---

## 3. Consultas comuns

As operações mais frequentes incluem:

- buscar valores em um período;
- calcular média, máximo e mínimo;
- agrupar por minuto, hora ou dia;
- comparar janelas temporais;
- detectar ausência ou anomalia.

---

## 4. Retenção e downsampling

Dados antigos podem ser agregados ou removidos conforme uma política de retenção. **Downsampling** reduz a resolução temporal, mantendo tendências com menos espaço.

---

## 5. Alta ingestão

O armazenamento deve ser otimizado para muitas escritas sequenciais. Particionamento por tempo e compressão podem reduzir custos.

---

## 6. Casos de uso

- monitoramento de aplicações;
- IoT;
- energia;
- finanças;
- observabilidade;
- telemetria industrial.

---

## 7. Boas práticas

- Padronizar timezone;
- Definir precisão e unidade;
- Evitar cardinalidade excessiva de tags;
- Planejar retenção;
- Monitorar atrasos de ingestão.

---

## 8. Resumo

Bancos de séries temporais são especializados em dados ordenados no tempo. Seu valor está em ingestão eficiente, agregação temporal, retenção e análise de tendências.

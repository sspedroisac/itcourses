# Monitoramento e Performance

## 1. O que é monitoramento

**Monitoramento** é a coleta e análise contínua de sinais sobre o estado do banco de dados.

Ele permite identificar degradação, falhas, saturação de recursos e comportamentos anormais antes que afetem muitos usuários.

---

## 2. Métricas importantes

É importante acompanhar:

- latência das consultas;
- taxa de erros;
- uso de CPU e memória;
- leituras e escritas;
- conexões abertas;
- locks e deadlocks;
- espaço em disco;
- atraso de replicação.

---

## 3. Consultas lentas

Logs de consultas lentas ajudam a encontrar operações que precisam de investigação. A análise deve considerar frequência, impacto e plano de execução.

Uma consulta lenta executada milhares de vezes pode ser mais importante que uma consulta longa executada raramente.

---

## 4. Capacidade

O monitoramento deve observar tendências de crescimento. Discos, conexões, memória e capacidade de leitura precisam ser planejados antes de atingir o limite.

---

## 5. Alertas

Alertas devem possuir limites acionáveis. Alertas excessivos geram fadiga e podem fazer incidentes importantes serem ignorados.

Cada alerta deve indicar impacto, prioridade e próximo passo possível.

---

## 6. Performance de consultas

A investigação pode incluir:

- plano de execução;
- estatísticas;
- índices;
- cardinalidade;
- bloqueios;
- volume retornado;
- chamadas repetidas.

---

## 7. Observabilidade

Além de métricas, logs e traces ajudam a conectar uma requisição da aplicação às consultas executadas no banco.

Essa correlação facilita identificar se o problema está no código, na rede ou no SGBD.

---

## 8. Boas práticas

- Definir indicadores de serviço;
- Monitorar tendências;
- Testar alertas;
- Registrar planos relevantes;
- Evitar expor dados sensíveis nos logs;
- Revisar capacidade periodicamente.

---

## 9. Resumo

Monitoramento e performance exigem observação contínua de consultas, recursos, bloqueios, capacidade e disponibilidade. Métricas úteis permitem agir antes que pequenas degradações se tornem incidentes.

# ETL e ELT

## 1. O que são ETL e ELT

**ETL (Extract, Transform, Load)** extrai dados, transforma-os fora do destino e depois carrega o resultado.

**ELT (Extract, Load, Transform)** carrega os dados primeiro e realiza transformações no ambiente de destino.

---

## 2. Extração

A extração coleta dados de fontes como:

- bancos relacionais;
- APIs;
- arquivos;
- eventos;
- sistemas legados.

A carga deve considerar limites da fonte, paginação, alterações e falhas temporárias.

---

## 3. Transformação

Transformações podem incluir:

- padronização de nomes;
- conversão de tipos;
- tratamento de nulos;
- deduplicação;
- enriquecimento;
- aplicação de regras de negócio.

---

## 4. Carregamento

O carregamento pode ser completo, incremental ou baseado em eventos. Processos incrementais reduzem custo, mas exigem controle de alterações e reprocessamento.

---

## 5. ETL e ELT

ETL oferece maior controle antes do destino. ELT aproveita a capacidade do ambiente analítico para manter dados brutos e transformar diferentes visões conforme a necessidade.

A escolha depende de custo, governança, volume e tecnologia disponível.

---

## 6. Idempotência e reprocessamento

Um pipeline idempotente pode ser executado novamente sem duplicar ou corromper resultados. Isso é essencial para recuperação de falhas e correção de transformações.

---

## 7. Boas práticas

- Validar contratos de dados;
- Controlar checkpoints;
- Registrar linhagem;
- Monitorar atrasos e falhas;
- Separar dados brutos e tratados;
- Testar transformações.

---

## 8. Resumo

ETL transforma antes de carregar; ELT carrega antes de transformar. Ambos dependem de pipelines rastreáveis, idempotentes e capazes de lidar com mudanças e falhas.

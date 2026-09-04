# Níveis de Isolamento

## 1. O que são níveis de isolamento

Os **níveis de isolamento** definem quanto uma transação fica protegida dos efeitos de outras transações concorrentes.

Eles representam um equilíbrio entre consistência, bloqueios e desempenho.

---

## 2. Read Uncommitted

Permite que uma transação leia alterações ainda não confirmadas por outra.

Vantagem:

- maior concorrência.

Risco:

- ocorrência de leituras sujas.

É pouco indicado para operações que exigem precisão.

---

## 3. Read Committed

Permite ler apenas dados confirmados no momento de cada consulta.

Evita leituras sujas, mas a mesma consulta pode retornar resultados diferentes se outra transação confirmar alterações entre duas leituras.

---

## 4. Repeatable Read

Garante que linhas já lidas pela transação não mudem de forma invisível durante sua execução, conforme a implementação do SGBD.

Pode reduzir leituras não repetíveis, mas ainda exige atenção a leituras fantasmas em alguns bancos.

---

## 5. Serializable

É o nível mais forte. O resultado deve ser equivalente a uma execução serial das transações.

Ele oferece maior proteção, mas pode causar mais bloqueios, esperas e conflitos.

---

## 6. Snapshot e MVCC

Alguns SGBDs utilizam versionamento ou **MVCC (Multi-Version Concurrency Control)**. Nesse modelo, leitores podem acessar versões consistentes sem bloquear todos os escritores.

O comportamento exato depende do SGBD e da configuração usada.

---

## 7. Escolha do nível

A escolha deve considerar:

- criticidade da operação;
- tolerância a leituras inconsistentes;
- duração das transações;
- volume de concorrência;
- impacto de bloqueios.

---

## 8. Boas práticas

- Usar o menor nível que atenda à regra de negócio;
- Documentar decisões de isolamento;
- Testar concorrência em ambiente semelhante à produção;
- Monitorar esperas e deadlocks;
- Não confundir isolamento com validação de regras.

---

## 9. Resumo

Os níveis de isolamento determinam como transações concorrentes interagem. Quanto maior o isolamento, maior tende a ser a proteção contra anomalias, mas também podem aumentar os custos de concorrência.

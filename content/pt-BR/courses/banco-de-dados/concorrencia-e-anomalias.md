# Concorrência e Anomalias

## 1. O que é concorrência

**Concorrência** ocorre quando duas ou mais transações são executadas em períodos sobrepostos e acessam dados relacionados.

Ela é necessária para que muitos usuários utilizem o sistema ao mesmo tempo, mas exige controle para evitar resultados incorretos.

---

## 2. Perda de atualização

A **perda de atualização** acontece quando uma transação sobrescreve uma alteração realizada por outra transação.

Exemplo:

```text
T1 lê saldo = 100
T2 lê saldo = 100
T1 grava saldo = 80
T2 grava saldo = 50
```

A alteração da T1 foi perdida.

---

## 3. Leitura suja

Uma **leitura suja** acontece quando uma transação lê dados alterados por outra transação que ainda não realizou `COMMIT`.

Se a segunda transação for revertida, a primeira terá usado um valor que nunca foi confirmado.

---

## 4. Leitura não repetível

A leitura não repetível ocorre quando a mesma consulta retorna valores diferentes dentro da mesma transação porque outra transação alterou ou removeu o registro entre as leituras.

---

## 5. Leitura fantasma

Uma **leitura fantasma** acontece quando uma consulta repetida encontra novas linhas ou deixa de encontrar linhas devido a inserções ou exclusões confirmadas por outra transação.

---

## 6. Controle pelo SGBD

O SGBD pode controlar essas anomalias por meio de:

- locks;
- níveis de isolamento;
- versionamento;
- controle de concorrência multiversão;
- serialização de operações.

---

## 7. Trade-offs

Maior isolamento tende a oferecer mais segurança lógica, mas pode reduzir concorrência e aumentar bloqueios. Menor isolamento pode melhorar performance, porém expõe a aplicação a mais anomalias.

---

## 8. Boas práticas

- Definir o nível de isolamento adequado;
- Manter transações curtas;
- Atualizar dados com filtros precisos;
- Monitorar bloqueios;
- Testar cenários concorrentes.

---

## 9. Resumo

A concorrência permite atender muitos usuários simultaneamente, mas pode causar anomalias de leitura e atualização. O controle adequado combina transações, isolamento, locks e estratégias de acesso.

# Estados e Operações de uma Transação

## 1. Ciclo de vida de uma transação

Uma transação passa por diferentes estados desde seu início até sua confirmação ou reversão. Conhecer esse ciclo ajuda a entender como o SGBD controla operações e falhas.

Os principais estados são:

- ativa;
- parcialmente confirmada;
- confirmada;
- com falha;
- abortada.

---

## 2. Estado ativo

A transação está **ativa** enquanto suas operações estão sendo executadas.

Nesse momento, ela pode realizar leituras, inserções, alterações e exclusões, respeitando as regras do banco.

---

## 3. Estado parcialmente confirmado

Após a última instrução ser executada, a transação pode estar parcialmente confirmada. Ela ainda depende da gravação efetiva dos dados e dos registros de recuperação.

Uma falha nessa etapa pode impedir a confirmação definitiva.

---

## 4. Estado confirmado

A transação entra no estado **confirmado** depois que o `COMMIT` é concluído com sucesso.

Suas alterações passam a fazer parte do estado persistente do banco.

---

## 5. Estado com falha

Uma transação fica em estado de falha quando não pode continuar, por motivos como:

- violação de constraint;
- erro de conexão;
- deadlock;
- falta de espaço;
- falha de hardware;
- erro lógico da aplicação.

---

## 6. Estado abortado

Uma transação é **abortada** quando suas alterações são desfeitas com `ROLLBACK` ou por ação automática do SGBD.

Depois disso, ela pode ser reiniciada ou encerrada, conforme a estratégia da aplicação.

---

## 7. Operações de controle

As operações mais comuns são:

- `BEGIN` ou início implícito;
- leitura e escrita de dados;
- `COMMIT`;
- `ROLLBACK`;
- `SAVEPOINT`.

---

## 8. Boas práticas

- Tratar erros explicitamente;
- Não deixar transações abertas sem necessidade;
- Registrar falhas relevantes;
- Repetir operações somente quando for seguro;
- Garantir idempotência em processos distribuídos.

---

## 9. Resumo

Os estados de uma transação representam sua evolução desde a execução até a confirmação ou reversão. Entender esse ciclo facilita o desenvolvimento de aplicações que lidam corretamente com falhas e concorrência.

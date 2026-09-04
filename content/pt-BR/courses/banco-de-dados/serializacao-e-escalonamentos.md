# Serialização e Escalonamentos

## 1. O que é um escalonamento

Um **escalonamento** é a ordem em que as operações de várias transações são executadas pelo SGBD.

Quando transações são intercaladas, o banco precisa garantir que o resultado final seja correto e equivalente a alguma execução válida.

---

## 2. Escalonamento serial

Em um escalonamento serial, uma transação termina antes que a próxima comece.

```text
T1: leitura, escrita, commit
T2: leitura, escrita, commit
```

Esse modelo é simples e seguro, mas pode limitar o aproveitamento dos recursos.

---

## 3. Escalonamento não serial

Em um escalonamento não serial, operações de diferentes transações são intercaladas.

```text
T1: leitura
T2: leitura
T1: escrita
T2: escrita
```

Ele aumenta a concorrência, mas precisa de mecanismos para preservar a consistência.

---

## 4. Serializabilidade

Um escalonamento é **serializável** quando seu resultado é equivalente ao resultado de algum escalonamento serial.

A serializabilidade permite combinar segurança lógica com execução concorrente.

---

## 5. Conflitos

Duas operações entram em conflito quando:

- pertencem a transações diferentes;
- acessam o mesmo item de dados;
- pelo menos uma delas é uma escrita.

Conflitos entre leitura e escrita ou entre duas escritas podem alterar o resultado final.

---

## 6. Grafo de precedência

Um grafo de precedência representa dependências entre transações. Se o grafo possui ciclo, o escalonamento não é conflito-serializável.

Essa análise ajuda a estudar se a ordem das operações preserva um resultado equivalente a uma execução serial.

---

## 7. Recuperabilidade

Além de ser serializável, um escalonamento deve permitir recuperação segura. Uma transação não deve confirmar dados baseados em alterações de outra transação que ainda pode ser revertida.

---

## 8. Resumo

Escalonamentos representam a ordem das operações concorrentes. A serializabilidade garante que a execução intercalada produza um resultado equivalente a uma sequência serial correta.

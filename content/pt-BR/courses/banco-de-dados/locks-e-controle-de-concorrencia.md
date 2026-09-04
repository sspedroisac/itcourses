# Locks e Controle de Concorrência

## 1. O que são locks

**Locks** são mecanismos usados pelo SGBD para controlar o acesso concorrente a dados compartilhados.

Eles coordenam leituras e escritas para evitar que transações incompatíveis alterem o mesmo dado de maneira incorreta.

---

## 2. Lock compartilhado

Um **lock compartilhado** permite leitura por várias transações, mas impede uma escrita incompatível enquanto estiver ativo.

É adequado para situações em que várias transações precisam consultar o mesmo dado sem alterá-lo.

---

## 3. Lock exclusivo

Um **lock exclusivo** é usado quando uma transação pretende alterar um dado. Enquanto ele estiver ativo, operações conflitantes precisam aguardar ou falhar.

A duração do lock depende do SGBD, do nível de isolamento e do tipo de operação.

---

## 4. Granularidade

Locks podem ser aplicados em diferentes níveis:

- linha;
- página ou bloco;
- tabela;
- banco de dados.

Locks menores aumentam a concorrência, mas podem exigir mais gerenciamento. Locks maiores são simples, porém bloqueiam mais operações.

---

## 5. Controle otimista e pessimista

No controle **pessimista**, a aplicação assume que conflitos podem ocorrer e bloqueia o recurso antecipadamente.

No controle **otimista**, a aplicação permite o trabalho concorrente e verifica conflitos no momento da confirmação, usando versão, timestamp ou condição de atualização.

---

## 6. Boas práticas

- Manter transações curtas;
- Acessar tabelas e linhas em ordem consistente;
- Criar índices que reduzam a quantidade de linhas bloqueadas;
- Evitar operações manuais dentro de transações;
- Monitorar bloqueios persistentes.

---

## 7. Exemplo de atualização condicional

```sql
UPDATE estoque
SET quantidade = quantidade - 1,
    versao = versao + 1
WHERE id_produto = 10
  AND quantidade > 0
  AND versao = 4;
```

A aplicação pode verificar se uma linha foi atualizada e identificar conflito ou estoque insuficiente.

---

## 8. Resumo

Locks e mecanismos de controle de concorrência coordenam o acesso simultâneo aos dados. A escolha entre estratégias pessimistas e otimistas deve considerar o padrão de uso, o risco de conflito e a necessidade de desempenho.

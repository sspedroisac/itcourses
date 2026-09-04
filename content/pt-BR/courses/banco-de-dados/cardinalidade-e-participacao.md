# Cardinalidade e Participação

## 1. O que é cardinalidade

A **cardinalidade** define quantas ocorrências de uma entidade podem estar associadas a ocorrências de outra entidade.

Ela ajuda a responder perguntas como:

- Um cliente pode fazer quantos pedidos?
- Um pedido pertence a quantos clientes?
- Um curso pode possuir quantos alunos?

---

## 2. Principais cardinalidades

### 2.1 Um para um

Em uma relação **1:1**, cada ocorrência de uma entidade se relaciona com no máximo uma ocorrência da outra.

Exemplo:

```text
Pessoa ─── Documento de identificação
```

Dependendo da regra, cada pessoa pode possuir um documento principal e cada documento pertence a uma pessoa.

### 2.2 Um para muitos

Em uma relação **1:N**, uma ocorrência de uma entidade pode se relacionar com várias ocorrências da outra.

Exemplo:

```text
Cliente 1 ─── N Pedido
```

Um cliente pode realizar muitos pedidos, mas cada pedido pertence a um cliente.

### 2.3 Muitos para muitos

Em uma relação **N:M**, várias ocorrências de uma entidade se relacionam com várias ocorrências da outra.

Exemplo:

```text
Pedido N ─── M Produto
```

Um pedido pode conter vários produtos e um produto pode aparecer em vários pedidos.

---

## 3. Participação

A **participação** define se a presença de uma entidade no relacionamento é obrigatória ou opcional.

### 3.1 Participação total

Todas as ocorrências devem participar do relacionamento.

Exemplo: todo ItemPedido precisa pertencer a um Pedido.

### 3.2 Participação parcial

Uma ocorrência pode existir sem participar do relacionamento.

Exemplo: um cliente pode ser cadastrado antes de realizar seu primeiro pedido.

---

## 4. Notação mínima e máxima

A cardinalidade pode ser descrita por valores mínimo e máximo:

- `0..1`: opcional e no máximo uma ocorrência;
- `1..1`: obrigatória e exatamente uma ocorrência;
- `0..N`: opcional e várias ocorrências possíveis;
- `1..N`: obrigatória e pelo menos uma ocorrência.

Essa notação torna as regras mais precisas.

---

## 5. Impacto no modelo relacional

A cardinalidade influencia diretamente a implementação:

- relações 1:N usam chave estrangeira no lado N;
- relações N:M usam tabela associativa;
- relações 1:1 podem compartilhar chave ou usar uma chave estrangeira única.

---

## 6. Boas práticas

- Validar regras com o negócio;
- Separar cardinalidade de participação;
- Usar exemplos reais para confirmar as regras;
- Evitar assumir que toda relação é obrigatória;
- Documentar casos excepcionais.

---

## 7. Resumo

Cardinalidade define a quantidade de ocorrências envolvidas em um relacionamento, enquanto participação define se essa associação é obrigatória ou opcional. Juntas, elas garantem que o modelo represente corretamente as regras do domínio.

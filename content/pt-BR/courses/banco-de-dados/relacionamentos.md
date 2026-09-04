# Relacionamentos

## 1. O que são relacionamentos

Um **relacionamento** representa uma associação entre duas ou mais entidades. Ele mostra como os elementos do domínio se conectam e quais regras existem entre eles.

Em um sistema de vendas:

- um Cliente realiza um Pedido;
- um Pedido contém Produtos;
- um Pedido possui um Pagamento.

Essas associações ajudam a representar o comportamento real do negócio no banco de dados.

---

## 2. Grau de um relacionamento

O grau indica a quantidade de entidades participantes do relacionamento.

### 2.1 Relacionamento unário

Relaciona ocorrências da mesma entidade. Um funcionário, por exemplo, pode supervisionar outro funcionário.

### 2.2 Relacionamento binário

Envolve duas entidades. Cliente realiza Pedido é um exemplo comum.

### 2.3 Relacionamento ternário

Envolve três entidades ao mesmo tempo. Deve ser usado quando a associação entre as três entidades não puder ser decomposta sem perder significado.

---

## 3. Atributos de relacionamentos

Algumas informações pertencem à associação, e não a uma entidade isolada.

No relacionamento entre Pedido e Produto, por exemplo, a quantidade comprada e o preço praticado podem pertencer ao relacionamento ou à entidade associativa ItemPedido.

```text
Pedido ─── ItemPedido ─── Produto
           quantidade
           preco
```

---

## 4. Papéis no relacionamento

Quando a mesma entidade participa mais de uma vez, é necessário indicar o papel de cada participação.

No relacionamento de supervisão:

- um funcionário atua como supervisor;
- outro funcionário atua como subordinado.

Os papéis evitam ambiguidades e tornam o modelo mais claro.

---

## 5. Relacionamentos identificadores

Um relacionamento é identificador quando participa da identificação de uma entidade fraca. Nesse caso, a existência da entidade dependente está ligada à entidade principal.

Exemplo:

- Pedido identifica ItemPedido;
- Conta identifica Movimentação.

---

## 6. Relacionamentos no modelo relacional

No modelo relacional, os relacionamentos são representados por chaves estrangeiras ou tabelas associativas.

Uma relação um para muitos normalmente coloca a chave estrangeira no lado muitos. Uma relação muitos para muitos exige uma tabela intermediária.

---

## 7. Boas práticas

- Nomear relacionamentos com verbos claros;
- Validar a regra com especialistas do negócio;
- Registrar atributos que pertencem à associação;
- Evitar relacionamentos sem significado operacional;
- Verificar cardinalidade e participação em conjunto.

---

## 8. Resumo

Relacionamentos descrevem como entidades se associam e permitem representar regras importantes do domínio. Eles são essenciais para transformar a visão do negócio em uma estrutura de dados coerente e consultável.

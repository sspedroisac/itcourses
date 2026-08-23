# Diagrama de Classes

## 1. O que é um Diagrama de Classes

O **Diagrama de Classes** é um dos principais diagramas estruturais da **UML (*Unified Modeling Language*)**.

Ele é utilizado para representar a estrutura de um sistema, mostrando:

* Classes;
* Atributos;
* Métodos;
* Relacionamentos entre classes.

Esse diagrama é especialmente utilizado no desenvolvimento orientado a objetos, pois permite visualizar como as diferentes entidades do sistema são organizadas e como elas se relacionam.

Por exemplo, em um sistema de vendas, podem existir classes como:

* Cliente;
* Produto;
* Pedido;
* Pagamento.

O Diagrama de Classes ajuda a representar essas entidades e suas relações.

---

## 2. Estrutura de uma Classe

Uma classe normalmente é representada por um retângulo dividido em três partes:

```text
┌─────────────────────────┐
│         Cliente         │
├─────────────────────────┤
│ - nome: String          │
│ - email: String         │
├─────────────────────────┤
│ + realizarPedido(): void│
└─────────────────────────┘
```

As três partes representam:

1. Nome da classe;
2. Atributos;
3. Métodos ou operações.

---

## 3. Nome da Classe

A primeira seção representa o nome da classe.

```text
┌───────────────────┐
│      Cliente      │
└───────────────────┘
```

Uma classe representa um conjunto de objetos que possuem características e comportamentos semelhantes.

Por exemplo, a classe `Cliente` pode representar todos os clientes de um sistema.

Normalmente, o nome da classe:

* É escrito no singular;
* Representa uma entidade ou conceito do domínio;
* Utiliza nomes claros e significativos.

Exemplos:

* Cliente;
* Produto;
* Pedido;
* Funcionário;
* Conta;
* Usuário.

---

## 4. Atributos

Os **atributos** representam as características ou informações armazenadas por uma classe.

Exemplo:

```text
┌───────────────────────┐
│        Produto        │
├───────────────────────┤
│ - id: Integer         │
│ - nome: String        │
│ - preco: Decimal      │
│ - estoque: Integer    │
└───────────────────────┘
```

Nesse exemplo, a classe `Produto` possui os atributos:

* `id`;
* `nome`;
* `preco`;
* `estoque`.

A representação normalmente segue o formato:

```text
visibilidade nome: Tipo
```

Exemplo:

```text
- nome: String
```

---

## 5. Métodos

Os **métodos**, também chamados de operações, representam os comportamentos que uma classe pode executar.

Exemplo:

```text
┌──────────────────────────┐
│         Produto          │
├──────────────────────────┤
│ - estoque: Integer       │
├──────────────────────────┤
│ + adicionarEstoque(): void│
│ + removerEstoque(): void │
└──────────────────────────┘
```

A representação geralmente segue o formato:

```text
visibilidade nome(parâmetros): TipoRetorno
```

Exemplo:

```text
+ calcularTotal(quantidade: Integer): Decimal
```

---

## 6. Visibilidade

A UML utiliza símbolos para indicar a visibilidade dos atributos e métodos.

| Símbolo | Visibilidade | Descrição                                       |
| ------- | ------------ | ----------------------------------------------- |
| `+`     | Público      | Pode ser acessado por outras classes            |
| `-`     | Privado      | Pode ser acessado apenas pela própria classe    |
| `#`     | Protegido    | Pode ser acessado pela classe e suas subclasses |
| `~`     | Pacote       | Pode ser acessado dentro do mesmo pacote        |

Exemplo:

```text
┌─────────────────────────┐
│         Conta           │
├─────────────────────────┤
│ - saldo: Decimal        │
│ # limite: Decimal       │
├─────────────────────────┤
│ + depositar(): void     │
│ + sacar(): void         │
└─────────────────────────┘
```

A utilização da visibilidade ajuda a representar conceitos como **encapsulamento** e controle de acesso aos membros da classe.

---

## 7. Relacionamentos entre Classes

Além das classes, o Diagrama de Classes representa como elas se relacionam.

Os principais relacionamentos são:

* Associação;
* Agregação;
* Composição;
* Generalização;
* Dependência.

---

## 8. Associação

A **associação** representa uma relação estrutural entre duas classes.

Por exemplo, um cliente pode realizar pedidos.

```text
┌───────────┐          ┌───────────┐
│  Cliente  │──────────│  Pedido   │
└───────────┘          └───────────┘
```

Isso indica que existe uma relação entre `Cliente` e `Pedido`.

A associação pode possuir multiplicidade para indicar quantos objetos podem participar da relação.

---

## 9. Multiplicidade

A **multiplicidade** indica a quantidade de objetos envolvidos em um relacionamento.

Exemplo:

```text
Cliente                      Pedido
   1 ─────────────────────── 0..*
```

Isso pode indicar que:

* Um pedido está associado a um cliente;
* Um cliente pode possuir zero ou vários pedidos.

As multiplicidades mais comuns são:

| Multiplicidade | Significado            |
| -------------- | ---------------------- |
| `1`            | Exatamente um          |
| `0..1`         | Zero ou um             |
| `*`            | Zero ou vários         |
| `0..*`         | Zero ou vários         |
| `1..*`         | Um ou vários           |
| `n`            | Exatamente `n` objetos |

Exemplo:

```text
Cliente 1 ───────────── 0..* Pedido
```

Um cliente pode realizar vários pedidos.

---

## 10. Agregação

A **agregação** representa uma relação de todo-parte.

Nesse relacionamento, as partes podem existir independentemente do todo.

A agregação é representada por um losango vazio.

Exemplo:

```text
Departamento ◇────────── Funcionário
```

Um departamento pode possuir vários funcionários.

Porém, um funcionário pode continuar existindo mesmo que o departamento seja removido ou reorganizado.

A ideia principal é que existe uma relação entre o todo e suas partes, mas o ciclo de vida das partes é independente.

---

## 11. Composição

A **composição** também representa uma relação de todo-parte.

Porém, nesse caso, as partes possuem um ciclo de vida fortemente dependente do todo.

A composição é representada por um losango preenchido.

Exemplo:

```text
Pedido ◆────────── ItemPedido
```

Um `ItemPedido` existe como parte de um `Pedido`.

Se o pedido deixar de existir, seus itens também deixam de existir dentro desse contexto.

A principal diferença entre agregação e composição é o nível de dependência entre o ciclo de vida dos objetos.

---

## 12. Generalização

A **generalização** representa uma relação entre uma classe mais geral e classes mais específicas.

Ela está relacionada ao conceito de **herança** na programação orientada a objetos.

Exemplo:

```text
             ┌─────────────┐
             │   Usuário   │
             └──────△──────┘
                    │
          ┌─────────┴─────────┐
          │                   │
   ┌──────┴──────┐     ┌──────┴──────────┐
   │   Cliente   │     │ Administrador   │
   └─────────────┘     └─────────────────┘
```

Nesse exemplo:

* `Usuário` representa uma classe mais geral;
* `Cliente` é uma especialização de `Usuário`;
* `Administrador` também é uma especialização de `Usuário`.

As subclasses podem herdar atributos e métodos da classe mais geral.

---

## 13. Dependência

A **dependência** indica que uma classe utiliza outra temporariamente para realizar alguma operação.

Ela normalmente é representada por uma linha tracejada com uma seta.

Exemplo:

```text
Pedido - - - - - - - - - -▶ ServiçoPagamento
```

Isso pode indicar que a classe `Pedido` depende de `ServiçoPagamento` para executar uma determinada funcionalidade.

A dependência normalmente representa uma relação mais fraca do que uma associação.

---

## 14. Exemplo: Sistema de Vendas

Considere um sistema simples de vendas.

As principais classes podem ser:

* Cliente;
* Pedido;
* ItemPedido;
* Produto.

Um relacionamento simplificado pode ser representado da seguinte forma:

```text
┌──────────────┐        ┌──────────────┐
│   Cliente    │        │    Pedido    │
├──────────────┤        ├──────────────┤
│ - nome       │        │ - numero     │
│ - email      │        │ - data       │
├──────────────┤        ├──────────────┤
│ + comprar()  │        │ + calcularTotal() │
└──────┬───────┘        └───────◆──────┘
       │                         │
       │ 1                   1   │
       └─────────────── 0..* ────┘
                                 │
                                 │ 1..*
                                 ▼
                         ┌──────────────┐
                         │  ItemPedido  │
                         ├──────────────┤
                         │ - quantidade │
                         ├──────────────┤
                         │ + subtotal() │
                         └───────┬──────┘
                                 │
                                 │
                                 ▼
                         ┌──────────────┐
                         │   Produto    │
                         ├──────────────┤
                         │ - nome       │
                         │ - preco      │
                         ├──────────────┤
                         │ + atualizarEstoque() │
                         └──────────────┘
```

Nesse exemplo:

* Um `Cliente` pode realizar vários `Pedidos`;
* Um `Pedido` possui um ou vários `ItensPedido`;
* Cada `ItemPedido` está relacionado a um `Produto`;
* A relação entre `Pedido` e `ItemPedido` é uma composição.

---

## 15. Classe Abstrata

Uma **classe abstrata** representa uma abstração que normalmente não é instanciada diretamente.

Ela serve como base para outras classes.

Exemplo:

```text
        <<abstract>>
        ┌──────────────┐
        │   Pagamento  │
        ├──────────────┤
        │ - valor      │
        ├──────────────┤
        │ + processar()│
        └───────△──────┘
                │
       ┌────────┴────────┐
       │                 │
┌──────┴──────┐   ┌──────┴──────┐
│ PagamentoPIX│   │PagamentoCartão│
└─────────────┘   └──────────────┘
```

Nesse caso, `Pagamento` define uma estrutura comum para diferentes tipos de pagamento.

---

## 16. Interfaces

Uma **interface** define um contrato que pode ser implementado por diferentes classes.

Exemplo:

```text
        <<interface>>
        ┌──────────────────┐
        │ Autenticável     │
        ├──────────────────┤
        │ + autenticar()   │
        └────────△─────────┘
                 │
                 │
          ┌──────┴──────┐
          │   Usuário   │
          └─────────────┘
```

A interface define um comportamento que deve ser fornecido pelas classes que a implementam.

Em UML, a relação de implementação é normalmente representada por uma linha tracejada com um triângulo vazio.

---

## 17. Boas práticas

Ao criar um Diagrama de Classes:

* Utilize nomes claros e representativos.
* Mantenha o nível de detalhe adequado ao objetivo do diagrama.
* Não represente todos os detalhes da implementação quando eles não forem necessários.
* Utilize multiplicidades para esclarecer os relacionamentos.
* Evite relacionamentos desnecessários.
* Diferencie corretamente associação, agregação e composição.
* Agrupe classes relacionadas quando o diagrama for muito grande.
* Utilize diagramas menores para representar partes específicas de sistemas complexos.

---

## 18. Erros comuns

### 18.1 Confundir classe com banco de dados

Uma classe representa um conceito do sistema orientado a objetos.

Ela não precisa possuir uma correspondência direta com uma tabela.

### 18.2 Criar diagramas excessivamente detalhados

Adicionar todos os atributos e métodos de um sistema pode tornar o diagrama difícil de compreender.

É importante representar apenas as informações relevantes.

### 18.3 Utilizar composição sem considerar o ciclo de vida

A composição representa uma dependência forte entre o todo e suas partes.

Ela não deve ser utilizada apenas porque uma classe contém outra.

### 18.4 Ignorar multiplicidades

A ausência de multiplicidades pode dificultar a compreensão das regras do relacionamento.

Por exemplo:

```text
Cliente ───────── Pedido
```

É menos informativo do que:

```text
Cliente 1 ───────── 0..* Pedido
```

---

## 19. Resumo

| Conceito       | Descrição                                                |
| -------------- | -------------------------------------------------------- |
| Classe         | Representa uma entidade ou conceito do sistema           |
| Atributo       | Representa uma característica da classe                  |
| Método         | Representa um comportamento da classe                    |
| Associação     | Representa uma relação entre classes                     |
| Multiplicidade | Define a quantidade de objetos em uma relação            |
| Agregação      | Relação todo-parte com ciclo de vida independente        |
| Composição     | Relação todo-parte com forte dependência                 |
| Generalização  | Representa herança entre classes                         |
| Dependência    | Representa uma utilização temporária entre elementos     |
| Interface      | Define um contrato que pode ser implementado por classes |

---

## 20. Conclusão

O **Diagrama de Classes** é uma das principais ferramentas da UML para representar a estrutura de sistemas orientados a objetos.

Ele permite visualizar classes, atributos, métodos e relacionamentos, ajudando a compreender como diferentes elementos do sistema estão organizados.

Quando utilizado corretamente, o Diagrama de Classes pode auxiliar na análise, no projeto, na comunicação entre desenvolvedores e na documentação da arquitetura do software.

O objetivo não é representar todos os detalhes do código, mas criar uma visão clara da estrutura e das principais relações existentes no sistema.

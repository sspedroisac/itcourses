# Diagrama de Casos de Uso

## 1. O que é um Diagrama de Casos de Uso

O **Diagrama de Casos de Uso** é um diagrama comportamental da **UML (*Unified Modeling Language*)** utilizado para representar as funcionalidades de um sistema sob a perspectiva dos usuários e de outros sistemas que interagem com ele.

Ele permite identificar:

* Quem interage com o sistema;
* Quais funcionalidades o sistema oferece;
* Quais relações existem entre os atores e as funcionalidades.

Esse diagrama é especialmente útil durante a análise de requisitos, pois ajuda a transformar as necessidades dos usuários em uma visão mais clara das funcionalidades esperadas.

---

## 2. Principais elementos

Um Diagrama de Casos de Uso é composto principalmente por:

* Atores;
* Casos de uso;
* Fronteira do sistema;
* Relacionamentos.

Cada elemento possui uma função específica na representação do sistema.

---

## 3. Atores

Um **ator** representa qualquer entidade externa que interage com o sistema.

Um ator não precisa ser necessariamente uma pessoa.

Ele também pode representar:

* Outro sistema;
* Um serviço externo;
* Um dispositivo;
* Uma organização.

Um ator representa um **papel desempenhado durante uma interação**, e não necessariamente uma pessoa específica.

Por exemplo, uma mesma pessoa pode exercer diferentes papéis em um sistema:

* Cliente;
* Administrador;
* Funcionário.

### 3.1 Representação

Normalmente, um ator é representado por uma figura semelhante a uma pessoa.

```text
   O
  /|\
  / \
Cliente
```

---

## 4. Casos de Uso

Um **caso de uso** representa uma funcionalidade ou um objetivo que pode ser alcançado por meio da interação com o sistema.

Normalmente, um caso de uso é representado por uma elipse.

Exemplos:

```text
(Realizar Login)

(Cadastrar Cliente)

(Realizar Pedido)

(Consultar Relatório)
```

Os nomes dos casos de uso devem representar ações ou objetivos.

Por isso, geralmente são utilizados verbos no infinitivo.

Exemplos:

* Realizar Login;
* Cadastrar Cliente;
* Atualizar Perfil;
* Emitir Relatório;
* Processar Pagamento.

---

## 5. Fronteira do sistema

A **fronteira do sistema** representa os limites do sistema que está sendo modelado.

Ela normalmente é representada por um retângulo contendo os casos de uso.

Os atores permanecem fora dessa fronteira.

Exemplo:

```text
Cliente

   O
  /|\
  / \
   │
   │
┌────────────────────────────────┐
│        Sistema de Vendas       │
│                                │
│       (Realizar Login)         │
│                                │
│       (Realizar Pedido)        │
│                                │
│       (Consultar Pedidos)      │
│                                │
└────────────────────────────────┘
```

A fronteira ajuda a diferenciar aquilo que pertence ao sistema daquilo que está fora dele.

---

## 6. Associação

A **associação** representa uma comunicação ou interação entre um ator e um caso de uso.

Normalmente, é representada por uma linha.

Exemplo:

```text
Cliente
   │
   │
   ▼
(Realizar Pedido)
```

Essa relação indica que o ator **Cliente** participa da funcionalidade **Realizar Pedido**.

Um ator pode estar associado a vários casos de uso.

Da mesma forma, um caso de uso pode possuir vários atores.

---

## 7. Relacionamento `<<include>>`

O relacionamento **`<<include>>`** indica que um caso de uso sempre utiliza outro caso de uso como parte de seu comportamento.

Ele representa um comportamento obrigatório e reutilizável.

Por exemplo, considere a funcionalidade:

```text
(Realizar Pedido)
```

Para realizar um pedido, o sistema precisa processar o pagamento.

Essa funcionalidade pode ser representada separadamente:

```text
(Realizar Pedido)
        │
        │ <<include>>
        ▼
(Processar Pagamento)
```

Nesse caso, **Processar Pagamento** faz parte obrigatória do fluxo de **Realizar Pedido**.

O relacionamento `<<include>>` é útil para evitar a repetição de comportamentos compartilhados entre vários casos de uso.

Exemplo:

```text
(Realizar Pedido) ────────┐
                          │
                          ▼
                   (Validar Pagamento)
                          ▲
                          │
(Realizar Reserva) ───────┘
```

---

## 8. Relacionamento `<<extend>>`

O relacionamento **`<<extend>>`** representa um comportamento opcional ou condicional que estende outro caso de uso.

Exemplo:

```text
(Aplicar Cupom)
        │
        │ <<extend>>
        ▼
(Realizar Pedido)
```

Nesse caso, o cliente pode realizar um pedido sem utilizar um cupom.

Portanto, **Aplicar Cupom** representa um comportamento opcional que ocorre apenas em determinadas situações.

A principal diferença é:

* `<<include>>`: comportamento obrigatório;
* `<<extend>>`: comportamento opcional ou condicional.

---

## 9. Generalização

A **generalização** representa uma relação em que um elemento mais específico herda características ou comportamentos de um elemento mais geral.

Esse relacionamento pode ocorrer entre atores ou entre casos de uso.

### 9.1 Generalização entre atores

Por exemplo:

```text
             Usuário
                △
                │
        ┌───────┴────────┐
        │                │
     Cliente       Administrador
```

Nesse caso, **Cliente** e **Administrador** são tipos mais específicos de **Usuário**.

Eles podem compartilhar interações ou características definidas para o ator mais geral.

### 9.2 Generalização entre casos de uso

Também é possível representar especializações entre funcionalidades.

Exemplo:

```text
           (Realizar Pagamento)
                    △
                    │
         ┌──────────┴──────────┐
         │                     │
(Pagar com Cartão)      (Pagar com PIX)
```

As funcionalidades específicas representam diferentes formas de realizar uma funcionalidade mais geral.

---

## 10. Exemplo: Sistema de Biblioteca

Considere um sistema utilizado para gerenciar uma biblioteca.

Os principais atores podem ser:

* Leitor;
* Bibliotecário.

Alguns casos de uso são:

* Realizar Login;
* Consultar Livros;
* Realizar Empréstimo;
* Devolver Livro;
* Cadastrar Livro.

Uma representação simplificada seria:

```text
Leitor                              Bibliotecário
   O                                      O
  /|\                                    /|\
  / \                                    / \
   │                                      │
   │                                      │
┌──┼──────────────────────────────────────┼──┐
│  │        Sistema de Biblioteca         │  │
│  │                                      │  │
│  ├──────────── (Realizar Login) ────────┤  │
│  │                                      │  │
│  ├──────────── (Consultar Livros)       │  │
│  │                                      │  │
│  └──────────── (Realizar Empréstimo)    │  │
│                                         │  │
│                        ───────── (Cadastrar Livro)
│                                         │  │
│                        ───────── (Devolver Livro)
│                                         │  │
└─────────────────────────────────────────┴──┘
```

Esse diagrama fornece uma visão geral das funcionalidades e dos atores envolvidos.

---

## 11. Casos de Uso e Requisitos Funcionais

Os casos de uso possuem uma relação próxima com os **requisitos funcionais**.

Um requisito funcional descreve algo que o sistema deve ser capaz de fazer.

Exemplo:

> O sistema deve permitir que o cliente realize pedidos.

Esse requisito pode ser representado pelo caso de uso:

```text
(Realizar Pedido)
```

Por esse motivo, os Diagramas de Casos de Uso são frequentemente utilizados como apoio durante a elicitação, análise e documentação de requisitos.

No entanto, um Diagrama de Casos de Uso não substitui uma especificação detalhada dos requisitos.

Ele fornece uma visão geral das funcionalidades e das interações.

---

## 12. Descrição de um Caso de Uso

Além do diagrama, um caso de uso pode possuir uma descrição textual mais detalhada.

Essa descrição pode incluir:

* Nome;
* Objetivo;
* Ator principal;
* Pré-condições;
* Fluxo principal;
* Fluxos alternativos;
* Pós-condições.

Exemplo:

### Caso de Uso: Realizar Pedido

| Elemento        | Descrição                                                  |
| --------------- | ---------------------------------------------------------- |
| Ator principal  | Cliente                                                    |
| Objetivo        | Realizar a compra de produtos                              |
| Pré-condição    | Cliente autenticado                                        |
| Fluxo principal | Selecionar produtos, informar pagamento e confirmar pedido |
| Pós-condição    | Pedido registrado no sistema                               |

Essa documentação complementa o diagrama e detalha como a interação deve ocorrer.

---

## 13. Boas práticas

Ao criar um Diagrama de Casos de Uso:

* Mantenha o foco nas funcionalidades do sistema.
* Utilize nomes claros e objetivos.
* Prefira verbos no infinitivo para nomear casos de uso.
* Identifique corretamente os atores externos ao sistema.
* Evite representar detalhes técnicos.
* Não utilize o diagrama para representar classes ou banco de dados.
* Evite criar diagramas excessivamente grandes.
* Utilize `<<include>>` apenas para comportamentos obrigatórios e reutilizáveis.
* Utilize `<<extend>>` para comportamentos opcionais ou condicionais.

---

## 14. Erros comuns

### 14.1 Representar componentes internos como atores

Elementos que fazem parte do próprio sistema normalmente não devem ser representados como atores.

Por exemplo:

```text
Sistema de Vendas ─── Banco de Dados
```

Se o banco de dados faz parte da infraestrutura interna do sistema, ele não representa um ator externo.

### 14.2 Confundir casos de uso com telas

Um caso de uso representa uma funcionalidade ou objetivo, e não uma tela da aplicação.

Por exemplo:

* **Cadastrar Cliente** representa uma funcionalidade;
* **Tela de Cadastro** representa um elemento da interface.

O Diagrama de Casos de Uso deve focar no que o sistema oferece, e não em como a interface será construída.

### 14.3 Adicionar detalhes técnicos

Elementos como:

* APIs;
* Frameworks;
* Banco de dados;
* Classes;
* Servidores;

normalmente não pertencem a um Diagrama de Casos de Uso.

Esses detalhes podem ser representados em outros diagramas da UML.

---

## 15. Resumo

| Elemento             | Descrição                                                   |
| -------------------- | ----------------------------------------------------------- |
| Ator                 | Entidade externa que interage com o sistema                 |
| Caso de Uso          | Funcionalidade ou objetivo oferecido pelo sistema           |
| Fronteira do Sistema | Define os limites do sistema                                |
| Associação           | Representa a interação entre ator e caso de uso             |
| `<<include>>`        | Representa comportamento obrigatório e reutilizável         |
| `<<extend>>`         | Representa comportamento opcional ou condicional            |
| Generalização        | Representa uma relação entre elementos gerais e específicos |

---

## 16. Conclusão

O **Diagrama de Casos de Uso** é uma ferramenta importante para representar as funcionalidades de um sistema e suas interações com entidades externas.

Ele permite visualizar, de forma simples e objetiva:

* Quem utiliza o sistema;
* Quais funcionalidades estão disponíveis;
* Como os atores se relacionam com essas funcionalidades.

Por ser especialmente útil durante a análise de requisitos, esse diagrama ajuda a estabelecer uma visão compartilhada entre os envolvidos antes da implementação do sistema.

Quando utilizado corretamente, o Diagrama de Casos de Uso facilita a comunicação, reduz ambiguidades e contribui para uma melhor compreensão das necessidades que o software deve atender.

# Arquitetura em Camadas

## 1. Introdução

A **Arquitetura em Camadas** (*Layered Architecture*) é um estilo arquitetural que organiza uma aplicação em diferentes camadas.

Cada camada possui responsabilidades específicas e bem definidas.

Em geral, uma camada utiliza os serviços da camada abaixo dela e oferece funcionalidades para a camada acima.

Uma representação simplificada é:

```text id="7k2m4p"
┌─────────────────────────┐
│      Apresentação       │
├─────────────────────────┤
│        Aplicação        │
├─────────────────────────┤
│         Domínio         │
├─────────────────────────┤
│      Infraestrutura     │
└─────────────────────────┘
```

Essa organização ajuda a separar responsabilidades e reduzir o acoplamento entre diferentes partes do sistema.

---

## 2. Objetivos da Arquitetura em Camadas

A principal ideia desse estilo arquitetural é dividir o sistema de acordo com suas responsabilidades.

Entre seus objetivos estão:

* Separar responsabilidades;
* Melhorar a organização do sistema;
* Facilitar a manutenção;
* Reduzir o acoplamento;
* Facilitar os testes;
* Permitir que determinadas partes sejam alteradas com menor impacto.

Por exemplo, alterações na interface do usuário não deveriam exigir mudanças nas regras de negócio.

Da mesma forma, trocar uma tecnologia de banco de dados deveria causar o menor impacto possível na lógica principal da aplicação.

---

## 3. Como as Camadas Funcionam

Cada camada possui uma responsabilidade específica.

Um fluxo comum pode ser representado da seguinte forma:

```text id="m8q3v1"
Usuário
   │
   ▼
Apresentação
   │
   ▼
Aplicação
   │
   ▼
Domínio
   │
   ▼
Infraestrutura
   │
   ▼
Banco de Dados
```

Nem todas as aplicações precisam utilizar exatamente essa estrutura.

Dependendo do sistema, algumas camadas podem ser combinadas, divididas ou organizadas de maneira diferente.

O importante é que as responsabilidades estejam claramente definidas.

---

## 4. Camada de Apresentação

A **Camada de Apresentação** é responsável pela interação entre o sistema e seus usuários ou consumidores.

Ela pode incluir:

* Interfaces web;
* Aplicações mobile;
* APIs;
* Controllers;
* Endpoints;
* Interfaces de linha de comando.

Suas responsabilidades normalmente incluem:

* Receber requisições;
* Validar dados básicos de entrada;
* Apresentar informações;
* Converter dados para formatos adequados;
* Encaminhar solicitações para a camada de aplicação.

Exemplo:

```text id="a5r9k2"
Usuário
   │
   ▼
┌─────────────────┐
│ Controller/API  │
└────────┬────────┘
         │
         ▼
   Aplicação
```

A camada de apresentação não deve concentrar regras de negócio complexas.

Seu principal objetivo é lidar com a comunicação entre o sistema e o ambiente externo.

---

## 5. Camada de Aplicação

A **Camada de Aplicação** é responsável por coordenar os casos de uso do sistema.

Ela organiza o fluxo necessário para executar uma determinada funcionalidade.

Por exemplo:

```text id="n4p7x6"
Criar Pedido
      │
      ▼
Validar solicitação
      │
      ▼
Executar regras necessárias
      │
      ▼
Salvar pedido
      │
      ▼
Retornar resultado
```

Essa camada pode conter elementos como:

* Services;
* Use Cases;
* Application Services;
* Commands;
* Handlers.

É importante diferenciar a camada de aplicação da camada de domínio.

A camada de aplicação normalmente **coordena** a execução.

As regras de negócio fundamentais devem permanecer no domínio.

---

## 6. Camada de Domínio

A **Camada de Domínio** representa as regras e conceitos centrais do negócio.

Ela pode conter:

* Entidades;
* Objetos de valor;
* Regras de negócio;
* Serviços de domínio;
* Políticas de negócio.

Por exemplo, em um sistema de comércio eletrônico:

```text id="d2w8f3"
Domínio
│
├── Cliente
├── Produto
├── Pedido
├── ItemPedido
└── Regra de Desconto
```

Uma regra como:

> Um pedido não pode ser confirmado sem possuir pelo menos um item.

é uma regra de domínio.

A ideia é que essas regras não dependam diretamente de detalhes como:

* Frameworks;
* Interfaces;
* Bancos de dados;
* APIs externas.

Isso facilita a manutenção e os testes.

---

## 7. Camada de Infraestrutura

A **Camada de Infraestrutura** contém detalhes técnicos necessários para o funcionamento do sistema.

Ela pode incluir:

* Banco de dados;
* Repositórios;
* Sistemas de arquivos;
* Serviços externos;
* Mensageria;
* Cache;
* Implementações de integrações.

Exemplo:

```text id="r6m1q9"
Aplicação
    │
    ▼
┌───────────────────┐
│   Infraestrutura  │
├───────────────────┤
│ Repositório       │
│ Banco de Dados    │
│ API Externa       │
│ Cache             │
└───────────────────┘
```

O objetivo é concentrar detalhes técnicos em uma área específica da aplicação.

Dessa forma, mudanças como a troca de um banco de dados podem possuir menor impacto nas regras principais do sistema.

---

## 8. Fluxo de uma Requisição

Considere uma funcionalidade de criação de pedidos.

O fluxo pode ocorrer da seguinte forma:

```text id="k3p8w5"
1. Usuário envia uma requisição
             │
             ▼
2. Controller recebe os dados
             │
             ▼
3. Caso de uso é executado
             │
             ▼
4. Regras de domínio são aplicadas
             │
             ▼
5. Dados são persistidos
             │
             ▼
6. Resultado é retornado
```

Cada parte possui uma responsabilidade diferente.

Por exemplo:

| Etapa          | Responsabilidade              |
| -------------- | ----------------------------- |
| Controller     | Receber a requisição          |
| Caso de Uso    | Coordenar a operação          |
| Domínio        | Aplicar regras de negócio     |
| Repositório    | Persistir dados               |
| Infraestrutura | Implementar detalhes técnicos |

---

## 9. Dependências entre Camadas

Uma das principais decisões em uma arquitetura em camadas é definir como as camadas podem depender umas das outras.

Um modelo tradicional pode funcionar assim:

```text id="t7m2q8"
Apresentação
      │
      ▼
Aplicação
      │
      ▼
Domínio
      │
      ▼
Infraestrutura
```

Nesse modelo, uma camada superior utiliza os serviços oferecidos pela camada inferior.

No entanto, essa abordagem pode criar problemas quando a lógica de negócio passa a depender diretamente de detalhes da infraestrutura.

Por exemplo:

```text id="v4k9p1"
Domínio
   │
   ▼
Banco de Dados
```

Uma alternativa é utilizar abstrações e aplicar a **Inversão de Dependência**.

```text id="g8r3m6"
Aplicação / Domínio
        │
        ▼
     Contrato
        ▲
        │
Infraestrutura
```

Nesse caso, a camada principal depende de uma abstração, enquanto a infraestrutura fornece uma implementação.

Isso permite reduzir a dependência direta entre as regras de negócio e os detalhes técnicos.

---

## 10. Exemplo de Organização

Uma aplicação pode possuir uma estrutura semelhante a:

```text id="h5x9n3"
src/
│
├── presentation/
│   ├── controllers/
│   ├── routes/
│   └── dto/
│
├── application/
│   ├── use-cases/
│   └── services/
│
├── domain/
│   ├── entities/
│   ├── value-objects/
│   └── services/
│
└── infrastructure/
    ├── database/
    ├── repositories/
    └── integrations/
```

Essa é apenas uma possibilidade.

A estrutura de diretórios não define, por si só, uma boa arquitetura.

O mais importante é respeitar as responsabilidades e as dependências definidas.

---

## 11. Vantagens

A Arquitetura em Camadas apresenta diversas vantagens.

### 11.1 Organização

As responsabilidades ficam separadas em áreas específicas.

Isso facilita a compreensão da estrutura do sistema.

### 11.2 Manutenibilidade

Alterações podem ser realizadas de forma mais isolada.

Por exemplo, uma mudança na interface pode não afetar diretamente o domínio.

### 11.3 Testabilidade

As regras de negócio podem ser testadas sem depender necessariamente da interface ou do banco de dados.

### 11.4 Reutilização

Componentes das camadas internas podem ser utilizados por diferentes interfaces.

Por exemplo:

```text id="b9q4r7"
          Aplicação
              ▲
              │
      ┌───────┼───────┐
      │               │
      ▼               ▼
   API Web       Aplicação CLI
```

As duas interfaces podem utilizar os mesmos casos de uso e regras de negócio.

### 11.5 Separação entre Negócio e Tecnologia

As regras principais do sistema podem permanecer separadas de detalhes técnicos.

Isso facilita a evolução da aplicação.

---

## 12. Desvantagens

Apesar de suas vantagens, a Arquitetura em Camadas também possui limitações.

### 12.1 Excesso de Abstração

Criar muitas camadas pode tornar uma aplicação simples desnecessariamente complexa.

Por exemplo:

```text id="c1r6m8"
Controller
    │
    ▼
Service
    │
    ▼
Manager
    │
    ▼
Handler
    │
    ▼
Repository
```

Se cada camada apenas encaminha informações para a próxima, pode existir complexidade sem benefício real.

---

### 12.2 Acoplamento entre Camadas

Mesmo em uma arquitetura organizada, as camadas podem se tornar fortemente dependentes.

Isso ocorre principalmente quando componentes internos conhecem detalhes específicos de outras camadas.

---

### 12.3 Dificuldade para Definir Responsabilidades

Nem sempre é simples determinar em qual camada uma determinada lógica deve ficar.

Por exemplo, é necessário avaliar se uma regra pertence:

* À apresentação;
* À aplicação;
* Ao domínio.

Por isso, é importante definir claramente as responsabilidades da arquitetura.

---

## 13. Arquitetura em Camadas e Monólito

A Arquitetura em Camadas não significa necessariamente que o sistema é composto por vários serviços.

Uma aplicação monolítica também pode utilizar camadas.

Exemplo:

```text id="j7m3p5"
┌──────────────────────────────┐
│        Aplicação Monolítica  │
│                              │
│  ┌────────────────────────┐  │
│  │ Apresentação           │  │
│  ├────────────────────────┤  │
│  │ Aplicação              │  │
│  ├────────────────────────┤  │
│  │ Domínio                │  │
│  ├────────────────────────┤  │
│  │ Infraestrutura         │  │
│  └────────────────────────┘  │
└──────────────────────────────┘
```

Portanto:

> **Arquitetura em Camadas define como as responsabilidades são organizadas.**

Enquanto:

> **Arquitetura Monolítica define como a aplicação é estruturada e implantada como uma unidade.**

Os dois conceitos podem coexistir.

---

## 14. Boas Práticas

* Definir claramente a responsabilidade de cada camada.
* Evitar colocar regras de negócio complexas na camada de apresentação.
* Manter detalhes técnicos isolados sempre que possível.
* Evitar dependências desnecessárias entre camadas.
* Utilizar abstrações quando ajudarem a reduzir o acoplamento.
* Evitar criar camadas apenas por convenção.
* Manter o fluxo de dependências claro.
* Projetar a estrutura de acordo com a complexidade do sistema.
* Facilitar testes das regras principais do negócio.
* Revisar periodicamente se as responsabilidades continuam bem distribuídas.

---

## 15. Resumo

| Camada         | Responsabilidade                           |
| -------------- | ------------------------------------------ |
| Apresentação   | Interação com usuários e sistemas externos |
| Aplicação      | Coordenação dos casos de uso               |
| Domínio        | Regras e conceitos centrais do negócio     |
| Infraestrutura | Detalhes técnicos e integrações            |

O fluxo geral pode ser resumido como:

```text id="z6k2p9"
Apresentação
      │
      ▼
Aplicação
      │
      ▼
Domínio
      │
      ▼
Infraestrutura
```

Cada camada possui um propósito específico e deve evitar assumir responsabilidades que pertencem a outras partes do sistema.

---

## 16. Conclusão

A **Arquitetura em Camadas** é uma forma simples e amplamente utilizada para organizar sistemas de software.

Sua principal ideia é separar o sistema em diferentes níveis de responsabilidade, facilitando a compreensão, a manutenção e a evolução da aplicação.

Quando utilizada de forma adequada, ela ajuda a manter as regras de negócio separadas de detalhes como interfaces, frameworks e bancos de dados.

No entanto, a utilização de camadas não deve gerar complexidade desnecessária. O número e a organização das camadas devem ser definidos de acordo com as necessidades do sistema.

Uma boa Arquitetura em Camadas busca equilibrar **separação de responsabilidades**, **baixo acoplamento**, **alta coesão** e **simplicidade**.

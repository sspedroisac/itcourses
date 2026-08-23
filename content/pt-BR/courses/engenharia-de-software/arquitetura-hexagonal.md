# Arquitetura Hexagonal

## 1. Introdução

A **Arquitetura Hexagonal**, também conhecida como **Ports and Adapters Architecture**, é um estilo arquitetural criado para separar a lógica principal da aplicação dos detalhes externos.

Esses detalhes externos podem incluir:

* Interfaces web;
* APIs;
* Bancos de dados;
* Sistemas de mensageria;
* Serviços externos;
* Interfaces de linha de comando.

A principal ideia é proteger o **núcleo da aplicação** para que ele não dependa diretamente de tecnologias específicas.

Uma representação simplificada é:

```text id="h4x7p2"
                 ┌─────────────────┐
                 │   API / Web     │
                 └────────┬────────┘
                          │
                    ┌─────▼─────┐
                    │  Adapter  │
                    └─────┬─────┘
                          │
                          ▼
                  ┌───────────────┐
                  │     Port      │
                  └───────┬───────┘
                          │
              ┌───────────▼───────────┐
              │                       │
              │   Núcleo da Aplicação │
              │                       │
              └───────────┬───────────┘
                          │
                  ┌───────▼───────┐
                  │     Port      │
                  └───────┬───────┘
                          │
                    ┌─────▼─────┐
                    │  Adapter  │
                    └─────┬─────┘
                          │
          ┌───────────────┼────────────────┐
          ▼               ▼                ▼
     Banco de Dados   API Externa       Mensageria
```

Apesar do nome, uma Arquitetura Hexagonal não precisa possuir literalmente seis lados.

O hexágono é apenas uma representação visual da ideia de que a aplicação pode possuir diferentes pontos de entrada e saída.

---

## 2. Objetivo da Arquitetura Hexagonal

O principal objetivo é separar a lógica da aplicação dos detalhes tecnológicos.

Em uma arquitetura tradicional, é comum encontrar dependências como:

```text id="k2m8q5"
Regra de Negócio
       │
       ▼
Framework
       │
       ▼
Banco de Dados
```

Nesse caso, a lógica principal pode ficar fortemente dependente de tecnologias específicas.

Na Arquitetura Hexagonal, busca-se inverter essa relação:

```text id="v6p3r9"
                  Núcleo
                     │
                     ▼
                  Portas
                     ▲
                     │
              Implementações
```

O núcleo define o que precisa.

Os detalhes externos fornecem as implementações necessárias.

---

## 3. Os principais elementos

A Arquitetura Hexagonal é baseada principalmente em três conceitos:

1. **Núcleo da aplicação**;
2. **Ports (Portas)**;
3. **Adapters (Adaptadores)**.

---

## 4. O Núcleo da Aplicação

O **núcleo** contém a lógica principal do sistema.

Dependendo da organização utilizada, ele pode conter:

* Casos de uso;
* Regras de negócio;
* Entidades;
* Objetos de valor;
* Serviços de domínio.

O núcleo não deve depender diretamente de:

* Frameworks;
* Bancos de dados;
* APIs externas;
* Interfaces gráficas;
* Detalhes de infraestrutura.

Por exemplo:

```text id="q9w2m6"
┌─────────────────────────────┐
│      Núcleo da Aplicação    │
├─────────────────────────────┤
│                             │
│  Criar Pedido               │
│  Cancelar Pedido            │
│  Calcular Desconto          │
│  Validar Regras             │
│                             │
└─────────────────────────────┘
```

A ideia é que a lógica principal continue funcionando independentemente da tecnologia utilizada ao redor dela.

---

## 5. Ports

As **Ports**, ou portas, representam contratos que definem como a aplicação se comunica com o mundo externo.

Elas funcionam como pontos de conexão.

Uma porta pode ser representada por:

* Interfaces;
* Contratos;
* Protocolos.

Existem dois tipos principais de portas:

* **Portas de entrada**;
* **Portas de saída**.

---

## 6. Portas de Entrada

As **portas de entrada** (*Inbound Ports*) representam as funcionalidades oferecidas pela aplicação.

Elas definem como sistemas externos podem solicitar a execução de um caso de uso.

Exemplo:

```text id="a7n4p8"
Sistema Externo
       │
       ▼
Porta de Entrada
       │
       ▼
Criar Pedido
```

Uma porta de entrada pode representar operações como:

* Criar usuário;
* Criar pedido;
* Realizar pagamento;
* Consultar produto.

O adaptador de entrada utiliza essa porta para acionar a aplicação.

---

## 7. Adaptadores de Entrada

Os **adaptadores de entrada** (*Inbound Adapters*) são responsáveis por receber solicitações externas e convertê-las para o formato esperado pela aplicação.

Exemplos:

* Controllers HTTP;
* APIs REST;
* Interfaces web;
* Aplicações CLI;
* Consumidores de mensagens.

O fluxo pode ser representado assim:

```text id="m3k9x1"
Usuário
   │
   ▼
┌───────────────┐
│ API / Adapter │
└───────┬───────┘
        │
        ▼
  Porta de Entrada
        │
        ▼
    Caso de Uso
```

Por exemplo, uma aplicação pode receber uma solicitação através de:

```text
POST /pedidos
```

O controller recebe os dados e os converte para um formato utilizado pelo caso de uso.

O controller não deve conter a lógica principal de criação do pedido.

Sua responsabilidade é adaptar a comunicação externa para a aplicação.

---

## 8. Portas de Saída

As **portas de saída** (*Outbound Ports*) representam necessidades da aplicação em relação ao ambiente externo.

Por exemplo, um caso de uso pode precisar:

* Salvar um pedido;
* Buscar um usuário;
* Enviar uma mensagem;
* Processar um pagamento.

O núcleo define um contrato:

```text id="f8q1v5"
┌─────────────────────┐
│ PedidoRepository    │
├─────────────────────┤
│ salvar(pedido)      │
│ buscarPorId(id)     │
└─────────────────────┘
```

A aplicação depende desse contrato, e não diretamente da tecnologia utilizada.

---

## 9. Adaptadores de Saída

Os **adaptadores de saída** implementam as portas definidas pela aplicação.

Exemplo:

```text id="r5m8p2"
                PedidoRepository
                       ▲
                       │
                 Implementação
                       │
           ┌───────────┼───────────┐
           ▼                       ▼
    PostgreSQL Repository    MongoDB Repository
```

Outros exemplos de adaptadores de saída:

* Repositórios de banco de dados;
* Clientes HTTP;
* Serviços de e-mail;
* Produtores de mensagens;
* Sistemas de armazenamento.

O núcleo não precisa conhecer os detalhes dessas implementações.

---

## 10. Fluxo de uma Requisição

Considere um caso de uso chamado **Criar Pedido**.

O fluxo pode ocorrer da seguinte maneira:

```text id="t6p2k7"
Usuário
   │
   ▼
API REST
   │
   ▼
Adaptador de Entrada
   │
   ▼
Porta de Entrada
   │
   ▼
Caso de Uso: Criar Pedido
   │
   ▼
Porta de Saída
   │
   ▼
Adaptador de Saída
   │
   ▼
Banco de Dados
```

Cada elemento possui uma responsabilidade específica.

| Elemento             | Responsabilidade                  |
| -------------------- | --------------------------------- |
| API                  | Receber a requisição              |
| Adaptador de Entrada | Converter dados externos          |
| Porta de Entrada     | Definir o contrato do caso de uso |
| Caso de Uso          | Executar a lógica da aplicação    |
| Porta de Saída       | Definir uma necessidade externa   |
| Adaptador de Saída   | Implementar a comunicação         |
| Banco de Dados       | Persistir os dados                |

---

## 11. Inversão de Dependência

A Arquitetura Hexagonal utiliza fortemente o princípio da **Inversão de Dependência**.

Em uma estrutura tradicional, a aplicação pode depender diretamente da infraestrutura:

```text id="b4r9m3"
Aplicação
    │
    ▼
Banco de Dados
```

Na Arquitetura Hexagonal:

```text id="n7x2q6"
Aplicação
    │
    ▼
Contrato
    ▲
    │
Infraestrutura
```

A aplicação define o contrato.

A infraestrutura implementa esse contrato.

Dessa forma:

> **Os detalhes dependem do núcleo, e não o núcleo dos detalhes.**

Essa separação permite reduzir o acoplamento entre a lógica principal e tecnologias específicas.

---

## 12. Exemplo Prático

Considere uma funcionalidade para criar um usuário.

O núcleo pode definir:

```text id="c8p5m1"
CriarUsuario
      │
      ├── Validar dados
      │
      ├── Criar usuário
      │
      └── Salvar usuário
```

Para salvar o usuário, o caso de uso depende de uma porta:

```text id="w2k7p4"
CriarUsuario
      │
      ▼
UsuarioRepository
      │
      ▼
┌─────────────────────┐
│ Implementações      │
├─────────────────────┤
│ PostgreSQL          │
│ MongoDB             │
│ Implementação Fake  │
└─────────────────────┘
```

O caso de uso não precisa saber qual implementação está sendo utilizada.

Isso permite, por exemplo:

* Utilizar PostgreSQL em produção;
* Utilizar uma implementação em memória nos testes;
* Alterar a tecnologia de persistência com menor impacto.

---

## 13. Estrutura de Diretórios

Uma possível organização de uma aplicação pode ser:

```text id="p3v6k9"
src/
│
├── application/
│   ├── ports/
│   │   ├── inbound/
│   │   └── outbound/
│   │
│   └── use-cases/
│
├── domain/
│   ├── entities/
│   ├── value-objects/
│   └── services/
│
└── adapters/
    ├── inbound/
    │   ├── http/
    │   ├── cli/
    │   └── messaging/
    │
    └── outbound/
        ├── database/
        ├── external-services/
        └── messaging/
```

Essa é apenas uma forma possível de organizar o projeto.

A Arquitetura Hexagonal não exige uma estrutura específica de diretórios.

O mais importante é respeitar as responsabilidades e as dependências.

---

## 14. Vantagens

### 14.1 Independência de Tecnologias

A lógica principal não depende diretamente de frameworks ou bancos de dados.

Isso facilita alterações tecnológicas.

### 14.2 Testabilidade

Os adaptadores podem ser substituídos durante os testes.

Por exemplo:

```text id="y8m4q2"
Caso de Uso
    │
    ▼
Porta de Saída
    │
    ├──► Banco Real
    │
    └──► Implementação Fake
```

Isso permite testar a lógica da aplicação de forma isolada.

### 14.3 Flexibilidade

A aplicação pode possuir diferentes formas de entrada.

O mesmo caso de uso pode ser utilizado por:

* API REST;
* Interface web;
* Aplicação CLI;
* Consumidor de mensagens.

### 14.4 Redução do Acoplamento

O núcleo conhece contratos, mas não precisa conhecer detalhes das implementações externas.

---

## 15. Desvantagens

Apesar de suas vantagens, a Arquitetura Hexagonal também pode aumentar a complexidade.

### 15.1 Mais Abstrações

A utilização de portas e adaptadores pode aumentar o número de:

* Interfaces;
* Classes;
* Arquivos;
* Camadas de abstração.

Para aplicações simples, isso pode representar uma complexidade desnecessária.

### 15.2 Curva de Aprendizado

A separação entre:

* Portas;
* Adaptadores;
* Casos de uso;
* Domínio;
* Infraestrutura;

pode exigir mais conhecimento da equipe.

### 15.3 Maior Quantidade de Código

Algumas funcionalidades simples podem exigir mais estruturas do que em uma arquitetura tradicional.

Por isso, é importante avaliar se os benefícios justificam a complexidade.

---

## 16. Arquitetura Hexagonal e Arquitetura em Camadas

As duas arquiteturas possuem objetivos semelhantes, como:

* Separação de responsabilidades;
* Redução do acoplamento;
* Facilidade de manutenção;
* Melhor testabilidade.

No entanto, a principal diferença está na forma como as dependências são organizadas.

| Arquitetura em Camadas                           | Arquitetura Hexagonal                               |
| ------------------------------------------------ | --------------------------------------------------- |
| Organiza o sistema em níveis                     | Organiza o sistema em núcleo, portas e adaptadores  |
| Geralmente segue um fluxo entre camadas          | Permite diferentes pontos de entrada e saída        |
| Pode possuir dependências entre camadas          | Busca proteger o núcleo dos detalhes externos       |
| Foco na separação por responsabilidades técnicas | Foco na independência entre núcleo e infraestrutura |

As duas abordagens também podem ser combinadas.

Por exemplo, o núcleo de uma Arquitetura Hexagonal pode possuir uma organização interna em camadas.

---

## 17. Quando Utilizar

A Arquitetura Hexagonal pode ser especialmente útil quando:

* O sistema possui regras de negócio complexas;
* Existem diversas integrações externas;
* A testabilidade é importante;
* Existem diferentes formas de acesso à aplicação;
* A aplicação precisa reduzir dependências tecnológicas;
* Mudanças na infraestrutura são esperadas.

Para aplicações pequenas e simples, uma arquitetura mais direta pode ser suficiente.

Não é necessário utilizar portas e adaptadores para todos os sistemas.

A decisão deve considerar a complexidade e as necessidades do projeto.

---

## 18. Boas Práticas

* Manter a lógica principal independente de detalhes tecnológicos.
* Definir claramente as portas de entrada e saída.
* Utilizar adaptadores apenas para lidar com comunicação externa.
* Evitar colocar regras de negócio nos adaptadores.
* Utilizar contratos bem definidos.
* Aplicar a inversão de dependência quando necessário.
* Manter o núcleo fácil de testar.
* Evitar abstrações sem necessidade.
* Avaliar a complexidade antes de criar novas portas.
* Manter as dependências apontando para o núcleo.

---

## 19. Resumo

| Conceito             | Descrição                                      |
| -------------------- | ---------------------------------------------- |
| Núcleo               | Contém a lógica principal da aplicação         |
| Porta de Entrada     | Define como um caso de uso pode ser acionado   |
| Adaptador de Entrada | Conecta interfaces externas à aplicação        |
| Porta de Saída       | Define necessidades externas da aplicação      |
| Adaptador de Saída   | Implementa a comunicação com sistemas externos |

O fluxo pode ser resumido assim:

```text id="z5p1m8"
Entrada
   │
   ▼
Adaptador
   │
   ▼
Porta
   │
   ▼
Núcleo da Aplicação
   │
   ▼
Porta
   │
   ▼
Adaptador
   │
   ▼
Saída
```

---

## 20. Conclusão

A **Arquitetura Hexagonal** organiza o software de forma que a lógica principal da aplicação permaneça protegida dos detalhes externos.

Por meio de **portas** e **adaptadores**, diferentes tecnologias podem se conectar ao núcleo sem que ele precise depender diretamente delas.

Essa abordagem favorece o **baixo acoplamento**, a **testabilidade** e a **capacidade de evolução** do sistema.

No entanto, ela também pode aumentar a quantidade de abstrações e a complexidade da aplicação.

Por isso, a Arquitetura Hexagonal deve ser utilizada quando seus benefícios forem adequados às necessidades do sistema, buscando sempre equilibrar **flexibilidade**, **organização** e **simplicidade**.

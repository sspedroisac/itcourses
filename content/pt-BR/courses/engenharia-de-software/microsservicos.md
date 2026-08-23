# Microsserviços

## 1. O que são Microsserviços

**Microsserviços** são uma abordagem arquitetural na qual uma aplicação é dividida em pequenos serviços independentes, cada um responsável por uma funcionalidade específica do negócio.

Cada serviço pode ser desenvolvido, testado, implantado e escalado de forma independente.

Diferente de uma aplicação monolítica, onde todas as funcionalidades fazem parte de uma única unidade de execução, uma arquitetura de microsserviços distribui essas responsabilidades entre diferentes serviços.

---

## 2. Objetivos dos Microsserviços

A arquitetura de microsserviços busca:

* Dividir sistemas complexos em partes menores;
* Facilitar a manutenção e evolução da aplicação;
* Permitir deploys independentes;
* Escalar funcionalidades individualmente;
* Permitir que equipes trabalhem de forma mais independente;
* Reduzir o impacto de alterações em diferentes partes do sistema.

---

## 3. Principais características

Uma arquitetura baseada em microsserviços normalmente possui:

* **Serviços independentes:** cada serviço possui uma responsabilidade bem definida.
* **Baixo acoplamento:** os serviços devem depender o mínimo possível uns dos outros.
* **Alta coesão:** cada serviço deve concentrar funcionalidades relacionadas.
* **Deploy independente:** um serviço pode ser atualizado sem precisar implantar toda a aplicação.
* **Comunicação por APIs:** os serviços normalmente se comunicam através de HTTP, mensageria ou outros protocolos.
* **Autonomia:** cada serviço pode possuir suas próprias regras, tecnologias e banco de dados.

---

## 4. Microsserviços vs. Monólito

Em uma aplicação **monolítica**, todos os componentes fazem parte de uma única aplicação.

```text
┌───────────────────────────────┐
│          Aplicação            │
│                               │
│  ┌───────┐ ┌───────┐ ┌─────┐ │
│  │ Usuário│ │Pedidos│ │Pag. │ │
│  └───────┘ └───────┘ └─────┘ │
│                               │
└───────────────────────────────┘
```

Em uma arquitetura de **microsserviços**, essas responsabilidades são separadas.

```text
┌──────────────┐
│   Usuários   │
│   Serviço    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│    Pedidos   │
│    Serviço   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Pagamentos  │
│    Serviço   │
└──────────────┘
```

Cada serviço pode ser executado e implantado separadamente.

---

## 5. Exemplo de arquitetura

Imagine um sistema de comércio eletrônico.

Uma aplicação poderia ser dividida em:

* **Serviço de Usuários:** cadastro, autenticação e gerenciamento de usuários.
* **Serviço de Produtos:** catálogo e informações dos produtos.
* **Serviço de Pedidos:** criação e gerenciamento dos pedidos.
* **Serviço de Pagamentos:** processamento dos pagamentos.
* **Serviço de Notificações:** envio de e-mails e notificações.

Uma possível estrutura seria:

```text
                  ┌──────────────┐
                  │   Frontend   │
                  └──────┬───────┘
                         │
                         ▼
                  ┌──────────────┐
                  │ API Gateway  │
                  └──────┬───────┘
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
 ┌────────────┐   ┌────────────┐   ┌────────────┐
 │ Usuários   │   │  Produtos  │   │  Pedidos   │
 │            │   │            │   │            │
 └────────────┘   └────────────┘   └─────┬──────┘
                                         │
                                         ▼
                                  ┌────────────┐
                                  │ Pagamentos │
                                  └────────────┘
```

Cada serviço pode possuir seu próprio banco de dados e regras de negócio.

---

## 6. Comunicação entre serviços

Os microsserviços precisam se comunicar para realizar operações que envolvem diferentes partes do sistema.

Existem duas formas comuns de comunicação.

### 6.1 Comunicação síncrona

Um serviço faz uma requisição e aguarda uma resposta.

Um exemplo seria:

```text
Pedidos
   │
   │ HTTP
   ▼
Pagamentos
   │
   │ resposta
   ▼
Pedidos
```

Tecnologias como **HTTP/REST** e **gRPC** podem ser utilizadas para esse tipo de comunicação.

### 6.2 Comunicação assíncrona

Um serviço envia uma mensagem ou evento sem precisar aguardar uma resposta imediata.

```text
Pedidos
   │
   │ Evento
   ▼
Message Broker
   │
   ├──────────────► Notificações
   │
   └──────────────► Estoque
```

Essa abordagem pode utilizar filas e sistemas de mensageria.

Ela permite que os serviços sejam mais desacoplados.

---

## 7. Banco de dados por serviço

Uma prática comum em microsserviços é permitir que cada serviço seja responsável pelos seus próprios dados.

```text
┌──────────────┐       ┌──────────────┐
│   Usuários   │       │   Pedidos    │
│   Serviço    │       │   Serviço    │
└──────┬───────┘       └──────┬───────┘
       │                      │
       ▼                      ▼
 ┌──────────┐            ┌──────────┐
 │ DB Users │            │ DB Orders│
 └──────────┘            └──────────┘
```

Isso evita que vários serviços dependam diretamente das mesmas tabelas.

Cada serviço passa a controlar a estrutura e evolução de seus próprios dados.

---

## 8. Vantagens

Entre as principais vantagens dos microsserviços estão:

### 8.1 Escalabilidade independente

É possível aumentar a capacidade apenas dos serviços que precisam de mais recursos.

Por exemplo, se o serviço de pagamentos possui uma grande quantidade de requisições, apenas ele pode ser escalado.

### 8.2 Deploy independente

Uma alteração no serviço de usuários não precisa necessariamente exigir o deploy dos demais serviços.

### 8.3 Independência tecnológica

Diferentes serviços podem utilizar tecnologias diferentes quando isso fizer sentido.

Por exemplo:

```text
Usuários     → Java
Pedidos      → C#
Pagamentos   → Go
Notificações → Node.js
```

Essa liberdade deve ser utilizada com critério, pois tecnologias diferentes também aumentam a complexidade operacional.

### 8.4 Organização por domínio

Os serviços podem ser organizados de acordo com as responsabilidades do negócio.

Isso facilita a separação das regras e responsabilidades.

---

## 9. Desvantagens

Apesar dos benefícios, microsserviços também introduzem complexidade.

### 9.1 Complexidade distribuída

Uma aplicação que antes era executada como um único processo passa a depender de diversos serviços.

Problemas de rede, indisponibilidade e latência precisam ser considerados.

### 9.2 Monitoramento

É necessário acompanhar diversos serviços simultaneamente.

Ferramentas de:

* Logs;
* Métricas;
* Tracing;
* Alertas;

tornam-se importantes.

### 9.3 Consistência de dados

Quando diferentes serviços possuem seus próprios bancos de dados, operações que envolvem múltiplos serviços podem ser mais difíceis de coordenar.

### 9.4 Infraestrutura

A quantidade de componentes aumenta.

É necessário lidar com:

* Containers;
* Orquestração;
* Service Discovery;
* API Gateways;
* Mensageria;
* Monitoramento;
* Segurança;
* Deploy automatizado.

---

## 10. API Gateway

O **API Gateway** pode funcionar como uma porta de entrada para os clientes da aplicação.

Em vez de o frontend conhecer todos os microsserviços diretamente, ele pode se comunicar com o Gateway.

```text
             ┌──────────┐
             │ Frontend │
             └────┬─────┘
                  │
                  ▼
           ┌─────────────┐
           │ API Gateway │
           └──────┬──────┘
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
   Usuários    Pedidos   Produtos
```

O Gateway pode ser responsável por tarefas como:

* Roteamento;
* Autenticação;
* Autorização;
* Rate limiting;
* Agregação de respostas.

---

## 11. Microsserviços e Domain-Driven Design

A divisão dos serviços deve levar em consideração o **domínio do negócio**, e não simplesmente separar a aplicação por camadas técnicas.

Uma divisão como:

```text
Serviço de Controllers
Serviço de Repositories
Serviço de Banco de Dados
```

não representa necessariamente uma boa arquitetura de microsserviços.

É mais comum organizar os serviços de acordo com **bounded contexts** ou capacidades de negócio:

```text
┌──────────────────┐
│ Gestão de Pedidos│
└──────────────────┘

┌──────────────────┐
│ Gestão de Estoque│
└──────────────────┘

┌──────────────────┐
│    Pagamentos    │
└──────────────────┘
```

Isso ajuda a manter cada serviço focado em uma responsabilidade específica.

---

## 12. Quando utilizar Microsserviços

Microsserviços podem ser uma boa escolha quando:

* O sistema possui grande complexidade;
* Diferentes partes precisam escalar independentemente;
* Existem múltiplas equipes trabalhando no produto;
* Deploys independentes são importantes;
* O domínio possui limites bem definidos.

Entretanto, microsserviços **não devem ser utilizados apenas porque são populares**.

Para sistemas pequenos e simples, um monólito bem estruturado pode ser uma solução mais adequada.

---

## 13. Monólito vs. Microsserviços

| Característica       | Monólito                           | Microsserviços                      |
| -------------------- | ---------------------------------- | ----------------------------------- |
| Deploy               | Único                              | Independente                        |
| Escalabilidade       | Aplicação inteira                  | Por serviço                         |
| Complexidade inicial | Menor                              | Maior                               |
| Comunicação          | Interna                            | Pela rede/mensageria                |
| Banco de dados       | Geralmente compartilhado           | Pode ser independente               |
| Infraestrutura       | Mais simples                       | Mais complexa                       |
| Manutenção           | Pode ficar difícil com crescimento | Serviços menores facilitam evolução |
| Falhas distribuídas  | Menos relevantes                   | Precisam ser tratadas               |

---

## 14. Boas práticas

* Definir serviços com responsabilidades claras.
* Manter baixo acoplamento entre serviços.
* Evitar compartilhamento direto de bancos de dados.
* Utilizar APIs bem definidas.
* Monitorar logs, métricas e traces.
* Automatizar testes e deploys.
* Tratar falhas de comunicação.
* Evitar criar microsserviços excessivamente pequenos.
* Organizar serviços de acordo com o domínio do negócio.
* Avaliar se a complexidade dos microsserviços realmente é necessária.

---

## 15. Resumo

| Conceito               | Descrição                                    |
| ---------------------- | -------------------------------------------- |
| Microsserviço          | Serviço pequeno e independente               |
| Baixo acoplamento      | Pouca dependência entre serviços             |
| Alta coesão            | Responsabilidades relacionadas agrupadas     |
| API Gateway            | Ponto de entrada para os serviços            |
| Comunicação síncrona   | Requisição seguida de resposta               |
| Comunicação assíncrona | Comunicação através de mensagens ou eventos  |
| Banco por serviço      | Cada serviço controla seus próprios dados    |
| Deploy independente    | Serviços podem ser implantados separadamente |

---

## 16. Conclusão

A arquitetura de **microsserviços** divide uma aplicação em serviços independentes, organizados principalmente em torno das responsabilidades do negócio.

Essa abordagem pode proporcionar **escalabilidade, autonomia das equipes e deploys independentes**, mas também introduz desafios relacionados à comunicação, infraestrutura, monitoramento e consistência de dados.

Por isso, microsserviços não são uma evolução obrigatória de um monólito. A escolha deve considerar a **complexidade, o tamanho, o domínio e as necessidades do sistema**.

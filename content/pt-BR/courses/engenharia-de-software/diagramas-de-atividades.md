# Diagramas de Atividades

## 1. O que são Diagramas de Atividades

O **Diagrama de Atividades** é um diagrama comportamental da **UML (*Unified Modeling Language*)** utilizado para representar fluxos de trabalho, processos e sequências de atividades dentro de um sistema.

Ele permite visualizar:

* As etapas de um processo;
* A ordem em que as atividades acontecem;
* Pontos de decisão;
* Fluxos alternativos;
* Atividades executadas em paralelo;
* Início e término de um processo.

Esse tipo de diagrama é especialmente útil para representar:

* Processos de negócio;
* Fluxos de funcionalidades;
* Regras de negócio;
* Algoritmos;
* Fluxos de aprovação;
* Processos internos de um sistema.

---

## 2. Principais elementos

Os principais elementos de um Diagrama de Atividades são:

* Nó inicial;
* Atividades;
* Fluxos de controle;
* Decisões;
* Junções;
* Bifurcações;
* Atividades paralelas;
* Nó final.

Esses elementos permitem representar desde fluxos simples até processos mais complexos.

---

## 3. Nó Inicial

O **nó inicial** representa o ponto onde o fluxo começa.

Normalmente, é representado por um círculo preenchido.

```text
●
│
▼
Realizar Login
```

Um Diagrama de Atividades pode possuir mais de um ponto inicial dependendo do processo representado, mas normalmente existe um fluxo principal claramente definido.

---

## 4. Atividades

As **atividades** representam ações ou etapas executadas durante um processo.

Normalmente, são representadas por retângulos com cantos arredondados.

Exemplos:

```text
┌──────────────────────┐
│ Preencher Formulário │
└──────────────────────┘
```

```text
┌──────────────────────┐
│ Validar Dados        │
└──────────────────────┘
```

Os nomes das atividades geralmente representam uma ação.

Por isso, é comum utilizar verbos como:

* Cadastrar;
* Validar;
* Processar;
* Consultar;
* Enviar;
* Atualizar;
* Confirmar.

---

## 5. Fluxo de Controle

O **fluxo de controle** representa a ordem em que as atividades são executadas.

Ele normalmente é representado por uma seta.

Exemplo:

```text
┌─────────────────┐
│ Receber Pedido  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Validar Pedido  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Processar Pedido│
└─────────────────┘
```

As setas indicam a sequência de execução das atividades.

---

## 6. Decisão

Um **nó de decisão** representa um ponto em que o fluxo pode seguir caminhos diferentes.

Ele normalmente é representado por um losango.

Exemplo:

```text
              │
              ▼
        ◇ Dados válidos?
          /          \
       [Sim]        [Não]
         │            │
         ▼            ▼
    Continuar      Exibir Erro
```

Cada saída da decisão pode possuir uma condição.

Essas condições são chamadas de **guardas** e normalmente são representadas entre colchetes.

Exemplo:

* `[Sim]`;
* `[Não]`;
* `[Pagamento aprovado]`;
* `[Estoque disponível]`.

---

## 7. Junção de Fluxos

Quando diferentes caminhos alternativos precisam continuar em um mesmo ponto, é possível utilizar uma **junção**.

Exemplo:

```text
                 ◇ Dados válidos?
                  /           \
               [Sim]         [Não]
                 │             │
                 ▼             ▼
            Processar      Corrigir Dados
                 │             │
                 └──────┬──────┘
                        │
                        ▼
                  Continuar Fluxo
```

A junção permite representar que caminhos alternativos voltam a fazer parte do mesmo fluxo.

---

## 8. Bifurcação de Fluxos

Um Diagrama de Atividades também pode representar atividades que ocorrem em paralelo.

Para isso, é utilizada uma **bifurcação** (*fork*).

Exemplo:

```text
        Validar Pedido
               │
               ▼
═══════════════╪═══════════════
       │                       │
       ▼                       ▼
Processar Pagamento      Atualizar Estoque
       │                       │
       ▼                       ▼
═══════════════╪═══════════════
               │
               ▼
        Confirmar Pedido
```

Após a bifurcação, diferentes atividades podem ser executadas simultaneamente ou de forma independente.

O ponto onde esses fluxos voltam a se encontrar é chamado de **junção de sincronização** (*join*).

---

## 9. Nó Final

O **nó final** representa o término do fluxo.

Normalmente, é representado por um círculo preenchido dentro de outro círculo.

```text
      │
      ▼
     ◉
```

Ele indica que o processo ou atividade foi concluído.

---

## 10. Exemplo: Processo de Login

Considere o fluxo de autenticação de um usuário.

```text
●
│
▼
┌──────────────────────┐
│ Informar Credenciais │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Validar Credenciais  │
└──────────┬───────────┘
           │
           ▼
      ◇ Credenciais
        válidas?
       /         \
    [Sim]       [Não]
      │            │
      ▼            ▼
┌─────────────┐ ┌─────────────┐
│ Acessar     │ │ Exibir Erro │
│ Sistema     │ └──────┬──────┘
└──────┬──────┘        │
       │               │
       ▼               ▼
       ◉               ◉
```

Esse diagrama mostra os possíveis caminhos durante a tentativa de login.

---

## 11. Exemplo: Realizar um Pedido

Um processo de compra pode envolver diversas atividades.

```text
●
│
▼
Selecionar Produtos
│
▼
Adicionar ao Carrinho
│
▼
Confirmar Pedido
│
▼
Validar Pagamento
│
▼
◇ Pagamento aprovado?
├───────────────────┐
│                   │
[Sim]              [Não]
│                   │
▼                   ▼
Atualizar Estoque   Informar Erro
│                   │
▼                   ▼
Confirmar Pedido    ◉
│
▼
Enviar Confirmação
│
▼
◉
```

Nesse exemplo, o fluxo possui uma decisão que determina se o pedido será confirmado ou se o processo será interrompido.

---

## 12. Fluxos Alternativos

Os Diagramas de Atividades permitem representar diferentes caminhos para um mesmo processo.

Por exemplo, durante o cadastro de um usuário:

```text
●
│
▼
Preencher Cadastro
│
▼
Validar Dados
│
▼
◇ Dados válidos?
├─────────────────┐
│                 │
[Sim]            [Não]
│                 │
▼                 ▼
Criar Usuário   Exibir Erros
│                 │
▼                 │
Enviar E-mail ◀───┘
│
▼
◉
```

Os fluxos alternativos ajudam a representar situações como:

* Dados inválidos;
* Falha em uma operação;
* Ausência de informações;
* Regras de negócio diferentes;
* Processos opcionais.

---

## 13. Raias de Atividade

As **raias de atividade** (*swimlanes*) permitem dividir as atividades de acordo com os responsáveis pela sua execução.

Elas ajudam a responder:

> Quem é responsável por cada atividade?

Exemplo:

```text
┌─────────────────────┬─────────────────────┐
│      Cliente        │       Sistema       │
├─────────────────────┼─────────────────────┤
│ Preencher Pedido    │                     │
│          │          │                     │
│          └──────────┼──▶ Validar Pedido   │
│                     │          │          │
│                     │          ▼          │
│                     │    Processar Pedido │
│                     │          │          │
│ Receber Confirmação ◀──────────┘          │
└─────────────────────┴─────────────────────┘
```

As raias podem representar:

* Usuários;
* Departamentos;
* Sistemas;
* Serviços;
* Equipes;
* Componentes.

Elas são especialmente úteis para processos que envolvem diferentes responsáveis.

---

## 14. Objetos e Fluxos de Objetos

Além do fluxo de controle, um Diagrama de Atividades também pode representar o fluxo de objetos ou informações entre atividades.

Por exemplo:

```text
[Pedido]
    │
    ▼
┌──────────────────┐
│ Validar Pedido   │
└────────┬─────────┘
         │
         ▼
[Pedido Validado]
    │
    ▼
┌──────────────────┐
│ Processar Pedido │
└──────────────────┘
```

Esse tipo de representação ajuda a demonstrar quais informações são produzidas e utilizadas durante o processo.

---

## 15. Diagramas de Atividades e Processos de Negócio

Os Diagramas de Atividades são muito utilizados para representar **processos de negócio**.

Por exemplo:

```text
Receber Solicitação
        │
        ▼
Analisar Solicitação
        │
        ▼
◇ Solicitação aprovada?
       /       \
    [Sim]      [Não]
      │          │
      ▼          ▼
Executar      Informar
Solicitação   Rejeição
      │          │
      ▼          ▼
      └────┬─────┘
           │
           ▼
          Fim
```

Esse tipo de diagrama permite identificar:

* Etapas do processo;
* Responsabilidades;
* Decisões;
* Gargalos;
* Fluxos alternativos.

---

## 16. Diagramas de Atividades e Casos de Uso

O Diagrama de Atividades pode complementar um **Diagrama de Casos de Uso**.

Enquanto o Diagrama de Casos de Uso responde:

> **Quais funcionalidades o sistema oferece?**

O Diagrama de Atividades ajuda a responder:

> **Quais etapas são executadas para realizar uma funcionalidade?**

Exemplo:

```text
Diagrama de Casos de Uso
        │
        ▼
(Realizar Pedido)
        │
        ▼
Diagrama de Atividades
        │
        ▼
Selecionar Produtos
        │
        ▼
Confirmar Pedido
        │
        ▼
Processar Pagamento
        │
        ▼
Confirmar Pedido
```

Dessa forma, um caso de uso pode ser detalhado por meio de um ou mais Diagramas de Atividades.

---

## 17. Diagrama de Atividades e Diagrama de Sequência

Embora ambos representem comportamentos, eles possuem objetivos diferentes.

| Diagrama de Atividades                   | Diagrama de Sequência                          |
| ---------------------------------------- | ---------------------------------------------- |
| Representa o fluxo de atividades         | Representa interações entre participantes      |
| Foca nas etapas de um processo           | Foca na troca de mensagens                     |
| Pode representar decisões e paralelismo  | Mostra a ordem das mensagens ao longo do tempo |
| Útil para processos e fluxos de trabalho | Útil para interações entre objetos e sistemas  |

Exemplo:

```text
Diagrama de Atividades

Validar Pedido
       │
       ▼
Processar Pagamento
       │
       ▼
Confirmar Pedido
```

Já em um Diagrama de Sequência:

```text
Cliente → Sistema → Pagamento
                 ← Resultado
```

Os dois diagramas podem ser utilizados de forma complementar.

---

## 18. Boas práticas

Ao criar um Diagrama de Atividades:

* Mantenha o fluxo fácil de acompanhar.
* Utilize nomes claros para as atividades.
* Represente decisões apenas quando existirem caminhos diferentes.
* Identifique as condições dos fluxos alternativos.
* Utilize paralelismo apenas quando as atividades realmente puderem ocorrer de forma independente.
* Utilize raias quando for importante identificar responsabilidades.
* Evite adicionar detalhes técnicos desnecessários.
* Divida processos muito complexos em diagramas menores.

---

## 19. Erros comuns

### 19.1 Confundir decisão com atividade

Uma atividade representa uma ação.

Uma decisão representa uma condição que determina qual caminho será seguido.

Por exemplo:

```text
Atividade:
Validar Pagamento
```

```text
Decisão:
Pagamento aprovado?
```

---

### 19.2 Representar fluxos excessivamente detalhados

Representar cada pequena operação pode tornar o diagrama difícil de compreender.

O nível de detalhe deve depender do objetivo do diagrama.

---

### 19.3 Não identificar condições

Quando uma decisão possui vários caminhos, é importante indicar em quais condições cada caminho será seguido.

Exemplo:

```text
◇ Estoque disponível?
    │
 ┌──┴──┐
[Sim] [Não]
```

---

### 19.4 Utilizar paralelismo incorretamente

Atividades paralelas devem representar tarefas que podem ocorrer independentemente.

Não deve ser utilizada uma bifurcação apenas para organizar visualmente o diagrama.

---

## 20. Resumo

| Elemento          | Descrição                              |
| ----------------- | -------------------------------------- |
| Nó Inicial        | Representa o início do fluxo           |
| Atividade         | Representa uma ação ou etapa           |
| Fluxo de Controle | Representa a ordem das atividades      |
| Decisão           | Representa caminhos alternativos       |
| Guarda            | Define a condição de um fluxo          |
| Junção            | Reúne fluxos alternativos              |
| Bifurcação        | Divide o fluxo em atividades paralelas |
| Join              | Sincroniza fluxos paralelos            |
| Raias             | Organizam atividades por responsável   |
| Nó Final          | Representa o término do fluxo          |

---

## 21. Conclusão

O **Diagrama de Atividades** é uma ferramenta da UML utilizada para representar fluxos, processos e sequências de atividades.

Ele permite visualizar com clareza:

* Como um processo começa;
* Quais etapas são executadas;
* Quais decisões podem ocorrer;
* Quais caminhos alternativos existem;
* Quais atividades podem acontecer em paralelo;
* Como o processo termina.

Por ser uma representação visual de fluxos de trabalho, o Diagrama de Atividades é especialmente útil para compreender processos de negócio, detalhar funcionalidades e analisar regras de negócio.

Quando utilizado corretamente, ele ajuda a melhorar a comunicação, identificar possíveis problemas no fluxo e tornar processos complexos mais fáceis de compreender.

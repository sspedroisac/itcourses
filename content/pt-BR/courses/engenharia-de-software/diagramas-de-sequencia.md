# Diagramas de Sequência

## 1. O que são Diagramas de Sequência

O **Diagrama de Sequência** é um diagrama comportamental da **UML (*Unified Modeling Language*)** utilizado para representar a interação entre diferentes elementos de um sistema ao longo do tempo.

Ele mostra:

* Quais participantes estão envolvidos;
* Quais mensagens são trocadas;
* Em que ordem as interações acontecem;
* Como uma operação é executada.

O principal objetivo é demonstrar a **sequência das interações** necessárias para realizar determinada funcionalidade.

Por esse motivo, os Diagramas de Sequência são especialmente úteis para representar cenários como:

* Realizar login;
* Processar um pagamento;
* Criar um pedido;
* Recuperar uma senha;
* Integrar sistemas;
* Executar processos complexos.

---

## 2. Principais elementos

Os principais elementos de um Diagrama de Sequência são:

* Participantes;
* Linhas de vida;
* Mensagens;
* Barras de ativação;
* Retornos;
* Fragmentos combinados.

Cada elemento ajuda a representar como os participantes interagem durante a execução de um processo.

---

## 3. Participantes

Os **participantes** representam as entidades envolvidas em uma interação.

Dependendo do contexto, um participante pode ser:

* Um usuário;
* Um objeto;
* Uma classe;
* Um componente;
* Um serviço;
* Um sistema externo;
* Um banco de dados.

Exemplo:

```text
┌─────────┐     ┌─────────┐     ┌───────────────┐
│ Usuário │     │ Sistema │     │ Banco de Dados│
└─────────┘     └─────────┘     └───────────────┘
```

Os participantes são normalmente posicionados na parte superior do diagrama.

---

## 4. Linha de Vida

A **linha de vida** representa a existência de um participante durante a interação.

Ela é normalmente representada por uma linha vertical tracejada.

```text
Usuário
   │
   ┆
   ┆
   ┆
   ┆
```

O tempo é representado de cima para baixo.

Isso significa que os eventos localizados na parte superior acontecem antes dos eventos localizados abaixo.

---

## 5. Mensagens

As **mensagens** representam a comunicação entre os participantes.

Normalmente, são representadas por setas horizontais.

Exemplo:

```text
Usuário              Sistema

   │                    │
   │──── Fazer Login ──▶│
   │                    │
```

Nesse caso, o usuário envia uma mensagem ao sistema solicitando a realização do login.

Uma mensagem pode representar:

* Chamada de um método;
* Requisição;
* Evento;
* Envio de dados;
* Comunicação entre serviços.

---

## 6. Mensagens Síncronas

Uma **mensagem síncrona** representa uma comunicação em que o participante que envia a mensagem aguarda a conclusão da operação antes de continuar.

Exemplo:

```text
Cliente              Sistema

   │                    │
   │── consultar() ────▶│
   │                    │
   │◀── resultado() ────│
   │                    │
```

Nesse tipo de interação, o fluxo continua após a resposta da operação.

Esse comportamento é comum em chamadas de métodos e requisições que aguardam uma resposta.

---

## 7. Mensagens Assíncronas

Uma **mensagem assíncrona** representa uma comunicação em que o participante envia uma mensagem, mas não precisa aguardar a conclusão da operação para continuar.

Exemplo:

```text
Sistema A              Sistema B

    │                      │
    │─── evento ──────────▶│
    │                      │
    │ continua execução    │
    │                      │
```

Esse tipo de comunicação é comum em:

* Filas de mensagens;
* Eventos;
* Processamento em segundo plano;
* Arquiteturas orientadas a eventos.

---

## 8. Mensagens de Retorno

Uma **mensagem de retorno** representa uma resposta enviada após uma operação.

Ela geralmente é representada por uma linha tracejada.

Exemplo:

```text
Sistema              Banco de Dados

   │                       │
   │── consultarDados() ──▶│
   │                       │
   │◀ - - - resultado - - -│
   │                       │
```

O retorno pode representar:

* Dados encontrados;
* Resultado de uma operação;
* Confirmação;
* Erro.

Em alguns diagramas, a mensagem de retorno pode ser omitida quando não for necessária para a compreensão do fluxo.

---

## 9. Barra de Ativação

A **barra de ativação** representa o período durante o qual um participante está executando uma operação.

Ela normalmente é desenhada sobre a linha de vida.

Exemplo:

```text
Sistema
   │
   ┆
   █
   █ processar()
   █
   ┆
```

A barra de ativação ajuda a visualizar quando determinado participante está ativo durante a interação.

---

## 10. Exemplo: Realizar Login

Considere um sistema no qual um usuário realiza login.

Os participantes são:

* Usuário;
* Aplicação;
* Serviço de Autenticação;
* Banco de Dados.

O fluxo pode ocorrer da seguinte forma:

```text
Usuário       Aplicação      Autenticação       Banco de Dados
   │               │                │                  │
   │── Login ─────▶│                │                  │
   │               │── autenticar()▶│                  │
   │               │                │── consultar() ──▶│
   │               │                │◀ - usuário - - - │
   │               │◀ - sucesso - ──│                  │
   │◀ - acesso - ──│                │                  │
   │               │                │                  │
```

A ordem das mensagens mostra o fluxo completo da interação.

1. O usuário solicita o login;
2. A aplicação envia as credenciais para o serviço de autenticação;
3. O serviço consulta os dados necessários;
4. O banco retorna o resultado;
5. O serviço informa o resultado para a aplicação;
6. A aplicação retorna uma resposta ao usuário.

---

## 11. Fragmentos Combinados

Os **fragmentos combinados** permitem representar estruturas de controle dentro do Diagrama de Sequência.

Eles são especialmente úteis para representar:

* Condições;
* Alternativas;
* Repetições;
* Fluxos opcionais;
* Execuções paralelas.

Alguns dos principais tipos são:

* `alt`;
* `opt`;
* `loop`;
* `par`.

---

## 12. Fragmento `alt`

O fragmento **`alt`** representa fluxos alternativos.

Ele é semelhante a uma estrutura `if/else`.

Exemplo:

```text
┌──────────────────── alt ─────────────────────┐
│ [Credenciais válidas]                        │
│                                              │
│ Usuário ◀──── Acesso permitido ─── Sistema   │
├──────────────────────────────────────────────┤
│ [Credenciais inválidas]                      │
│                                              │
│ Usuário ◀──── Exibir erro ───────── Sistema  │
└──────────────────────────────────────────────┘
```

A condição determina qual fluxo será executado.

---

## 13. Fragmento `opt`

O fragmento **`opt`** representa um comportamento opcional.

Ele é semelhante a uma estrutura `if` sem uma alternativa.

Exemplo:

```text
┌────────────────── opt ──────────────────┐
│ [Cliente possui cupom]                  │
│                                         │
│ Aplicar desconto                        │
└─────────────────────────────────────────┘
```

O comportamento será executado apenas se a condição for verdadeira.

---

## 14. Fragmento `loop`

O fragmento **`loop`** representa uma repetição.

Ele pode ser utilizado quando uma determinada interação precisa ocorrer várias vezes.

Exemplo:

```text
┌────────────────── loop ─────────────────┐
│ [Para cada produto]                     │
│                                         │
│ Pedido ─── adicionarItem() ───▶ Carrinho│
└─────────────────────────────────────────┘
```

Esse fragmento pode representar uma estrutura semelhante a:

```text
para cada produto
    adicionar produto ao carrinho
```

---

## 15. Fragmento `par`

O fragmento **`par`** representa interações que podem ocorrer em paralelo.

Exemplo:

```text
┌──────────────────── par ────────────────────┐
│ Sistema ─── enviarEmail() ───▶ Serviço Email│
├─────────────────────────────────────────────┤
│ Sistema ─── atualizarEstoque() ──▶ Estoque  │
└─────────────────────────────────────────────┘
```

Nesse caso, as duas operações podem ocorrer de forma independente ou simultânea.

---

## 16. Exemplo: Realizar um Pedido

Considere uma funcionalidade de compra em um sistema de vendas.

Os participantes são:

* Cliente;
* Sistema;
* Serviço de Pagamento;
* Serviço de Estoque.

O fluxo pode ser representado da seguinte forma:

```text
Cliente        Sistema        Pagamento        Estoque
   │               │               │               │
   │─ confirmar()─▶│               │               │
   │               │─ processar()─▶│               │
   │               │◀- aprovado - -│               │
   │               │                               │
   │               │─ reservar() ─────────────────▶│
   │               │◀ - confirmado - - - - - - - - │
   │               │                               │
   │◀ pedido confirmado                             │
   │               │               │               │
```

Esse exemplo mostra como diferentes serviços podem participar da execução de uma única funcionalidade.

---

## 17. Fluxos Alternativos

Um Diagrama de Sequência também pode representar situações em que uma operação não ocorre conforme o fluxo principal.

Por exemplo, durante o processamento de um pagamento:

```text
┌────────────────────── alt ──────────────────────┐
│ [Pagamento aprovado]                            │
│                                                 │
│ Sistema ─── confirmarPedido() ───▶ Pedido       │
├─────────────────────────────────────────────────┤
│ [Pagamento recusado]                            │
│                                                 │
│ Sistema ─── informarErro() ───────▶ Cliente     │
└─────────────────────────────────────────────────┘
```

Isso permite representar diferentes cenários dentro do mesmo processo.

---

## 18. Diagrama de Sequência e Casos de Uso

O Diagrama de Sequência pode complementar um **Diagrama de Casos de Uso**.

Enquanto o Diagrama de Casos de Uso responde principalmente:

> **Quais funcionalidades o sistema oferece e quem interage com elas?**

O Diagrama de Sequência ajuda a responder:

> **Como os participantes interagem para executar determinada funcionalidade?**

Por exemplo:

```text
Diagrama de Casos de Uso
        │
        ▼
(Realizar Pedido)
        │
        ▼
Diagrama de Sequência
        │
        ▼
Cliente → Sistema → Pagamento → Estoque
```

Dessa forma, um caso de uso pode possuir um ou mais Diagramas de Sequência representando seus diferentes cenários.

---

## 19. Boas práticas

Ao criar um Diagrama de Sequência:

* Escolha um cenário específico para representar.
* Inclua apenas os participantes relevantes.
* Mantenha a ordem das mensagens clara.
* Utilize nomes significativos para as mensagens.
* Represente fluxos alternativos quando forem importantes.
* Evite adicionar detalhes desnecessários.
* Divida diagramas muito complexos em diagramas menores.
* Utilize fragmentos combinados para representar condições e repetições.
* Mantenha o foco na interação, e não na estrutura interna das classes.

---

## 20. Erros comuns

### 20.1 Representar muitos cenários no mesmo diagrama

Tentar representar todos os possíveis comportamentos em um único Diagrama de Sequência pode torná-lo difícil de compreender.

É geralmente melhor criar diagramas separados para cenários importantes.

### 20.2 Confundir sequência com fluxo de dados

O objetivo do diagrama é mostrar a ordem das interações.

Ele não deve ser utilizado apenas para demonstrar por onde os dados passam.

### 20.3 Adicionar detalhes de implementação desnecessários

Nem sempre é necessário representar cada método interno do sistema.

O nível de detalhe deve depender do objetivo do diagrama.

### 20.4 Ignorar fluxos alternativos importantes

Fluxos de erro e condições relevantes também podem fazer parte da interação.

Quando forem importantes para a compreensão da funcionalidade, devem ser representados.

---

## 21. Resumo

| Conceito            | Descrição                                                 |
| ------------------- | --------------------------------------------------------- |
| Participante        | Entidade envolvida na interação                           |
| Linha de Vida       | Representa a existência do participante ao longo do tempo |
| Mensagem            | Comunicação entre participantes                           |
| Mensagem Síncrona   | O emissor aguarda a conclusão da operação                 |
| Mensagem Assíncrona | O emissor não precisa aguardar a conclusão                |
| Retorno             | Representa uma resposta de uma operação                   |
| Barra de Ativação   | Representa o período de execução                          |
| `alt`               | Representa fluxos alternativos                            |
| `opt`               | Representa um comportamento opcional                      |
| `loop`              | Representa uma repetição                                  |
| `par`               | Representa interações paralelas                           |

---

## 22. Conclusão

O **Diagrama de Sequência** é uma ferramenta importante da UML para representar como diferentes participantes interagem durante a execução de uma funcionalidade.

Seu principal diferencial é demonstrar **a ordem das mensagens ao longo do tempo**, permitindo compreender como uma operação é executada e quais elementos participam dela.

Ele é especialmente útil para detalhar casos de uso, representar integrações entre sistemas e analisar fluxos complexos.

Quando utilizado corretamente, o Diagrama de Sequência ajuda a melhorar a comunicação entre os envolvidos, identificar responsabilidades e compreender com mais clareza o comportamento de um sistema.

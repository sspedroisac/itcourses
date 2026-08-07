# Kanban

## 1. O que é Kanban

O **Kanban** é um método utilizado para gerenciar e melhorar o fluxo de trabalho.

Ele utiliza uma representação visual das atividades para tornar o trabalho mais transparente, facilitar a identificação de problemas e ajudar a equipe a controlar a quantidade de trabalho em andamento.

O Kanban pode ser utilizado no desenvolvimento de software e também em outras áreas, como atendimento, marketing, operações e gestão.

---

## 2. Objetivos do Kanban

O Kanban busca:

- Visualizar o trabalho;
- Melhorar o fluxo de atividades;
- Limitar o trabalho em andamento;
- Identificar gargalos;
- Reduzir desperdícios;
- Aumentar a previsibilidade;
- Promover melhoria contínua.

---

## 3. Quadro Kanban

O principal elemento visual do Kanban é o **quadro Kanban**.

Ele representa as etapas pelas quais uma atividade passa durante o trabalho.

Um exemplo simples:

```text
┌──────────────┬──────────────┬──────────────┬──────────────┐
│     A Fazer  │ Em andamento│   Em revisão │    Concluído │
├──────────────┼──────────────┼──────────────┼──────────────┤
│ Login        │ Pagamento    │ Cadastro     │ Relatórios   │
│ Dashboard    │              │              │              │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

Cada atividade é representada por um **cartão** e movimentada entre as colunas conforme seu estado muda.

---

## 4. Fluxo de trabalho

No Kanban, o trabalho normalmente percorre um fluxo contínuo.

Por exemplo:

```text
A Fazer
   │
   ▼
Desenvolvimento
   │
   ▼
Teste
   │
   ▼
Revisão
   │
   ▼
Concluído
```

A equipe acompanha visualmente onde cada atividade está e identifica pontos em que o fluxo está parado ou acumulado.

---

## 5. Work in Progress (WIP)

**WIP (Work in Progress)** representa o trabalho que está atualmente em andamento.

Uma das principais práticas do Kanban é **limitar o WIP**.

Por exemplo:

```text
Em Desenvolvimento
Limite: 2 tarefas

┌───────────────┐
│   Tarefa A    │
├───────────────┤
│   Tarefa B    │
└───────────────┘
```

Se o limite for atingido, a equipe deve evitar iniciar novas tarefas e concentrar seus esforços em concluir o trabalho existente.

Isso ajuda a evitar que muitas atividades sejam iniciadas simultaneamente.

---

## 6. Por que limitar o WIP

Quando muitas tarefas são iniciadas ao mesmo tempo, podem surgir problemas como:

- Muitas interrupções;
- Troca constante de contexto;
- Aumento do tempo de conclusão;
- Acúmulo de tarefas;
- Dificuldade para identificar gargalos.

Ao limitar o trabalho em andamento, a equipe tende a **terminar mais tarefas antes de iniciar novas**.

---

## 7. Gargalos

Um **gargalo** ocorre quando uma etapa do fluxo não consegue processar o trabalho na mesma velocidade que as etapas anteriores.

Por exemplo:

```text
Desenvolvimento
████████████████

       ▼

Testes
████████████████████████
```

Se muitas tarefas chegam ao estágio de testes e poucas conseguem ser concluídas, uma fila começa a se formar.

O quadro Kanban torna esse problema visual.

A equipe pode então investigar a causa e buscar uma solução.

---

## 8. Princípios do Kanban

O Kanban pode ser resumido em alguns princípios fundamentais.

### 8.1 Visualizar o trabalho

O trabalho deve estar visível para que todos consigam compreender seu estado atual.

### 8.2 Limitar o trabalho em andamento

A quantidade de tarefas simultaneamente em execução deve ser controlada.

### 8.3 Gerenciar o fluxo

A equipe deve observar como as tarefas percorrem o processo e procurar melhorar esse fluxo.

### 8.4 Tornar as políticas explícitas

As regras utilizadas para movimentar as tarefas devem ser claras para todos.

### 8.5 Implementar ciclos de feedback

A equipe deve utilizar feedback para identificar problemas e melhorar o processo.

### 8.6 Melhorar continuamente

O processo deve ser constantemente analisado e aprimorado.

---

## 9. Métricas do Kanban

Algumas métricas podem ajudar a equipe a entender o desempenho do fluxo.

### 9.1 Lead Time

O **Lead Time** representa o tempo entre a solicitação de uma atividade e sua conclusão.

```text
Solicitação
    │
    ├───────────────►
                    │
                 Conclusão
```

Quanto menor o Lead Time, mais rapidamente o trabalho percorre todo o processo.

### 9.2 Cycle Time

O **Cycle Time** representa o tempo necessário para concluir uma atividade depois que ela começa a ser efetivamente trabalhada.

```text
Início do trabalho
        │
        ├──────────►
                   │
                Conclusão
```

### 9.3 Throughput

O **Throughput** representa a quantidade de itens concluídos em determinado período.

Por exemplo:

```text
Semana 1 → 12 itens
Semana 2 → 15 itens
Semana 3 → 18 itens
```

Essa métrica ajuda a compreender a capacidade de entrega do fluxo.

---

## 10. Kanban x Scrum

Kanban e Scrum são abordagens utilizadas no desenvolvimento ágil, mas possuem diferenças importantes.

| Kanban                               | Scrum                                                 |
| ------------------------------------ | ----------------------------------------------------- |
| Fluxo contínuo                       | Trabalho organizado em Sprints                        |
| Não exige papéis específicos         | Possui Product Owner, Scrum Master e Developers       |
| WIP é limitado                       | Trabalho é selecionado para a Sprint                  |
| Mudanças podem ocorrer continuamente | Mudanças são normalmente controladas durante a Sprint |
| Quadro visual é fundamental          | Possui eventos, artefatos e compromissos definidos    |

Eles também podem ser utilizados em conjunto.

Por exemplo, uma equipe Scrum pode utilizar práticas de Kanban para visualizar o fluxo e controlar o WIP.

---

## 11. Exemplo prático

Imagine uma equipe responsável por desenvolver funcionalidades de um sistema.

O quadro pode ser:

```text
┌───────────┬──────────────┬───────────┬────────────┐
│ A Fazer   │ Desenvolvendo│  Testando │ Concluído  │
├───────────┼──────────────┼───────────┼────────────┤
│ Login     │ Carrinho     │ Cadastro  │ Relatórios │
│ Checkout  │              │           │            │
└───────────┴──────────────┴───────────┴────────────┘
```

Quando a equipe termina o desenvolvimento do carrinho, o cartão é movido para **Testando**.

Se o limite da coluna de testes for atingido, os desenvolvedores podem ajudar a concluir os testes antes de iniciar outra funcionalidade.

Dessa maneira, o foco passa a ser **melhorar o fluxo de entrega**, e não simplesmente iniciar mais tarefas.

---

## 12. Benefícios do Kanban

Entre os principais benefícios estão:

- Maior transparência;
- Visualização clara do trabalho;
- Identificação de gargalos;
- Redução de multitarefa;
- Melhoria do fluxo;
- Maior previsibilidade;
- Redução do tempo de entrega;
- Melhoria contínua.

---

## 13. Boas práticas

- Manter o quadro atualizado.
- Definir claramente as etapas do fluxo.
- Estabelecer limites de WIP.
- Evitar iniciar novas tarefas quando existem gargalos.
- Medir o fluxo de trabalho.
- Identificar e resolver bloqueios.
- Revisar regularmente o processo.
- Buscar pequenas melhorias continuamente.

---

## 14. Resumo

| Conceito      | Descrição                                             |
| ------------- | ----------------------------------------------------- |
| Kanban        | Método para visualizar e melhorar o fluxo de trabalho |
| Quadro Kanban | Representação visual do fluxo                         |
| Cartão        | Representa uma atividade                              |
| WIP           | Trabalho em andamento                                 |
| Limite de WIP | Quantidade máxima de trabalho em uma etapa            |
| Lead Time     | Tempo desde a solicitação até a conclusão             |
| Cycle Time    | Tempo entre o início e a conclusão do trabalho        |
| Throughput    | Quantidade de itens concluídos em determinado período |
| Gargalo       | Etapa que limita o fluxo de trabalho                  |

---

## 15. Conclusão

O **Kanban** é um método focado na **visualização, controle e melhoria do fluxo de trabalho**.

Ao utilizar um quadro visual, limitar o trabalho em andamento e acompanhar métricas como Lead Time, Cycle Time e Throughput, a equipe consegue identificar gargalos e buscar melhorias contínuas.

Seu foco principal não está em trabalhar mais, mas em **criar um fluxo de trabalho mais eficiente, previsível e sustentável**.

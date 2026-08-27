# Planejamento de Projetos

## 1. Introdução

O **planejamento de projetos de software** organiza o trabalho necessário para transformar uma necessidade em uma entrega de valor.

Planejar não significa prever todos os detalhes com precisão. Significa criar uma visão inicial, explicitar premissas, identificar riscos e estabelecer uma forma de acompanhar e adaptar o trabalho.

---

## 2. Objetivos do planejamento

Um bom planejamento ajuda a:

- Definir o objetivo do projeto;
- Delimitar o escopo;
- Identificar entregas e prioridades;
- Estimar esforço, prazo e custo;
- Distribuir responsabilidades;
- Antecipar riscos;
- Definir como o progresso será acompanhado.

O planejamento também cria um entendimento comum entre a equipe, os clientes e as demais partes interessadas.

---

## 3. Escopo do projeto

O **escopo** descreve o que faz parte do projeto e, quando necessário, o que está fora dele.

Um escopo claro reduz expectativas conflitantes e ajuda a avaliar solicitações de mudança.

Exemplo de escopo para uma loja virtual:

- Cadastro de produtos;
- Carrinho de compras;
- Pagamento;
- Acompanhamento do pedido.

Também pode ser importante registrar que a primeira versão não incluirá programa de fidelidade ou integração com determinado marketplace.

---

## 4. Entregas e decomposição do trabalho

Uma entrega é um resultado verificável do projeto. Para facilitar o planejamento, uma entrega maior pode ser dividida em partes menores.

```text
Projeto
  │
  ├── Descoberta
  ├── Cadastro de produtos
  ├── Carrinho
  ├── Pagamento
  └── Acompanhamento do pedido
```

Cada parte pode ser dividida em tarefas ou histórias menores, desde que a decomposição ajude a compreender e acompanhar o trabalho.

---

## 5. Partes interessadas

As **partes interessadas** são pessoas ou grupos afetados pelo projeto ou capazes de influenciá-lo.

Podem incluir clientes, usuários, patrocinadores, equipe técnica, suporte, operações e áreas jurídicas ou financeiras.

É importante entender suas necessidades, seu nível de influência e a forma adequada de comunicação com cada grupo.

---

## 6. Cronograma e dependências

O cronograma representa a sequência esperada das atividades e entregas.

Algumas atividades dependem de outras. Por exemplo, a implementação de uma tela pode depender da definição de um contrato de API.

```text
Requisito validado
        │
        ▼
Contrato da API
        │
        ▼
Implementação da tela
        │
        ▼
Testes integrados
```

Dependências não identificadas são uma causa frequente de atrasos.

---

## 7. Plano de comunicação

O projeto precisa definir como as informações serão compartilhadas.

Um plano simples pode indicar:

| Informação        | Público                 | Frequência          | Canal                |
| ----------------- | ----------------------- | ------------------- | -------------------- |
| Progresso         | Stakeholders            | Semanal             | Reunião ou relatório |
| Bloqueios         | Equipe                  | Quando surgirem     | Canal de trabalho    |
| Decisões técnicas | Equipe e interessados   | Conforme necessário | Registro de decisão  |
| Incidentes        | Operação e responsáveis | Imediata            | Canal de incidentes  |

Comunicação adequada reduz surpresas e acelera decisões.

---

## 8. Acompanhamento e adaptação

O plano inicial deve ser comparado com o que realmente acontece.

Quando surgirem mudanças, bloqueios ou novas informações, a equipe deve atualizar prioridades, prazo ou escopo de forma transparente.

```text
Planejar → Executar → Observar → Ajustar
    ▲                         │
    └─────────────────────────┘
```

Um plano que nunca é revisado deixa de representar a realidade do projeto.

---

## 9. Planejamento em projetos ágeis

Projetos ágeis também são planejados, mas o planejamento acontece em diferentes níveis.

Existe uma visão de produto e de entregas maiores, além do planejamento de cada iteração ou ciclo de trabalho.

O detalhamento tende a aumentar conforme a execução se aproxima, porque a equipe possui mais informação sobre o problema e a solução.

---

## 10. Resumo

| Conceito             | Descrição                                          |
| -------------------- | -------------------------------------------------- |
| Escopo               | Limites do que será realizado                      |
| Entrega              | Resultado verificável do projeto                   |
| Dependência          | Relação que condiciona a execução de uma atividade |
| Parte interessada    | Pessoa ou grupo afetado ou influente no projeto    |
| Cronograma           | Sequência e previsão temporal das atividades       |
| Plano de comunicação | Definição de informações, públicos e canais        |

---

## 11. Boas práticas

- Definir o objetivo antes de detalhar tarefas;
- Manter o escopo compreensível e verificável;
- Dividir entregas grandes em partes menores;
- Identificar dependências e premissas;
- Comunicar mudanças e bloqueios cedo;
- Revisar o plano conforme novas informações surgirem;
- Usar o planejamento para apoiar decisões, não para criar falsa precisão.

---

## 12. Conclusão

O planejamento fornece direção, alinha expectativas e torna riscos mais visíveis. Ele deve ser detalhado o suficiente para orientar o trabalho e flexível o suficiente para acompanhar a realidade.

Em projetos de software, planejar e aprender são atividades contínuas.

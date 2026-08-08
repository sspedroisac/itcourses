# Validação de Requisitos

## 1. O que é Validação de Requisitos

A **validação de requisitos** é a atividade responsável por verificar se os requisitos definidos para um sistema estão corretos, completos, consistentes e representam adequadamente as necessidades dos stakeholders.

Seu objetivo é identificar problemas nos requisitos **antes da implementação**, reduzindo o risco de desenvolver funcionalidades incorretas ou desnecessárias.

A validação busca responder principalmente:

> **Estamos especificando corretamente aquilo que o sistema realmente precisa atender?**

---

## 2. Objetivos da Validação

A validação de requisitos busca:

- Verificar se os requisitos representam as necessidades dos stakeholders;
- Identificar requisitos incompletos;
- Encontrar ambiguidades;
- Detectar inconsistências;
- Verificar se os requisitos são viáveis;
- Garantir que os requisitos sejam testáveis;
- Identificar conflitos entre requisitos;
- Reduzir erros antes do desenvolvimento.

Quanto mais cedo um problema for encontrado, menor tende a ser o custo para corrigi-lo.

---

## 3. Por que Validar os Requisitos?

Um requisito incorreto pode causar problemas em várias etapas do projeto.

Por exemplo:

```text
Requisito incorreto
        │
        ▼
Implementação incorreta
        │
        ▼
Testes com falhas
        │
        ▼
Retrabalho
        │
        ▼
Aumento de custo e prazo
```

Por isso, a validação deve acontecer antes que os requisitos sejam utilizados como base definitiva para o desenvolvimento.

---

## 4. Características de Requisitos Validados

Durante a validação, os requisitos podem ser avaliados em relação a diferentes características.

### 4.1 Correção

O requisito deve representar uma necessidade real do sistema.

Exemplo:

> O sistema deve permitir que o cliente consulte seus pedidos.

É necessário confirmar com os stakeholders se essa funcionalidade realmente é necessária.

### 4.2 Completude

Os requisitos devem conter informações suficientes para compreender o comportamento esperado.

Um requisito como:

> O sistema deve permitir cancelar pedidos.

pode estar incompleto se não informar, por exemplo, em quais situações o cancelamento é permitido.

### 4.3 Consistência

Os requisitos não devem entrar em conflito entre si.

Por exemplo:

> O sistema deve permitir que qualquer funcionário cancele pedidos.

e:

> Apenas gerentes podem cancelar pedidos.

Esses requisitos apresentam um conflito que precisa ser resolvido.

### 4.4 Não Ambiguidade

Um requisito deve possuir uma interpretação clara.

Exemplo problemático:

> O sistema deve responder rapidamente.

O termo **rapidamente** pode ter significados diferentes.

Uma especificação mais objetiva seria:

> O sistema deve responder às consultas em até 2 segundos.

### 4.5 Viabilidade

O requisito deve ser possível de implementar considerando as restrições do projeto.

Devem ser considerados fatores como:

- Tecnologia;
- Prazo;
- Orçamento;
- Recursos;
- Infraestrutura.

### 4.6 Testabilidade

Deve ser possível verificar objetivamente se o requisito foi atendido.

Exemplo:

> O sistema deve permitir o cadastro de clientes.

Esse requisito pode ser verificado executando o processo de cadastro.

Já um requisito como:

> O sistema deve ser fácil de utilizar.

é mais difícil de testar sem estabelecer critérios objetivos.

---

## 5. Critérios de Validação

Uma revisão de requisitos pode verificar diferentes aspectos.

| Critério        | Pergunta                                          |
| --------------- | ------------------------------------------------- |
| Correção        | O requisito representa uma necessidade real?      |
| Completude      | Todas as informações necessárias estão presentes? |
| Consistência    | Existe conflito com outros requisitos?            |
| Clareza         | O requisito possui uma interpretação clara?       |
| Viabilidade     | É possível implementar o requisito?               |
| Testabilidade   | É possível verificar se ele foi atendido?         |
| Rastreabilidade | É possível identificar sua origem?                |

Esses critérios ajudam a estruturar a avaliação dos requisitos.

---

## 6. Técnicas de Validação

Existem diferentes técnicas que podem ser utilizadas para validar requisitos.

Entre elas estão:

- Revisões;
- Inspeções;
- Prototipação;
- Criação de casos de teste;
- Validação com stakeholders.

---

## 7. Revisões de Requisitos

As **revisões** consistem em analisar os requisitos com participação de pessoas envolvidas no projeto.

Podem participar:

- Analistas;
- Desenvolvedores;
- Testadores;
- Clientes;
- Usuários;
- Especialistas do negócio.

Durante a revisão, os participantes procuram identificar problemas e esclarecer dúvidas.

---

## 8. Prototipação na Validação

Protótipos podem ser utilizados para verificar se os requisitos representam aquilo que os usuários esperam.

Por exemplo, um requisito determina que o sistema deve possuir uma tela de acompanhamento de pedidos.

Ao visualizar um protótipo, o usuário pode perceber que são necessários:

- Filtros;
- Status do pedido;
- Data da compra;
- Informações de entrega.

Dessa forma, o protótipo permite validar a compreensão dos requisitos antes da implementação.

---

## 9. Casos de Teste como Forma de Validação

Uma maneira de verificar se um requisito é suficientemente claro é tentar criar um teste para ele.

Considere:

> O sistema deve bloquear o acesso após cinco tentativas de login inválidas.

Esse requisito possui um comportamento específico que pode ser testado.

Um possível teste seria:

1. Informar uma senha incorreta;
2. Repetir a operação até atingir cinco tentativas;
3. Verificar se o acesso foi bloqueado.

Se não for possível definir claramente como testar um requisito, talvez ele precise ser melhor especificado.

---

## 10. Exemplo Prático

Imagine um sistema de comércio eletrônico.

Um requisito inicialmente definido é:

> O sistema deve permitir que o cliente cancele pedidos.

Durante a validação, a equipe identifica algumas perguntas:

- O cancelamento pode ocorrer depois do pagamento?
- O cliente pode cancelar depois do envio?
- Existe um prazo para cancelamento?
- O valor deve ser reembolsado?
- O cancelamento precisa de autorização?

Após discutir essas questões com os stakeholders, o requisito pode ser especificado de maneira mais clara:

> O sistema deve permitir que o cliente cancele pedidos que ainda não tenham sido enviados.

E um requisito adicional pode definir:

> O sistema deve iniciar o processo de reembolso após o cancelamento de um pedido pago.

A validação ajudou a descobrir informações que não estavam presentes no requisito original.

---

## 11. Validação e Verificação

Embora os termos sejam relacionados, **validação** e **verificação** possuem objetivos diferentes.

### Validação

Busca verificar se estamos construindo **o produto correto**.

> O sistema atende às necessidades dos usuários?

### Verificação

Busca verificar se estamos construindo o produto **corretamente de acordo com suas especificações**.

> O sistema foi implementado conforme os requisitos?

De forma simplificada:

```text
Validação
    │
    ▼
Estamos construindo o produto certo?
```

```text
Verificação
    │
    ▼
Estamos construindo o produto corretamente?
```

A validação de requisitos está principalmente relacionada à primeira questão.

---

## 12. Problemas Encontrados na Validação

Durante a validação, podem ser identificados:

- Requisitos ambíguos;
- Requisitos incompletos;
- Requisitos inconsistentes;
- Requisitos inviáveis;
- Requisitos não testáveis;
- Requisitos desnecessários;
- Conflitos entre requisitos.

Quando um problema é encontrado, o requisito deve ser revisado antes de seguir para as próximas etapas.

---

## 13. Boas Práticas

- Validar os requisitos com os stakeholders;
- Realizar revisões antes da implementação;
- Utilizar critérios objetivos;
- Evitar termos subjetivos;
- Criar protótipos quando necessário;
- Verificar se os requisitos são testáveis;
- Identificar conflitos entre requisitos;
- Confirmar se os requisitos realmente representam necessidades do negócio;
- Registrar problemas encontrados durante a validação;
- Revisar os requisitos sempre que houver mudanças significativas.

---

## 14. Resumo

| Conceito      | Descrição                                                                 |
| ------------- | ------------------------------------------------------------------------- |
| Validação     | Verificação de que os requisitos representam corretamente as necessidades |
| Correção      | O requisito representa uma necessidade real                               |
| Completude    | O requisito possui informações suficientes                                |
| Consistência  | Não existem conflitos entre requisitos                                    |
| Clareza       | O requisito possui interpretação clara                                    |
| Viabilidade   | O requisito pode ser implementado                                         |
| Testabilidade | É possível verificar seu atendimento                                      |
| Revisão       | Análise dos requisitos pelos envolvidos                                   |
| Prototipação  | Uso de modelos para validar necessidades e comportamentos                 |

---

## 15. Conclusão

A **validação de requisitos** é uma atividade essencial para garantir a qualidade das especificações antes do desenvolvimento.

Por meio de revisões, protótipos, casos de teste e participação dos stakeholders, é possível identificar **ambiguidades, inconsistências, omissões, conflitos e requisitos inviáveis**.

Validar os requisitos antecipadamente reduz retrabalho, custos e riscos, além de aumentar as chances de que o software desenvolvido realmente atenda às necessidades para as quais foi planejado.

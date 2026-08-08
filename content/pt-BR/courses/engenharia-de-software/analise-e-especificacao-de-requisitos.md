# Análise e Especificação de Requisitos

## 1. Introdução

Após a **elicitação de requisitos**, as informações coletadas precisam ser organizadas, analisadas e documentadas de forma estruturada.

A **análise de requisitos** busca compreender, organizar e avaliar os requisitos identificados, enquanto a **especificação de requisitos** tem como objetivo documentá-los de maneira clara e precisa.

Essas atividades ajudam a transformar necessidades e expectativas dos stakeholders em uma descrição que possa orientar o desenvolvimento do sistema.

---

## 2. Análise de Requisitos

A **análise de requisitos** consiste em examinar os requisitos coletados durante a elicitação para identificar problemas e compreender melhor as necessidades do sistema.

Durante essa etapa, podem ser identificados:

- Ambiguidades;
- Inconsistências;
- Conflitos;
- Requisitos incompletos;
- Dependências;
- Restrições;
- Prioridades.

O objetivo é garantir que os requisitos estejam suficientemente compreendidos antes de serem utilizados como base para o desenvolvimento.

---

## 3. Objetivos da Análise

A análise de requisitos busca:

- Organizar os requisitos identificados;
- Identificar conflitos entre requisitos;
- Encontrar informações incompletas;
- Eliminar ambiguidades;
- Identificar dependências;
- Avaliar a viabilidade dos requisitos;
- Definir prioridades;
- Construir um entendimento compartilhado entre os envolvidos.

A análise é importante porque os requisitos obtidos durante a elicitação podem estar vagos, incompletos ou até mesmo contraditórios.

---

## 4. Identificação de Conflitos

Diferentes stakeholders podem possuir necessidades conflitantes.

Por exemplo:

> O departamento financeiro deseja que somente gestores possam aprovar pagamentos.

Enquanto:

> O departamento de vendas deseja que qualquer vendedor possa aprovar pagamentos abaixo de determinado valor.

Esses requisitos precisam ser analisados para determinar uma regra que atenda às necessidades do negócio.

Identificar conflitos antecipadamente evita que problemas sejam descobertos somente durante a implementação.

---

## 5. Identificação de Ambiguidades

Um requisito ambíguo pode possuir diferentes interpretações.

Considere:

> O sistema deve gerar relatórios rapidamente.

O termo **rapidamente** não estabelece um critério objetivo.

Uma especificação mais clara seria:

> O sistema deve gerar o relatório em até 5 segundos.

Dessa forma, o requisito pode ser compreendido de maneira mais consistente e posteriormente verificado.

---

## 6. Priorização de Requisitos

Nem todos os requisitos possuem a mesma importância.

Durante a análise, os requisitos podem ser classificados de acordo com sua prioridade.

Uma classificação simples pode ser:

- **Alta:** essencial para o funcionamento do sistema;
- **Média:** importante, mas não essencial inicialmente;
- **Baixa:** desejável, mas pode ser implementado posteriormente.

A priorização ajuda a equipe a decidir quais requisitos devem receber maior atenção e quais podem ser adiados.

---

## 7. Avaliação de Viabilidade

Um requisito pode ser desejável para os stakeholders, mas ainda assim ser inviável dentro das condições do projeto.

A análise pode considerar aspectos como:

- Viabilidade técnica;
- Custo;
- Prazo;
- Recursos disponíveis;
- Restrições tecnológicas;
- Dependências externas.

Por exemplo, um stakeholder pode solicitar que um sistema processe milhões de operações por segundo.

Antes de aceitar esse requisito, é necessário avaliar se a arquitetura, infraestrutura, orçamento e prazo permitem atingir esse objetivo.

---

## 8. Especificação de Requisitos

A **especificação de requisitos** consiste em documentar os requisitos de maneira organizada, clara e precisa.

A especificação serve como uma referência para diferentes participantes do projeto, como:

- Clientes;
- Usuários;
- Analistas;
- Desenvolvedores;
- Testadores;
- Gestores.

O documento de requisitos deve permitir que os envolvidos compreendam o que o sistema precisa atender.

---

## 9. Características de uma Boa Especificação

Uma boa especificação deve apresentar requisitos que sejam:

- **Claros:** fáceis de compreender;
- **Não ambíguos:** com uma única interpretação;
- **Completos:** contendo as informações necessárias;
- **Consistentes:** sem contradições;
- **Viáveis:** possíveis de implementar;
- **Testáveis:** possíveis de verificar;
- **Rastreáveis:** relacionados à sua origem e implementação.

Essas características aumentam a qualidade da especificação e reduzem problemas durante o desenvolvimento.

---

## 10. Formas de Especificar Requisitos

Os requisitos podem ser representados de diferentes formas, dependendo do projeto e da necessidade.

Algumas formas comuns são:

- Linguagem natural;
- User Stories;
- Casos de uso;
- Diagramas;
- Tabelas;
- Protótipos;
- Critérios de aceitação.

### 10.1 Linguagem Natural

É uma forma simples de descrever o comportamento esperado.

Exemplo:

> O sistema deve permitir que o usuário altere sua senha.

### 10.2 User Story

Uma **User Story** descreve uma necessidade sob a perspectiva do usuário.

Exemplo:

> Como cliente, quero recuperar minha senha para voltar a acessar minha conta.

### 10.3 Caso de Uso

Um caso de uso descreve uma interação entre um ator e o sistema para alcançar um objetivo.

Exemplo:

```text
Ator: Cliente

Caso de Uso: Realizar Login

1. Cliente informa e-mail e senha.
2. Sistema valida as credenciais.
3. Sistema permite o acesso.
```

Cada técnica pode ser mais adequada para determinados contextos.

---

## 11. Especificação de Requisitos Funcionais

Os requisitos funcionais devem descrever as funcionalidades que o sistema precisa oferecer.

Exemplo:

> RF01 — O sistema deve permitir o cadastro de clientes.

> RF02 — O sistema deve permitir a alteração dos dados cadastrais.

> RF03 — O sistema deve permitir a consulta de clientes pelo CPF.

A identificação dos requisitos facilita sua organização e rastreamento.

---

## 12. Especificação de Requisitos Não Funcionais

Os requisitos não funcionais devem descrever características ou restrições que o sistema deve atender.

Exemplos:

> RNF01 — O sistema deve responder às consultas em até 2 segundos.

> RNF02 — O sistema deve utilizar autenticação segura.

> RNF03 — O sistema deve possuir disponibilidade mínima de 99,9%.

Sempre que possível, os requisitos não funcionais devem possuir critérios objetivos e mensuráveis.

---

## 13. Rastreabilidade

A **rastreabilidade** permite acompanhar a relação entre os requisitos e outras partes do projeto.

Por exemplo:

```text
Necessidade do cliente
        │
        ▼
Requisito
        │
        ▼
Implementação
        │
        ▼
Teste
```

Dessa forma, é possível verificar:

- De onde surgiu um requisito;
- Onde ele foi implementado;
- Quais testes verificam seu atendimento;
- Quais componentes podem ser afetados por uma alteração.

A rastreabilidade também facilita o gerenciamento de mudanças.

---

## 14. Exemplo Prático

Imagine um sistema de comércio eletrônico.

Durante a elicitação, o cliente informa:

> "Quero que os clientes possam acompanhar seus pedidos."

Durante a análise, a equipe identifica que é necessário determinar quais informações devem ser apresentadas.

Após discussão com os stakeholders, o requisito pode ser especificado como:

> **RF01 — O sistema deve permitir que o cliente consulte o status de seus pedidos.**

E um requisito não funcional relacionado pode ser:

> **RNF01 — A consulta do status do pedido deve ser respondida em até 2 segundos.**

Assim, a análise ajudou a detalhar a necessidade, enquanto a especificação transformou essa necessidade em requisitos claros.

---

## 15. Relação entre Elicitação, Análise e Especificação

Essas atividades fazem parte de um processo contínuo.

```text
Elicitação
    │
    ▼
Requisitos coletados
    │
    ▼
Análise
    │
    ├──► Conflitos
    ├──► Ambiguidades
    ├──► Inconsistências
    └──► Prioridades
    │
    ▼
Especificação
    │
    ▼
Requisitos documentados
```

As etapas podem ser repetidas conforme novas informações são descobertas ou mudanças são identificadas.

---

## 16. Boas Práticas

- Organizar os requisitos por categoria;
- Utilizar identificadores únicos;
- Escrever requisitos de forma clara e objetiva;
- Evitar termos subjetivos;
- Identificar conflitos entre stakeholders;
- Priorizar requisitos;
- Avaliar a viabilidade;
- Utilizar critérios mensuráveis;
- Manter rastreabilidade;
- Revisar a especificação com os stakeholders;
- Atualizar a documentação quando os requisitos forem alterados.

---

## 17. Resumo

| Atividade       | Objetivo                                          |
| --------------- | ------------------------------------------------- |
| Elicitação      | Descobrir necessidades e requisitos               |
| Análise         | Examinar, organizar e avaliar os requisitos       |
| Especificação   | Documentar os requisitos de forma clara           |
| Priorização     | Definir a importância dos requisitos              |
| Validação       | Verificar se os requisitos estão adequados        |
| Rastreabilidade | Acompanhar a relação dos requisitos com o projeto |

---

## 18. Conclusão

A **análise e especificação de requisitos** são fundamentais para transformar as informações obtidas durante a elicitação em requisitos claros, consistentes e utilizáveis.

A análise permite identificar **conflitos, ambiguidades, inconsistências, prioridades e restrições**, enquanto a especificação registra os requisitos de maneira estruturada.

Quando essas atividades são realizadas adequadamente, a equipe possui uma referência mais confiável para orientar o **projeto, desenvolvimento, testes e validação do software**.

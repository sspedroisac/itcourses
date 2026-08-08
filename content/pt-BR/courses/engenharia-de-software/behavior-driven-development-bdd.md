# Behavior-Driven Development (BDD)

## 1. O que é Behavior-Driven Development

O **Behavior-Driven Development (BDD)**, ou **Desenvolvimento Orientado a Comportamento**, é uma abordagem de desenvolvimento de software que busca definir e validar o comportamento esperado de uma aplicação a partir de uma linguagem compreensível por pessoas técnicas e não técnicas.

O BDD aproxima áreas como:

- Negócio;
- Desenvolvimento;
- Testes;
- Produto.

Em vez de concentrar a especificação apenas na implementação técnica, o BDD descreve **o que o sistema deve fazer do ponto de vista do comportamento esperado**.

---

## 2. Objetivos do BDD

O BDD busca:

- Melhorar a comunicação entre as pessoas envolvidas no projeto;
- Definir claramente o comportamento esperado do sistema;
- Reduzir ambiguidades nos requisitos;
- Utilizar exemplos para especificar funcionalidades;
- Aproximar negócio, desenvolvimento e testes;
- Facilitar a validação dos requisitos.

O objetivo é criar uma compreensão compartilhada sobre aquilo que o software deve fazer.

---

## 3. BDD e comunicação

Um dos principais conceitos do BDD é a utilização de uma linguagem que possa ser compreendida por diferentes participantes do projeto.

Imagine uma funcionalidade de login.

Uma descrição excessivamente técnica poderia ser:

```text
O método authenticate() deve retornar um objeto
UserSession quando as credenciais forem válidas.
```

Uma descrição orientada ao comportamento seria:

```text
Dado que o usuário possui uma conta válida
Quando informar suas credenciais corretamente
Então deverá acessar sua conta
```

A segunda descrição é mais próxima do comportamento que o usuário espera do sistema.

---

## 4. Especificação por exemplos

O BDD utiliza **exemplos concretos** para descrever o comportamento esperado.

Em vez de escrever apenas:

> O sistema deve permitir login.

Podemos especificar diferentes situações:

| Cenário             | Resultado esperado                               |
| ------------------- | ------------------------------------------------ |
| Credenciais válidas | Usuário acessa o sistema                         |
| Senha incorreta     | Sistema informa erro                             |
| Usuário inexistente | Sistema informa que as credenciais são inválidas |
| Campos vazios       | Sistema solicita o preenchimento                 |

Esses exemplos ajudam a transformar requisitos abstratos em comportamentos verificáveis.

---

## 5. Estrutura Given, When e Then

Uma das estruturas mais conhecidas utilizadas no BDD é:

- **Given (Dado):** define o contexto inicial;
- **When (Quando):** define a ação realizada;
- **Then (Então):** define o resultado esperado.

### Exemplo

```text
Funcionalidade: Login

Cenário: Login com credenciais válidas

Dado que o usuário possui uma conta cadastrada
Quando informar usuário e senha válidos
Então deverá acessar o sistema
```

Essa estrutura facilita a compreensão do cenário por pessoas com diferentes conhecimentos técnicos.

---

## 6. Cenários de comportamento

Uma funcionalidade pode possuir vários cenários.

Por exemplo, para uma funcionalidade de transferência bancária:

```text
Cenário: Transferência com saldo suficiente

Dado que a conta possui saldo suficiente
Quando o usuário realizar uma transferência
Então a transferência deverá ser concluída
```

Outro cenário poderia representar uma situação diferente:

```text
Cenário: Transferência com saldo insuficiente

Dado que a conta não possui saldo suficiente
Quando o usuário tentar realizar uma transferência
Então a transferência não deverá ser realizada
```

Cada cenário descreve um comportamento específico do sistema.

---

## 7. Linguagem Gherkin

O **Gherkin** é uma linguagem estruturada frequentemente utilizada para escrever especificações de comportamento em BDD.

Ela utiliza palavras-chave como:

- `Feature`;
- `Scenario`;
- `Given`;
- `When`;
- `Then`;
- `And`;
- `But`.

Um exemplo:

```gherkin
Feature: Login

  Scenario: Login com credenciais válidas
    Given que o usuário possui uma conta cadastrada
    When informar usuário e senha válidos
    Then deverá acessar o sistema
```

O Gherkin possui uma sintaxe simples e legível, permitindo que a especificação seja compreendida por pessoas técnicas e não técnicas.

---

## 8. BDD e testes automatizados

Os cenários escritos em BDD podem ser utilizados como base para testes automatizados.

O fluxo pode ser representado assim:

```text
Requisito
    │
    ▼
Comportamento esperado
    │
    ▼
Cenário BDD
    │
    ▼
Automação
    │
    ▼
Execução do teste
    │
    ▼
Resultado
```

Dessa forma, o cenário descreve o comportamento e a automação verifica se o software apresenta esse comportamento.

---

## 9. BDD e TDD

BDD e **Test-Driven Development (TDD)** são abordagens relacionadas, mas possuem diferentes focos.

| TDD                                                  | BDD                                                            |
| ---------------------------------------------------- | -------------------------------------------------------------- |
| Foco no desenvolvimento orientado por testes         | Foco no comportamento esperado                                 |
| Geralmente trabalha com testes em nível mais técnico | Utiliza linguagem próxima ao negócio                           |
| Ajuda a orientar a implementação                     | Ajuda a definir e comunicar requisitos                         |
| Frequentemente utiliza testes unitários              | Pode utilizar cenários de comportamento e testes automatizados |

O BDD pode complementar o TDD.

Um fluxo possível é:

```text
Necessidade do negócio
        │
        ▼
Comportamento esperado
        │
        ▼
Cenário BDD
        │
        ▼
Implementação
        │
        ▼
Testes
```

---

## 10. Benefícios do BDD

### 10.1 Melhor comunicação

O BDD cria uma linguagem comum entre negócio, desenvolvimento e testes.

### 10.2 Menos ambiguidades

Os exemplos ajudam a esclarecer exatamente o comportamento esperado.

### 10.3 Requisitos mais claros

Os cenários transformam requisitos em situações concretas.

### 10.4 Validação contínua

Os cenários podem ser utilizados para verificar se o sistema continua apresentando o comportamento esperado.

### 10.5 Documentação viva

Os cenários podem funcionar como uma documentação do comportamento do sistema e permanecer associados aos testes automatizados.

---

## 11. Desafios do BDD

O BDD também apresenta alguns desafios.

### 11.1 Cenários mal definidos

Cenários muito genéricos ou excessivamente técnicos podem perder os benefícios da abordagem.

### 11.2 Excesso de cenários

Criar cenários para todos os detalhes da implementação pode gerar uma suíte difícil de manter.

### 11.3 Comunicação inadequada

O BDD depende da colaboração entre diferentes participantes. Se os cenários forem escritos sem discussão adequada, podem não representar corretamente as necessidades do negócio.

### 11.4 Acoplamento à implementação

Os cenários devem descrever comportamento, e não detalhes internos de como o software foi implementado.

---

## 12. Boas práticas

- Escrever cenários a partir do comportamento esperado.
- Utilizar exemplos concretos.
- Manter a linguagem simples e compreensível.
- Evitar detalhes de implementação nos cenários.
- Envolver pessoas de negócio, desenvolvimento e testes.
- Manter os cenários objetivos.
- Automatizar cenários relevantes.
- Utilizar os cenários como documentação viva.

---

## 13. Resumo

| Conceito | Descrição                                                     |
| -------- | ------------------------------------------------------------- |
| BDD      | Desenvolvimento orientado ao comportamento                    |
| Behavior | Comportamento esperado do sistema                             |
| Given    | Contexto inicial do cenário                                   |
| When     | Ação realizada                                                |
| Then     | Resultado esperado                                            |
| Gherkin  | Linguagem estruturada utilizada para descrever comportamentos |
| Scenario | Exemplo concreto de comportamento                             |
| Feature  | Funcionalidade que agrupa cenários                            |

---

## 14. Conclusão

O **Behavior-Driven Development (BDD)** é uma abordagem que coloca o comportamento esperado do software no centro da comunicação e da validação dos requisitos.

Ao utilizar exemplos concretos e estruturas como **Given, When e Then**, o BDD permite que negócio, desenvolvimento e testes compartilhem uma compreensão comum sobre o que o sistema deve fazer.

Além de melhorar a comunicação, os cenários de BDD podem ser automatizados e utilizados como documentação viva, aproximando os requisitos do comportamento real do software.

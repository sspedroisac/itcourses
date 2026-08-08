# Requisitos Funcionais e Não Funcionais

## 1. Introdução

Os requisitos descrevem aquilo que um sistema deve fazer e as condições que ele deve atender.

Uma das classificações mais importantes na Engenharia de Requisitos divide os requisitos em:

- **Requisitos Funcionais**;
- **Requisitos Não Funcionais**.

Essa distinção ajuda a equipe a compreender tanto as funcionalidades que precisam ser implementadas quanto as características e restrições que o sistema deve possuir.

---

## 2. Requisitos Funcionais

Os **requisitos funcionais** descrevem as funcionalidades, comportamentos ou serviços que o sistema deve oferecer.

Eles respondem principalmente à pergunta:

> **O que o sistema deve fazer?**

São relacionados diretamente às ações que os usuários ou outros sistemas podem realizar.

### 2.1 Exemplos

Em um sistema de vendas, alguns requisitos funcionais poderiam ser:

- O sistema deve permitir o cadastro de clientes;
- O sistema deve permitir que o usuário realize login;
- O sistema deve permitir a criação de pedidos;
- O sistema deve calcular o valor total do pedido;
- O sistema deve permitir o cancelamento de pedidos;
- O sistema deve gerar um relatório de vendas.

Cada requisito descreve uma capacidade que precisa estar disponível no sistema.

### 2.2. Características dos Requisitos Funcionais

Um requisito funcional deve descrever de forma clara o comportamento esperado do sistema.

Um formato comum é:

> **O sistema deve + ação.**

Exemplos:

- O sistema deve permitir cadastrar usuários.
- O sistema deve enviar um e-mail após a confirmação do pedido.
- O sistema deve bloquear o acesso após cinco tentativas de login inválidas.

Quanto mais específico o requisito, menor a possibilidade de interpretações diferentes.

---

## 3. Requisitos Não Funcionais

Os **requisitos não funcionais** descrevem características, propriedades, restrições ou condições que o sistema deve atender.

Eles respondem principalmente à pergunta:

> **Como o sistema deve funcionar?**

Enquanto um requisito funcional descreve uma funcionalidade, um requisito não funcional estabelece uma característica ou restrição relacionada ao funcionamento dessa funcionalidade ou do sistema como um todo.

### 3.1 Exemplos de Requisitos Não Funcionais

Alguns exemplos são:

#### 3.1.1 Desempenho

> O sistema deve responder às consultas em até 2 segundos.

#### 3.1.2 Segurança

> O sistema deve utilizar autenticação segura para controlar o acesso dos usuários.

#### 3.1.3 Disponibilidade

> O sistema deve possuir disponibilidade de 99,9% durante o mês.

#### 3.1.4 Escalabilidade

> O sistema deve suportar até 10.000 usuários simultâneos.

#### 3.1.5 Usabilidade

> O sistema deve permitir que um novo usuário conclua o cadastro sem treinamento prévio.

Esses requisitos não descrevem necessariamente uma funcionalidade específica, mas estabelecem características que devem ser respeitadas.

---

## 4. Diferença entre Requisitos Funcionais e Não Funcionais

A principal diferença pode ser resumida da seguinte forma:

| Tipo          | Pergunta principal             | Exemplo                            |
| ------------- | ------------------------------ | ---------------------------------- |
| Funcional     | O que o sistema faz?           | Permitir realizar login            |
| Não funcional | Como o sistema deve funcionar? | Realizar o login em até 2 segundos |

Considere um sistema de comércio eletrônico.

Um requisito funcional poderia ser:

> O sistema deve permitir que o cliente realize uma compra.

Um requisito não funcional relacionado poderia ser:

> O sistema deve processar a compra em até 3 segundos.

O primeiro define **uma funcionalidade**.

O segundo define **uma característica de desempenho** dessa funcionalidade.

---

## 5. Requisitos Funcionais e Não Funcionais Trabalhando Juntos

Os dois tipos de requisitos não são independentes.

Uma funcionalidade pode possuir requisitos não funcionais associados.

Por exemplo:

**Requisito funcional:**

> O sistema deve permitir que o usuário realize login.

**Requisitos não funcionais relacionados:**

- O login deve ser processado em até 2 segundos;
- A comunicação deve utilizar conexão segura;
- O sistema deve suportar 1.000 tentativas de login simultâneas.

Nesse exemplo, o requisito funcional define **o que deve ser feito**, enquanto os requisitos não funcionais estabelecem **características e restrições para essa operação**.

---

## 6. Evitando Requisitos Ambíguos

Um requisito deve ser claro e, sempre que possível, mensurável.

Considere o seguinte requisito:

> O sistema deve ser rápido.

Esse requisito é ambíguo porque não define o que significa "rápido".

Uma alternativa melhor seria:

> O sistema deve responder às consultas em até 2 segundos.

Agora existe um critério objetivo que pode ser verificado por meio de testes.

O mesmo princípio pode ser aplicado a outros requisitos.

### Exemplo

**Ambíguo:**

> O sistema deve ser seguro.

**Mais específico:**

> O sistema deve exigir autenticação para acessar informações de clientes.

Quanto mais preciso for o requisito, mais fácil será implementá-lo e verificar se foi atendido.

---

## 7. Resumo

| Característica | Funcional                             | Não Funcional                                |
| -------------- | ------------------------------------- | -------------------------------------------- |
| Define         | Funcionalidades e comportamentos      | Características e restrições                 |
| Pergunta       | O que o sistema faz?                  | Como o sistema deve funcionar?               |
| Exemplo        | Realizar login                        | Login em até 2 segundos                      |
| Foco           | Serviços oferecidos                   | Qualidade e condições                        |
| Validação      | Verifica se a funcionalidade funciona | Verifica se as características são atendidas |

---

## 8. Boas Práticas

- Escrever requisitos de forma clara e objetiva;
- Evitar termos subjetivos como "rápido", "fácil" ou "seguro" sem especificação;
- Diferenciar funcionalidades de características;
- Utilizar critérios mensuráveis quando possível;
- Garantir que os requisitos possam ser validados;
- Relacionar requisitos não funcionais às funcionalidades quando necessário;
- Revisar os requisitos com os stakeholders.

---

## 9. Conclusão

Os **requisitos funcionais** e **não funcionais** representam duas perspectivas complementares sobre aquilo que um sistema precisa atender.

Os requisitos funcionais definem **o que o sistema deve fazer**, enquanto os requisitos não funcionais definem **como o sistema deve funcionar** ou quais características e restrições devem ser respeitadas.

Compreender essa diferença é fundamental para especificar sistemas de forma clara, reduzir ambiguidades e estabelecer critérios objetivos para o desenvolvimento e os testes.

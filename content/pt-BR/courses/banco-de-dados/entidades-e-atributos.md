# Entidades e Atributos

## 1. O que são entidades

Uma **entidade** representa um objeto, pessoa, evento ou conceito relevante para o domínio de um sistema. Ela possui características próprias e pode ser identificada dentro do contexto do negócio.

Em um sistema de vendas, por exemplo, podem existir as entidades:

- Cliente;
- Produto;
- Pedido;
- Pagamento;
- Endereço.

Uma entidade não precisa ser necessariamente algo físico. Um pedido, uma matrícula ou uma reserva também podem ser entidades porque representam conceitos importantes para o sistema.

---

## 2. O que são atributos

**Atributos** são as características que descrevem uma entidade.

A entidade **Cliente**, por exemplo, pode possuir:

- identificador;
- nome;
- e-mail;
- telefone;
- data de cadastro.

Os atributos devem representar informações relevantes para o domínio e possuir um tipo ou domínio de valores bem definido.

---

## 3. Identificação de entidades

Cada entidade deve possuir uma forma de ser identificada. Essa identificação permite diferenciar um registro de outro e estabelecer relacionamentos com outras entidades.

Exemplo:

```text
Cliente
- id_cliente
- nome
- email
```

O atributo `id_cliente` pode funcionar como identificador único de cada cliente.

---

## 4. Tipos de atributos

Os atributos podem ser classificados de diferentes formas.

### 4.1 Simples

Não podem ser divididos em partes menores relevantes para o sistema, como idade ou salário.

### 4.2 Compostos

Podem ser divididos em componentes, como um endereço formado por rua, número, cidade e estado.

### 4.3 Monovalorados

Possuem apenas um valor para cada ocorrência da entidade.

### 4.4 Multivalorados

Podem possuir vários valores, como os telefones de um cliente. Em um modelo relacional, normalmente são representados em outra tabela.

### 4.5 Derivados

Podem ser calculados a partir de outros atributos, como idade derivada da data de nascimento.

---

## 5. Entidades fortes e fracas

Uma **entidade forte** possui identificação própria e existe independentemente de outra entidade.

Uma **entidade fraca** depende de outra entidade para ser identificada ou existir no contexto do modelo.

Por exemplo, um item de pedido pode depender de um pedido para fazer sentido. Seu identificador pode ser formado pelo número do pedido e pelo número sequencial do item.

---

## 6. Boas práticas

- Nomear entidades com termos usados pelo negócio;
- Evitar atributos que misturem informações diferentes;
- Definir tipos e domínios claramente;
- Identificar atributos obrigatórios e opcionais;
- Não armazenar como atributo algo que deveria ser uma entidade independente.

---

## 7. Resumo

Entidades representam os elementos relevantes do domínio, enquanto atributos descrevem suas características. A identificação correta desses elementos é uma das primeiras etapas para construir um modelo de dados consistente e alinhado às necessidades do sistema.

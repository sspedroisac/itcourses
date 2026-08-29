# Relações, Tuplas, Atributos e Domínios

## 1. Relação

No modelo relacional, uma **relação** é uma tabela. Ela representa um conjunto de registros que compartilham a mesma estrutura.

Uma relação pode ser pensada como uma coleção de linhas e colunas, em que:

- cada linha representa um registro;
- cada coluna representa uma propriedade ou característica.

Exemplo de relação:

| id  | nome  | idade |
| --- | ----- | ----- |
| 1   | Ana   | 22    |
| 2   | Bruno | 30    |

---

## 2. Tupla

Uma **tupla** é uma linha da tabela. Em outras palavras, cada tupla representa um registro específico.

Exemplo:

```text
(1, Ana, 22)
```

Essa tupla contém os valores de cada atributo daquele registro.

---

## 3. Atributo

Um **atributo** é uma coluna da tabela. Ele representa uma característica de cada registro.

Exemplo de atributos:

- id;
- nome;
- idade;
- email;
- cidade.

Cada atributo tem um nome e define o tipo de dado que pode ser armazenado naquele campo.

---

## 4. Domínio

O **domínio** define o conjunto de valores válidos que um atributo pode receber. Ele representa as regras de valor de um campo.

Exemplo:

- o domínio de idade pode ser qualquer número inteiro maior ou igual a zero;
- o domínio de sexo pode ser "M" ou "F";
- o domínio de e-mail deve seguir um formato válido.

Assim, o domínio restringe o conjunto de valores possíveis para um atributo e contribui para a integridade dos dados.

---

## 5. Exemplos práticos

Considere uma tabela chamada **Cliente**:

| id  | nome  | idade | cidade   |
| --- | ----- | ----- | -------- |
| 1   | Carla | 27    | Recife   |
| 2   | Pedro | 35    | Curitiba |

Nessa tabela:

- **Cliente** é a relação;
- cada linha é uma tupla;
- **id**, **nome**, **idade** e **cidade** são atributos;
- o domínio de **idade** é um número inteiro válido;
- o domínio de **cidade** é qualquer texto que represente o nome da cidade.

---

## 6. Importância desses conceitos

Compreender relações, tuplas, atributos e domínios é essencial para modelar corretamente um banco de dados. Esses conceitos servem como base para:

- definir tabelas;
- criar regras de integridade;
- estabelecer chaves;
- escrever consultas;
- integrar diferentes entidades do sistema.

---

## 7. Resumo

No modelo relacional, a tabela é a relação, a linha é a tupla e a coluna é o atributo. O domínio define quais valores podem aparecer em cada atributo. Juntos, esses conceitos formam a base da representação de dados em um banco relacional.

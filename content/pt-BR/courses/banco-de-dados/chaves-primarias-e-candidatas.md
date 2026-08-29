# Chaves Primárias e Candidatas

## 1. O que é uma chave

Uma **chave** é um conjunto de atributos usados para identificar registros de maneira única em uma tabela. Ela é uma base importante para garantir a integridade e a organização dos dados.

No modelo relacional, as chaves permitem relacionar tabelas e diferenciar registros que compartilham outras características comuns.

---

## 2. Chave primária

A **chave primária (PK)** é um atributo ou conjunto de atributos que identifica unicamente cada registro de uma tabela.

Ela deve respeitar duas propriedades fundamentais:

- **unicidade**: não pode haver dois registros com o mesmo valor para a chave primária;
- **não nulidade**: não pode conter valores vazios.

Exemplo:

| id  | nome |
| --- | ---- |
| 1   | Ana  |
| 2   | João |

A coluna **id** pode ser a chave primária da tabela.

---

## 3. Chave candidata

Uma **chave candidata** é qualquer atributo ou conjunto de atributos que também pode identificar unicamente um registro, além da chave primária escolhida.

Exemplo:

| cpf       | id  | nome |
| --------- | --- | ---- |
| 123456789 | 1   | Ana  |
| 987654321 | 2   | João |

Nesse caso, tanto **cpf** quanto **id** podem potencialmente identificar o registro, mas normalmente apenas uma delas será escolhida como chave primária.

---

## 4. Diferência entre chave primária e chave candidata

- **chave primária**: é a chave escolhida oficialmente para identificar cada registro;
- **chave candidata**: é uma alternativa válida, mas não selecionada como principal.

A chave primária geralmente é a escolha mais adequada para uso em consultas, índices e relacionamentos.

---

## 5. Chave composta

Quando a identificação unívoca exige mais de um atributo, a tabela pode ter uma **chave composta**.

Exemplo:

| aluno_id | disciplina_id | nota |
| -------- | ------------- | ---- |
| 1        | 101           | 9.5  |
| 1        | 102           | 8.7  |

Aqui, a combinação de **aluno_id** e **disciplina_id** identifica uniqueamente cada registro.

---

## 6. Importância das chaves

As chaves são fundamentais para:

- garantir unicidade de registros;
- apoiar relacionamentos entre tabelas;
- facilitar consultas e indexação;
- manter a consistência dos dados;
- evitar duplicidade indevida.

---

## 7. Resumo

A chave primária é o identificador principal de uma tabela, enquanto as chaves candidatas são alternativas válidas para a mesma função. Juntas, essas estruturas dão suporte à organização, à integridade e ao relacionamento entre dados no modelo relacional.

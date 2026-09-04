# Chaves Estrangeiras e Integridade Referencial

## 1. O que é uma chave estrangeira

Uma **chave estrangeira** é um atributo ou conjunto de atributos em uma tabela que referencia a chave primária de outra tabela. Ela é usada para representar relacionamentos entre registros de diferentes entidades.

Exemplo:

```text
Cliente(id, nome)
Pedido(id, cliente_id, data, valor)
```

A coluna **cliente_id** na tabela **Pedido** é uma chave estrangeira que referencia a coluna **id** da tabela **Cliente**.

---

## 2. Objetivo da chave estrangeira

A chave estrangeira permite conectar registros de duas tabelas, mantendo a relação entre elas. Isso supre a necessidade de representar em uma tabela todas as informações de outra entidade.

Por exemplo:

- um cliente pode ter vários pedidos;
- cada pedido referencia o cliente responsável por ele.

Essa relação é expressa por meio da chave estrangeira.

---

## 3. Integridade referencial

A **integridade referencial** garante que a relação entre tabelas seja consistente. Em outras palavras, ela assegura que um valor usado como referência em uma tabela exista de fato na tabela relacionada.

Exemplo:

Se um pedido referencia um cliente com **cliente_id = 7**, esse cliente precisa existir na tabela de clientes.

Se o cliente for removido, o banco deve decidir como tratar os pedidos vinculados a ele.

---

## 4. Regras comuns de integridade referencial

Os SGBDs normalmente permitem regras como:

- **RESTRICT**: impede a exclusão do registro relacionado;
- **CASCADE**: remove automaticamente os registros relacionados;
- **SET NULL**: define os valores relacionados como nulos;
- **SET DEFAULT**: define valores padrão para os registros relacionados.

Essas políticas ajudam a manter a consistência do banco.

---

## 5. Vantagens

O uso de chaves estrangeiras e integridade referencial traz diversas vantagens:

- preserva a consistência dos dados;
- reduz dados inconsistentes;
- representa melhor os relacionamentos do domínio;
- facilita consultas entre entidades;
- evita registros órfãos.

---

## 6. Registro órfão

Um **registro órfão** é aquele que faz referência a um registro inexistente em outra tabela. Isso viola a integridade referencial.

Exemplo:

- há um pedido com **cliente_id = 99**;
- porém não existe cliente com **id = 99**.

Esse tipo de inconsistência deve ser evitado.

---

## 7. Resumo

As chaves estrangeiras representam relações entre tabelas, e a integridade referencial garante que essas relações sejam válidas. Esse mecanismo é essencial para preservar a consistência do banco de dados e manter a coerência entre os dados do sistema.

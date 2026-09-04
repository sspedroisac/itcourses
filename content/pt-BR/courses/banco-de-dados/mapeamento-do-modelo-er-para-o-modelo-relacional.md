# Mapeamento do Modelo ER para o Modelo Relacional

## 1. O que é o mapeamento

O **mapeamento do Modelo Entidade-Relacionamento para o Modelo Relacional** transforma entidades, atributos e relacionamentos conceituais em tabelas, colunas e chaves.

Essa etapa conecta o projeto do domínio à implementação em um SGBD relacional.

---

## 2. Mapeamento de entidades

Cada entidade forte normalmente é transformada em uma tabela. Seus atributos tornam-se colunas e seu identificador torna-se a chave primária.

Exemplo:

```text
Entidade Cliente
- id_cliente
- nome
- email
```

Pode ser mapeada para:

```sql
CREATE TABLE cliente (
  id_cliente INTEGER PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  email VARCHAR(200) NOT NULL
);
```

---

## 3. Mapeamento de atributos

Atributos simples tornam-se colunas. Atributos compostos podem ser divididos em várias colunas quando seus componentes forem relevantes.

Atributos multivalorados geralmente exigem uma tabela própria.

Por exemplo, vários telefones de um cliente podem ser representados por:

```text
cliente(id_cliente, nome)
cliente_telefone(id_cliente, telefone)
```

---

## 4. Mapeamento de relacionamentos

### 4.1 Relacionamento 1:N

A chave primária do lado 1 é adicionada como chave estrangeira no lado N.

```text
cliente(id_cliente, nome)
pedido(id_pedido, id_cliente, data_pedido)
```

### 4.2 Relacionamento N:M

É criada uma tabela associativa com as chaves das duas entidades.

```text
item_pedido(id_pedido, id_produto, quantidade)
```

### 4.3 Relacionamento 1:1

Pode ser implementado usando uma chave estrangeira com restrição de unicidade ou compartilhando a chave primária.

---

## 5. Mapeamento de entidades fracas

Uma entidade fraca normalmente recebe a chave da entidade proprietária como parte de sua chave primária. Essa chave também funciona como chave estrangeira.

Exemplo:

```text
item_pedido(id_pedido, numero_item, quantidade)
```

A chave pode ser composta por `id_pedido` e `numero_item`.

---

## 6. Mapeamento de especializações

Existem diferentes estratégias para mapear hierarquias:

- uma tabela para o supertipo e uma para cada subtipo;
- uma única tabela com coluna discriminadora;
- uma tabela para cada subtipo completo.

A escolha depende da frequência de consultas, regras de integridade e necessidade de evitar colunas nulas.

---

## 7. Validação do mapeamento

Depois do mapeamento, deve-se verificar:

- se todas as entidades foram representadas;
- se os atributos estão nas tabelas corretas;
- se as chaves preservam a identificação;
- se as cardinalidades foram mantidas;
- se as restrições de integridade estão definidas.

---

## 8. Resumo

O mapeamento transforma o modelo conceitual em uma estrutura relacional implementável. Uma conversão cuidadosa preserva as regras do domínio e produz tabelas, colunas, chaves e restrições coerentes.

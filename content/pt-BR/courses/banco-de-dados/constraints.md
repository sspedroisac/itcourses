# Constraints

## 1. O que são constraints

**Constraints** são restrições definidas no banco de dados para validar os valores armazenados e preservar regras de integridade.

Elas funcionam como uma camada de proteção contra dados inválidos, inconsistentes ou incompletos.

---

## 2. Principais constraints

As restrições mais utilizadas são:

- `NOT NULL`;
- `UNIQUE`;
- `PRIMARY KEY`;
- `FOREIGN KEY`;
- `CHECK`;
- `DEFAULT`.

Cada uma protege uma característica diferente dos dados.

---

## 3. NOT NULL e DEFAULT

`NOT NULL` impede que uma coluna receba valor nulo.

```sql
CREATE TABLE cliente (
  id_cliente INTEGER PRIMARY KEY,
  nome VARCHAR(120) NOT NULL
);
```

`DEFAULT` define um valor automático quando nenhum valor é informado.

```sql
CREATE TABLE pedido (
  status VARCHAR(30) DEFAULT 'aberto'
);
```

---

## 4. UNIQUE e PRIMARY KEY

`UNIQUE` impede a repetição de valores em uma coluna ou conjunto de colunas.

`PRIMARY KEY` identifica cada registro de forma única e não pode aceitar valores nulos.

```sql
CREATE TABLE usuario (
  id_usuario INTEGER PRIMARY KEY,
  email VARCHAR(200) UNIQUE NOT NULL
);
```

---

## 5. FOREIGN KEY

`FOREIGN KEY` estabelece uma relação com outra tabela e ajuda a preservar a integridade referencial.

```sql
CREATE TABLE pedido (
  id_pedido INTEGER PRIMARY KEY,
  id_cliente INTEGER NOT NULL,
  FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);
```

---

## 6. CHECK

`CHECK` valida uma expressão antes de aceitar o registro.

```sql
CREATE TABLE produto (
  preco DECIMAL(10, 2) CHECK (preco >= 0)
);
```

A regra deve representar uma condição válida para o domínio.

---

## 7. Constraints nomeadas

Dar nomes às restrições facilita manutenção e diagnóstico.

```sql
CONSTRAINT ck_produto_preco CHECK (preco >= 0)
```

Nomes consistentes também tornam migrations e mensagens de erro mais compreensíveis.

---

## 8. Resumo

Constraints implementam regras de integridade diretamente no banco. Elas reduzem a possibilidade de dados inválidos e complementam as validações realizadas pela aplicação.

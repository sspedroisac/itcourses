# Integridade de Entidade

## 1. O que é integridade de entidade

A **integridade de entidade** garante que cada registro de uma relação possa ser identificado de forma única e confiável.

No modelo relacional, essa regra é normalmente implementada por meio da chave primária.

---

## 2. Chave primária

A chave primária deve:

- identificar um único registro;
- não aceitar valores nulos;
- permanecer estável sempre que possível;
- possuir valor único dentro da tabela.

```sql
CREATE TABLE produto (
  id_produto INTEGER PRIMARY KEY,
  nome VARCHAR(150) NOT NULL
);
```

---

## 3. Chaves compostas

Uma chave primária pode ser formada por mais de uma coluna quando a combinação desses valores identifica o registro.

```sql
CREATE TABLE item_pedido (
  id_pedido INTEGER,
  id_produto INTEGER,
  quantidade INTEGER NOT NULL,
  PRIMARY KEY (id_pedido, id_produto)
);
```

Nenhuma combinação de pedido e produto pode se repetir nessa tabela.

---

## 4. Nulos e identificação

Uma chave primária não pode ser nula porque um valor ausente impediria a identificação confiável do registro.

Essa regra diferencia a ausência de informação de uma identidade válida.

---

## 5. Integridade de entidade e operações

Ao inserir um registro, o banco verifica se a chave não está duplicada. Ao atualizar a chave, verifica se o novo valor continua único. Ao excluir um registro, avalia possíveis dependências referenciadas por outras tabelas.

---

## 6. Escolha da chave

Uma chave pode ser natural, quando utiliza um dado do negócio, ou substituta, quando usa um identificador criado especialmente para o banco.

A escolha deve considerar estabilidade, tamanho, unicidade e exposição do valor ao usuário.

---

## 7. Boas práticas

- Definir uma chave primária para cada tabela;
- Evitar chaves instáveis;
- Usar chaves compostas apenas quando fizerem sentido;
- Não depender apenas de validação na aplicação;
- Documentar a regra de identificação.

---

## 8. Resumo

A integridade de entidade garante que cada linha seja identificável e que sua chave seja única e não nula. Essa propriedade é fundamental para relacionar tabelas e manter a confiabilidade do modelo relacional.

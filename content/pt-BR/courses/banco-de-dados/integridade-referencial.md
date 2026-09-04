# Integridade Referencial

## 1. O que é integridade referencial

A **integridade referencial** garante que os relacionamentos entre tabelas permaneçam válidos.

Ela impede que uma chave estrangeira aponte para um registro inexistente, evitando referências quebradas no banco de dados.

---

## 2. Chave estrangeira

Uma chave estrangeira é uma coluna ou conjunto de colunas que referencia a chave primária ou uma chave candidata de outra tabela.

```sql
CREATE TABLE pedido (
  id_pedido INTEGER PRIMARY KEY,
  id_cliente INTEGER NOT NULL,
  CONSTRAINT fk_pedido_cliente
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);
```

---

## 3. Operações afetadas

A integridade referencial deve ser analisada em operações como:

- inserção de um registro dependente;
- alteração da chave referenciada;
- exclusão do registro principal;
- atualização da chave estrangeira.

---

## 4. Ações referenciais

SGBDs podem oferecer ações para lidar com alterações na tabela principal:

- `RESTRICT` ou `NO ACTION`: impede a alteração quando há dependentes;
- `CASCADE`: propaga a alteração ou exclusão;
- `SET NULL`: define a referência como nula;
- `SET DEFAULT`: usa o valor padrão configurado.

Exemplo:

```sql
FOREIGN KEY (id_cliente)
REFERENCES cliente(id_cliente)
ON DELETE RESTRICT
```

---

## 5. Escolha da ação

`CASCADE` pode ser adequado quando o registro dependente não possui sentido sem o principal. Porém, seu uso indiscriminado pode remover muitos dados acidentalmente.

Em dados históricos ou financeiros, bloquear a exclusão costuma ser mais seguro do que apagar automaticamente registros relacionados.

---

## 6. Benefícios

A integridade referencial ajuda a:

- evitar registros órfãos;
- representar relações reais;
- manter consultas confiáveis;
- simplificar regras na aplicação;
- preservar consistência em integrações.

---

## 7. Boas práticas

- Criar índices para chaves estrangeiras quando necessário;
- Definir ações referenciais conscientemente;
- Testar inserção e exclusão de dados relacionados;
- Evitar referências sem regra clara;
- Documentar o ciclo de vida dos registros.

---

## 8. Resumo

A integridade referencial protege os relacionamentos entre tabelas. Chaves estrangeiras e ações referenciais garantem que os dados relacionados continuem válidos durante inserções, atualizações e exclusões.

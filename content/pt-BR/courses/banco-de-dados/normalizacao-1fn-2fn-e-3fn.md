# Normalização: 1FN, 2FN e 3FN

## 1. O que é normalização

A **normalização** é um processo de organização das relações para reduzir redundância e evitar anomalias de inserção, atualização e exclusão.

Ela divide dados em estruturas relacionadas, seguindo regras formais baseadas em dependências funcionais.

---

## 2. Anomalias em relações

Uma tabela mal projetada pode apresentar:

- **anomalia de inserção**: não é possível inserir uma informação sem outra que ainda não existe;
- **anomalia de atualização**: o mesmo fato precisa ser alterado em vários registros;
- **anomalia de exclusão**: remover um registro apaga uma informação que deveria ser preservada.

A normalização reduz esses problemas.

---

## 3. Primeira Forma Normal

Uma relação está na **Primeira Forma Normal (1FN)** quando:

- cada coluna possui valores atômicos;
- não existem grupos repetitivos;
- cada célula contém um único valor;
- os registros podem ser identificados.

Uma coluna com vários telefones separados por vírgulas, por exemplo, viola a 1FN.

---

## 4. Segunda Forma Normal

Uma relação está na **Segunda Forma Normal (2FN)** quando:

- está na 1FN;
- todo atributo não-chave depende da chave inteira;
- não existem dependências parciais em chaves compostas.

Se o nome do produto depende apenas de `id_produto`, ele não deve ficar em uma tabela cuja chave seja `(id_pedido, id_produto)`.

---

## 5. Terceira Forma Normal

Uma relação está na **Terceira Forma Normal (3FN)** quando:

- está na 2FN;
- não possui dependências transitivas de atributos não-chave;
- os atributos não-chave dependem diretamente da chave.

Se o nome do departamento depende do código do departamento, ele deve ser mantido na tabela de departamento, e não repetido na tabela de funcionários.

---

## 6. Exemplo de decomposição

Uma relação inicial poderia ser:

```text
Pedido(id_pedido, id_cliente, nome_cliente, id_produto, nome_produto, quantidade)
```

Uma decomposição mais organizada seria:

```text
Cliente(id_cliente, nome_cliente)
Produto(id_produto, nome_produto)
Pedido(id_pedido, id_cliente)
ItemPedido(id_pedido, id_produto, quantidade)
```

Essa estrutura reduz repetição e melhora a consistência.

---

## 7. Normalizar ou não

A normalização oferece consistência e organização, mas pode aumentar a quantidade de junções nas consultas. Por isso, decisões de projeto devem considerar também performance, volume e padrão de acesso.

---

## 8. Resumo

A 1FN elimina valores não atômicos, a 2FN elimina dependências parciais e a 3FN elimina dependências transitivas. Juntas, essas formas normais oferecem uma base sólida para projetar relações com menos redundância e maior integridade.

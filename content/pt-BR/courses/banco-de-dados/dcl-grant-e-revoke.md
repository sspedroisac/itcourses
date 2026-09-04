# DCL: GRANT e REVOKE

## 1. O que é DCL

**DCL (Data Control Language)** é o conjunto de comandos SQL usado para controlar permissões de acesso aos objetos do banco de dados.

Seu objetivo é definir quais usuários ou roles podem consultar, inserir, atualizar, remover ou administrar informações.

---

## 2. Usuários e roles

Um usuário representa uma identidade que acessa o banco. Uma **role** representa um conjunto de permissões que pode ser atribuído a um ou mais usuários.

O uso de roles facilita a administração porque as permissões podem ser associadas a funções, como:

- leitura;
- operação;
- desenvolvimento;
- administração;
- auditoria.

---

## 3. GRANT

O comando `GRANT` concede uma permissão.

```sql
GRANT SELECT ON cliente TO analista;
```

Também é possível conceder mais de uma permissão:

```sql
GRANT SELECT, INSERT, UPDATE ON pedido TO operador;
```

As permissões devem ser concedidas somente quando forem necessárias.

---

## 4. REVOKE

O comando `REVOKE` remove uma permissão concedida anteriormente.

```sql
REVOKE UPDATE ON pedido FROM operador;
```

A remoção deve ser acompanhada para evitar que acessos antigos permaneçam ativos sem necessidade.

---

## 5. Princípio do menor privilégio

O **princípio do menor privilégio** determina que cada usuário deve receber somente as permissões necessárias para realizar seu trabalho.

Por exemplo, uma aplicação que apenas consulta dados não deve receber permissão para executar `DROP TABLE` ou alterar estruturas.

---

## 6. Controle por camadas

As permissões podem ser aplicadas a diferentes objetos:

- banco de dados;
- schema;
- tabela;
- coluna;
- view;
- função ou procedimento.

Views e funções podem ajudar a expor apenas a parte dos dados que cada perfil precisa acessar.

---

## 7. Boas práticas

- Preferir roles a permissões individuais espalhadas;
- Revisar acessos periodicamente;
- Separar contas de aplicação e administração;
- Evitar credenciais compartilhadas;
- Registrar mudanças de permissão;
- Remover acessos de usuários que não precisam mais deles.

---

## 8. Resumo

`GRANT` e `REVOKE` controlam o acesso aos dados e objetos do banco. Uma política baseada em roles, menor privilégio e revisão periódica reduz riscos e facilita a administração da segurança.

# Usuários, Roles e Privilégios

## 1. Controle de acesso

Usuários, roles e privilégios formam a base do controle de acesso ao banco de dados.

O objetivo é garantir que cada identidade possa executar somente as operações necessárias para sua função.

---

## 2. Usuários

Um usuário representa uma identidade que pode autenticar-se no SGBD. Ele pode pertencer a uma pessoa, aplicação, serviço ou processo automatizado.

Contas de aplicação devem ser separadas de contas administrativas.

---

## 3. Roles

Uma **role** agrupa permissões e pode ser atribuída a usuários ou outras roles.

Exemplos de perfis:

- leitor;
- operador;
- analista;
- desenvolvedor;
- administrador.

O uso de roles reduz duplicação e facilita revisões de acesso.

---

## 4. Privilégios

Privilégios definem quais ações são permitidas, como:

- `SELECT`;
- `INSERT`;
- `UPDATE`;
- `DELETE`;
- execução de funções;
- criação de objetos.

Eles podem ser concedidos sobre bancos, schemas, tabelas, views e colunas.

---

## 5. Menor privilégio

O princípio do menor privilégio determina que uma identidade receba apenas o acesso necessário para realizar seu trabalho.

Uma aplicação de consulta não precisa criar tabelas ou remover registros.

---

## 6. Revisão de acesso

Permissões devem ser revisadas periodicamente. Acessos temporários devem possuir prazo e ser removidos quando a necessidade terminar.

Também é importante identificar permissões herdadas por várias roles.

---

## 7. Boas práticas

- Usar roles em vez de permissões individuais;
- Evitar contas compartilhadas;
- Separar leitura e escrita;
- Proteger credenciais;
- Auditar alterações de privilégio;
- Remover contas inativas.

---

## 8. Resumo

Usuários representam identidades, roles agrupam permissões e privilégios definem ações permitidas. Uma administração cuidadosa reduz acessos indevidos e facilita a governança do banco.

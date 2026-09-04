# Migração e Evolução de Schemas

## 1. O que é evolução de schema

A **evolução de schema** consiste em alterar tabelas, colunas, constraints, índices e outros objetos para acompanhar mudanças no sistema.

Essas alterações devem preservar dados existentes e manter compatibilidade com aplicações em execução.

---

## 2. Migrations

Uma migration é um arquivo versionado que descreve uma mudança de banco de forma reproduzível.

Exemplos:

- criar uma tabela;
- adicionar uma coluna;
- criar um índice;
- migrar valores;
- remover uma estrutura obsoleta.

---

## 3. Compatibilidade retroativa

Durante um deploy gradual, versões antigas e novas da aplicação podem acessar o mesmo banco. Por isso, uma alteração deve ser compatível durante o período de transição.

Uma estratégia comum é:

1. adicionar estrutura nova;
2. atualizar a aplicação para escrevê-la;
3. copiar ou migrar dados antigos;
4. mudar leituras;
5. remover estrutura antiga posteriormente.

---

## 4. Alterações destrutivas

Remover colunas, tabelas ou dados exige planejamento. A remoção pode ser dividida em etapas para permitir rollback e confirmar que nenhum consumidor ainda depende da estrutura.

---

## 5. Dados e schema

Alterações de estrutura podem exigir migração de dados. Essa migração deve ser idempotente quando possível, monitorada e testada com volume representativo.

---

## 6. Deploy e rollback

O rollback de código não desfaz automaticamente alterações no banco. Por isso, migrations precisam considerar compatibilidade, reversibilidade e recuperação.

Em mudanças complexas, pode ser mais seguro criar uma nova migration de correção do que tentar desfazer uma alteração parcialmente executada.

---

## 7. Boas práticas

- Versionar migrations;
- Testar em cópia próxima da produção;
- Fazer backup antes de mudanças críticas;
- Medir duração e bloqueios;
- Documentar alterações incompatíveis;
- Remover código antigo somente depois da migração.

---

## 8. Resumo

Evoluir schemas com segurança exige migrations controladas, compatibilidade entre versões, proteção dos dados e planejamento de rollback. O banco deve evoluir junto com a aplicação, sem depender de alterações manuais não rastreadas.

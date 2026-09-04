# Administração de Bancos de Dados

## 1. O que é administração de bancos de dados

A **administração de bancos de dados** reúne as atividades necessárias para manter bancos disponíveis, seguros, consistentes e com desempenho adequado.

O administrador ou time responsável atua desde a instalação e configuração até o monitoramento, backup, recuperação e evolução do ambiente.

---

## 2. Principais responsabilidades

Entre as responsabilidades estão:

- instalar e configurar o SGBD;
- criar bancos, schemas e objetos;
- gerenciar usuários e permissões;
- monitorar capacidade e desempenho;
- planejar backups e restauração;
- aplicar atualizações e correções;
- responder a incidentes.

---

## 3. Ambientes

É recomendável separar ambientes de desenvolvimento, testes, homologação e produção. Cada ambiente pode possuir configurações, dados e níveis de acesso diferentes.

Dados reais devem ser protegidos ao serem usados fora de produção, com anonimização ou mascaramento quando necessário.

---

## 4. Capacidade e manutenção

A administração deve acompanhar crescimento de dados, espaço em disco, conexões, memória, CPU e capacidade de I/O.

Tarefas de manutenção podem incluir atualização de estatísticas, reorganização de índices, limpeza de dados temporários e verificação de integridade.

---

## 5. Mudanças controladas

Alterações de configuração, schema e infraestrutura devem ser planejadas, registradas e reversíveis sempre que possível.

Procedimentos documentados reduzem riscos durante intervenções críticas.

---

## 6. Automação

Scripts e ferramentas de automação ajudam a padronizar:

- provisionamento;
- migrations;
- backups;
- alertas;
- testes de recuperação;
- coleta de métricas.

---

## 7. Boas práticas

- Documentar configurações;
- Aplicar o princípio do menor privilégio;
- Monitorar antes de agir;
- Testar backups;
- Planejar capacidade;
- Manter procedimentos de incidente atualizados.

---

## 8. Resumo

Administrar bancos de dados envolve muito mais que executar comandos. É necessário cuidar de disponibilidade, segurança, capacidade, performance, recuperação e mudanças ao longo de todo o ciclo de vida.

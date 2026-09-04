# Backup e Restore

## 1. O que são backup e restore

**Backup** é a cópia controlada dos dados e estruturas do banco. **Restore** é o processo de recuperar essas informações a partir de uma cópia ou sequência de logs.

Esses processos são essenciais para lidar com exclusões acidentais, corrupção, falhas e incidentes de segurança.

---

## 2. Tipos de backup

Os tipos mais comuns incluem:

- **completo**: copia todo o conjunto selecionado;
- **incremental**: copia mudanças desde o último backup;
- **diferencial**: copia mudanças desde o último backup completo;
- **lógico**: exporta estruturas e registros;
- **físico**: copia arquivos e estruturas do armazenamento.

Cada estratégia possui custos e tempos de recuperação diferentes.

---

## 3. RPO e RTO

**RPO (Recovery Point Objective)** define quanto de dados a organização aceita perder.

**RTO (Recovery Time Objective)** define quanto tempo o serviço pode levar para voltar a funcionar.

Esses objetivos orientam frequência de backups, retenção e infraestrutura de recuperação.

---

## 4. Restore

Um restore deve ser executado de forma controlada, validando:

- versão do SGBD;
- compatibilidade de schema;
- permissões;
- integridade dos dados;
- dependências da aplicação.

---

## 5. Teste de recuperação

Um backup não testado não deve ser considerado confiável. Testes periódicos devem restaurar cópias em ambiente isolado e verificar consultas, contagens e integridade.

---

## 6. Retenção e proteção

Backups devem possuir políticas de retenção, criptografia, controle de acesso e cópias em locais independentes. Uma cópia armazenada no mesmo ambiente pode ser perdida junto com o banco principal.

---

## 7. Boas práticas

- Automatizar backups;
- Monitorar falhas;
- Testar restores;
- Documentar procedimentos;
- Proteger cópias contra ransomware;
- Alinhar retenção aos requisitos legais e do negócio.

---

## 8. Resumo

Backup preserva cópias recuperáveis e restore reconstitui o banco a partir delas. A estratégia deve considerar RPO, RTO, testes, segurança e capacidade operacional.

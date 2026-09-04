# Auditoria e Segurança

## 1. O que é auditoria

**Auditoria** é o registro e a análise das ações realizadas sobre o banco de dados. Ela ajuda a identificar quem acessou, alterou ou removeu informações e em que momento isso ocorreu.

---

## 2. Eventos auditáveis

Uma política de auditoria pode registrar:

- autenticações bem-sucedidas e falhas;
- alterações de permissões;
- consultas a dados sensíveis;
- inserções, atualizações e exclusões;
- mudanças de schema;
- operações administrativas.

---

## 3. Logs de auditoria

Logs devem possuir informações suficientes para investigação, como identidade, horário, origem, objeto acessado, operação e resultado.

Eles precisam ser protegidos contra alteração indevida e possuir retenção compatível com as necessidades do negócio.

---

## 4. Segurança dos dados

A proteção pode envolver:

- criptografia em trânsito;
- criptografia em repouso;
- mascaramento;
- anonimização;
- controle de acesso;
- segmentação de rede;
- gestão de vulnerabilidades.

---

## 5. Dados sensíveis

Informações pessoais, financeiras e estratégicas exigem classificação e controles específicos. Nem todos os usuários precisam acessar os mesmos campos.

Views, funções e políticas por linha podem limitar a exposição.

---

## 6. Monitoramento de segurança

Alertas podem ser criados para padrões anormais, como muitas falhas de login, consultas em horários incomuns, exportações extensas ou concessão inesperada de privilégios.

---

## 7. Boas práticas

- Definir política de retenção;
- Proteger logs de auditoria;
- Testar restauração de dados;
- Revisar privilégios;
- Evitar registrar segredos;
- Integrar eventos relevantes ao monitoramento corporativo.

---

## 8. Resumo

Auditoria e segurança trabalham juntas para proteger dados e permitir investigação. Uma política eficaz registra eventos importantes sem expor informações desnecessárias.

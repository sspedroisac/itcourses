# Backups e Recuperação

## 1. Por que fazer backup

Backups preservam cópias recuperáveis de dados e configurações após exclusão acidental, falha de hardware, corrupção, erro de implantação ou ransomware. Eles são um controle de recuperação: não evitam o incidente, mas reduzem seu impacto.

## 2. Objetivos de recuperação

O **RPO** (Recovery Point Objective) define a perda máxima aceitável de dados. Um RPO de quatro horas significa que até quatro horas de alterações podem ser perdidas. O **RTO** (Recovery Time Objective) define quanto tempo o serviço pode ficar indisponível. Esses objetivos determinam frequência, retenção e infraestrutura necessária.

## 3. Estratégia de cópias

Backups completos simplificam a recuperação, mas podem consumir mais tempo e espaço. Incrementais e diferenciais reduzem a quantidade copiada, porém tornam o processo de restauração mais complexo. A estratégia precisa atender ao RPO e ao RTO, não apenas economizar armazenamento.

Mantenha cópias separadas do ambiente principal, com acesso restrito e proteção contra exclusão. Uma conta comprometida não deve conseguir apagar também as únicas cópias de recuperação.

## 4. Restore é a prova

Um backup não testado é uma hipótese. Faça restaurações periódicas em ambiente controlado e verifique dados, aplicações, permissões e tempo gasto. Documente o procedimento para que não dependa da memória de uma única pessoa.

## 5. Checklist operacional

- Monitorar sucesso e falha de cada rotina;
- Definir responsáveis, retenção e local das cópias;
- Criptografar cópias quando necessário;
- Testar restaurações e comparar o resultado com RPO e RTO;
- Incluir configurações, chaves e dependências essenciais no plano de recuperação.

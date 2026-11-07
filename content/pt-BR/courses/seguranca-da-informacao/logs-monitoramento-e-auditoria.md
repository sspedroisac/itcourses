# Logs, Monitoramento e Auditoria

## 1. Visibilidade operacional

Logs registram acontecimentos; monitoramento analisa sinais e métricas para revelar falhas ou comportamentos suspeitos. Sem visibilidade, a organização descobre um incidente tarde demais ou não consegue entender o que aconteceu.

## 2. O que registrar

Registre autenticações, falhas de login, mudanças de privilégio, ações administrativas, acesso a dados sensíveis, alterações de configuração e eventos de segurança. Um registro útil contém horário sincronizado, identidade, origem, ação, resultado e identificador de correlação.

## 3. Qualidade e proteção

Logs podem conter evidências e dados sensíveis. Restrinja acesso, defina retenção, filtre segredos e proteja contra alteração ou exclusão. O horário deve ser consistente entre sistemas; caso contrário, a reconstrução de uma linha do tempo fica imprecisa.

## 4. Alertas acionáveis

Crie alertas para eventos com resposta clara: aumento de falhas de login, criação de conta privilegiada ou exportação incomum de dados. Defina prioridade, responsável e procedimento. Alertas excessivos ou sem contexto causam fadiga e escondem sinais reais.

## 5. Auditoria

Auditoria usa registros e evidências para confirmar se controles foram executados. Ela deve apoiar melhoria, não apenas comprovação formal.

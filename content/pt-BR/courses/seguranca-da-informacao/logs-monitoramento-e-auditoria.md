# Logs, Monitoramento e Auditoria

## 1. Registros e visibilidade

Logs registram eventos de sistemas e processos; monitoramento analisa eventos e métricas para revelar falhas, tendências ou atividades incomuns; auditoria verifica evidências de que processos e controles foram executados. São práticas relacionadas, mas não equivalentes.

Sem registros adequados, equipes podem demorar a detectar incidentes e ter dificuldade para reconstruir o que aconteceu. Registrar tudo indiscriminadamente também é um problema: volume, custo e dados sensíveis podem tornar os registros pouco úteis ou arriscados.

## 2. O que registrar

Priorize eventos que apoiam operação, investigação e prestação de contas, como:

- autenticações bem-sucedidas e falhas relevantes;
- criação de contas e alterações de privilégios;
- mudanças administrativas e de configuração;
- acesso e exportação de dados sensíveis;
- falhas de processo, operações críticas e ações de recuperação.

Um evento deve oferecer contexto, como horário, identidade, origem, ação, recurso, resultado e identificador de correlação. Sincronizar relógios ajuda a alinhar a linha do tempo entre serviços.

## 3. Proteção e privacidade

Logs podem conter dados pessoais, identificadores e informações operacionais sensíveis. Evite gravar senhas, tokens, chaves ou conteúdo completo sem necessidade. Restrinja leitura e alteração, monitore acessos, defina retenção e proteja cópias.

A integridade dos registros importa: uma pessoa que pode alterar o sistema investigado não deve poder apagar silenciosamente todas as evidências. Separe permissões e armazene cópias conforme o modelo operacional. Retenção deve atender finalidades e requisitos aplicáveis sem acumular dados indefinidamente.

## 4. Alertas acionáveis

Um alerta deve ter condição de disparo, severidade, contexto, responsável e procedimento. Exemplos incluem aumento incomum de falhas de login, criação de conta privilegiada fora do processo e exportação acima do padrão esperado. Estabeleça como validar falsos positivos e quando escalar.

Alertas demais ou repetitivos geram fadiga. Ajuste limiares com base em comportamento legítimo, acompanhe alertas ignorados e revise regras após mudanças no sistema. Uma fila sem dono não é monitoramento.

## 5. Auditoria e evidências

Auditoria examina se controles foram executados, por quem e com qual resultado. Evidências podem incluir revisões de acesso, aprovações, alterações versionadas, testes de restauração ou registros de treinamento. A coleta deve ser proporcional e protegida contra alteração.

Use resultados para identificar lacunas e melhorar controles, não apenas para produzir documentos. Uma evidência precisa ser compreensível, datada e relacionada ao controle que pretende demonstrar.

## 6. Síntese e aplicação

Para a criação fictícia de uma conta administrativa, defina eventos, campos úteis, dados que não devem ser registrados, regra de alerta e primeira ação de resposta. Logs de qualidade permitem reconstruir decisões sem se tornarem uma nova fonte de exposição.

# Confidencialidade, Integridade e Disponibilidade

## 1. A tríade CIA

A tríade CIA reúne os objetivos mais usados para avaliar a segurança de uma informação: **confidencialidade**, **integridade** e **disponibilidade**. Ela é uma ferramenta simples para transformar a pergunta “isto é seguro?” em questões verificáveis.

## 2. Confidencialidade

Confidencialidade significa que somente entidades autorizadas podem conhecer uma informação. Um prontuário visível a qualquer funcionário, uma chave de API publicada no código ou uma conversa exibida em local público representam falhas desse objetivo.

Controles típicos incluem classificação de dados, autenticação, autorização, criptografia e compartilhamento com destinatários específicos. É importante lembrar que criptografar não resolve permissões excessivas: se muitos usuários têm acesso à chave ou ao dado já aberto, a exposição continua existindo.

## 3. Integridade

Integridade é a confiança de que a informação está correta, completa e não foi alterada indevidamente. Um preço modificado por engano, um log apagado ou uma atualização fraudulenta de conta comprometem a integridade.

Validações, permissões de escrita, revisões, assinaturas digitais, versionamento e trilhas de auditoria ajudam a preservar esse objetivo. Backups também contribuem, pois permitem recuperar uma versão conhecida quando dados são corrompidos.

## 4. Disponibilidade

Disponibilidade garante acesso a dados e serviços no momento necessário. Falhas de hardware, ataques de negação de serviço, erros de configuração e ransomware podem torná-los indisponíveis.

Redundância, capacidade adequada, monitoramento, backups testados e planos de recuperação reduzem interrupções. Disponibilidade não significa que todo sistema precisa funcionar sem parar; ela deve atender ao nível acordado para cada processo.

## 5. Equilíbrio e exemplo

Bloquear todo acesso maximiza a confidencialidade, mas impede o trabalho. Manter uma cópia editável por todos facilita a disponibilidade, mas ameaça a integridade. Para um relatório financeiro, uma solução equilibrada pode usar acesso por função, histórico de alterações e cópias recuperáveis.

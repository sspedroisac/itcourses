# Segurança em Nuvem

## 1. Responsabilidade compartilhada

Serviços de nuvem transferem parte da operação de infraestrutura a um provedor, mas não transferem automaticamente toda responsabilidade. O provedor protege componentes sob seu controle conforme o serviço contratado; o cliente continua responsável por decisões como identidade, dados, permissões, configurações e uso.

A divisão depende do modelo de serviço e do contrato. Em serviços gerenciados, o provedor pode assumir mais operação técnica, mas a organização ainda precisa definir quem acessa, quais dados são processados, quais registros são necessários e como responder a incidentes.

## 2. Identidade e configuração

Contas administrativas são um plano de controle crítico: podem criar recursos, alterar redes e acessar dados. Exija MFA, contas individuais, permissões mínimas, revisão de privilégios e registro de ações. Para automações, prefira identidades de serviço e credenciais temporárias em vez de chaves permanentes compartilhadas.

Configurações padrão nem sempre correspondem ao nível de proteção necessário. Revise exposição pública, regras de rede, armazenamento, criptografia e registros antes de publicar recursos. Automatize verificações repetíveis e acompanhe alterações fora do fluxo aprovado.

## 3. Dados, localização e ciclo de vida

Classifique os dados antes de escolher o serviço. Considere finalidade, sensibilidade, localização, retenção, cópias e quem pode operar o recurso. Confirme como o fornecedor apoia exportação, exclusão e recuperação, além de requisitos contratuais aplicáveis.

Criptografia ajuda a proteger dados, mas deve ser acompanhada de controle de acesso às chaves e do entendimento de quais partes do serviço podem processar conteúdo legível. Backups e redundância não substituem estratégia de recuperação nem teste de restauração.

## 4. Automação e infraestrutura como código

Infraestrutura como código permite revisar mudanças, reproduzir ambientes e detectar diferenças. Repositórios de configuração não devem conter segredos; use mecanismo aprovado de armazenamento e injeção de credenciais. Valide alterações com revisões, testes e controles automáticos antes da publicação.

A automação também pode propagar rapidamente um erro. Limite quem aprova mudanças críticas, proteja pipelines e monitore configurações efetivas no ambiente. Documente exceções e confira se ajustes manuais não criam divergência.

## 5. Monitoramento e saída

Habilite registros de acesso e alterações relevantes, defina retenção e proteja os logs. Monitore recursos expostos, permissões amplas, contas sem uso e mudanças de configuração. Quando um serviço deixar de ser necessário, revogue credenciais, exporte o que deve ser preservado e confirme descarte conforme o processo.

## 6. Síntese e aplicação

Para um armazenamento fictício de arquivos de projeto, defina classificação, acesso, registro, proteção contra publicação acidental, backup e plano de encerramento. Separe as responsabilidades do provedor das configurações que a equipe cliente deve manter.

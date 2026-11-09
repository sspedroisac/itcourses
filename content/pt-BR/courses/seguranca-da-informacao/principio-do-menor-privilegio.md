# Princípio do Menor Privilégio

## 1. Conceito e objetivo

Menor privilégio significa conceder a cada identidade apenas as permissões necessárias para uma tarefa, pelo menor período e no menor escopo possível. Aplica-se a pessoas, contas administrativas, aplicações, integrações, processos automatizados e dispositivos.

O princípio reduz o dano potencial de erro, abuso ou credencial comprometida. Uma conta que só pode consultar pedidos não deveria conseguir apagar registros ou alterar configurações globais. Uma pessoa que precisa visualizar um relatório não precisa necessariamente exportar toda a base.

## 2. Privilégios acumulados

Permissões costumam crescer quando pessoas mudam de função, projetos terminam ou exceções não expiram. O resultado é o chamado *privilege creep*: uma identidade mantém acessos antigos e recebe novos até que seu conjunto de permissões exceda a necessidade atual.

Inventários de papéis, revisões periódicas e eventos de mudança ajudam a detectar o acúmulo. Cada permissão especial deve ter finalidade, proprietário e justificativa. Revogação deve fazer parte do fluxo de mudança e desligamento, não depender de lembrança manual.

## 3. Contas administrativas separadas

Contas de uso cotidiano têm maior exposição a mensagens, navegação e documentos. Separar tarefas comuns de operações administrativas reduz as oportunidades de uma sessão rotineira obter privilégios elevados. Contas administrativas devem ter MFA, registro de ações e uso restrito a atividades necessárias.

Separação não é suficiente se a conta privilegiada compartilha senha, dispositivo desprotegido ou recuperação fraca com a conta comum. O desenho deve proteger todo o caminho de administração.

## 4. Acesso temporário e just-in-time

Quando uma tarefa exige privilégio elevado, conceda-o por tempo limitado, com justificativa e aprovação proporcionais ao impacto. O acesso deve expirar automaticamente e deixar registro. A expiração reduz privilégios permanentes e facilita revisão.

Processos de emergência podem permitir acesso excepcional, mas devem ser monitorados, documentados e revisados depois. “Acesso temporário” sem expiração ou registro tende a se tornar permanente.

## 5. Aplicação em serviços e testes

Contas de serviço devem ter escopos e permissões específicos, sem privilégios administrativos genéricos. Separe funções de leitura e escrita quando necessário. Teste tanto a ação permitida quanto a negada para verificar que o sistema aplica autorização em cada operação.

Ao reduzir privilégios, planeje impacto e monitore falhas legítimas. Um processo seguro não é simplesmente bloquear tudo, mas conceder exatamente o necessário e corrigir lacunas por um fluxo controlado.

## 6. Síntese e aplicação

Para uma aplicação que consulta dados, mas não precisa alterá-los, defina permissões mínimas, responsável, forma de teste e processo de revogação. Revise também como detectar privilégios acumulados. O princípio deve orientar pessoas e máquinas, não apenas os papéis administrativos.

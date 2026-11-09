# Identidade, Autenticação e Autorização

## 1. Conceitos distintos

**Identidade** representa uma pessoa, serviço ou dispositivo reconhecido por um sistema. **Autenticação** verifica uma alegação de identidade usando evidências, como senha, chave de segurança ou certificado. **Autorização** decide quais recursos e operações essa identidade pode acessar. **Auditoria** registra ações relevantes para responsabilização e investigação.

Essas etapas não são intercambiáveis. Uma pessoa pode autenticar-se corretamente e ainda assim não estar autorizada a consultar um registro específico. Uma tela que oculta uma opção também não substitui a validação de autorização no servidor.

## 2. Identidades individuais e de serviço

Contas individuais permitem atribuir ações e revogar acesso de uma pessoa sem afetar colegas. Contas compartilhadas reduzem rastreabilidade e dificultam a resposta quando uma credencial vaza. Se um processo legado exigir uma conta compartilhada, limite seu uso, proteja a credencial e registre quem a utilizou conforme política aprovada.

Contas de serviço, utilizadas por aplicações e automações, também precisam de proprietário, finalidade, escopo, validade e revisão. Credenciais permanentes e sem responsável se acumulam e podem continuar ativas após a integração deixar de ser necessária.

## 3. Ciclo de vida de acesso

O acesso acompanha mudanças na relação com a organização:

- **Entrada:** conceda somente permissões necessárias à função e após aprovações previstas;
- **Mudança de função:** retire acessos antigos que não são mais necessários antes ou durante a concessão dos novos;
- **Afastamento ou encerramento:** revogue contas, sessões, tokens, dispositivos e acessos de terceiros sem atraso indevido.

Revisões periódicas ajudam a encontrar contas sem proprietário, privilégios acumulados e exceções esquecidas. Mudanças e aprovações devem deixar evidências consultáveis.

## 4. Modelos de autorização

Controle baseado em função (RBAC) associa permissões a papéis de trabalho e simplifica a administração quando as funções são claras. Controle baseado em atributos (ABAC) considera características como identidade, recurso, local, dispositivo ou horário. Em ambos os casos, papéis e regras precisam ser revisados para evitar grupos amplos e combinações de privilégios incompatíveis.

Para ações de alto impacto, use separação de funções ou aprovação adicional quando apropriado. Uma pessoa que cria um pagamento, por exemplo, pode não ser a mesma que o aprova.

## 5. Federação e sessões

Autenticação centralizada e federação podem melhorar consistência e facilitar revogação, mas tornam o provedor de identidade um componente crítico. Proteja contas administrativas, monitore alterações de política e teste o processo de recuperação.

Sessões representam autenticação já estabelecida. Defina validade e revogação compatíveis com o risco; trocar uma senha não encerra necessariamente sessões existentes. Tokens, cookies e dispositivos confiáveis também precisam de proteção e expiração apropriadas.

## 6. Síntese e aplicação

Uma pessoa muda de atendimento para finanças: liste permissões novas, antigas e aprovações necessárias. Para uma integração desativada, identifique o proprietário e os acessos a revogar. Em ambos os casos, confirme que a identidade foi autenticada e que a autorização aplica menor escopo a cada recurso.

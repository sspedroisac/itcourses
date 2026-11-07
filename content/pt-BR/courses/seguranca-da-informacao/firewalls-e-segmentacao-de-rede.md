# Firewalls e Segmentação de Rede

## 1. Firewalls como pontos de decisão

Firewalls filtram tráfego conforme origem, destino, porta, protocolo e, em alguns casos, identidade e aplicação. Eles ajudam a materializar a pergunta: “esta comunicação é realmente necessária?”. Um firewall não substitui controles na aplicação, mas limita caminhos de ataque.

## 2. Negação por padrão

Uma postura segura começa bloqueando o tráfego não autorizado e liberando apenas conexões justificadas. Prefira regras específicas — “API para banco na porta necessária” — a regras amplas como “qualquer origem para qualquer destino”.

## 3. Segmentação

Segmentação separa ambientes e níveis de confiança: usuários, desenvolvimento, produção, administração e parceiros podem ocupar zonas distintas. Se um dispositivo de usuário for comprometido, ele não deve alcançar diretamente um banco de dados de produção.

## 4. Gestão de regras

Cada regra deve ter finalidade, proprietário e data de revisão. Exceções temporárias precisam expirar. Revise regras antigas, duplicadas ou amplas; elas frequentemente sobrevivem à mudança que as justificou e criam acessos invisíveis.

## 5. Validação

Teste se a regra funciona como esperado e se bloqueia o que deveria bloquear. Registros de bloqueio e permissão ajudam a encontrar erros de configuração e tentativas de abuso.

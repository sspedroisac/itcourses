# Firewalls e Segmentação de Rede

## 1. Papel do firewall

Firewall aplica decisões sobre tráfego de rede com base em critérios como origem, destino, porta, protocolo, identidade ou aplicação. Ele ajuda a limitar comunicações e impor fronteiras entre zonas. Não substitui segurança de aplicação, proteção de identidade ou atualização dos sistemas permitidos.

Uma regra de firewall traduz uma necessidade de negócio em uma permissão técnica. Antes de aprová-la, identifique quem precisa iniciar comunicação, qual serviço recebe, por que o fluxo é necessário e por quanto tempo deve existir.

## 2. Negação por padrão

Uma política de negação por padrão bloqueia tráfego não autorizado e permite explicitamente o necessário. Regras amplas, como “qualquer origem para qualquer destino”, dificultam revisão e podem expor serviços sem necessidade.

A especificidade deve permanecer operacional. Se portas ou destinos mudam frequentemente, mantenha inventário e processos para atualizar regras sem deixar permissões obsoletas. Documente finalidade, proprietário e prazo de revisão para cada exceção.

## 3. Segmentação

Segmentação divide ambientes em zonas com necessidades de confiança diferentes. Estações de trabalho não precisam alcançar diretamente todos os bancos de produção; ambientes de desenvolvimento não devem ser tratados como idênticos à produção; o acesso administrativo deve ser separado e monitorado.

A segmentação limita caminhos e pode conter a propagação de um comprometimento, mas não garante isolamento se existirem rotas alternativas, credenciais compartilhadas ou regras excessivas. Revise também os fluxos de saída e as conexões entre serviços na nuvem.

## 4. Gestão de regras

Regras devem ter solicitação, justificativa, aprovação e responsável. Revise periodicamente regras sem uso, duplicadas, amplas ou temporárias que não expiraram. Mudanças precisam de controle de versão ou registro equivalente, teste e plano de reversão adequado.

Logs ajudam a entender conexões permitidas e bloqueadas. Armazene-os com acesso restrito, tempo sincronizado e retenção apropriada. Um volume grande de eventos sem filtro nem responsável não constitui monitoramento efetivo.

## 5. Teste de resultado

Valide as duas faces da regra: a comunicação necessária deve funcionar e as não autorizadas devem falhar. Faça testes em ambiente e janela aprovados, observando o efeito nos serviços dependentes. Revise o resultado depois de mudanças na aplicação ou na topologia.

## 6. Síntese e aplicação

Compare uma regra aberta a todas as origens com outra que permite apenas um serviço necessário para um destino definido. Indique dados necessários para aprovar a regra, como registrar sua finalidade e como confirmar que segmentos não relacionados continuam sem acesso.

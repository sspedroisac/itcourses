# Fundamentos de Segurança de Redes

## 1. Redes e superfície de ataque

Redes permitem que usuários, dispositivos e serviços troquem dados. Cada conexão necessária também cria um caminho que precisa ser entendido e protegido. Uma falha em um dispositivo pode se espalhar para outros sistemas se não houver limites de acesso e monitoramento.

Segurança de rede começa com inventário de ativos, interfaces e fluxos. Conhecer apenas os endereços não basta: é preciso entender quem inicia uma comunicação, para qual finalidade, que dados trafegam e qual sistema é responsável por ela.

## 2. Fluxos e protocolos

Documente comunicações essenciais, como navegador para aplicação por conexão protegida, aplicação para banco de dados em uma rede restrita e serviço de monitoramento para sistemas sob sua responsabilidade. Use protocolos apropriados e criptografia em conexões que transportam informações sensíveis.

Um serviço “interno” ainda pode ser alcançado por uma conta ou máquina comprometida. Não confie exclusivamente na localização de rede; considere identidade, postura do dispositivo, destino e necessidade da operação.

## 3. Princípios de proteção

- **Minimizar exposição:** desativar interfaces e serviços que não têm finalidade;
- **Restringir caminhos:** permitir somente comunicações necessárias entre segmentos;
- **Proteger administração:** limitar origem, identidade e método de acesso;
- **Criptografar comunicação:** reduzir interceptação e adulteração em trânsito;
- **Monitorar:** identificar padrões inesperados e alterações relevantes;
- **Manter inventário:** saber quem responde por ativos e dependências.

Esses princípios devem funcionar junto de controles nos endpoints e nas aplicações. Um firewall pode limitar conexões, mas não garante que uma solicitação válida contenha dados corretos ou que o usuário esteja autorizado a executar aquela ação.

## 4. Arquitetura e confiança

Separar redes de usuários, desenvolvimento, produção, administração e serviços críticos reduz movimentação lateral e limita impacto. Segmentação não significa criar fronteiras impossíveis de operar; fluxos devem ser explícitos, testáveis e revistos quando a arquitetura muda.

Uma abordagem de confiança baseada em contexto revalida acesso de acordo com identidade e necessidade, sem assumir que estar “dentro” da rede torna uma conexão segura. A implementação depende do ambiente e deve evitar transformar autenticação em barreira única.

## 5. Visibilidade e operação

Registros de conexão ajudam a investigar falhas e comportamentos incomuns. Sincronize horários, proteja logs e defina retenção e responsáveis. Alertas precisam de contexto: uma tentativa bloqueada isolada pode ser ruído, enquanto uma mudança de padrão em um sistema crítico pode exigir análise.

Mudanças em regras e rotas devem ter justificativa, revisão, janela e procedimento de reversão compatível com o risco. Registre exceções e remova-as quando a necessidade terminar.

## 6. Síntese e aplicação

Desenhe um fluxo fictício entre navegador, API, banco e monitoramento. Para cada conexão, indique propósito, origem, destino, proteção e registro. A rede está melhor protegida quando todo fluxo permitido pode ser explicado e o restante é bloqueado de forma testada.

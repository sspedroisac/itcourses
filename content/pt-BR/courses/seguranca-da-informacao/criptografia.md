# Criptografia

## 1. O que a criptografia protege

Criptografia transforma dados legíveis em uma forma que não pode ser interpretada sem o material criptográfico apropriado. Ela ajuda a reduzir exposição quando dados são interceptados ou armazenados em meios que podem ser perdidos ou acessados indevidamente. A proteção depende de algoritmos consolidados, implementação correta, gestão de chaves e controles de acesso.

Criptografia não corrige dados incorretos, não decide quem deve ter acesso e não impede que uma pessoa autorizada copie a informação já decifrada. Deve ser usada junto de autorização, monitoramento e procedimentos de recuperação.

## 2. Dados em trânsito e em repouso

Dados **em trânsito** circulam entre navegador, aplicação e serviços. Protocolos seguros, como TLS configurado de modo adequado, ajudam a proteger comunicação e autenticar o serviço remoto. Uma conexão criptografada não garante que o destino seja legítimo se a pessoa foi direcionada a um serviço falso.

Dados **em repouso** ficam em bancos, discos, dispositivos, arquivos e cópias de segurança. Criptografia de disco pode reduzir exposição em caso de perda física, enquanto criptografia em uma aplicação pode proteger dados em outras camadas. Escolha com base no modelo de ameaça e confirme quem controla as chaves.

## 3. Cifras, chaves e hashes

Criptografia simétrica usa uma chave secreta compartilhada e é eficiente para grandes volumes. Criptografia assimétrica usa um par de chaves relacionadas, frequentemente para autenticação, assinaturas ou estabelecimento de chaves. Protocolos modernos combinam técnicas para obter segurança e desempenho.

Hash criptográfico produz um resumo de tamanho definido e não é projetado para ser revertido. Pode apoiar verificação de integridade. Armazenamento de senhas exige algoritmos específicos de derivação de chave, com salt e custo computacional apropriado; um hash rápido e simples não é suficiente.

Assinaturas digitais permitem verificar integridade e vínculo com uma chave privada, conforme a infraestrutura de confiança utilizada. Não são sinônimo de criptografia de confidencialidade: um documento assinado pode continuar legível por qualquer pessoa.

## 4. Gestão de chaves

Chaves devem ter propósito, proprietário, escopo de acesso e ciclo de vida. Armazene-as separadas dos dados que protegem, restrinja leitura e uso, registre operações relevantes e planeje rotação e revogação. Segredos não devem ser colocados no código ou em arquivos compartilhados.

Planeje também recuperação. Perder uma chave pode tornar dados inacessíveis; mantê-la disponível a todos pode tornar a criptografia ineficaz. Cofres e serviços de gestão de chaves ajudam, mas precisam de permissões e configurações revisadas.

## 5. Erros comuns

Criar algoritmos próprios, reutilizar chaves sem controle, registrar segredos em logs e confundir codificação com criptografia são falhas recorrentes. Uma senha codificada em Base64 continua legível; TLS não substitui autorização; criptografia de backup não prova que o backup pode ser restaurado.

## 6. Síntese e aplicação

Para um serviço fictício que armazena arquivos e os transfere a uma aplicação, identifique controles para trânsito, repouso e chaves. Explique quem pode decifrar, como uma chave comprometida seria revogada e como dados seriam recuperados. A escolha de algoritmo é apenas uma parte do desenho.

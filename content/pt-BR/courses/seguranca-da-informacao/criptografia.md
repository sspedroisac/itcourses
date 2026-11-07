# Criptografia

## 1. Papel da criptografia

Criptografia usa algoritmos e chaves para transformar dados legíveis em informação que só pode ser compreendida por entidades autorizadas. Ela reduz a exposição quando dados são interceptados, um disco é perdido ou uma cópia é acessada fora do fluxo esperado.

## 2. Criptografia em trânsito e em repouso

Dados em trânsito devem usar protocolos seguros, como TLS, para proteger a comunicação entre navegador, API e serviços internos. Dados em repouso podem ser protegidos em discos, bancos de dados, backups e arquivos. Os dois cenários são complementares: uma conexão segura não protege uma cópia armazenada sem proteção.

## 3. Tipos e usos

Criptografia simétrica normalmente protege grandes volumes de dados com uma chave secreta. Criptografia assimétrica usa um par de chaves e é útil para troca segura de chaves, autenticação e assinaturas. Funções de hash têm outro propósito: verificar integridade ou armazenar senhas de forma adequada; não são reversíveis como uma cifra.

## 4. Gestão de chaves

O valor da criptografia depende da proteção das chaves. Limite acesso, separe chaves dos dados, registre seu uso, faça rotação quando necessária e planeje backup e recuperação. Uma chave exposta pode anular a proteção de todos os dados associados.

## 5. Limites e boas decisões

Criptografia não substitui autorização, backups ou validação de entrada. Ela também não impede que um usuário autorizado copie uma informação já visualizada. Use implementações e bibliotecas consolidadas; criar algoritmos próprios é uma fonte comum de falhas.

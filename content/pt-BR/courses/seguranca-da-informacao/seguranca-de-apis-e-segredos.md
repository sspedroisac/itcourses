# Segurança de APIs e Segredos

## 1. APIs são contratos expostos

APIs devem autenticar o cliente, autorizar cada operação, validar dados e retornar somente o necessário. Uma API “interna” também precisa de proteção: outros serviços podem ser comprometidos e a arquitetura pode mudar com o tempo.

## 2. Autenticação não é autorização

Um token válido identifica uma integração, mas ainda é necessário verificar se aquele token pode executar a ação solicitada sobre aquele recurso. Use escopos específicos e evite tokens com acesso global quando uma permissão limitada resolve o caso.

## 3. Segredos

Senhas, chaves e tokens não devem estar em repositórios, imagens de contêiner, documentação pública ou logs. Use um cofre de segredos, controle quem pode lê-los e faça rotação quando houver vazamento ou mudança de responsável.

## 4. Resiliência e visibilidade

Limites de taxa e tamanho reduzem abuso e consumo inesperado. Registre autenticações, falhas, mudanças de credenciais e operações relevantes, mas filtre dados sensíveis. Mensagens de erro devem orientar o cliente sem revelar detalhes internos.

## 5. Checklist de design

- TLS em todas as comunicações;
- Escopos e expiração apropriados para tokens;
- Autorização por operação e recurso;
- Validação de entradas e respostas mínimas;
- Inventário de integrações e plano de rotação de segredos.

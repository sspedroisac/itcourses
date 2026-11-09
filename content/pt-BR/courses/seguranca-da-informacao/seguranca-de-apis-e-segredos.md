# Segurança de APIs e Segredos

## 1. APIs como fronteiras de confiança

Uma API define operações que aplicações e serviços podem solicitar. Ser “interna” não a torna automaticamente confiável: credenciais podem ser comprometidas, redes mudam e serviços de terceiros podem ser afetados. Cada interface deve declarar o que aceita, quem pode usá-la e quais efeitos produz.

Segurança de API combina autenticação, autorização por operação e recurso, validação, limites de uso, comunicação protegida e registros. Uma resposta deve conter apenas os dados necessários para a finalidade solicitada.

## 2. Autenticação e autorização

Tokens, certificados ou outros mecanismos identificam o cliente, mas não concedem acesso ilimitado. Associe credenciais a escopos e recursos específicos, limite validade e permita revogação. A aplicação deve verificar autorização em cada solicitação, inclusive quando o identificador do objeto vem do cliente.

Para ações de alto impacto, considere aprovação, segregação de funções ou confirmação adicional. Limites de tamanho e taxa ajudam a evitar consumo imprevisto, mas devem ser definidos conforme comportamento legítimo e acompanhados de tratamento de erros consistente.

## 3. Proteção de segredos

Segredos incluem senhas, tokens, chaves privadas e credenciais de integração. Não os inclua em código, commits, imagens, documentação pública ou logs. Use um cofre ou mecanismo aprovado, limite quem pode consultar, registre acessos e estabeleça rotação e revogação.

Se um segredo for exposto, trate-o como comprometido mesmo que não haja evidência de uso. Revogue ou rotacione, investigue onde foi copiado, atualize consumidores e remova o valor de locais acessíveis conforme procedimento. Apagar o texto do arquivo atual não invalida a credencial nem necessariamente remove seu histórico.

## 4. Tokens e ciclo de vida

Tokens devem ter emissor, audiência, finalidade, escopo e expiração adequados. Evite credenciais compartilhadas entre ambientes ou integrações distintas. Credenciais temporárias reduzem tempo de exposição quando há suporte e operação apropriada.

Planeje renovação e contingência: uma rotação sem coordenação pode interromper serviços; uma exceção para evitar interrupção pode deixar o segredo antigo ativo. Mantenha inventário, proprietário e procedimento de atualização.

## 5. Registros e erros

Registre autenticações, falhas, mudanças de credenciais e operações relevantes com identificadores que permitam correlação. Nunca registre o valor de um token ou senha. Mensagens de erro devem permitir diagnóstico sem revelar conteúdo interno, segredos ou existência de recursos que o solicitante não pode acessar.

## 6. Síntese e aplicação

Uma integração fictícia consulta pedidos, mas não os altera. Defina escopos, autorização por pedido, armazenamento do segredo, expiração, eventos de auditoria e resposta a exposição. Confirme com testes que tentativas de alteração e acesso a pedidos não autorizados são recusadas.

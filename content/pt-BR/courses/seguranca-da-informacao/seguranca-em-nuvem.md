# Segurança em Nuvem

## 1. Responsabilidade compartilhada

Em nuvem, o provedor normalmente protege a infraestrutura física e parte da camada de serviço. O cliente continua responsável por identidades, dados, configurações, redes, aplicações e pelo uso correto dos recursos contratados. A divisão exata muda conforme o tipo de serviço; ela deve ser compreendida antes da adoção.

## 2. Erros de configuração

Muitos incidentes em nuvem resultam de recursos expostos por engano: armazenamento público, chaves amplas, grupos de rede permissivos ou registros desativados. Comece com acesso mínimo, criptografia adequada, redes privadas quando possível e trilhas de auditoria ativas.

## 3. Automação segura

Infraestrutura como código permite revisar, versionar e reproduzir ambientes. Adicione validações antes da publicação para impedir, por exemplo, armazenamento público ou portas administrativas abertas para toda a internet. Mudanças manuais ainda devem ser registradas e revisadas.

## 4. Dados e identidade

Defina onde os dados residem, quem pode acessá-los, como são copiados e como serão apagados. Evite chaves permanentes em código; prefira identidades de serviço com escopo mínimo e credenciais temporárias quando o serviço oferecer esse recurso.

## 5. Checklist

- MFA e permissões mínimas para contas administrativas;
- Logs de acesso e alterações habilitados;
- Recursos públicos revisados explicitamente;
- Backups e recuperação testados;
- Plano de exportação e descarte de dados ao encerrar o serviço.

# Princípios de Segurança

## 1. Introdução

Princípios de segurança orientam decisões de arquitetura, implementação e operação.

Eles ajudam a evitar que a segurança dependa apenas de atenção individual ou de correções feitas depois de um incidente.

---

## 2. Menor privilégio

O princípio do **menor privilégio** determina que uma identidade tenha apenas as permissões necessárias para sua tarefa.

Isso vale para usuários, serviços, jobs de pipeline e componentes da aplicação.

Permissões amplas aumentam o impacto de erros e do comprometimento de credenciais.

---

## 3. Negação por padrão

Quando uma permissão não foi explicitamente concedida, o acesso deve ser negado.

Essa abordagem é mais segura do que permitir tudo e tentar bloquear casos conhecidos, especialmente quando novos recursos são adicionados ao sistema.

---

## 4. Separação de responsabilidades

Operações críticas podem exigir mais de uma pessoa, papel ou etapa de aprovação.

Por exemplo, quem solicita uma alteração pode não ser a mesma pessoa que aprova ou publica a mudança. A separação reduz fraudes e erros não detectados.

---

## 5. Falhar com segurança

Quando um erro acontece, o sistema deve evitar expor informações sensíveis ou conceder acesso indevido.

Mensagens apresentadas ao usuário devem ser úteis sem revelar detalhes internos, como consultas, caminhos de arquivos ou credenciais.

---

## 6. Não confiar em entradas externas

Dados vindos de usuários, integrações, arquivos e serviços externos devem ser tratados como não confiáveis.

Eles precisam ser validados de acordo com o contexto de uso, com limites de tamanho, formato e valores permitidos.

---

## 7. Proteção de dados

Dados sensíveis devem ser coletados, armazenados e compartilhados somente quando necessário.

Boas práticas incluem:

- Minimizar a coleta;
- Definir prazos de retenção;
- Criptografar dados quando adequado;
- Proteger credenciais com cofres de segredos;
- Evitar dados sensíveis em logs.

---

## 8. Segurança por padrão e por design

Configurações iniciais devem ser seguras e não exigir que cada usuário descubra quais controles precisam ser ativados.

Além disso, a arquitetura deve considerar autenticação, autorização, auditoria, privacidade e recuperação antes da implementação.

---

## 9. Simplicidade e transparência

Soluções simples são mais fáceis de revisar, testar e proteger.

Controles importantes devem possuir comportamento compreensível e registros suficientes para investigação. Esconder uma falha não é o mesmo que proteger o sistema.

---

## 10. Resumo

| Princípio                      | Aplicação                                    |
| ------------------------------ | -------------------------------------------- |
| Menor privilégio               | Conceder somente acessos necessários         |
| Negação por padrão             | Bloquear o que não foi permitido             |
| Separação de responsabilidades | Dividir operações críticas                   |
| Falha segura                   | Evitar exposição ou acesso indevido em erros |
| Defesa em profundidade         | Combinar controles independentes             |
| Segurança por design           | Considerar riscos desde a arquitetura        |

---

## 11. Boas práticas

- Definir permissões explicitamente;
- Revisar acessos periodicamente;
- Validar entradas no limite de confiança;
- Minimizar coleta e retenção de dados;
- Evitar informações sensíveis em mensagens e logs;
- Preferir soluções simples e testáveis;
- Documentar decisões de segurança importantes.

---

## 12. Conclusão

Princípios de segurança fornecem critérios para projetar sistemas mais resistentes a erros, abusos e mudanças.

Aplicados de forma consistente, eles reduzem a superfície de ataque e tornam os controles mais fáceis de manter.

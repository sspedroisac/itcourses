# Autenticação e Autorização

## 1. Introdução

**Autenticação** e **autorização** são controles diferentes.

- Autenticação responde: “Quem é você?”
- Autorização responde: “O que você pode fazer?”

Um sistema pode autenticar corretamente uma pessoa e ainda autorizar uma operação indevida se suas regras de acesso estiverem erradas.

---

## 2. Autenticação

A autenticação verifica a identidade de um usuário, serviço ou dispositivo.

Fatores de autenticação podem ser:

- Algo que a pessoa sabe, como uma senha;
- Algo que possui, como um dispositivo;
- Algo que é, como uma característica biométrica.

Combinar fatores diferentes pode aumentar a proteção de contas importantes.

---

## 3. Senhas

Senhas devem ser armazenadas usando funções de derivação adequadas, com salt e parâmetros resistentes a tentativas de descoberta.

O sistema não deve armazenar ou registrar senhas em texto puro. Também deve aplicar limites e monitoramento para reduzir tentativas automatizadas abusivas.

---

## 4. Sessões e tokens

Depois da autenticação, o sistema precisa manter uma representação segura da sessão ou do token.

É importante definir expiração, renovação, revogação e proteção contra reutilização indevida. Tokens não devem ser expostos em URLs, logs ou mensagens de erro.

---

## 5. Autorização

A autorização verifica se uma identidade autenticada possui permissão para realizar uma ação sobre determinado recurso.

Uma decisão de acesso pode considerar:

```text
Identidade + Ação + Recurso + Contexto
                  │
                  ▼
          Permitir ou negar
```

---

## 6. Modelos de autorização

Modelos comuns incluem:

- **Baseado em papéis (RBAC):** permissões são associadas a funções;
- **Baseado em atributos (ABAC):** a decisão considera atributos da identidade, recurso e contexto;
- **Listas de controle (ACL):** cada recurso possui regras de acesso.

O modelo escolhido deve ser compreensível e adequado à complexidade do domínio.

---

## 7. Verificar em cada operação

Não é suficiente esconder um botão na interface. O servidor deve verificar a autorização em toda operação protegida.

Isso evita que uma pessoa acesse um recurso apenas alterando a requisição enviada ao sistema.

---

## 8. Contas e recuperação

Fluxos de cadastro, recuperação de senha, alteração de e-mail e encerramento de sessão também precisam de proteção.

Mensagens de recuperação devem evitar revelar se uma conta existe. Alterações sensíveis podem exigir uma nova autenticação ou fator adicional.

---

## 9. Auditoria

Operações relevantes devem gerar registros suficientes para investigação, como identidade, ação, recurso, horário e resultado.

Logs de auditoria devem ser protegidos contra alteração indevida e não devem conter credenciais ou dados desnecessários.

---

## 10. Resumo

| Conceito     | Descrição                                                   |
| ------------ | ----------------------------------------------------------- |
| Autenticação | Verificação da identidade                                   |
| Autorização  | Verificação das permissões                                  |
| Sessão       | Estado associado a uma autenticação                         |
| Token        | Credencial usada para representar uma autorização ou sessão |
| RBAC         | Controle baseado em papéis                                  |
| ABAC         | Controle baseado em atributos                               |
| Auditoria    | Registro de ações relevantes                                |

---

## 11. Boas práticas

- Separar autenticação de autorização;
- Armazenar senhas com derivação segura;
- Aplicar expiração e revogação de sessões;
- Verificar permissões no servidor;
- Aplicar menor privilégio;
- Proteger fluxos de recuperação;
- Registrar ações importantes sem expor segredos.

---

## 12. Conclusão

Autenticação identifica quem acessa o sistema, enquanto autorização define o que essa identidade pode fazer.

Controles consistentes no servidor, sessões protegidas e auditoria adequada ajudam a reduzir acessos indevidos e tornam as decisões de segurança verificáveis.

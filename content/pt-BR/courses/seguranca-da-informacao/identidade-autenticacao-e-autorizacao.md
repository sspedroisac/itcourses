# Identidade, Autenticação e Autorização

## 1. Três perguntas distintas

**Identidade** responde quem é uma pessoa, serviço ou dispositivo. **Autenticação** verifica se essa entidade é quem afirma ser. **Autorização** define quais recursos ou ações ela pode usar. Um usuário autenticado não deve, por isso, receber acesso automático a tudo.

Imagine uma pessoa que entra no prédio usando um crachá: o crachá confirma sua identidade, mas não autoriza acesso a todos os andares. Em sistemas, a mesma separação evita permissões excessivas.

## 2. Contas e responsabilidades

Contas individuais criam responsabilização e permitem revogar acesso sem afetar outras pessoas. Contas compartilhadas dificultam auditoria e devem ser evitadas. Contas de serviço também exigem proprietário, finalidade definida e permissões mínimas.

## 3. Ciclo de vida de acesso

O acesso deve ser concedido após solicitação e aprovação adequadas, alterado quando uma função muda e removido imediatamente em desligamentos ou no término de uma necessidade temporária. Esse processo é conhecido como *joiner, mover, leaver*.

Uma revisão periódica compara permissões existentes com a necessidade atual. Ela encontra contas órfãs, privilégios acumulados e acessos concedidos por exceção que já não fazem sentido.

## 4. Autorização bem desenhada

Papéis ajudam a conceder acesso por função, mas não devem virar grupos genéricos e amplos. Para operações sensíveis, avalie exigência de aprovação, limite de valor, segregação de funções e registro de auditoria.

## 5. Boas práticas

- Usar identidade centralizada quando possível;
- Exigir MFA em contas importantes;
- Registrar autenticações e ações administrativas;
- Definir dono, propósito e prazo para acessos especiais;
- Testar periodicamente se a autorização é aplicada também no servidor.

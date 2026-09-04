# Autenticação e Autorização

## 1. Diferença entre autenticação e autorização

**Autenticação** verifica quem é o usuário ou serviço. **Autorização** define o que essa identidade pode fazer depois de autenticada.

```text
Identidade apresentada
        │
        ▼
Autenticação
        │
        ▼
Permissões avaliadas
        │
        ▼
Autorização
```

---

## 2. Autenticação

A autenticação pode usar:

- usuário e senha;
- certificados;
- chaves;
- integração com diretórios;
- identidade gerenciada;
- autenticação multifator em ferramentas administrativas.

Senhas devem ser protegidas e nunca armazenadas em texto puro.

---

## 3. Autorização

A autorização avalia privilégios, roles, objeto acessado e contexto da operação.

Uma identidade pode ter permissão para consultar uma tabela, mas não para alterar ou remover seus dados.

---

## 4. Separação de responsabilidades

A separação entre autenticação e autorização torna políticas mais claras e permite alterar o mecanismo de login sem redefinir toda a política de acesso.

Também é importante separar responsabilidades administrativas, operacionais e de auditoria.

---

## 5. Segurança de conexões

Conexões com bancos devem usar canais protegidos quando atravessarem redes não confiáveis. Certificados, rotação de credenciais e restrição de origem reduzem riscos.

---

## 6. Aplicações

Aplicações devem usar credenciais próprias, armazenadas em gerenciadores seguros. O código não deve conter senhas fixas em arquivos versionados.

---

## 7. Boas práticas

- Usar autenticação forte;
- Rotacionar credenciais;
- Limitar origem das conexões;
- Aplicar menor privilégio;
- Registrar falhas de autenticação;
- Revisar permissões após mudanças de equipe.

---

## 8. Resumo

Autenticação confirma a identidade; autorização controla seus direitos. Os dois mecanismos devem trabalhar juntos para proteger dados e limitar o impacto de credenciais comprometidas.

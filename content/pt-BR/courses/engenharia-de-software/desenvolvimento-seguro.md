# Desenvolvimento Seguro

## 1. Introdução

O **desenvolvimento seguro** integra práticas de segurança ao processo normal de desenvolvimento.

A meta é reduzir vulnerabilidades desde o início, sem tratar segurança como uma etapa isolada depois que o produto já foi construído.

---

## 2. Segurança no ciclo de vida

Controles de segurança podem ser aplicados em todas as etapas:

```text
Requisitos → Arquitetura → Código → Testes → Deploy → Operação
```

Cada etapa possui perguntas próprias sobre dados, permissões, dependências, ameaças e recuperação.

---

## 3. Requisitos de segurança

Requisitos de segurança devem ser específicos e verificáveis.

Exemplos:

- Usuários sem permissão não podem acessar dados de outra organização;
- Credenciais não podem aparecer em logs;
- Sessões devem expirar após um período definido;
- Operações críticas devem gerar registros de auditoria.

---

## 4. Práticas de código seguro

Durante a implementação, a equipe deve:

- Validar entradas;
- Usar APIs seguras e consultas parametrizadas;
- Aplicar autorização no servidor;
- Tratar erros sem expor detalhes internos;
- Proteger segredos;
- Evitar dependências desnecessárias;
- Manter tipos e limites coerentes.

---

## 5. Revisões e testes de segurança

Revisões de código podem avaliar autenticação, autorização, entrada de dados, tratamento de erros e exposição de informações.

Testes automatizados e análises estáticas ajudam a encontrar padrões de risco. Testes dinâmicos, análise de dependências e avaliações especializadas complementam essa cobertura.

---

## 6. Dependências e cadeia de fornecimento

Uma aplicação depende de bibliotecas, ferramentas, imagens e serviços externos.

Um processo seguro deve manter inventário, controlar versões, avaliar atualizações e restringir a origem de artefatos.

Dependências não utilizadas devem ser removidas para reduzir a superfície de risco.

---

## 7. Segredos e configurações

Senhas, tokens e chaves não devem ser incluídos no código, no histórico do repositório ou em logs.

Devem ser fornecidos por mecanismos apropriados, com permissões mínimas, rotação e auditoria.

---

## 8. Pipeline seguro

O pipeline pode incluir verificações automáticas de:

- Dependências vulneráveis;
- Segredos expostos;
- Qualidade e tipos;
- Configurações inseguras;
- Artefatos e imagens;
- Permissões de publicação.

As verificações devem bloquear riscos relevantes e gerar feedback compreensível.

---

## 9. Resposta e melhoria

Quando uma vulnerabilidade é encontrada, a equipe deve avaliar severidade, corrigir, validar e acompanhar a exposição residual.

Uma análise posterior pode melhorar testes, padrões, treinamento e automação para evitar que o problema se repita.

---

## 10. Checklist de desenvolvimento seguro

| Área         | Pergunta                                          |
| ------------ | ------------------------------------------------- |
| Dados        | Coletamos e armazenamos somente o necessário?     |
| Acesso       | Cada operação verifica a autorização correta?     |
| Entradas     | Dados externos são validados conforme o contexto? |
| Segredos     | Credenciais estão fora do código e dos logs?      |
| Dependências | Versões e vulnerabilidades são acompanhadas?      |
| Operação     | Existem logs, alertas e plano de recuperação?     |

---

## 11. Boas práticas

- Definir requisitos de segurança verificáveis;
- Modelar ameaças em mudanças importantes;
- Revisar código com foco em riscos;
- Automatizar análises no pipeline;
- Atualizar e remover dependências;
- Proteger segredos com ferramentas adequadas;
- Corrigir vulnerabilidades conforme sua prioridade.

---

## 12. Conclusão

Desenvolvimento seguro é uma disciplina contínua que combina arquitetura, código, testes, automação e operação.

Ao incorporar segurança ao fluxo diário da equipe, os problemas são descobertos mais cedo e o software se torna mais resistente a falhas e abusos.

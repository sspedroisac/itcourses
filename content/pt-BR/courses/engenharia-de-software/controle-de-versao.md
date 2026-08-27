# Controle de Versão

## 1. Introdução

O **controle de versão** registra alterações realizadas em arquivos ao longo do tempo.

Ele permite recuperar versões anteriores, trabalhar em paralelo, revisar mudanças e entender como o projeto evoluiu. Sistemas distribuídos como o Git são amplamente usados no desenvolvimento de software.

---

## 2. Repositório e commit

Um **repositório** armazena o histórico e os arquivos controlados de um projeto.

Um **commit** representa um conjunto de alterações registrado com uma mensagem que explica sua intenção.

Commits pequenos e coerentes facilitam a revisão, a investigação de problemas e a reversão de mudanças.

---

## 3. Branches

Uma **branch** é uma linha de desenvolvimento que permite trabalhar em uma alteração sem modificar imediatamente a linha principal.

Um fluxo simplificado é:

```text
main ─────●────────●────────●────
           \
feature     ●────●────●
```

Branches devem ter vida e escopo controlados para evitar divergências difíceis de integrar.

---

## 4. Integração de alterações

Depois de implementada, uma branch pode ser integrada à linha principal por meio de merge ou rebase, conforme a política do projeto.

Antes da integração, é importante atualizar a branch, resolver conflitos, executar testes e revisar a alteração.

```text
Implementar → Testar → Revisar → Integrar
```

---

## 5. Conflitos

Um conflito acontece quando duas alterações incompatíveis afetam a mesma parte de um arquivo ou histórico.

Resolver um conflito exige compreender a intenção das duas mudanças. A solução não deve ser escolhida apenas para fazer o comando terminar; os testes precisam confirmar o comportamento final.

---

## 6. Mensagens de commit

Uma boa mensagem de commit informa o propósito da alteração.

Mensagens como “ajustes” ou “mudanças diversas” dificultam a consulta do histórico. É melhor registrar algo específico, como “Validar limite de tentativas de login”.

Um commit deve evitar misturar correções sem relação, formatação ampla e novas funcionalidades.

---

## 7. Pull requests

Uma pull request reúne uma alteração para revisão e integração.

Uma descrição útil apresenta:

- Problema ou objetivo;
- Solução adotada;
- Testes executados;
- Impactos conhecidos;
- Pontos que precisam de atenção.

Revisões são mais eficientes quando a alteração é pequena e possui contexto suficiente.

---

## 8. Tags e releases

Uma **tag** identifica um ponto específico do histórico, geralmente associado a uma versão publicada.

Tags e releases facilitam saber exatamente qual código foi entregue e permitem relacionar uma versão a notas de lançamento, artefatos e mudanças.

---

## 9. Boas práticas de uso

O controle de versão não substitui backups, testes ou revisão de código.

Também é importante evitar incluir credenciais, arquivos gerados desnecessariamente e dados sensíveis no repositório.

Alterações devem ser integradas com frequência razoável para reduzir divergências e conflitos.

---

## 10. Resumo

| Conceito     | Descrição                                         |
| ------------ | ------------------------------------------------- |
| Repositório  | Local que armazena arquivos e histórico           |
| Commit       | Registro de um conjunto coerente de alterações    |
| Branch       | Linha independente de desenvolvimento             |
| Merge        | Integração de históricos ou branches              |
| Conflito     | Alteração incompatível que exige decisão manual   |
| Tag          | Identificador de um ponto específico do histórico |
| Pull request | Proposta de alteração para revisão e integração   |

---

## 11. Boas práticas

- Fazer commits pequenos e coerentes;
- Escrever mensagens específicas;
- Evitar versionar segredos e arquivos gerados;
- Criar branches com objetivo claro;
- Integrar alterações com frequência;
- Executar testes antes de integrar;
- Usar tags para identificar releases;
- Resolver conflitos entendendo o comportamento esperado.

---

## 12. Conclusão

O controle de versão fornece histórico, colaboração e segurança para a evolução do software.

Quando combinado com revisão, testes e uma política clara de integração, ele permite que a equipe trabalhe em paralelo sem perder rastreabilidade sobre as entregas.

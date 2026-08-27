# Revisão de Código

## 1. Introdução

A **revisão de código** é a análise de uma alteração por outra pessoa ou por outras pessoas da equipe antes de sua integração ao código principal.

Ela ajuda a encontrar defeitos, compartilhar conhecimento e manter padrões técnicos consistentes.

---

## 2. Objetivos da revisão

Uma revisão pode verificar:

- Atendimento aos requisitos;
- Correção da solução;
- Clareza do código;
- Tratamento de erros;
- Segurança;
- Desempenho;
- Cobertura de testes;
- Impacto em outras partes do sistema.

O objetivo é melhorar a alteração e reduzir riscos, não procurar culpados.

---

## 3. O que revisar

Antes de analisar detalhes de estilo, é importante compreender a intenção da mudança.

Perguntas iniciais:

- Qual problema está sendo resolvido?
- Quais comportamentos foram alterados?
- Existe alguma decisão ou restrição importante?
- Como a mudança foi validada?

Depois, a pessoa revisora pode examinar código, testes, configurações, migrações e documentação relacionados.

---

## 4. Revisão e testes

A revisão de código não substitui testes, e testes não substituem revisão.

Os testes verificam comportamentos executáveis. A revisão também pode encontrar problemas de legibilidade, desenho, segurança, manutenção e casos que não foram cobertos.

```text
Alteração
   │
   ├──► Testes: verificar comportamentos
   │
   └──► Revisão: avaliar solução e riscos
```

---

## 5. Pull requests pequenas

Alterações menores são mais fáceis de compreender e revisar.

Uma pull request deve, quando possível, tratar de um objetivo claro e evitar misturar refatorações extensas, mudanças de formatação e novas funcionalidades sem relação.

Uma descrição útil informa o problema, a solução, a forma de validação e eventuais pontos de atenção.

---

## 6. Como escrever comentários

Comentários de revisão devem ser específicos, respeitosos e acionáveis.

Um comentário melhor explica o risco observado e, quando possível, sugere uma direção:

> Esta consulta pode retornar registros de outras contas porque o filtro não usa o identificador do usuário. Podemos restringir a busca antes de executar a consulta?

Comentários sobre preferências pessoais devem ser separados de problemas que afetam comportamento, segurança ou manutenção.

---

## 7. Responsabilidade de quem envia a alteração

Quem cria a alteração deve facilitar sua revisão:

- Manter o escopo pequeno;
- Explicar decisões não óbvias;
- Adicionar ou atualizar testes;
- Verificar a execução local;
- Responder aos comentários com contexto;
- Atualizar a alteração quando necessário.

Uma revisão eficiente é uma colaboração entre quem propõe e quem analisa.

---

## 8. Responsabilidade de quem revisa

Quem revisa deve conhecer o contexto suficiente para avaliar a mudança e concentrar atenção nos riscos mais relevantes.

É importante não bloquear uma alteração por detalhes irrelevantes quando eles não comprometem o sistema. Sugestões opcionais podem ser marcadas como tal.

Também é responsabilidade da pessoa revisora fazer perguntas quando a intenção não estiver clara, em vez de presumir o comportamento desejado.

---

## 9. Checklist de revisão

| Área          | Perguntas                                       |
| ------------- | ----------------------------------------------- |
| Requisitos    | A alteração resolve o problema correto?         |
| Comportamento | Casos válidos e inválidos foram considerados?   |
| Testes        | Os cenários importantes estão cobertos?         |
| Segurança     | Há exposição de dados ou permissões incorretas? |
| Desempenho    | Existe operação desnecessariamente custosa?     |
| Manutenção    | A solução é compreensível e evolutiva?          |
| Operação      | Logs, configuração e migrações foram avaliados? |

O checklist orienta a análise, mas não substitui o julgamento técnico.

---

## 10. Automação na revisão

Formatadores, linters, verificadores de tipos e ferramentas de segurança podem detectar problemas repetitivos automaticamente.

Isso libera a revisão humana para discutir arquitetura, regras de negócio, riscos e clareza da solução.

```text
Verificações automáticas → problemas mecânicos
Revisão humana           → contexto e decisões
```

---

## 11. Resumo

| Prática              | Benefício                               |
| -------------------- | --------------------------------------- |
| Alteração pequena    | Facilita compreensão e análise          |
| Descrição clara      | Explica intenção e validação            |
| Comentário acionável | Torna a correção objetiva               |
| Testes automatizados | Verificam comportamentos repetidamente  |
| Automação de estilo  | Reduz discussões mecânicas              |
| Revisão colaborativa | Compartilha conhecimento e reduz riscos |

---

## 12. Boas práticas

- Revisar o problema antes de revisar cada linha;
- Priorizar defeitos, segurança e riscos de manutenção;
- Manter comentários objetivos e respeitosos;
- Usar automação para padrões mecânicos;
- Evitar pull requests excessivamente grandes;
- Registrar decisões importantes;
- Tratar a revisão como colaboração técnica.

---

## 13. Conclusão

A revisão de código é uma prática de qualidade que combina detecção de problemas, compartilhamento de conhecimento e evolução dos padrões da equipe.

Quando realizada com escopo adequado, automação e comunicação respeitosa, ela aumenta a confiança nas mudanças sem transformar o desenvolvimento em uma disputa pessoal.

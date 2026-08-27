# ADRs

## 1. Introdução

**ADR** significa _Architecture Decision Record_, ou registro de decisão arquitetural.

Um ADR documenta uma decisão importante, o contexto que levou a ela, as alternativas consideradas e suas consequências.

---

## 2. Por que registrar decisões?

Decisões arquiteturais costumam afetar muitas partes do sistema e podem ser difíceis de reverter.

Sem registro, a equipe pode repetir discussões, esquecer restrições ou questionar uma escolha sem conhecer o contexto original.

Um ADR preserva o raciocínio, não apenas o resultado.

---

## 3. Quando criar um ADR

Um ADR é útil quando uma decisão:

- Afeta a estrutura do sistema;
- Define uma tecnologia ou padrão importante;
- Possui impacto significativo em segurança, custo ou operação;
- Envolve alternativas com consequências diferentes;
- Será difícil de reverter depois.

Decisões pequenas e reversíveis normalmente não precisam de um documento formal.

---

## 4. Estrutura de um ADR

Um registro pode conter:

```text
Título
Status
Contexto
Decisão
Alternativas consideradas
Consequências
```

O formato pode variar, mas deve ser curto o suficiente para ser lido e completo o suficiente para preservar o raciocínio.

---

## 5. Exemplo

```markdown
# Usar fila para processamento de notificações

## Status

Aceita

## Contexto

O envio de notificações não deve bloquear a criação de pedidos.

## Decisão

Processar notificações por uma fila assíncrona.

## Consequências

Será necessário monitorar mensagens e tratar reprocessamento.
```

O exemplo registra a escolha e também o custo operacional que ela cria.

---

## 6. Status e evolução

Um ADR pode possuir status como proposto, aceito, substituído ou rejeitado.

Quando uma decisão deixa de ser válida, o documento não deve ser apagado. Ele pode ser marcado como substituído e relacionado ao novo ADR, preservando o histórico.

---

## 7. Alternativas e consequências

Registrar alternativas ajuda a explicar por que uma opção foi escolhida.

As consequências podem ser positivas ou negativas e incluir impacto em desempenho, custo, complexidade, segurança, equipe e operação.

```text
Contexto → Alternativas → Decisão → Consequências
```

---

## 8. ADRs no repositório

Manter ADRs versionados junto do código facilita revisão e consulta.

Uma pasta dedicada, nomes numerados e links entre decisões ajudam a encontrar o histórico. A organização deve seguir o padrão adotado pelo projeto.

---

## 9. Resumo

| Elemento        | Descrição                              |
| --------------- | -------------------------------------- |
| ADR             | Registro de decisão arquitetural       |
| Contexto        | Situação e restrições da decisão       |
| Alternativa     | Opção considerada antes da escolha     |
| Consequência    | Efeito positivo ou negativo da decisão |
| Status          | Estado atual do registro               |
| ADR substituído | Decisão antiga superada por outra      |

---

## 10. Boas práticas

- Registrar decisões relevantes no momento em que são tomadas;
- Explicar contexto e alternativas;
- Documentar consequências e custos;
- Manter ADRs curtos e encontráveis;
- Versionar registros junto do projeto;
- Atualizar status sem apagar o histórico;
- Relacionar decisões que substituem outras.

---

## 11. Conclusão

ADRs preservam o raciocínio por trás de decisões arquiteturais importantes.

Ao registrar contexto, alternativas e consequências, a equipe reduz retrabalho e torna a evolução do sistema mais consciente e rastreável.

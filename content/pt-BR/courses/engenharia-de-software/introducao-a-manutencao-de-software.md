# Introdução à Manutenção de Software

## 1. O que é Manutenção de Software

A **manutenção de software** reúne as atividades realizadas depois que um sistema é entregue para corrigir problemas, adaptar seu comportamento e melhorar sua estrutura.

Um software continua mudando porque as necessidades dos usuários, as regras do negócio, as tecnologias e o ambiente de execução também mudam.

---

## 2. Por que a manutenção é necessária?

Mesmo um sistema bem desenvolvido pode precisar de manutenção devido a:

- Novos requisitos;
- Defeitos descobertos após a entrega;
- Mudanças em leis ou regras de negócio;
- Atualizações de sistemas operacionais e dependências;
- Crescimento do volume de usuários ou dados;
- Necessidade de melhorar segurança e desempenho.

A manutenção não é um sinal de que o software falhou. Ela faz parte do ciclo de vida de produtos que continuam sendo utilizados.

---

## 3. O ciclo de manutenção

Uma solicitação de manutenção normalmente passa por etapas de análise, implementação, validação e entrega.

```text
Solicitação
     │
     ▼
Análise de impacto
     │
     ▼
Planejamento
     │
     ▼
Implementação
     │
     ▼
Testes e revisão
     │
     ▼
Entrega e monitoramento
```

---

## 4. Entender antes de alterar

Antes de modificar um sistema existente, é importante compreender seu comportamento atual.

A equipe pode consultar documentação, histórico de alterações, logs, métricas, testes e pessoas que conhecem o domínio.

Testes de caracterização também podem registrar o comportamento atual de uma parte pouco documentada antes de uma mudança.

---

## 5. Impacto e risco

Uma alteração aparentemente pequena pode afetar integrações, dados, permissões, relatórios e outros fluxos.

A análise de impacto deve considerar:

- Componentes envolvidos;
- Dependências;
- Dados existentes;
- Usuários afetados;
- Testes necessários;
- Possibilidade de reversão;
- Riscos operacionais.

---

## 6. Manutenção e qualidade

Manutenção sustentável depende de código legível, testes confiáveis, baixo acoplamento, documentação útil e observabilidade.

Quando essas bases não existem, cada alteração tende a exigir mais tempo e apresentar maior risco. Parte do trabalho de manutenção deve melhorar as condições que permitem futuras mudanças.

---

## 7. Organização do trabalho

Solicitações de manutenção podem ser organizadas em um backlog ou sistema de tickets.

Cada item deve registrar o problema ou objetivo, a prioridade, o contexto, os critérios de aceitação e os riscos conhecidos.

---

## 8. Correção emergencial

Incidentes críticos podem exigir uma correção emergencial para restaurar o serviço rapidamente.

Mesmo nesses casos, a equipe deve registrar a alteração, validar o risco, monitorar o resultado e realizar uma análise posterior para evitar recorrência.

```text
Restaurar serviço → Investigar causa → Corrigir definitivamente
```

---

## 9. Resumo

| Conceito                | Descrição                                               |
| ----------------------- | ------------------------------------------------------- |
| Manutenção              | Alterações realizadas após a entrega do software        |
| Análise de impacto      | Investigação das consequências de uma mudança           |
| Teste de caracterização | Teste que registra um comportamento existente           |
| Correção emergencial    | Alteração rápida para tratar um incidente crítico       |
| Observabilidade         | Uso de logs, métricas e rastros para entender o sistema |

---

## 10. Boas práticas

- Compreender o comportamento atual antes de alterar;
- Avaliar impacto, risco e possibilidade de reversão;
- Manter testes e documentação atualizados;
- Registrar solicitações e decisões;
- Monitorar mudanças após a entrega;
- Tratar causas recorrentes, não apenas sintomas;
- Reservar tempo para melhorias técnicas.

---

## 11. Conclusão

A manutenção de software é uma atividade contínua e essencial para preservar o valor de um sistema.

Com análise cuidadosa, validação e evolução gradual, a equipe consegue corrigir problemas e adaptar o produto sem comprometer sua confiabilidade.

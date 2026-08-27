# Débito Técnico

## 1. Introdução

O **débito técnico** representa o custo futuro criado quando uma decisão técnica prioriza uma solução mais rápida ou limitada em vez de uma solução mais sustentável.

Assim como uma dívida financeira, ele pode ser uma escolha consciente, mas gera custos e riscos que precisam ser acompanhados.

---

## 2. Como o débito surge

O débito técnico pode surgir por diferentes motivos:

- Prazo reduzido;
- Requisito ainda incerto;
- Falta de conhecimento sobre o domínio;
- Código duplicado;
- Ausência de testes;
- Dependência desatualizada;
- Solução provisória que permaneceu no produto.

Nem todo código simples ou imperfeito é débito técnico. O débito aparece quando uma limitação conhecida dificulta mudanças futuras ou aumenta riscos.

---

## 3. Débito consciente e inconsciente

O débito **consciente** é assumido deliberadamente. A equipe conhece a limitação, entende o impacto e registra uma decisão para tratá-la depois.

O débito **inconsciente** surge quando a equipe não percebe a consequência de uma decisão ou ainda não possui conhecimento suficiente para identificá-la.

O débito inconsciente é especialmente perigoso porque tende a permanecer oculto até causar dificuldades.

---

## 4. O custo do débito

O débito técnico pode aumentar:

- Tempo necessário para implementar mudanças;
- Número de defeitos;
- Complexidade do código;
- Risco de incidentes;
- Dificuldade de testar;
- Dependência de pessoas específicas;
- Custo de operação e manutenção.

```text
Atalho técnico
      │
      ▼
Mais complexidade
      │
      ▼
Mudanças mais caras
      │
      ▼
Menor capacidade de evolução
```

---

## 5. Exemplos comuns

Alguns exemplos de débito técnico são:

- Duplicar uma regra em vez de criar uma solução compartilhada;
- Ignorar tratamento de erros em uma integração;
- Manter uma biblioteca vulnerável por tempo excessivo;
- Adiar testes de um fluxo crítico;
- Misturar responsabilidades em uma classe muito grande;
- Usar configuração fixa que deveria ser externa;
- Manter uma arquitetura incompatível com o crescimento esperado.

O impacto depende do contexto, da frequência de alteração e da importância da parte afetada.

---

## 6. Identificar e registrar

Quando uma limitação não puder ser resolvida imediatamente, ela deve ser descrita de forma objetiva.

Um registro pode conter:

| Campo        | Exemplo                                 |
| ------------ | --------------------------------------- |
| Problema     | A integração não possui retentativa     |
| Impacto      | Falhas temporárias interrompem pedidos  |
| Contexto     | Solução criada para uma entrega urgente |
| Próxima ação | Implementar retentativa com limite      |
| Prioridade   | Alta por afetar uma operação crítica    |

Registrar o débito evita que a decisão desapareça da memória da equipe.

---

## 7. Priorizar o pagamento

Nem todo débito precisa ser eliminado imediatamente. A priorização deve considerar:

- Frequência com que o código é alterado;
- Impacto no usuário ou no negócio;
- Risco de segurança ou indisponibilidade;
- Custo de manutenção atual;
- Esforço para corrigir;
- Dependências entre a correção e outros trabalhos.

Uma pequena dívida em uma área estável pode ser menos urgente do que uma limitação em um fluxo que muda toda semana.

---

## 8. Pagar o débito técnico

O pagamento pode ocorrer por meio de:

- Refatoração incremental;
- Remoção de duplicação;
- Criação de testes de caracterização;
- Atualização de dependências;
- Separação de responsabilidades;
- Melhoria de observabilidade;
- Migração gradual para uma nova solução.

Correções graduais costumam reduzir risco e permitem validar cada passo.

---

## 9. Débito técnico e planejamento

O débito técnico deve aparecer nas conversas de planejamento, pois compete por tempo com novas funcionalidades.

A equipe pode reservar capacidade para melhorias técnicas, incluir tarefas de correção no backlog e relacionar o débito a riscos ou objetivos do produto.

Tratar a manutenção como trabalho invisível costuma fazer o problema crescer até exigir uma interrupção maior.

---

## 10. O que não fazer

Algumas abordagens aumentam o problema:

- Reescrever todo o sistema sem entender o domínio;
- Refatorar sem testes ou observabilidade;
- Criar uma lista de débitos sem prioridade;
- Usar “débito técnico” para justificar qualquer defeito;
- Adiar continuamente problemas de segurança;
- Medir qualidade apenas pela quantidade de tarefas concluídas.

Uma decisão técnica precisa considerar risco, contexto e capacidade real de execução.

---

## 11. Resumo

| Conceito            | Descrição                                                 |
| ------------------- | --------------------------------------------------------- |
| Débito técnico      | Custo futuro criado por uma limitação técnica             |
| Débito consciente   | Limitação conhecida e assumida pela equipe                |
| Débito inconsciente | Limitação criada sem que seu impacto fosse percebido      |
| Pagamento           | Trabalho realizado para reduzir custo e risco             |
| Priorização         | Escolha do que tratar primeiro conforme impacto e esforço |

---

## 12. Boas práticas

- Registrar limitações conhecidas;
- Relacionar débitos a impactos concretos;
- Priorizar riscos de segurança e operação;
- Melhorar o código de forma incremental;
- Criar testes antes de mudanças arriscadas;
- Reservar espaço para manutenção no planejamento;
- Revisar periodicamente os débitos registrados.

---

## 13. Conclusão

Débito técnico não é simplesmente código antigo ou uma preferência diferente de implementação. Ele é uma obrigação futura causada por uma decisão ou limitação que torna o software mais difícil, caro ou arriscado de evoluir.

Ao identificar, registrar, priorizar e reduzir esse débito continuamente, a equipe preserva a capacidade de entregar valor com segurança ao longo do tempo.

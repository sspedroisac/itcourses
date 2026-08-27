# Evolução de Software

## 1. Introdução

A **evolução de software** é o processo contínuo de adaptar um sistema para que ele permaneça útil, confiável e sustentável ao longo do tempo.

Ela inclui novas funcionalidades, correções, mudanças técnicas e respostas ao ambiente em que o produto é utilizado.

---

## 2. Software e mudança

Um produto pode precisar evoluir porque:

- Usuários apresentam novas necessidades;
- O negócio muda sua estratégia;
- O volume de dados cresce;
- Novos dispositivos passam a ser utilizados;
- Dependências deixam de ser suportadas;
- A legislação é alterada;
- Novos riscos de segurança são descobertos.

Um sistema que não evolui pode perder valor mesmo quando continua funcionando como foi originalmente projetado.

---

## 3. Feedback orienta a evolução

Decisões de evolução devem considerar evidências como feedback dos usuários, métricas, incidentes, pesquisas e resultados do negócio.

```text
Uso do produto
      │
      ▼
Feedback e dados
      │
      ▼
Priorização
      │
      ▼
Nova versão
      │
      └──────────► novo aprendizado
```

Esse ciclo reduz o risco de investir em mudanças que não resolvem problemas relevantes.

---

## 4. Evolução funcional

A evolução funcional altera o que o usuário pode fazer no sistema.

Exemplos:

- Adicionar pagamento por um novo meio;
- Criar um relatório;
- Permitir configuração por organização;
- Automatizar uma tarefa manual;
- Suportar um novo tipo de usuário.

Cada nova funcionalidade deve ser avaliada em relação ao valor esperado, impacto e custo de manutenção.

---

## 5. Evolução técnica

A evolução técnica melhora a capacidade interna do sistema sem necessariamente adicionar uma funcionalidade visível.

Pode incluir atualização de dependências, melhoria de desempenho, observabilidade, segurança, arquitetura e testes.

Esse trabalho reduz riscos e prepara o produto para mudanças futuras.

---

## 6. Compatibilidade e migração de dados

Mudanças em modelos, APIs ou formatos de dados exigem planejamento especial.

Uma migração pode precisar manter compatibilidade temporária entre versões, transferir dados gradualmente e oferecer um plano de recuperação.

```text
Versão antiga → Compatibilidade → Migração → Versão nova
```

Testar com uma cópia representativa dos dados reduz surpresas durante a implantação.

---

## 7. Releases graduais

Uma evolução pode ser liberada gradualmente para reduzir o impacto de problemas.

Estratégias comuns incluem feature flags, grupos de usuários, canary releases e implantação por etapas.

Monitoramento e possibilidade de desativar a mudança são importantes nesse processo.

---

## 8. Preservar o que funciona

Antes de evoluir uma funcionalidade, a equipe deve identificar comportamentos importantes que precisam ser preservados.

Testes de regressão, critérios de aceitação e observação de métricas ajudam a confirmar que a mudança trouxe o resultado esperado sem degradar outras áreas.

---

## 9. Resumo

| Conceito           | Descrição                                                 |
| ------------------ | --------------------------------------------------------- |
| Evolução funcional | Mudança no que o usuário pode fazer                       |
| Evolução técnica   | Melhoria interna de estrutura, segurança ou operação      |
| Feedback           | Evidência usada para orientar decisões                    |
| Migração           | Transferência ou transformação controlada de dados        |
| Feature flag       | Mecanismo para controlar a ativação de uma funcionalidade |
| Release gradual    | Liberação por etapas para reduzir riscos                  |

---

## 10. Boas práticas

- Priorizar mudanças conforme valor e risco;
- Usar feedback real dos usuários;
- Separar evolução funcional de melhorias técnicas quando possível;
- Planejar compatibilidade e migrações;
- Liberar alterações gradualmente em cenários de risco;
- Monitorar o resultado depois da entrega;
- Preservar comportamentos importantes com testes.

---

## 11. Conclusão

A evolução contínua permite que o software acompanhe as necessidades do negócio e as mudanças do ambiente.

Quando orientada por feedback, testes, métricas e entregas graduais, ela reduz riscos e mantém o produto relevante por mais tempo.

# Legado e Modernização

## 1. Introdução

Um **sistema legado** é um software existente que continua sendo importante para uma organização, mesmo quando utiliza tecnologias antigas ou apresenta dificuldades de manutenção.

Legado não significa necessariamente software inútil. O sistema pode conter regras de negócio valiosas e dados essenciais que não podem ser descartados sem planejamento.

---

## 2. Desafios de sistemas legados

Sistemas legados podem apresentar:

- Documentação incompleta;
- Conhecimento concentrado em poucas pessoas;
- Código acoplado;
- Testes insuficientes;
- Dependências sem suporte;
- Dificuldade de executar localmente;
- Integrações frágeis;
- Riscos de segurança e operação.

Esses desafios aumentam o custo e o risco de mudanças.

---

## 3. Conhecer antes de modernizar

Uma modernização deve começar pela compreensão do sistema atual.

A equipe pode mapear:

- Funcionalidades críticas;
- Fluxos mais utilizados;
- Integrações;
- Dados e dependências;
- Incidentes recorrentes;
- Restrições regulatórias;
- Pessoas que conhecem o domínio.

Também é importante identificar quais comportamentos precisam ser preservados.

---

## 4. Estratégias de modernização

Não existe uma única estratégia adequada para todos os legados.

Algumas opções são:

- **Manter:** continuar operando com mudanças mínimas;
- **Refatorar:** melhorar a estrutura sem substituir o sistema;
- **Rehospedar:** mover para outra infraestrutura com poucas mudanças;
- **Replataformar:** adaptar para uma plataforma mais adequada;
- **Substituir:** criar ou adotar uma solução nova;
- **Retirar:** descontinuar quando não houver mais valor.

A escolha depende de valor, risco, custo, urgência e capacidade da organização.

---

## 5. Migração incremental

Uma migração gradual substitui partes do sistema em etapas.

O padrão Strangler, por exemplo, direciona novos fluxos para a solução nova enquanto o sistema antigo continua atendendo o restante.

```text
Sistema antigo ──► Fluxos ainda não migrados
       │
       └──────────► Roteador ──► Componentes modernizados
```

Essa abordagem reduz o risco de uma troca completa, mas exige controle de integrações e coexistência entre versões.

---

## 6. Testes de caracterização

Antes de mudar uma área sem documentação confiável, testes de caracterização podem registrar como ela se comporta hoje.

Esses testes não afirmam necessariamente que o comportamento atual é ideal. Eles criam uma referência para detectar alterações acidentais durante a modernização.

---

## 7. Dados e compatibilidade

Dados legados podem ser o maior risco de uma migração.

É necessário avaliar formato, qualidade, volume, duplicidades, relacionamentos, histórico e requisitos de retenção.

Uma migração confiável deve ter validações, logs, cópias de segurança e um plano de reversão ou correção.

---

## 8. Modernização sem perder o domínio

Tecnologias novas não substituem o conhecimento sobre o negócio.

Ao modernizar, a equipe deve descobrir quais regras estão escondidas no código, em procedimentos manuais, integrações e exceções operacionais.

Uma arquitetura moderna que reproduz regras incorretas apenas transfere o problema para uma nova plataforma.

---

## 9. Resumo

| Conceito                | Descrição                                                        |
| ----------------------- | ---------------------------------------------------------------- |
| Sistema legado          | Sistema existente e relevante, com possíveis limitações técnicas |
| Modernização            | Conjunto de ações para tornar o sistema mais sustentável         |
| Refatoração             | Melhoria estrutural sem trocar necessariamente a plataforma      |
| Rehospedagem            | Mudança de infraestrutura com poucas alterações no sistema       |
| Substituição            | Troca por uma nova solução                                       |
| Migração incremental    | Modernização realizada em partes controladas                     |
| Teste de caracterização | Registro do comportamento existente                              |

---

## 10. Boas práticas

- Mapear valor e riscos antes de escolher uma estratégia;
- Preservar conhecimento do domínio;
- Criar testes de caracterização para fluxos críticos;
- Modernizar em etapas pequenas e observáveis;
- Planejar migração, compatibilidade e reversão;
- Monitorar o sistema antigo e o novo durante a transição;
- Evitar substituir tecnologia sem resolver problemas de domínio.

---

## 11. Conclusão

Modernizar um sistema legado é uma decisão técnica e de negócio. O caminho mais adequado considera valor, risco, dados, conhecimento do domínio e capacidade de evolução.

Com entendimento do sistema atual, testes e migração gradual, a organização pode reduzir riscos sem perder as capacidades que tornam o legado importante.

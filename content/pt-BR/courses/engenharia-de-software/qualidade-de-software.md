# Qualidade de Software

## 1. Introdução

A **qualidade de software** representa o grau em que um sistema atende aos requisitos definidos e às necessidades de seus usuários.

Qualidade não significa apenas ausência de erros. Um software também precisa ser útil, seguro, compreensível, eficiente e capaz de evoluir ao longo do tempo.

Por isso, a qualidade deve ser considerada durante todo o desenvolvimento, desde a compreensão do problema até a operação e a manutenção do sistema.

---

## 2. Qualidade e requisitos

Um software só pode ser avaliado em relação a algum objetivo ou requisito.

Os requisitos funcionais descrevem o que o sistema deve fazer. Os requisitos não funcionais descrevem características como desempenho, segurança, disponibilidade e usabilidade.

Quando os requisitos são ambíguos ou incompletos, torna-se difícil determinar se o resultado possui qualidade.

Uma visão simplificada é:

```text
Necessidade do usuário
          │
          ▼
       Requisito
          │
          ▼
     Implementação
          │
          ▼
       Avaliação
```

---

## 3. Garantia e controle da qualidade

Embora sejam relacionados, **garantia da qualidade** e **controle da qualidade** possuem focos diferentes.

### 3.1 Garantia da qualidade

A garantia da qualidade busca prevenir problemas por meio de processos, padrões e práticas adequadas.

Exemplos:

- Definir critérios de desenvolvimento;
- Revisar requisitos e arquitetura;
- Estabelecer padrões de código;
- Automatizar verificações;
- Melhorar continuamente o processo.

### 3.2 Controle da qualidade

O controle da qualidade verifica o produto produzido para identificar se ele atende aos critérios esperados.

Exemplos:

- Executar testes;
- Inspecionar o código;
- Validar uma entrega com o usuário;
- Medir o desempenho do sistema;
- Verificar vulnerabilidades.

```text
Garantia da qualidade: prevenir problemas no processo
Controle da qualidade: identificar problemas no produto
```

---

## 4. Qualidade interna e externa

A qualidade externa é percebida durante o uso do sistema. Ela envolve, por exemplo, a facilidade de uso, a velocidade das respostas e a confiabilidade das funcionalidades.

A qualidade interna está relacionada à estrutura do software e pode não ser visível diretamente para o usuário. Código organizado, arquitetura coerente e baixo acoplamento facilitam a evolução do produto.

Uma boa qualidade interna contribui para a qualidade externa, porque torna mais fácil corrigir problemas e implementar melhorias.

---

## 5. Atividades que contribuem para a qualidade

A qualidade é resultado de várias práticas combinadas:

- Clareza e validação dos requisitos;
- Arquitetura adequada ao problema;
- Desenvolvimento orientado por padrões;
- Testes em diferentes níveis;
- Revisão de código;
- Integração contínua;
- Monitoramento em produção;
- Documentação útil;
- Feedback dos usuários.

Nenhuma dessas práticas, isoladamente, garante a qualidade do sistema.

---

## 6. Prevenção em vez de correção

Encontrar um problema cedo geralmente custa menos do que corrigi-lo depois que ele chega aos usuários.

Por exemplo, uma regra de negócio incorreta identificada durante a análise pode ser ajustada antes da implementação. Se o mesmo problema for descoberto em produção, poderá exigir alterações no código, nos dados, na documentação e no suporte aos usuários.

```text
Problema no requisito  → correção simples
Problema na produção   → correção e impacto operacional
```

---

## 7. Qualidade como responsabilidade da equipe

A qualidade não deve ser responsabilidade exclusiva de uma pessoa ou de uma etapa chamada “testes”.

Desenvolvedores, analistas, designers, profissionais de operações e usuários participam da construção da qualidade quando colaboram para esclarecer expectativas, reduzir riscos e avaliar resultados.

Uma equipe madura discute qualidade antes de começar uma implementação e define como saberá que uma entrega está pronta.

---

## 8. Critérios de aceitação

Os critérios de aceitação descrevem condições que precisam ser atendidas para que uma funcionalidade seja considerada concluída.

Exemplo para uma funcionalidade de recuperação de senha:

| Condição              | Resultado esperado                          |
| --------------------- | ------------------------------------------- |
| E-mail cadastrado     | Enviar instruções de recuperação            |
| E-mail não cadastrado | Informar resultado sem expor dados da conta |
| Token expirado        | Solicitar uma nova recuperação              |
| Senha inválida        | Recusar a alteração e explicar a regra      |

Critérios claros tornam a avaliação mais objetiva e reduzem interpretações diferentes entre as pessoas envolvidas.

---

## 9. Qualidade e melhoria contínua

Mesmo um software que atende aos requisitos atuais pode precisar evoluir.

A equipe deve acompanhar incidentes, resultados de testes, feedback dos usuários e indicadores técnicos para identificar oportunidades de melhoria.

Retrospectivas e análises de causa ajudam a tratar não apenas o problema observado, mas também as condições que permitiram que ele acontecesse.

---

## 10. Resumo

| Conceito              | Descrição                                                           |
| --------------------- | ------------------------------------------------------------------- |
| Qualidade de software | Atendimento às necessidades, requisitos e características esperadas |
| Garantia da qualidade | Práticas para prevenir problemas no processo                        |
| Controle da qualidade | Verificações realizadas sobre o produto                             |
| Qualidade interna     | Características da estrutura e da implementação                     |
| Qualidade externa     | Características percebidas durante o uso                            |
| Critério de aceitação | Condição objetiva para avaliar uma entrega                          |

---

## 11. Boas práticas

- Definir qualidade de acordo com as necessidades do produto;
- Validar requisitos antes de implementar;
- Automatizar verificações repetitivas;
- Revisar código e decisões técnicas;
- Medir resultados sem transformar métricas em objetivos isolados;
- Aprender com falhas e incidentes;
- Envolver toda a equipe na responsabilidade pela qualidade.

---

## 12. Conclusão

Qualidade de software é uma preocupação contínua que envolve produto, processo e pessoas.

Ao combinar requisitos claros, boas práticas de desenvolvimento, testes, revisão e acompanhamento do sistema, a equipe reduz riscos e aumenta a confiança nas entregas.

# Estimativas de Software

## 1. Introdução

As **estimativas de software** são previsões sobre o esforço, o tempo, o custo ou os recursos necessários para realizar um trabalho.

Como o desenvolvimento envolve incerteza, uma estimativa não é uma garantia. Ela deve expressar o conhecimento disponível e ser revisada quando novas informações surgirem.

---

## 2. O que pode ser estimado

Uma equipe pode estimar diferentes aspectos:

- Esforço de desenvolvimento;
- Duração de uma atividade;
- Custo do projeto;
- Capacidade necessária de infraestrutura;
- Quantidade de trabalho que cabe em um ciclo;
- Probabilidade ou impacto de um risco.

É importante distinguir esforço, que representa trabalho realizado, de duração, que representa o tempo decorrido.

---

## 3. Incerteza nas estimativas

No início de um projeto, muitas informações ainda são desconhecidas. Por isso, estimativas iniciais normalmente possuem uma faixa de incerteza maior.

Conforme requisitos são esclarecidos e a equipe aprende sobre o sistema, as previsões podem ser refinadas.

```text
Pouco conhecimento → faixa de estimativa maior
Mais conhecimento  → faixa de estimativa menor
```

Uma estimativa honesta torna a incerteza explícita em vez de apresentar um único número como se fosse exato.

---

## 4. Decomposição do trabalho

Estimar um projeto inteiro de uma vez costuma ser difícil. Uma alternativa é dividi-lo em entregas menores e estimar cada parte.

```text
Funcionalidade
      │
      ├── Interface
      ├── Regra de negócio
      ├── Persistência
      └── Testes e documentação
```

A soma das partes pode fornecer uma visão inicial, mas deve considerar integração, retrabalho, comunicação e atividades que não aparecem no código.

---

## 5. Estimativa relativa

Na estimativa relativa, itens são comparados entre si em vez de receberem uma previsão direta de horas.

Uma equipe pode usar pontos ou uma escala como 1, 2, 3, 5 e 8 para representar tamanho relativo, considerando complexidade, esforço e incerteza.

O valor não representa uma unidade universal de tempo. Ele é útil para comparar itens dentro do mesmo contexto e acompanhar a capacidade histórica da equipe.

---

## 6. Técnicas de estimativa

Algumas técnicas comuns são:

- Opinião de especialistas;
- Decomposição em tarefas;
- Comparação com trabalhos anteriores;
- Planning Poker;
- Estimativa de três pontos;
- Análise de dados históricos.

Na estimativa de três pontos, podem ser considerados cenário otimista, mais provável e pessimista.

Uma forma simples de apresentar o resultado é:

| Cenário       | Previsão |
| ------------- | -------- |
| Otimista      | 2 dias   |
| Mais provável | 4 dias   |
| Pessimista    | 8 dias   |

---

## 7. Capacidade e velocidade

Em um processo iterativo, a equipe pode observar quanto trabalho costuma concluir por ciclo.

Essa informação ajuda no planejamento, mas não deve ser usada para comparar equipes diferentes ou pressionar pessoas a aumentar números.

Capacidade muda quando há férias, interrupções, incidentes, trabalho de suporte ou alterações na composição da equipe.

---

## 8. Estimativas, compromissos e metas

Uma estimativa responde “quanto pode ser necessário”. Um compromisso representa uma decisão assumida considerando prazo, escopo e riscos. Uma meta expressa um resultado desejado.

Confundir esses conceitos cria expectativas irreais e incentiva a ocultação de incertezas.

Quando prazo e escopo são fixos, a equipe precisa discutir quais funcionalidades podem ser priorizadas ou adiadas.

---

## 9. Revisar estimativas

Uma estimativa deve ser revisada quando:

- O escopo muda;
- Uma dependência externa atrasa;
- Uma premissa se mostra incorreta;
- O risco se concretiza;
- A equipe obtém novos dados;
- A solução escolhida muda.

Atualizar a previsão não significa falhar. Significa manter o planejamento coerente com a realidade.

---

## 10. Resumo

| Conceito            | Descrição                                              |
| ------------------- | ------------------------------------------------------ |
| Estimativa          | Previsão baseada no conhecimento disponível            |
| Esforço             | Quantidade de trabalho necessária                      |
| Duração             | Tempo decorrido para realizar o trabalho               |
| Estimativa relativa | Comparação de tamanho entre itens                      |
| Capacidade          | Trabalho que a equipe consegue realizar em um período  |
| Incerteza           | Conhecimento ainda não disponível que afeta a previsão |

---

## 11. Boas práticas

- Registrar premissas e incertezas;
- Estimar itens pequenos quando possível;
- Usar dados históricos com contexto;
- Evitar falsa precisão;
- Revisar previsões quando o cenário mudar;
- Separar estimativas de avaliações individuais;
- Tratar estimativas como apoio ao planejamento.

---

## 12. Conclusão

Estimativas ajudam a tomar decisões sobre escopo, prazo e recursos, mas não eliminam a incerteza do desenvolvimento de software.

O valor de uma estimativa está em tornar suposições explícitas, orientar conversas e ser atualizada conforme o conhecimento aumenta.

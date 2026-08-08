# Gerenciamento de Requisitos

## 1. O que é Gerenciamento de Requisitos

O **gerenciamento de requisitos** é a atividade responsável por controlar, acompanhar e manter os requisitos durante o ciclo de vida do projeto de software.

Os requisitos podem mudar ao longo do desenvolvimento devido a:

- Mudanças nas necessidades dos usuários;
- Alterações nas regras de negócio;
- Novas necessidades da organização;
- Mudanças tecnológicas;
- Alterações legais ou regulatórias;
- Descobertas realizadas durante o desenvolvimento.

O gerenciamento busca garantir que essas mudanças sejam identificadas, analisadas, registradas e controladas.

---

## 2. Objetivos do Gerenciamento de Requisitos

O gerenciamento de requisitos busca:

- Controlar mudanças nos requisitos;
- Acompanhar o estado de cada requisito;
- Manter os requisitos organizados;
- Registrar versões dos requisitos;
- Identificar dependências;
- Garantir rastreabilidade;
- Avaliar impactos das mudanças;
- Manter os stakeholders informados.

O objetivo não é impedir mudanças, mas garantir que elas sejam realizadas de maneira controlada.

---

## 3. Por que os Requisitos Mudam?

É comum que os requisitos sofram alterações durante um projeto.

Por exemplo, uma empresa pode inicialmente solicitar:

> O sistema deve permitir pagamentos com cartão.

Durante o desenvolvimento, pode surgir a necessidade de aceitar também pagamentos por PIX.

O requisito original não estava necessariamente errado. A necessidade do negócio simplesmente mudou.

Outros exemplos incluem:

- Uma nova legislação;
- Mudança no processo da empresa;
- Feedback dos usuários;
- Nova tecnologia disponível;
- Mudança de estratégia do negócio;
- Identificação de um problema durante os testes.

---

## 4. Controle de Mudanças

Uma das principais atividades do gerenciamento de requisitos é o **controle de mudanças**.

Uma mudança não deve ser simplesmente adicionada ao sistema sem análise.

Um processo simplificado pode ser:

```text
Solicitação de mudança
        │
        ▼
Análise da mudança
        │
        ▼
Análise de impacto
        │
        ▼
Aprovação ou rejeição
        │
        ▼
Atualização dos requisitos
        │
        ▼
Implementação
        │
        ▼
Testes
```

Esse processo ajuda a evitar alterações descontroladas.

---

## 5. Análise de Impacto

Antes de aprovar uma mudança, é importante avaliar seus impactos.

Uma alteração aparentemente pequena pode afetar várias partes do sistema.

A análise pode considerar:

- Código;
- Banco de dados;
- Interface;
- Arquitetura;
- Testes;
- Documentação;
- Custos;
- Prazo;
- Outros requisitos.

### Exemplo

Imagine que um sistema inicialmente permite apenas pagamentos em reais.

A empresa solicita suporte a diferentes moedas.

Essa mudança pode afetar:

- Banco de dados;
- Cálculo de preços;
- Integração com pagamentos;
- Relatórios;
- Interface;
- Testes;
- Regras de negócio.

A análise de impacto permite compreender essas consequências antes da implementação.

---

## 6. Priorização de Requisitos

O gerenciamento também envolve acompanhar a prioridade dos requisitos.

Os requisitos podem ser classificados, por exemplo, como:

- **Alta prioridade:** essenciais para o produto;
- **Média prioridade:** importantes, mas podem ser adiados;
- **Baixa prioridade:** desejáveis, mas não essenciais.

A prioridade pode mudar conforme o projeto evolui.

Um requisito inicialmente considerado de baixa prioridade pode se tornar essencial devido a uma mudança no negócio.

---

## 7. Status dos Requisitos

Também é importante acompanhar o estado de cada requisito.

Exemplos de status:

- Proposto;
- Em análise;
- Aprovado;
- Em desenvolvimento;
- Em testes;
- Implementado;
- Rejeitado;
- Cancelado.

Esse acompanhamento facilita a visualização do progresso e ajuda a identificar quais requisitos ainda precisam de atenção.

---

## 8. Rastreabilidade

A **rastreabilidade de requisitos** permite acompanhar a relação entre um requisito e outros elementos do projeto.

Um requisito pode estar relacionado a:

- Necessidade do negócio;
- Stakeholder;
- Caso de uso;
- User Story;
- Código;
- Teste;
- Documentação.

Um exemplo simplificado:

```text
Necessidade do negócio
        │
        ▼
Requisito
        │
        ▼
User Story
        │
        ▼
Implementação
        │
        ▼
Caso de teste
```

A rastreabilidade facilita a análise de impacto quando um requisito é alterado.

---

## 9. Versionamento de Requisitos

Os requisitos podem possuir diferentes versões ao longo do projeto.

Por exemplo:

| Versão | Requisito                                                    |
| ------ | ------------------------------------------------------------ |
| 1.0    | O sistema deve permitir pagamentos com cartão.               |
| 1.1    | O sistema deve permitir pagamentos com cartão e PIX.         |
| 1.2    | O sistema deve permitir pagamentos com cartão, PIX e boleto. |

Manter o histórico permite identificar:

- O que foi alterado;
- Quando foi alterado;
- Qual era a versão anterior;
- Por que a alteração aconteceu.

---

## 10. Gerenciamento de Mudanças em Projetos Ágeis

Em projetos ágeis, mudanças são esperadas e fazem parte do processo de desenvolvimento.

Isso não significa que qualquer mudança deve ser implementada imediatamente.

As mudanças precisam ser analisadas e priorizadas de acordo com o valor que podem gerar.

Por exemplo:

```text
Nova necessidade
       │
       ▼
Product Backlog
       │
       ▼
Priorização
       │
       ▼
Planejamento
       │
       ▼
Implementação
```

Dessa maneira, a equipe consegue adaptar o produto sem perder o controle sobre o trabalho.

---

## 11. Exemplo Prático

Imagine um sistema de vendas com o seguinte requisito:

> **RF01 — O sistema deve permitir que clientes realizem pagamentos com cartão.**

Durante o projeto, o cliente solicita:

> "Também precisamos aceitar PIX."

A solicitação deve ser analisada.

A equipe pode identificar que será necessário:

- Criar uma nova integração de pagamento;
- Alterar a interface de checkout;
- Atualizar o banco de dados;
- Criar novos testes;
- Atualizar a documentação.

Após a aprovação, o requisito pode ser atualizado ou um novo requisito pode ser criado:

> **RF02 — O sistema deve permitir que clientes realizem pagamentos por PIX.**

A mudança passa a fazer parte do conjunto de requisitos controlados do projeto.

---

## 12. Ferramentas de Gerenciamento

O gerenciamento de requisitos pode ser realizado utilizando diferentes ferramentas.

Exemplos:

- Sistemas de gerenciamento de projetos;
- Issue trackers;
- Planilhas;
- Wikis;
- Ferramentas específicas de requisitos;
- Sistemas de controle de versão.

Independentemente da ferramenta utilizada, o importante é manter as informações organizadas, atualizadas e rastreáveis.

---

## 13. Boas Práticas

- Identificar cada requisito de forma única;
- Registrar mudanças;
- Avaliar o impacto antes de aprovar alterações;
- Manter histórico das versões;
- Acompanhar o status dos requisitos;
- Manter rastreabilidade;
- Revisar prioridades periodicamente;
- Envolver os stakeholders nas mudanças relevantes;
- Evitar alterações sem registro;
- Manter a documentação atualizada.

---

## 14. Resumo

| Conceito                    | Descrição                                                  |
| --------------------------- | ---------------------------------------------------------- |
| Gerenciamento de Requisitos | Controle e acompanhamento dos requisitos durante o projeto |
| Controle de Mudanças        | Processo para analisar e controlar alterações              |
| Análise de Impacto          | Avaliação das consequências de uma mudança                 |
| Priorização                 | Definição da importância dos requisitos                    |
| Status                      | Acompanhamento do estado de cada requisito                 |
| Rastreabilidade             | Relação entre requisitos e outros elementos do projeto     |
| Versionamento               | Controle do histórico das alterações                       |

---

## 15. Conclusão

O **gerenciamento de requisitos** garante que os requisitos permaneçam organizados, rastreáveis e controlados durante o desenvolvimento do software.

Como mudanças são naturais em projetos de software, é importante possuir mecanismos para **registrar, analisar, priorizar, aprovar e acompanhar essas alterações**.

Um bom gerenciamento reduz impactos inesperados, facilita a comunicação entre os envolvidos e permite que o sistema evolua de acordo com as necessidades do negócio sem perder o controle sobre o projeto.

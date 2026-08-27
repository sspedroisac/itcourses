# Pipelines de CI/CD

## 1. Introdução

Um **pipeline de CI/CD** automatiza etapas de integração, entrega e, quando aplicável, deploy de software.

CI representa Continuous Integration, ou integração contínua. CD pode representar Continuous Delivery, ou entrega contínua, e Continuous Deployment, ou deploy contínuo.

---

## 2. Estrutura de um pipeline

Um pipeline é dividido em etapas e jobs que podem executar em sequência ou em paralelo.

```text
Commit
  │
  ▼
Build
  │
  ├── Testes unitários
  ├── Lint e tipos
  └── Segurança
  │
  ▼
Artefato
  │
  ▼
Homologação
  │
  ▼
Produção
```

---

## 3. Gatilhos

O pipeline pode ser iniciado por diferentes eventos:

- Push para uma branch;
- Abertura ou atualização de pull request;
- Criação de uma tag;
- Agendamento;
- Aprovação manual;
- Solicitação de uma publicação.

Os gatilhos devem refletir o fluxo de trabalho e evitar execuções desnecessárias.

---

## 4. Quality gates

Um **quality gate** é uma condição que precisa ser satisfeita para o pipeline avançar.

Exemplos:

- Build concluído;
- Testes obrigatórios aprovados;
- Nenhuma vulnerabilidade crítica;
- Revisão aprovada;
- Artefato produzido e identificado.

Gates devem proteger riscos reais, sem transformar o processo em uma coleção de regras que ninguém compreende.

---

## 5. Ambientes e segredos

O pipeline pode publicar em diferentes ambientes usando configurações específicas.

Credenciais, tokens e chaves devem ser armazenados em mecanismos seguros e acessados somente pelos jobs que precisam deles. Nunca devem ser impressos nos logs.

---

## 6. Cache e paralelismo

Cache de dependências e execução paralela podem reduzir o tempo do pipeline.

Essas otimizações precisam preservar a confiabilidade. Um cache incorreto pode ocultar mudanças ou produzir resultados inconsistentes.

---

## 7. Logs e diagnóstico

Logs de pipeline devem indicar qual etapa falhou, qual versão foi usada e quais comandos foram executados, sem revelar informações sensíveis.

Mensagens claras reduzem o tempo necessário para corrigir uma falha.

---

## 8. Manutenção do pipeline

Pipelines também são software e precisam ser revisados, versionados e simplificados.

Jobs duplicados, dependências antigas e etapas sem propósito aumentam o custo e podem reduzir a confiança nas entregas.

---

## 9. Resumo

| Conceito     | Descrição                                          |
| ------------ | -------------------------------------------------- |
| Pipeline     | Fluxo automatizado de validação e entrega          |
| Job          | Unidade de trabalho executada no pipeline          |
| Gatilho      | Evento que inicia uma execução                     |
| Quality gate | Condição necessária para avançar                   |
| Artefato     | Resultado produzido e identificado                 |
| CI/CD        | Práticas de integração, entrega e deploy contínuos |

---

## 10. Boas práticas

- Versionar a definição do pipeline;
- Falhar cedo em verificações rápidas;
- Executar etapas independentes em paralelo;
- Proteger segredos e limitar permissões;
- Manter logs úteis e sem dados sensíveis;
- Usar quality gates relacionados a riscos;
- Revisar e remover etapas obsoletas.

---

## 11. Conclusão

Pipelines de CI/CD tornam o processo de validação e entrega mais repetível, rastreável e rápido.

Um pipeline confiável fornece feedback para a equipe e ajuda a transformar mudanças de código em entregas com menor risco operacional.

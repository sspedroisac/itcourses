# Gerenciamento de Configuração

## 1. Introdução

O **gerenciamento de configuração** controla os itens e as alterações que formam um sistema de software.

Seu objetivo é garantir que a equipe saiba quais versões, configurações e dependências compõem cada ambiente e cada entrega.

---

## 2. Itens de configuração

Um item de configuração é qualquer elemento importante que precisa ser identificado e controlado.

Exemplos:

- Código-fonte;
- Arquivos de configuração;
- Scripts de banco de dados;
- Dependências;
- Infraestrutura como código;
- Documentação;
- Artefatos de build;
- Testes automatizados.

O que deve ser controlado depende do produto e dos riscos envolvidos.

---

## 3. Identificação e baseline

Cada item deve possuir uma forma de identificação e histórico.

Uma **baseline** é uma versão definida como referência para uma entrega, auditoria ou etapa do projeto. Alterações posteriores precisam ser identificadas em relação a essa referência.

```text
Itens identificados
        │
        ▼
Versão de referência
        │
        ▼
Alterações controladas
        │
        ▼
Nova versão
```

---

## 4. Controle de mudanças

Alterações em itens importantes devem ser propostas, analisadas e registradas.

O nível de controle precisa ser proporcional ao risco. Uma mudança em uma regra crítica de pagamentos pode exigir mais evidências do que uma alteração textual na documentação.

Um fluxo possível é:

```text
Solicitação → Análise → Implementação → Verificação → Aprovação
```

---

## 5. Ambientes

Os ambientes de desenvolvimento, teste, homologação e produção podem possuir configurações diferentes.

Essas diferenças devem ser conhecidas e controladas. Configurações sensíveis, como senhas e chaves, não devem ser armazenadas diretamente no código-fonte.

Automação e configuração externa ajudam a reduzir diferenças inesperadas entre ambientes.

---

## 6. Builds e artefatos

Um build transforma código e dependências em um artefato que pode ser testado ou implantado.

Para obter resultados reproduzíveis, é importante controlar versões de ferramentas, dependências e parâmetros relevantes.

```text
Código + Dependências + Configuração
                  │
                  ▼
                Build
                  │
                  ▼
               Artefato
```

---

## 7. Rastreabilidade

A rastreabilidade relaciona uma mudança a seus motivos e efeitos.

Uma alteração pode ser associada a um requisito, uma issue, um commit, uma revisão, um build e uma implantação.

Essa relação facilita investigações, auditorias e reversões quando algo não funciona como esperado.

---

## 8. Configuração como código

Quando configurações de infraestrutura e ambientes são descritas em arquivos versionados, elas podem ser revisadas, testadas e reproduzidas.

Essa prática reduz alterações manuais e torna o histórico mais confiável. Ainda assim, segredos devem ser fornecidos por mecanismos apropriados de gerenciamento de credenciais.

---

## 9. Auditoria e conformidade

O gerenciamento de configuração pode ajudar a responder:

- Qual versão está em produção?
- Quais alterações fazem parte dela?
- Quem aprovou a mudança?
- Quais testes foram executados?
- Qual configuração foi utilizada?
- É possível reproduzir ou reverter a entrega?

Essas respostas são importantes em sistemas críticos e em contextos regulados.

---

## 10. Resumo

| Conceito                 | Descrição                                     |
| ------------------------ | --------------------------------------------- |
| Item de configuração     | Elemento controlado que compõe o sistema      |
| Baseline                 | Versão de referência estabelecida             |
| Artefato                 | Resultado produzido por um build              |
| Rastreabilidade          | Relação entre requisitos, mudanças e entregas |
| Configuração como código | Configuração descrita em arquivos versionados |
| Controle de mudanças     | Processo para analisar e registrar alterações |

---

## 11. Boas práticas

- Identificar itens importantes do sistema;
- Versionar código, scripts e configurações não sensíveis;
- Manter segredos fora do repositório;
- Automatizar builds e ambientes;
- Registrar versões e artefatos de cada entrega;
- Relacionar mudanças a requisitos ou tarefas;
- Definir uma estratégia de reversão.

---

## 12. Conclusão

O gerenciamento de configuração dá visibilidade sobre o que compõe o software e como ele mudou.

Com identificação, versionamento, rastreabilidade e automação, a equipe reduz inconsistências entre ambientes e aumenta a previsibilidade das entregas.

# Modelo Incremental

## 1. O que é o Modelo Incremental

O **Modelo Incremental** é um modelo de processo de software no qual o sistema é desenvolvido e entregue em partes, chamadas de **incrementos**.

Cada incremento adiciona novas funcionalidades ao produto, permitindo que o software seja disponibilizado gradualmente em vez de aguardar a conclusão de todo o sistema.

Um exemplo pode ser representado assim:

```text
Incremento 1
    │
    ▼
Funcionalidades básicas
    │
    ▼
Incremento 2
    │
    ▼
Novas funcionalidades
    │
    ▼
Incremento 3
    │
    ▼
Sistema mais completo
    │
    ▼
...
```

Ao final de cada incremento, existe uma nova versão do software com mais funcionalidades do que a versão anterior.

---

## 2. Como funciona o Modelo Incremental

No Modelo Incremental, o sistema completo é dividido em partes menores.

Cada parte representa um conjunto de funcionalidades que será desenvolvido e entregue separadamente.

O processo geralmente envolve:

1. Identificar os requisitos do sistema;
2. Dividir o sistema em incrementos;
3. Definir as funcionalidades prioritárias;
4. Desenvolver o primeiro incremento;
5. Validar e entregar o incremento;
6. Desenvolver os incrementos seguintes.

O processo pode ser representado da seguinte forma:

```text
Requisitos do sistema
        │
        ▼
Planejamento dos incrementos
        │
        ▼
┌─────────────────────┐
│    Incremento 1     │
│ Desenvolver e testar│
└──────────┬──────────┘
           │
           ▼
       Entrega
           │
           ▼
┌─────────────────────┐
│    Incremento 2     │
│ Desenvolver e testar│
└──────────┬──────────┘
           │
           ▼
       Entrega
           │
           ▼
┌─────────────────────┐
│    Incremento 3     │
│ Desenvolver e testar│
└──────────┬──────────┘
           │
           ▼
       Entrega
```

Cada incremento deve ser integrado aos anteriores para formar gradualmente o sistema completo.

---

## 3. O que é um Incremento

Um **incremento** é uma parte funcional do software que adiciona valor ao produto.

Ele não representa apenas uma parte isolada do código.

Idealmente, cada incremento deve passar pelas atividades necessárias para ser entregue, como:

* Análise;
* Projeto;
* Implementação;
* Testes;
* Integração.

Por exemplo, considere um sistema de gerenciamento de tarefas.

O desenvolvimento poderia ser dividido assim:

| Incremento | Funcionalidades                        |
| ---------- | -------------------------------------- |
| 1          | Cadastro e autenticação de usuários    |
| 2          | Criação e edição de tarefas            |
| 3          | Organização das tarefas por categorias |
| 4          | Notificações e lembretes               |
| 5          | Relatórios e estatísticas              |

Cada novo incremento amplia as funcionalidades disponíveis no sistema.

---

## 4. Priorização dos Incrementos

Uma das principais decisões no Modelo Incremental é definir **qual funcionalidade será desenvolvida primeiro**.

A priorização pode considerar fatores como:

* Valor para o usuário;
* Importância para o negócio;
* Dependências técnicas;
* Riscos do projeto;
* Complexidade de implementação.

Normalmente, as funcionalidades mais importantes são desenvolvidas nos primeiros incrementos.

Isso permite que os usuários tenham acesso antecipado às funcionalidades que geram mais valor.

---

## 5. Desenvolvimento de cada Incremento

Cada incremento pode seguir um pequeno ciclo de desenvolvimento.

Por exemplo:

```text
Planejamento
     │
     ▼
Análise
     │
     ▼
Projeto
     │
     ▼
Implementação
     │
     ▼
Testes
     │
     ▼
Entrega
```

Após a entrega, a equipe inicia o desenvolvimento do próximo incremento.

Dessa forma, embora o produto seja construído progressivamente, cada incremento passa por atividades necessárias para garantir sua qualidade.

---

## 6. Vantagens do Modelo Incremental

O Modelo Incremental apresenta diversas vantagens.

### 6.1 Entregas antecipadas

Os usuários não precisam esperar todo o sistema ser desenvolvido.

As funcionalidades prioritárias podem ser entregues primeiro.

Isso permite gerar valor mais rapidamente.

### 6.2 Feedback antecipado

Após a entrega de um incremento, os usuários podem utilizar o sistema e fornecer feedback.

Esse feedback pode ajudar a equipe a:

* Identificar problemas;
* Validar funcionalidades;
* Ajustar prioridades;
* Planejar os próximos incrementos.

### 6.3 Redução de riscos

O desenvolvimento progressivo permite identificar problemas antes da conclusão de todo o sistema.

Por exemplo, problemas relacionados à:

* Arquitetura;
* Integração;
* Desempenho;
* Usabilidade.

Podem ser descobertos durante os primeiros incrementos.

### 6.4 Melhor priorização

A equipe pode concentrar seus esforços nas funcionalidades que oferecem maior valor.

Caso o projeto seja interrompido antes da conclusão de todos os incrementos, as funcionalidades mais importantes já podem estar disponíveis.

### 6.5 Maior facilidade para testar

Cada incremento possui um conjunto menor de funcionalidades.

Isso pode facilitar:

* Testes;
* Validação;
* Identificação de problemas;
* Correção de defeitos.

---

## 7. Desvantagens do Modelo Incremental

Apesar das vantagens, o Modelo Incremental também apresenta alguns desafios.

### 7.1 Necessidade de uma boa arquitetura

Como o sistema será expandido gradualmente, a arquitetura precisa permitir a inclusão de novas funcionalidades.

Uma arquitetura inadequada pode dificultar os incrementos futuros.

### 7.2 Dependências entre funcionalidades

Algumas funcionalidades dependem de outras para funcionar.

Por exemplo:

```text
Autenticação
      │
      ▼
Gerenciamento de usuários
      │
      ▼
Permissões de acesso
```

Essas dependências precisam ser consideradas durante o planejamento dos incrementos.

### 7.3 Integração contínua

Cada novo incremento precisa funcionar corretamente com as funcionalidades já existentes.

Problemas de integração podem aumentar à medida que o sistema cresce.

### 7.4 Planejamento da divisão do sistema

Dividir o sistema em incrementos inadequados pode gerar problemas.

Por exemplo, desenvolver componentes técnicos isoladamente pode não gerar valor imediato para os usuários.

O ideal é organizar os incrementos de forma que cada entrega represente uma evolução funcional do produto.

---

## 8. Modelo Incremental e Modelo em Cascata

O Modelo Incremental e o Modelo em Cascata possuem abordagens diferentes.

| Característica       | Incremental                             | Cascata                                          |
| -------------------- | --------------------------------------- | ------------------------------------------------ |
| Entregas             | Gradualmente                            | Geralmente ao final                              |
| Desenvolvimento      | Dividido em incrementos                 | Sequencial                                       |
| Feedback             | Durante o projeto                       | Pode ocorrer mais tarde                          |
| Valor para o usuário | Entregue progressivamente               | Normalmente após grande parte do desenvolvimento |
| Riscos               | Podem ser identificados antecipadamente | Podem ser descobertos mais tarde                 |
| Flexibilidade        | Maior                                   | Menor                                            |

No Modelo Incremental, o sistema cresce progressivamente.

No Modelo em Cascata, o desenvolvimento normalmente segue fases sequenciais antes da entrega do produto.

---

## 9. Modelo Incremental e Desenvolvimento Iterativo

Os conceitos de **incremental** e **iterativo** são semelhantes, mas possuem objetivos diferentes.

### 9.1 Desenvolvimento Incremental

O foco está em **adicionar novas funcionalidades**.

Exemplo:

```text
Versão 1
Cadastro de usuários

        +
        ▼

Versão 2
Cadastro de usuários
+ Gerenciamento de tarefas

        +
        ▼

Versão 3
Cadastro de usuários
+ Gerenciamento de tarefas
+ Notificações
```

O software cresce com a adição de novas capacidades.

### 9.2 Desenvolvimento Iterativo

O foco está em **melhorar e aperfeiçoar uma solução existente**.

Exemplo:

```text
Versão inicial
        │
        ▼
Avaliação
        │
        ▼
Melhorias
        │
        ▼
Nova versão
```

Uma abordagem pode combinar os dois conceitos.

A equipe pode:

* Adicionar novas funcionalidades em incrementos;
* Melhorar funcionalidades existentes em novas iterações.

---

## 10. Exemplo prático

Imagine o desenvolvimento de uma plataforma de cursos online.

Em vez de desenvolver todo o sistema antes de realizar uma entrega, o projeto pode ser dividido em incrementos.

### Incremento 1

Funcionalidades básicas:

* Cadastro de usuários;
* Login;
* Listagem de cursos.

### Incremento 2

Funcionalidades relacionadas aos cursos:

* Página do curso;
* Organização por módulos;
* Exibição das aulas.

### Incremento 3

Recursos de acompanhamento:

* Marcar aulas como concluídas;
* Acompanhar o progresso;
* Salvar cursos favoritos.

### Incremento 4

Novos recursos:

* Busca de cursos;
* Filtros;
* Recomendações.

Ao final de cada incremento, a plataforma se torna mais completa e oferece novas funcionalidades aos usuários.

---

## 11. Quando utilizar o Modelo Incremental

O Modelo Incremental pode ser adequado quando:

* O sistema pode ser dividido em partes;
* É importante entregar valor antecipadamente;
* As funcionalidades possuem diferentes prioridades;
* Os usuários podem fornecer feedback durante o desenvolvimento;
* Existe a necessidade de reduzir riscos;
* O projeto pode evoluir progressivamente.

Esse modelo é especialmente útil quando não é necessário esperar que todas as funcionalidades estejam prontas para disponibilizar uma primeira versão do sistema.

---

## 12. Resumo

| Aspecto                 | Modelo Incremental                              |
| ----------------------- | ----------------------------------------------- |
| Tipo de desenvolvimento | Progressivo                                     |
| Unidade de entrega      | Incremento                                      |
| Entregas                | Frequentes e parciais                           |
| Principal objetivo      | Adicionar funcionalidades gradualmente          |
| Feedback                | Obtido durante o desenvolvimento                |
| Valor                   | Entregue progressivamente                       |
| Principal desafio       | Planejar a divisão e integração dos incrementos |

---

## 13. Boas práticas

* Dividir o sistema em incrementos que gerem valor;
* Priorizar as funcionalidades mais importantes;
* Planejar a arquitetura pensando na evolução do sistema;
* Identificar dependências entre os incrementos;
* Testar cada incremento antes da entrega;
* Garantir a integração com funcionalidades existentes;
* Utilizar o feedback dos usuários para planejar os próximos incrementos;
* Manter o sistema funcional após cada nova entrega.

---

## 14. Conclusão

O **Modelo Incremental** permite desenvolver um sistema de forma progressiva, dividindo-o em incrementos que adicionam novas funcionalidades ao produto.

Sua principal vantagem é permitir a entrega antecipada de valor, possibilitando que usuários utilizem partes do sistema antes da conclusão completa do projeto.

Além disso, o desenvolvimento incremental facilita a obtenção de feedback, a priorização das funcionalidades e a identificação antecipada de riscos. Para que seja utilizado de forma eficiente, é importante planejar adequadamente os incrementos, considerar as dependências entre funcionalidades e garantir que a arquitetura suporte a evolução contínua do software.

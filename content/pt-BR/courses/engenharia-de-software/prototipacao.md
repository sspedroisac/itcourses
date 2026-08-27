# Prototipação

## 1. O que é Prototipação

A **prototipação** é uma abordagem de desenvolvimento de software baseada na criação de uma versão simplificada de um sistema ou de uma funcionalidade antes da implementação completa.

O principal objetivo é permitir que ideias e requisitos sejam avaliados antecipadamente.

Um protótipo pode ser utilizado para:

* Compreender melhor as necessidades dos usuários;
* Validar requisitos;
* Explorar diferentes soluções;
* Testar fluxos de interação;
* Identificar problemas antes do desenvolvimento completo.

Dessa forma, a equipe pode obter feedback e realizar ajustes antes de investir mais tempo e recursos na implementação final.

---

## 2. O que é um Protótipo

Um **protótipo** é uma representação parcial ou simplificada de uma solução.

Ele não precisa possuir todas as funcionalidades do sistema final.

Dependendo do objetivo, um protótipo pode representar:

* Uma interface;
* Um fluxo de navegação;
* Uma funcionalidade específica;
* Uma integração;
* Uma solução técnica.

Por exemplo, antes de desenvolver completamente um sistema de compras, a equipe pode criar um protótipo apenas para validar o fluxo:

```text
Produto
   │
   ▼
Adicionar ao carrinho
   │
   ▼
Identificação do usuário
   │
   ▼
Pagamento
   │
   ▼
Confirmação do pedido
```

O objetivo não é necessariamente construir o sistema completo, mas verificar se a solução atende às necessidades esperadas.

---

## 3. Como funciona a Prototipação

O processo de prototipação geralmente envolve ciclos de criação e avaliação.

Um fluxo simplificado pode ser representado assim:

```text
Identificar necessidades
        │
        ▼
Criar protótipo
        │
        ▼
Avaliar com usuários
        │
        ▼
Coletar feedback
        │
        ▼
Realizar melhorias
        │
        └──────────────► Nova versão do protótipo
```

Esses ciclos podem ser repetidos até que a equipe tenha uma compreensão suficiente da solução.

Depois disso, o sistema pode seguir para o desenvolvimento completo.

---

## 4. Objetivos da Prototipação

A prototipação pode ser utilizada para diferentes objetivos.

### 4.1 Compreender os requisitos

Em muitos projetos, os usuários sabem qual problema desejam resolver, mas podem ter dificuldade para descrever exatamente como o sistema deve funcionar.

Um protótipo permite transformar ideias abstratas em algo mais concreto.

Isso facilita discussões sobre:

* Funcionalidades;
* Fluxos;
* Interfaces;
* Regras de negócio.

---

### 4.2 Validar uma solução

A equipe pode utilizar o protótipo para verificar se uma determinada solução é adequada.

Por exemplo:

> Os usuários conseguem concluir uma compra utilizando esse fluxo?

A resposta pode ser obtida antes da implementação completa.

---

### 4.3 Obter feedback antecipadamente

Os usuários podem interagir com o protótipo e identificar problemas ou sugerir melhorias.

Esse feedback pode ajudar a equipe a descobrir:

* Requisitos incorretos;
* Funcionalidades desnecessárias;
* Problemas de usabilidade;
* Fluxos confusos.

Quanto mais cedo esses problemas forem identificados, menor tende a ser o custo das alterações.

---

### 4.4 Reduzir riscos

A prototipação também pode ser utilizada para reduzir incertezas técnicas.

Por exemplo, uma equipe pode criar um protótipo ou uma prova de conceito para verificar:

* Se uma tecnologia atende aos requisitos;
* Se uma integração é possível;
* Se o desempenho é adequado;
* Se uma arquitetura funciona como esperado.

---

## 5. Tipos de Protótipos

Os protótipos podem possuir diferentes níveis de detalhamento.

### 5.1 Protótipo de baixa fidelidade

Um protótipo de baixa fidelidade possui poucos detalhes.

Pode ser criado utilizando:

* Papel;
* Desenhos;
* Wireframes simples;
* Diagramas.

Exemplo:

```text
┌─────────────────────────┐
│         LOGO            │
├─────────────────────────┤
│                         │
│      [ Buscar ]         │
│                         │
├─────────────────────────┤
│                         │
│  Curso 1                │
│  Curso 2                │
│  Curso 3                │
│                         │
└─────────────────────────┘
```

Esse tipo de protótipo é útil para discutir ideias rapidamente.

### 5.2 Protótipo de média fidelidade

Um protótipo de média fidelidade possui uma estrutura mais próxima do produto final.

Pode apresentar:

* Layout organizado;
* Hierarquia visual;
* Navegação entre telas;
* Componentes de interface.

Entretanto, ainda pode não possuir todos os detalhes visuais ou comportamentos reais do sistema.

### 5.3 Protótipo de alta fidelidade

Um protótipo de alta fidelidade é mais próximo do produto final.

Pode incluir:

* Design visual detalhado;
* Interações;
* Navegação funcional;
* Componentes próximos da interface final.

Esse tipo de protótipo é útil para validar a experiência do usuário antes da implementação.

---

## 6. Protótipo Descartável

Um **protótipo descartável** é criado com o objetivo de aprender ou validar uma ideia.

Depois que seu objetivo é atingido, ele não é utilizado como base para o sistema final.

O processo pode ser representado assim:

```text
Ideia
  │
  ▼
Protótipo
  │
  ▼
Validação
  │
  ▼
Aprendizado
  │
  ▼
Protótipo descartado
  │
  ▼
Desenvolvimento da solução final
```

Essa abordagem é útil quando a equipe deseja reduzir uma incerteza rapidamente.

---

## 7. Protótipo Evolutivo

No **protótipo evolutivo**, a solução é criada inicialmente de forma simples e aperfeiçoada gradualmente.

Em vez de descartar o protótipo, ele evolui ao longo do projeto.

```text
Protótipo inicial
       │
       ▼
Feedback
       │
       ▼
Melhorias
       │
       ▼
Nova versão
       │
       ▼
Mais funcionalidades
       │
       ▼
Produto evoluído
```

Essa abordagem pode ser útil quando os requisitos ainda estão sendo descobertos durante o desenvolvimento.

---

## 8. Prototipação e Desenvolvimento de Software

A prototipação não precisa ser utilizada como um processo isolado.

Ela pode ser combinada com diferentes modelos de desenvolvimento.

Por exemplo:

### Modelo em Cascata

Um protótipo pode ser criado durante a fase de levantamento e análise de requisitos para reduzir ambiguidades antes da implementação.

### Modelo Incremental

Protótipos podem ajudar a validar funcionalidades antes que elas sejam incluídas em novos incrementos.

### Modelo Espiral

A prototipação pode ser utilizada como uma estratégia para reduzir riscos técnicos ou relacionados aos requisitos.

### Métodos Ágeis

Protótipos podem ser utilizados para validar ideias e obter feedback antes ou durante o desenvolvimento de funcionalidades.

---

## 9. Vantagens da Prototipação

A utilização de protótipos apresenta diversas vantagens.

### 9.1 Melhor compreensão dos requisitos

Os usuários podem avaliar algo concreto, facilitando a identificação das necessidades reais.

### 9.2 Feedback antecipado

Problemas podem ser identificados antes do desenvolvimento completo.

### 9.3 Redução de retrabalho

Alterar um protótipo geralmente exige menos esforço do que alterar um sistema já implementado.

### 9.4 Melhor comunicação

Protótipos facilitam a comunicação entre:

* Usuários;
* Analistas;
* Designers;
* Desenvolvedores;
* Stakeholders.

### 9.5 Validação de ideias

Diferentes soluções podem ser avaliadas antes que uma decisão definitiva seja tomada.

---

## 10. Desvantagens e Desafios

Apesar de seus benefícios, a prototipação também apresenta alguns desafios.

### 10.1 Expectativas incorretas

Os usuários podem acreditar que o sistema está praticamente pronto quando observam um protótipo visualmente detalhado.

É importante deixar claro que um protótipo não representa necessariamente um produto funcional.

### 10.2 Foco excessivo na interface

Um protótipo pode levar a equipe a concentrar a atenção apenas nas telas e ignorar aspectos importantes, como:

* Segurança;
* Desempenho;
* Arquitetura;
* Escalabilidade.

### 10.3 Mudanças constantes

O feedback contínuo pode gerar muitas alterações.

É necessário definir objetivos claros para evitar que o processo de prototipação continue indefinidamente.

### 10.4 Código inadequado para produção

Em alguns casos, um protótipo técnico é criado rapidamente apenas para validar uma ideia.

Esse código pode não possuir a qualidade necessária para ser utilizado no sistema final.

---

## 11. Exemplo prático

Imagine o desenvolvimento de uma plataforma de cursos online.

Antes de implementar toda a funcionalidade de progresso, a equipe pode criar um protótipo.

### Primeira versão

O protótipo apresenta:

* Lista de módulos;
* Lista de aulas;
* Botão para marcar uma aula como concluída;
* Barra de progresso.

Os usuários avaliam a interface e fornecem feedback.

### Feedback

Os usuários informam que desejam:

* Visualizar facilmente as aulas concluídas;
* Continuar de onde pararam;
* Acompanhar o progresso geral do curso.

### Nova versão

O protótipo é atualizado com:

* Indicadores visuais de conclusão;
* Botão para continuar estudando;
* Porcentagem de progresso.

Somente após validar a solução, a equipe inicia ou aperfeiçoa a implementação completa.

---

## 12. Prototipação e Prova de Conceito

A **Prototipação** e a **Prova de Conceito** possuem objetivos semelhantes, pois ambas ajudam a reduzir incertezas.

Entretanto, possuem focos diferentes.

| Abordagem         | Principal objetivo                                           |
| ----------------- | ------------------------------------------------------------ |
| Protótipo         | Validar ideias, requisitos, fluxos ou experiência do usuário |
| Prova de Conceito | Verificar se uma solução ou tecnologia é tecnicamente viável |

Por exemplo:

* Um protótipo pode verificar se os usuários conseguem navegar facilmente por uma aplicação;
* Uma prova de conceito pode verificar se uma determinada tecnologia suporta milhares de usuários simultâneos.

---

## 13. Quando utilizar a Prototipação

A prototipação pode ser especialmente útil quando:

* Os requisitos não estão completamente claros;
* Existe grande interação com usuários;
* A experiência do usuário é importante;
* Há diferentes alternativas de solução;
* É necessário validar ideias rapidamente;
* Existem riscos relacionados aos requisitos ou à usabilidade.

---

## 14. Resumo

| Aspecto               | Prototipação                                                        |
| --------------------- | ------------------------------------------------------------------- |
| Objetivo principal    | Validar e compreender uma solução antes do desenvolvimento completo |
| Resultado             | Protótipo                                                           |
| Fidelidade            | Baixa, média ou alta                                                |
| Feedback              | Obtido antecipadamente                                              |
| Abordagem             | Iterativa                                                           |
| Protótipo descartável | Utilizado para aprender e depois descartado                         |
| Protótipo evolutivo   | Aperfeiçoado gradualmente                                           |
| Principal benefício   | Redução de incertezas e retrabalho                                  |

---

## 15. Boas práticas

* Definir claramente o objetivo do protótipo;
* Escolher o nível de fidelidade adequado;
* Envolver usuários e stakeholders na validação;
* Coletar feedback de forma estruturada;
* Realizar melhorias com base nas necessidades identificadas;
* Deixar claro o que o protótipo representa;
* Evitar utilizar código experimental diretamente em produção;
* Encerrar a prototipação quando os objetivos de validação forem alcançados.

---

## 16. Conclusão

A **prototipação** permite transformar ideias e requisitos em representações concretas antes da implementação completa do software.

Por meio de ciclos de criação, avaliação e melhoria, a equipe pode compreender melhor o problema, validar soluções e identificar problemas antecipadamente.

Essa abordagem reduz incertezas e facilita a comunicação entre os envolvidos no projeto. Quando utilizada de forma adequada, a prototipação pode diminuir retrabalho, melhorar a qualidade das decisões e aumentar as chances de desenvolver uma solução que realmente atenda às necessidades dos usuários.

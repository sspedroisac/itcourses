# Introdução à Arquitetura de Software

## 1. O que é Arquitetura de Software

A **Arquitetura de Software** representa a organização fundamental de um sistema.

Ela define os principais componentes da aplicação, suas responsabilidades, a forma como se comunicam e as decisões técnicas que orientam a construção e a evolução do software.

Em outras palavras, a arquitetura responde a perguntas como:

* Quais são as principais partes do sistema?
* Como essas partes se comunicam?
* Onde cada responsabilidade deve ficar?
* Quais tecnologias e padrões serão utilizados?
* Como o sistema poderá evoluir no futuro?

A arquitetura não se preocupa apenas com a implementação de funcionalidades. Ela também considera características importantes do sistema, como:

* Manutenibilidade;
* Escalabilidade;
* Segurança;
* Desempenho;
* Confiabilidade.

---

## 2. Arquitetura de Software e Design de Software

Embora os conceitos estejam relacionados, **arquitetura** e **design de software** possuem níveis diferentes de abstração.

A arquitetura está relacionada às decisões estruturais mais importantes do sistema.

O design está mais próximo da implementação dos componentes.

Por exemplo, em uma aplicação de comércio eletrônico:

### Arquitetura

Pode definir:

* Uma aplicação monolítica ou baseada em microsserviços;
* Separação entre frontend, backend e banco de dados;
* Comunicação através de APIs;
* Uso de filas para processamento assíncrono.

### Design

Pode definir:

* Classes;
* Interfaces;
* Métodos;
* Padrões de projeto;
* Estrutura interna de um módulo.

De forma simplificada:

> **Arquitetura define a estrutura geral do sistema. O design define como suas partes são implementadas.**

---

## 3. Por que a Arquitetura de Software é importante

As decisões arquiteturais influenciam diretamente a capacidade de um sistema evoluir.

Uma arquitetura bem definida ajuda a:

* Organizar sistemas complexos;
* Separar responsabilidades;
* Facilitar a manutenção;
* Reduzir o acoplamento;
* Melhorar a escalabilidade;
* Aumentar a confiabilidade;
* Facilitar o trabalho das equipes.

Por outro lado, decisões arquiteturais inadequadas podem gerar problemas difíceis e caros de corrigir posteriormente.

Exemplos:

* Sistemas difíceis de modificar;
* Dependências excessivas entre componentes;
* Problemas de desempenho;
* Dificuldade para escalar;
* Baixa testabilidade.

Por isso, a arquitetura deve considerar tanto as necessidades atuais quanto possíveis mudanças futuras.

---

## 4. Componentes e relacionamentos

Uma arquitetura é formada por **elementos** e pelos relacionamentos entre eles.

Os elementos podem representar:

* Aplicações;
* Módulos;
* Serviços;
* Bancos de dados;
* Filas;
* APIs;
* Sistemas externos.

Considere uma aplicação simples:

```text
Usuário
   │
   ▼
Frontend
   │
   ▼
API
   │
   ├──────────────► Banco de Dados
   │
   ▼
Serviço de Pagamentos
```

Nesse exemplo, a arquitetura define:

* Os principais componentes;
* As responsabilidades de cada componente;
* A forma como ocorre a comunicação;
* As dependências entre as partes.

---

## 5. Decisões Arquiteturais

Uma das principais responsabilidades da arquitetura é registrar e orientar decisões que possuem impacto significativo no sistema.

Essas decisões podem envolver:

* Linguagens de programação;
* Frameworks;
* Bancos de dados;
* Protocolos de comunicação;
* Estratégias de autenticação;
* Infraestrutura;
* Forma de implantação.

Por exemplo:

> A aplicação utilizará uma API REST para comunicação entre frontend e backend.

Ou:

> Processamentos demorados serão executados de forma assíncrona através de filas.

Nem toda decisão técnica é uma decisão arquitetural.

Uma decisão tende a ser arquitetural quando possui impacto significativo em aspectos como:

* Estrutura do sistema;
* Manutenibilidade;
* Escalabilidade;
* Segurança;
* Desempenho;
* Evolução futura.

---

## 6. Requisitos Funcionais e Atributos de Qualidade

A arquitetura é influenciada pelos requisitos do sistema.

### 6.1 Requisitos Funcionais

Os **requisitos funcionais** definem o que o sistema deve fazer.

Exemplos:

* Permitir o cadastro de usuários;
* Processar pagamentos;
* Gerar relatórios;
* Enviar notificações.

Esses requisitos ajudam a identificar as funcionalidades e responsabilidades que o sistema precisa possuir.

### 6.2 Atributos de Qualidade

Os **atributos de qualidade** definem características relacionadas ao funcionamento do sistema.

Exemplos:

* **Desempenho:** O sistema deve responder rapidamente.
* **Escalabilidade:** O sistema deve suportar o aumento de usuários.
* **Segurança:** Os dados devem ser protegidos.
* **Disponibilidade:** O sistema deve permanecer acessível.
* **Manutenibilidade:** O código deve ser fácil de modificar.
* **Testabilidade:** Os componentes devem ser fáceis de testar.

Esses atributos frequentemente possuem grande impacto nas decisões arquiteturais.

Por exemplo, um sistema que precisa atender milhões de usuários pode exigir decisões diferentes de uma aplicação utilizada internamente por uma pequena equipe.

---

## 7. Arquitetura como um processo contínuo

A arquitetura não deve ser vista como algo definido apenas no início de um projeto.

Sistemas evoluem.

Novos requisitos surgem, tecnologias mudam e problemas são descobertos durante o desenvolvimento.

Por isso, a arquitetura também precisa evoluir.

Esse processo pode incluir:

1. Identificar um problema;
2. Avaliar alternativas;
3. Tomar uma decisão;
4. Implementar a solução;
5. Avaliar os resultados;
6. Ajustar a arquitetura quando necessário.

Uma boa arquitetura não é aquela que prevê todas as mudanças futuras.

É aquela que permite que o sistema seja alterado de forma sustentável.

---

## 8. O papel do Arquiteto de Software

O **Arquiteto de Software** é responsável por orientar decisões técnicas importantes relacionadas à estrutura e à evolução do sistema.

Entre suas responsabilidades estão:

* Compreender os requisitos do negócio;
* Identificar atributos de qualidade;
* Avaliar alternativas arquiteturais;
* Definir princípios e padrões;
* Comunicar decisões técnicas;
* Orientar equipes;
* Acompanhar a evolução da arquitetura.

O arquiteto não deve ser apenas uma pessoa responsável por desenhar diagramas.

A arquitetura precisa estar conectada ao desenvolvimento real do software.

---

## 9. Documentação da Arquitetura

A documentação ajuda equipes a compreenderem como o sistema está organizado.

Ela pode incluir:

* Diagramas;
* Decisões arquiteturais;
* Descrição dos componentes;
* Fluxos de comunicação;
* Dependências;
* Tecnologias utilizadas.

Uma documentação eficiente deve ser:

* Clara;
* Objetiva;
* Atualizada;
* Fácil de consultar.

Documentação excessiva e desatualizada pode se tornar um problema.

O objetivo é registrar as informações necessárias para compreender e evoluir o sistema.

---

## 10. Exemplo de uma Arquitetura

Considere uma aplicação de comércio eletrônico.

```text
                    ┌───────────────┐
                    │   Frontend    │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │      API      │
                    └───────┬───────┘
                            │
          ┌─────────────────┼─────────────────┐
          ▼                 ▼                 ▼
   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
   │ Usuários    │   │ Produtos    │   │ Pedidos     │
   └──────┬──────┘   └──────┬──────┘   └──────┬──────┘
          │                 │                 │
          └─────────────────┼─────────────────┘
                            ▼
                    ┌───────────────┐
                    │ Banco de Dados│
                    └───────────────┘
```

Nesse sistema, algumas decisões arquiteturais podem incluir:

* O frontend se comunica com o backend através de uma API;
* As regras de negócio ficam separadas da interface;
* Os dados são persistidos em um banco de dados;
* Cada módulo possui responsabilidades específicas;
* Integrações externas são isoladas da lógica principal.

---

## 11. Resumo

| Conceito                | Descrição                                                   |
| ----------------------- | ----------------------------------------------------------- |
| Arquitetura de Software | Organização fundamental de um sistema                       |
| Componentes             | Principais partes que compõem o sistema                     |
| Relacionamentos         | Forma como os componentes se comunicam                      |
| Decisões Arquiteturais  | Escolhas técnicas com impacto significativo                 |
| Atributos de Qualidade  | Características como desempenho, segurança e escalabilidade |
| Estilos Arquiteturais   | Formas de organizar um sistema                              |
| Trade-offs              | Benefícios e custos envolvidos em cada decisão              |

---

## 12. Conclusão

A **Arquitetura de Software** fornece a estrutura necessária para organizar sistemas e orientar decisões técnicas importantes.

Ela vai além da escolha de tecnologias ou da criação de diagramas. Seu objetivo é criar uma base que permita ao software atender às necessidades atuais e continuar evoluindo de forma sustentável.

Ao definir responsabilidades, componentes, relacionamentos e decisões arquiteturais de maneira consciente, é possível reduzir a complexidade e facilitar a manutenção, a evolução e o crescimento dos sistemas.

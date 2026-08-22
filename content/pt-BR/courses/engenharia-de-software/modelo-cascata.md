# Modelo em Cascata

## 1. O que é o Modelo em Cascata

O **Modelo em Cascata** é um modelo tradicional de processo de software no qual o desenvolvimento é organizado em etapas sequenciais.

Cada fase possui objetivos e atividades específicos. Em geral, uma etapa precisa ser concluída antes que a próxima seja iniciada.

O fluxo tradicional pode ser representado assim:

```text
Requisitos
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
Implantação
    │
    ▼
Manutenção
```

O nome **Cascata** representa justamente esse fluxo, no qual o processo avança progressivamente de uma etapa para outra.

---

## 2. Características do Modelo em Cascata

O modelo possui algumas características principais:

* Desenvolvimento dividido em fases;
* Processo predominantemente sequencial;
* Planejamento realizado antes da implementação;
* Documentação detalhada;
* Definição clara das atividades de cada etapa;
* Maior dificuldade para realizar mudanças após o avanço do projeto.

Esse modelo busca tornar o processo de desenvolvimento mais organizado e previsível.

---

## 3. Fases do Modelo em Cascata

Embora possam existir variações, o Modelo em Cascata normalmente é dividido em seis fases principais.

### 3.1 Levantamento e análise de requisitos

A primeira etapa consiste em identificar e compreender as necessidades que o software deve atender.

Durante essa fase, são definidos:

* Requisitos funcionais;
* Requisitos não funcionais;
* Regras de negócio;
* Restrições do sistema;
* Necessidades dos usuários.

O resultado normalmente é uma documentação que descreve o que deverá ser desenvolvido.

O objetivo é reduzir ambiguidades antes do início da implementação.

---

### 3.2 Projeto do sistema

Após a definição dos requisitos, é realizado o planejamento técnico da solução.

Essa etapa pode envolver:

* Definição da arquitetura;
* Modelagem do banco de dados;
* Estrutura dos componentes;
* Interfaces entre sistemas;
* Tecnologias utilizadas;
* Design das interfaces.

O projeto define **como** os requisitos serão transformados em uma solução técnica.

---

### 3.3 Implementação

Na fase de implementação, a equipe desenvolve o software com base nos requisitos e no projeto definidos anteriormente.

As principais atividades incluem:

* Desenvolvimento do código;
* Criação do banco de dados;
* Implementação das funcionalidades;
* Integração entre componentes.

O resultado dessa etapa é uma versão executável do sistema.

---

### 3.4 Testes

Após a implementação, o software é verificado para identificar defeitos e validar seu comportamento.

Podem ser realizados diferentes tipos de testes, como:

* Testes unitários;
* Testes de integração;
* Testes de sistema;
* Testes de aceitação.

O objetivo é garantir que o sistema funcione conforme os requisitos definidos.

Caso sejam encontrados problemas, pode ser necessário retornar a etapas anteriores para realizar correções.

---

### 3.5 Implantação

Depois da validação, o software é disponibilizado para os usuários.

Essa etapa pode incluir:

* Configuração do ambiente de produção;
* Publicação da aplicação;
* Migração de dados;
* Configuração de servidores;
* Treinamento dos usuários.

A implantação representa a disponibilização do sistema para uso real.

---

### 3.6 Manutenção

O desenvolvimento não termina necessariamente após a implantação.

Durante a utilização do sistema, podem surgir novas necessidades e problemas.

A manutenção pode envolver:

* Correção de bugs;
* Melhorias de desempenho;
* Atualizações de segurança;
* Adaptação a novos ambientes;
* Implementação de alterações necessárias.

Essa fase pode continuar durante todo o ciclo de vida do software.

---

## 4. Fluxo do Modelo em Cascata

O funcionamento básico do modelo pode ser representado da seguinte forma:

```text
┌──────────────┐
│  Requisitos  │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│    Projeto   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Implementação│
└──────┬───────┘
       │
       ▼
┌──────────────┐
│    Testes    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Implantação │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Manutenção  │
└──────────────┘
```

Apesar de ser representado como um fluxo linear, na prática pode ser necessário retornar a fases anteriores quando são identificados problemas ou mudanças.

Entretanto, quanto mais avançado estiver o projeto, maior tende a ser o custo dessas alterações.

---

## 5. Vantagens do Modelo em Cascata

O Modelo em Cascata apresenta algumas vantagens.

### 5.1 Processo simples de compreender

As etapas são bem definidas e seguem uma sequência clara.

Isso facilita o entendimento do processo, principalmente em projetos que exigem maior controle.

### 5.2 Planejamento estruturado

Grande parte do planejamento é realizada antes do início da implementação.

Isso permite estimar:

* Custos;
* Prazos;
* Recursos;
* Atividades necessárias.

### 5.3 Documentação detalhada

O modelo normalmente produz documentação durante as diferentes fases do projeto.

Essa documentação pode ser importante para:

* Manutenção do sistema;
* Transferência de conhecimento;
* Auditorias;
* Conformidade com regulamentações.

### 5.4 Maior previsibilidade

Quando os requisitos são estáveis e bem conhecidos, o processo pode oferecer maior previsibilidade em relação ao desenvolvimento.

---

## 6. Desvantagens do Modelo em Cascata

Apesar de suas vantagens, o modelo também possui limitações.

### 6.1 Dificuldade para lidar com mudanças

O processo pressupõe que os requisitos possam ser definidos antecipadamente.

Quando surgem mudanças frequentes, pode ser necessário revisar documentos, projetos e implementações já realizadas.

### 6.2 Feedback tardio

Em muitos projetos, os usuários só têm contato com uma versão funcional do sistema após uma parte significativa do desenvolvimento.

Isso aumenta o risco de descobrir problemas de entendimento mais tarde.

### 6.3 Erros podem ser identificados tardiamente

Um problema nos requisitos pode afetar todas as etapas seguintes.

Por exemplo:

```text
Requisito incorreto
        │
        ▼
Projeto incorreto
        │
        ▼
Implementação incorreta
        │
        ▼
Problema identificado durante os testes
```

Quanto mais tarde o problema for descoberto, maior pode ser o esforço necessário para corrigi-lo.

### 6.4 Menor flexibilidade

O Modelo em Cascata não é ideal para contextos nos quais os requisitos mudam constantemente.

Projetos com alto nível de incerteza podem se beneficiar de abordagens mais iterativas ou adaptativas.

---

## 7. Quando utilizar o Modelo em Cascata

O Modelo em Cascata pode ser adequado quando:

* Os requisitos são claros e estáveis;
* O escopo é bem definido;
* Existem poucas mudanças esperadas;
* O projeto exige documentação detalhada;
* Há necessidade de processos formais;
* Os custos e prazos precisam ser planejados antecipadamente.

Exemplos de contextos que podem exigir processos mais estruturados incluem sistemas sujeitos a:

* Regulamentações;
* Auditorias;
* Contratos rígidos;
* Requisitos de conformidade.

---

## 8. Modelo em Cascata e Métodos Ágeis

O Modelo em Cascata e as abordagens ágeis possuem características diferentes.

| Característica | Cascata                                  | Ágil                                |
| -------------- | ---------------------------------------- | ----------------------------------- |
| Planejamento   | Realizado principalmente no início       | Realizado continuamente             |
| Processo       | Sequencial                               | Iterativo e incremental             |
| Mudanças       | Mais difíceis de incorporar              | Esperadas e adaptadas               |
| Entregas       | Geralmente ao final ou em grandes etapas | Frequentes e incrementais           |
| Feedback       | Pode ocorrer mais tarde                  | Contínuo                            |
| Documentação   | Geralmente mais extensa                  | Adequada às necessidades do projeto |

Isso não significa que um modelo seja sempre melhor que o outro.

A escolha depende do contexto, das características do projeto e das necessidades da organização.

---

## 9. Exemplo prático

Imagine o desenvolvimento de um sistema de biblioteca.

O projeto poderia seguir as seguintes etapas:

### 9.1 Requisitos

Definição das funcionalidades:

* Cadastro de livros;
* Cadastro de usuários;
* Empréstimo de livros;
* Devolução;
* Controle de multas.

### 9.2 Projeto

Definição:

* Arquitetura do sistema;
* Modelo do banco de dados;
* Interfaces principais;
* Tecnologias utilizadas.

### 9.3 Implementação

Desenvolvimento das funcionalidades planejadas.

### 9.4 Testes

Verificação do funcionamento de:

* Cadastro de livros;
* Empréstimos;
* Devoluções;
* Cálculo de multas.

### 9.5 Implantação

Disponibilização do sistema para os usuários da biblioteca.

### 9.6 Manutenção

Após a implantação, podem surgir novas necessidades, como:

* Reserva de livros;
* Notificações de atraso;
* Relatórios administrativos.

---

## 10. Resumo

| Aspecto          | Modelo em Cascata                   |
| ---------------- | ----------------------------------- |
| Tipo de processo | Tradicional                         |
| Estrutura        | Sequencial                          |
| Planejamento     | Predominantemente inicial           |
| Documentação     | Geralmente detalhada                |
| Mudanças         | Mais difíceis de incorporar         |
| Feedback         | Pode ocorrer tardiamente            |
| Melhor contexto  | Requisitos estáveis e bem definidos |

---

## 11. Conclusão

O **Modelo em Cascata** é uma abordagem tradicional que organiza o desenvolvimento de software em etapas sequenciais e bem definidas.

Sua principal característica é o forte planejamento inicial, com cada fase servindo como base para a próxima. Essa estrutura pode oferecer organização, documentação e previsibilidade, especialmente em projetos com requisitos estáveis.

Por outro lado, sua menor flexibilidade pode dificultar a adaptação a mudanças frequentes. Por isso, compreender suas características, vantagens e limitações é fundamental para avaliar quando esse modelo é adequado a um projeto.

# Acoplamento e Coesão

## 1. Introdução

**Acoplamento** e **coesão** são conceitos fundamentais para a organização e a qualidade de sistemas de software.

Eles ajudam a avaliar como os componentes de um sistema são estruturados e como se relacionam entre si.

De forma simplificada:

* **Acoplamento:** mede o nível de dependência entre componentes;
* **Coesão:** mede o quanto as responsabilidades dentro de um componente estão relacionadas.

Uma arquitetura bem organizada geralmente busca:

> **Baixo acoplamento e alta coesão.**

Esses princípios facilitam a manutenção, os testes e a evolução do software.

---

## 2. O que é Acoplamento

O **acoplamento** representa o nível de dependência entre dois ou mais componentes.

Quanto maior o acoplamento, maior a influência que um componente pode exercer sobre outro.

Considere dois módulos:

```text id="a3k7p1"
┌───────────┐
│ Módulo A  │ ───────► ┌───────────┐
└───────────┘          │ Módulo B  │
                       └───────────┘
```

A existência de uma dependência não é necessariamente um problema.

Os componentes de um sistema precisam colaborar entre si.

O problema ocorre quando essa dependência se torna excessiva ou quando um componente conhece detalhes internos de outro.

---

## 3. Alto Acoplamento

Um sistema possui **alto acoplamento** quando seus componentes possuem muitas dependências entre si.

Por exemplo:

```text id="h2v9m4"
       ┌─────┐
       │  A  │
       └──┬──┘
     ┌────┼────┐
     ▼    ▼    ▼
   ┌───┐┌───┐┌───┐
   │ B ││ C ││ D │
   └─┬─┘└─┬─┘└─┬─┘
     │    │    │
     └────┼────┘
          ▼
       ┌─────┐
       │  E  │
       └─────┘
```

Nesse cenário, uma alteração em um componente pode afetar diversos outros.

### 3.1 Problemas do Alto Acoplamento

O alto acoplamento pode causar:

* Maior dificuldade de manutenção;
* Alterações com impacto imprevisível;
* Maior dificuldade para testar componentes isoladamente;
* Menor reutilização;
* Maior dependência entre equipes;
* Dificuldade para substituir implementações.

Por exemplo, imagine que um módulo de pedidos acessa diretamente os detalhes internos do módulo de pagamentos.

Se a implementação de pagamentos for alterada, o módulo de pedidos também poderá precisar ser modificado.

---

## 4. Baixo Acoplamento

O **baixo acoplamento** busca reduzir as dependências desnecessárias entre os componentes.

Considere:

```text id="k8r2n5"
┌───────────┐     Contrato      ┌───────────┐
│ Módulo A  │ ────────────────► │ Módulo B  │
└───────────┘                   └───────────┘
```

Nesse caso, o Módulo A depende apenas de um contrato ou interface definida pelo Módulo B.

Os detalhes internos podem ser alterados sem necessariamente afetar quem utiliza o componente.

Isso proporciona maior flexibilidade.

### 4.1 Benefícios do Baixo Acoplamento

* Alterações mais isoladas;
* Maior facilidade de testes;
* Melhor reutilização de componentes;
* Menor impacto entre módulos;
* Maior facilidade para substituir implementações;
* Maior capacidade de evolução.

---

## 5. Exemplos de Acoplamento

### 5.1 Dependência direta

Considere um serviço de pedidos que utiliza diretamente uma implementação de pagamento:

```text id="p6w4y8"
PedidoService
      │
      ▼
PagamentoService
      │
      ▼
API de Pagamento
```

Nesse caso, alterações na implementação podem afetar diretamente o serviço de pedidos.

### 5.2 Dependência através de uma abstração

Uma alternativa é utilizar uma abstração:

```text id="d7f2q9"
PedidoService
      │
      ▼
PagamentoGateway
      │
      ▼
┌───────────────┐
│ Implementação │
└───────────────┘
```

Agora, o serviço de pedidos depende do contrato `PagamentoGateway`.

Diferentes implementações podem ser utilizadas:

* Gateway de produção;
* Gateway de testes;
* Diferentes provedores de pagamento.

---

## 6. O que é Coesão

A **coesão** representa o nível de relacionamento entre as responsabilidades de um componente.

Um componente possui **alta coesão** quando suas funcionalidades estão relacionadas e trabalham em torno de um objetivo claro.

Por exemplo:

```text id="c5m8r3"
┌─────────────────────┐
│ Autenticação        │
├─────────────────────┤
│ - Login             │
│ - Logout            │
│ - Validar senha     │
│ - Recuperar senha   │
│ - Gerenciar sessão  │
└─────────────────────┘
```

Todas essas responsabilidades pertencem ao mesmo contexto.

---

## 7. Baixa Coesão

Um componente possui **baixa coesão** quando concentra responsabilidades que possuem pouca relação entre si.

Exemplo:

```text id="v9n1k6"
┌─────────────────────────┐
│ SistemaUtils            │
├─────────────────────────┤
│ - Gerar relatório       │
│ - Processar pagamento   │
│ - Enviar e-mail         │
│ - Criar usuário         │
│ - Calcular impostos     │
└─────────────────────────┘
```

Esse componente possui responsabilidades muito diferentes.

Com o tempo, ele tende a crescer e se tornar difícil de manter.

Esse tipo de componente é frequentemente chamado de **God Object** ou **God Class**, quando uma classe concentra responsabilidades excessivas.

---

## 8. Alta Coesão

A **alta coesão** ocorre quando um componente possui um conjunto de responsabilidades relacionadas.

Por exemplo:

```text id="s4b6x2"
┌───────────────────┐
│ Pedido            │
├───────────────────┤
│ Criar pedido      │
│ Adicionar item    │
│ Remover item      │
│ Calcular total    │
│ Cancelar pedido   │
└───────────────────┘
```

As operações estão relacionadas ao gerenciamento de pedidos.

### 8.1 Benefícios da Alta Coesão

* Componentes mais fáceis de compreender;
* Responsabilidades mais claras;
* Maior facilidade de manutenção;
* Melhor organização;
* Maior reutilização;
* Testes mais simples.

---

## 9. Acoplamento e Coesão

Os dois conceitos estão relacionados, mas medem aspectos diferentes.

| Conceito    | Avalia                                                    |
| ----------- | --------------------------------------------------------- |
| Acoplamento | A relação entre diferentes componentes                    |
| Coesão      | A relação entre responsabilidades dentro de um componente |

Uma arquitetura bem estruturada busca:

```text id="w1j5q7"
┌──────────────────────────────┐
│       Alta Coesão            │
│                              │
│  Cada componente possui      │
│  responsabilidades claras    │
└───────────────┬──────────────┘
                │
                │
                ▼
┌──────────────────────────────┐
│       Baixo Acoplamento      │
│                              │
│  Componentes possuem poucas  │
│  dependências desnecessárias │
└──────────────────────────────┘
```

---

## 10. Exemplo Prático

Considere inicialmente uma única classe responsável por diversas tarefas:

```text id="q7m3p8"
SistemaService
│
├── Criar usuário
├── Processar pagamento
├── Enviar e-mail
├── Gerar relatório
└── Atualizar estoque
```

Esse componente possui **baixa coesão**, pois suas responsabilidades pertencem a contextos diferentes.

Uma abordagem mais organizada seria:

```text id="f2k6r9"
                    Aplicação
                        │
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Usuários     │ │ Pagamentos   │ │ Estoque      │
└──────────────┘ └──────────────┘ └──────────────┘
        │               │               │
        ▼               ▼               ▼
   Alta Coesão      Alta Coesão      Alta Coesão
```

Cada módulo possui responsabilidades relacionadas ao seu próprio contexto.

Ao mesmo tempo, os módulos devem evitar depender diretamente dos detalhes internos uns dos outros.

---

## 11. Como Reduzir o Acoplamento

Algumas estratégias podem ajudar a reduzir o acoplamento.

### 11.1 Utilizar Interfaces e Contratos

Os componentes podem depender de contratos em vez de implementações específicas.

```text id="m5p2v7"
Aplicação
    │
    ▼
Interface
    │
    ▼
Implementação
```

Isso facilita a substituição da implementação.

---

### 11.2 Evitar Conhecimento de Detalhes Internos

Um componente deve conhecer apenas aquilo que é necessário para utilizar outro componente.

Por exemplo, um serviço não deveria depender diretamente da estrutura interna de um banco de dados utilizado por outro serviço.

A comunicação deve ocorrer através de interfaces ou contratos bem definidos.

---

### 11.3 Evitar Dependências Desnecessárias

Antes de criar uma dependência, é importante avaliar se ela realmente é necessária.

Muitas dependências tornam o sistema mais difícil de compreender e modificar.

---

### 11.4 Utilizar Eventos

Em alguns cenários, eventos podem reduzir o acoplamento direto entre componentes.

Exemplo:

```text id="e8n4t2"
Pedido Criado
      │
      ▼
┌─────────────────┐
│ Event Bus       │
└────────┬────────┘
         │
    ┌────┴────┐
    ▼         ▼
Estoque   Notificação
```

O módulo responsável pelo pedido não precisa conhecer diretamente os consumidores do evento.

---

## 12. Como Aumentar a Coesão

Para aumentar a coesão, é importante organizar o sistema de acordo com responsabilidades relacionadas.

Algumas estratégias incluem:

### 12.1 Agrupar Funcionalidades Relacionadas

Funcionalidades relacionadas ao mesmo contexto devem permanecer próximas.

Exemplo:

```text id="n3q8k1"
Usuários
├── Criar usuário
├── Atualizar usuário
├── Desativar usuário
└── Consultar usuário
```

---

### 12.2 Evitar Classes ou Módulos Genéricos

Nomes como:

* `Utils`;
* `Helper`;
* `Common`;
* `Manager`;

podem indicar que responsabilidades diferentes estão sendo agrupadas sem um propósito claro.

Isso não significa que essas classes são sempre incorretas.

No entanto, quando crescem excessivamente, podem indicar baixa coesão.

---

### 12.3 Definir Responsabilidades Claras

Cada componente deve responder claramente à pergunta:

> Qual é a responsabilidade deste componente?

Se essa pergunta possuir muitas respostas diferentes, pode ser necessário dividir o componente.

---

## 13. Um Equilíbrio Necessário

Buscar baixo acoplamento e alta coesão não significa eliminar todas as dependências ou criar um número excessivo de componentes.

Por exemplo, dividir cada pequena funcionalidade em um serviço independente pode criar:

* Complexidade desnecessária;
* Comunicação excessiva;
* Dificuldade de compreensão;
* Maior custo de manutenção.

O objetivo é encontrar um equilíbrio.

Uma boa estrutura deve considerar:

* Contexto do sistema;
* Complexidade;
* Tamanho da equipe;
* Necessidades de evolução;
* Requisitos de negócio.

---

## 14. Resumo

| Conceito          | Descrição                                                | Objetivo |
| ----------------- | -------------------------------------------------------- | -------- |
| Alto Acoplamento  | Muitos componentes dependem diretamente uns dos outros   | Evitar   |
| Baixo Acoplamento | Dependências reduzidas e bem definidas                   | Buscar   |
| Baixa Coesão      | Responsabilidades pouco relacionadas no mesmo componente | Evitar   |
| Alta Coesão       | Responsabilidades relacionadas no mesmo componente       | Buscar   |

O objetivo geral pode ser resumido como:

> **Alta coesão dentro dos componentes e baixo acoplamento entre eles.**

---

## 15. Boas práticas

* Definir responsabilidades claras para cada componente.
* Agrupar funcionalidades relacionadas.
* Evitar componentes que concentram responsabilidades demais.
* Reduzir dependências desnecessárias.
* Preferir contratos bem definidos entre componentes.
* Esconder detalhes internos de implementação.
* Avaliar o impacto de mudanças entre módulos.
* Evitar criar abstrações ou componentes sem necessidade.
* Revisar componentes que cresceram excessivamente.
* Buscar equilíbrio entre organização e simplicidade.

---

## 16. Conclusão

**Acoplamento** e **coesão** são conceitos essenciais para a construção de sistemas organizados e sustentáveis.

O **acoplamento** está relacionado ao nível de dependência entre componentes, enquanto a **coesão** está relacionada à qualidade da organização das responsabilidades dentro de cada componente.

Ao buscar **baixo acoplamento** e **alta coesão**, é possível criar sistemas mais fáceis de compreender, testar, manter e evoluir.

No entanto, esses conceitos devem ser aplicados de acordo com o contexto. O objetivo não é criar uma arquitetura excessivamente fragmentada, mas organizar o software de forma que suas responsabilidades e dependências sejam claras e adequadas às necessidades do sistema.

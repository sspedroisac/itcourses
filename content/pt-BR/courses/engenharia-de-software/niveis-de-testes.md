# Níveis de Teste de Software

## 1. O que são Níveis de Teste

Os **níveis de teste** representam as diferentes etapas em que um software é testado durante seu ciclo de desenvolvimento.

Cada nível possui um objetivo específico e verifica aspectos diferentes da aplicação, desde pequenas partes do código até a validação do sistema pelo cliente.

A divisão em níveis permite identificar defeitos de forma gradual, reduzindo custos e aumentando a qualidade do software.

De forma geral, os testes são executados na seguinte ordem:

```text
Teste Unitário
        │
        ▼
Teste de Integração
        │
        ▼
Teste de Sistema
        │
        ▼
Teste de Aceitação
```

Quanto mais cedo um defeito é encontrado, menor é o custo para corrigi-lo.

---

## 2. Objetivos dos Níveis de Teste

Os níveis de teste têm como principais objetivos:

- Verificar o funcionamento correto de cada parte do software;
- Detectar defeitos o mais cedo possível;
- Validar a integração entre componentes;
- Garantir que o sistema funcione como esperado;
- Confirmar que os requisitos do cliente foram atendidos.

---

## 3. Teste Unitário

O **Teste Unitário (Unit Testing)** verifica a menor unidade testável de um software.

Uma unidade pode ser:

- uma função;
- um método;
- uma classe;
- um componente isolado.

O objetivo é garantir que cada unidade funcione corretamente de forma independente, sem depender de outros módulos do sistema.

Normalmente, esse tipo de teste é automatizado e executado pelo próprio desenvolvedor.

### 3.1 Características

- Testa apenas uma unidade de código;
- É executado de forma isolada;
- Possui rápida execução;
- Facilita a identificação de erros de lógica;
- Costuma fazer parte da integração contínua (CI).

### 3.2 Exemplos de defeitos encontrados

- Erros em cálculos;
- Condições incorretas;
- Tratamento inadequado de exceções;
- Retornos inesperados de funções.

### 3.3 Exemplo

Considere a seguinte função:

```typescript
function soma(a: number, b: number) {
  return a + b;
}
```

Um teste unitário pode verificar:

```typescript
expect(soma(2, 3)).toBe(5);
```

Nesse caso, apenas a função é testada, sem acessar banco de dados, APIs ou interface gráfica.

---

## 4. Teste de Integração

Após verificar que cada unidade funciona corretamente, é necessário garantir que elas também funcionem quando integradas.

O **Teste de Integração (Integration Testing)** verifica justamente a comunicação entre módulos, componentes ou serviços.

Seu objetivo é identificar defeitos que surgem na interação entre diferentes partes do sistema.

### 4.1 O que pode ser integrado

- Módulos internos;
- APIs;
- Banco de dados;
- Microsserviços;
- Sistemas externos.

### 4.2 Estratégias de integração

Existem diferentes estratégias para realizar testes de integração.

#### Big Bang

Todos os módulos são integrados de uma única vez.

**Vantagem**

- Simplicidade de implementação.

**Desvantagem**

- Dificuldade para localizar a origem dos defeitos.

#### Incremental

Os módulos são integrados gradualmente.

As principais abordagens são:

- Top-Down;
- Bottom-Up;
- Híbrida.

Essa é a estratégia mais utilizada em projetos reais.

### 4.3 Exemplos de defeitos encontrados

- API retornando dados em formato incorreto;
- Falhas na comunicação entre serviços;
- Problemas na persistência em banco de dados;
- Interfaces incompatíveis entre componentes.

---

## 5. Teste de Sistema

O **Teste de Sistema (System Testing)** verifica o software como um todo.

Nesse nível, todos os componentes já estão integrados e o sistema é avaliado em um ambiente semelhante ao de produção.

O objetivo é validar se todas as funcionalidades trabalham corretamente em conjunto.

Normalmente, esse teste é executado por uma equipe de QA (Quality Assurance).

### 5.1 O que é avaliado

- Funcionalidades;
- Fluxos completos do sistema;
- Interface do usuário;
- Regras de negócio;
- Desempenho;
- Segurança;
- Compatibilidade.

### 5.2 Exemplo

Em um sistema de comércio eletrônico, um teste de sistema pode validar o seguinte fluxo:

1. Cadastro do usuário;
2. Login;
3. Pesquisa de produtos;
4. Adição ao carrinho;
5. Pagamento;
6. Confirmação da compra.

Todo o fluxo é executado como um usuário faria.

### 5.3 Exemplos de defeitos encontrados

- Fluxos interrompidos;
- Regras de negócio incorretas;
- Erros na interface;
- Problemas de desempenho.

---

## 6. Teste de Aceitação

O **Teste de Aceitação (Acceptance Testing)** é o último nível de teste.

Seu objetivo é verificar se o software atende às necessidades do cliente e aos requisitos definidos para o projeto.

Mesmo que o sistema funcione corretamente do ponto de vista técnico, ele poderá ser rejeitado caso não entregue o valor esperado pelo negócio.

Esse teste costuma ser executado pelo cliente, usuários finais ou representantes da área de negócio.

### 6.1 Objetivos

- Validar requisitos funcionais;
- Confirmar regras de negócio;
- Avaliar se o produto está pronto para entrega;
- Aprovar ou rejeitar o sistema.

### 6.2 Exemplo

Um banco solicita que toda transferência acima de R$ 10.000 exija autenticação adicional.

Se essa regra não for implementada, o sistema poderá ser tecnicamente correto, mas será reprovado no teste de aceitação.

---

## 7. Fluxo dos Níveis de Teste

```text
Desenvolvimento da funcionalidade
                │
                ▼
         Teste Unitário
                │
                ▼
       Teste de Integração
                │
                ▼
         Teste de Sistema
                │
                ▼
       Teste de Aceitação
                │
                ▼
      Liberação do Software
```

---

## 8. Boas práticas

- Executar testes unitários durante o desenvolvimento.
- Automatizar testes sempre que possível.
- Integrar componentes gradualmente.
- Realizar testes de sistema em ambiente semelhante ao de produção.
- Envolver usuários e clientes nos testes de aceitação.
- Corrigir defeitos encontrados antes de avançar para o próximo nível de teste.

---

## 9. Resumo

| Nível      | Escopo                      | Principal responsável | Objetivo                                      |
| ---------- | --------------------------- | --------------------- | --------------------------------------------- |
| Unitário   | Funções, métodos ou classes | Desenvolvedor         | Validar pequenas unidades do código           |
| Integração | Comunicação entre módulos   | Desenvolvedor ou QA   | Verificar a integração entre componentes      |
| Sistema    | Sistema completo            | Equipe de QA          | Validar o funcionamento global da aplicação   |
| Aceitação  | Produto final               | Cliente ou usuário    | Confirmar que o sistema atende aos requisitos |

---

## 10. Conclusão

Os níveis de teste organizam o processo de validação do software de forma progressiva. Inicialmente, verificam-se pequenas unidades do código (**Teste Unitário**). Em seguida, avalia-se a comunicação entre componentes (**Teste de Integração**). Depois, valida-se o comportamento do sistema como um todo (**Teste de Sistema**). Por fim, o cliente confirma que o produto atende aos requisitos estabelecidos (**Teste de Aceitação**).

Essa abordagem reduz custos de correção, facilita a identificação de defeitos e aumenta a qualidade e a confiabilidade do software entregue.

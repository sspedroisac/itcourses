# Test-Driven Development (TDD)

## 1. O que é Test-Driven Development

O **Test-Driven Development (TDD)**, ou **Desenvolvimento Orientado a Testes**, é uma prática de desenvolvimento de software na qual os testes são escritos antes da implementação do código.

Em vez de primeiro desenvolver uma funcionalidade e depois criar testes para ela, o TDD propõe um ciclo no qual o desenvolvedor:

1. Escreve um teste;
2. Executa o teste e verifica sua falha;
3. Implementa o código necessário;
4. Executa novamente os testes;
5. Refatora o código.

Esse ciclo é conhecido como **Red-Green-Refactor**.

---

## 2. O ciclo Red-Green-Refactor

O TDD é baseado em três etapas principais.

### 2.1 Red

Primeiro, o desenvolvedor escreve um teste para uma funcionalidade que ainda não foi implementada.

Ao executar o teste, ele deve falhar.

```text
Teste escrito
     │
     ▼
Teste falha
     │
     ▼
   RED
```

A falha demonstra que o teste está verificando algo que ainda não existe ou não está funcionando.

### 2.2 Green

Depois da falha, o desenvolvedor implementa a menor quantidade de código necessária para fazer o teste passar.

```text
Teste falha
     │
     ▼
Implementação mínima
     │
     ▼
Teste passa
     │
     ▼
  GREEN
```

Nesse momento, o objetivo principal não é criar a implementação perfeita, mas fazer o comportamento esperado funcionar.

### 2.3 Refactor

Com o teste passando, o desenvolvedor pode melhorar a estrutura do código sem alterar seu comportamento.

```text
Teste passa
     │
     ▼
Refatoração
     │
     ▼
Código melhor
     │
     ▼
Testes continuam passando
```

A refatoração pode envolver:

- Remover duplicação;
- Melhorar nomes;
- Simplificar código;
- Separar responsabilidades;
- Melhorar a organização.

---

## 3. O ciclo completo

O processo pode ser representado da seguinte maneira:

```text
       ┌──────────────┐
       │  Escrever    │
       │    teste     │
       └──────┬───────┘
              │
              ▼
       ┌──────────────┐
       │    RED       │
       │ Teste falha  │
       └──────┬───────┘
              │
              ▼
       ┌──────────────┐
       │ Implementar   │
       │ código mínimo │
       └──────┬───────┘
              │
              ▼
       ┌──────────────┐
       │    GREEN     │
       │ Teste passa  │
       └──────┬───────┘
              │
              ▼
       ┌──────────────┐
       │   REFACTOR   │
       │ Melhorar código│
       └──────┬───────┘
              │
              └──────────► Novo teste
```

Esse ciclo é repetido continuamente durante o desenvolvimento.

---

## 4. Exemplo de TDD

Imagine uma função responsável por verificar se uma pessoa pode dirigir com base na idade.

Primeiro, o desenvolvedor define o comportamento esperado através de um teste.

```javascript
test("deve permitir dirigir para pessoas com 18 anos ou mais", () => {
  expect(podeDirigir(18)).toBe(true);
});
```

Nesse momento, a função `podeDirigir` ainda não existe.

O teste falha.

Depois, é criada uma implementação mínima:

```javascript
function podeDirigir(idade) {
  return idade >= 18;
}
```

O teste passa.

Em seguida, novos testes podem ser adicionados:

```javascript
test("não deve permitir dirigir para pessoas menores de 18 anos", () => {
  expect(podeDirigir(17)).toBe(false);
});
```

O desenvolvedor continua seguindo o ciclo:

```text
Escrever teste
      ↓
Teste falha
      ↓
Implementar
      ↓
Teste passa
      ↓
Refatorar
      ↓
Novo teste
```

---

## 5. TDD e qualidade de código

O TDD incentiva o desenvolvimento de código que possa ser facilmente testado.

Para isso, é comum que o desenvolvedor prefira:

- Funções menores;
- Responsabilidades bem definidas;
- Baixo acoplamento;
- Interfaces claras;
- Componentes independentes.

Isso pode contribuir para uma arquitetura mais simples e mais fácil de manter.

---

## 6. TDD não é apenas escrever testes

É importante entender que TDD não significa simplesmente criar testes automatizados.

Em uma abordagem tradicional, o processo pode ser:

```text
Requisito
   ↓
Implementação
   ↓
Testes
```

No TDD, o teste participa diretamente da definição do comportamento:

```text
Requisito
   ↓
Teste
   ↓
Implementação
   ↓
Refatoração
```

O teste funciona como uma forma de especificar o comportamento esperado antes da implementação.

---

## 7. Benefícios do TDD

O TDD pode trazer diversos benefícios para o desenvolvimento.

### 7.1 Feedback rápido

Os testes são executados frequentemente, permitindo identificar problemas rapidamente.

### 7.2 Maior confiança nas alterações

Ao modificar o código, os testes ajudam a verificar se comportamentos existentes continuam funcionando.

### 7.3 Código mais testável

Como os testes são considerados desde o início, o código tende a ser desenvolvido de maneira mais fácil de testar.

### 7.4 Redução de regressões

Uma suíte de testes automatizados pode detectar problemas introduzidos por alterações posteriores.

### 7.5 Documentação executável

Os testes podem servir como exemplos concretos de como determinada funcionalidade deve se comportar.

---

## 8. Desafios do TDD

Apesar dos benefícios, o TDD também apresenta desafios.

### 8.1 Curva de aprendizado

É necessário aprender a pensar primeiro nos comportamentos esperados e depois na implementação.

### 8.2 Manutenção dos testes

Os testes também fazem parte do código e precisam ser mantidos conforme o sistema evolui.

### 8.3 Falsa sensação de segurança

Uma suíte de testes extensa não significa necessariamente que todos os problemas foram encontrados.

Os testes verificam os cenários definidos por eles.

### 8.4 Resistência à mudança

Equipes acostumadas a desenvolver primeiro e testar depois podem ter dificuldade para adotar o ciclo do TDD.

---

## 9. TDD e testes unitários

O TDD é frequentemente associado aos **testes unitários**, pois eles permitem executar rapidamente pequenos conjuntos de testes.

Por exemplo, uma função pode ser testada isoladamente:

```text
Função
  │
  ▼
Teste unitário
  │
  ├── Entrada A → Resultado esperado
  ├── Entrada B → Resultado esperado
  └── Entrada C → Resultado esperado
```

Entretanto, TDD é uma prática de desenvolvimento, enquanto teste unitário é um nível de teste.

São conceitos relacionados, mas não são sinônimos.

---

## 10. Boas práticas

- Escrever testes pequenos e objetivos.
- Fazer cada teste verificar um comportamento específico.
- Implementar apenas o necessário para fazer o teste passar.
- Refatorar frequentemente.
- Manter os testes rápidos.
- Evitar testes excessivamente acoplados à implementação.
- Executar a suíte de testes regularmente.
- Utilizar nomes que descrevam claramente o comportamento esperado.

---

## 11. Resumo

| Conceito | Descrição                                                     |
| -------- | ------------------------------------------------------------- |
| TDD      | Desenvolvimento orientado por testes                          |
| Red      | Estado em que o teste falha                                   |
| Green    | Estado em que o teste passa                                   |
| Refactor | Melhoria da estrutura do código sem alterar seu comportamento |

---

## 12. Conclusão

O **Test-Driven Development (TDD)** é uma prática que utiliza testes como parte do processo de desenvolvimento, fazendo com que o código seja construído de forma incremental a partir dos comportamentos esperados.

Seu ciclo fundamental é **Red-Green-Refactor**: primeiro o teste falha, depois o código é implementado para fazê-lo passar e, por fim, o código é refatorado.

Ao repetir esse ciclo continuamente, o desenvolvedor obtém feedback rápido, aumenta a confiança nas alterações e pode produzir um código mais simples, testável e fácil de manter.

# Refatoração

## 1. Introdução

A **refatoração** é o processo de modificar a estrutura interna do código sem alterar seu comportamento observável.

O objetivo é tornar o software mais simples de compreender, testar e modificar, preservando os resultados esperados para seus usuários.

---

## 2. Por que refatorar?

Ao longo do desenvolvimento, mudanças rápidas e novas regras podem deixar o código difícil de manter.

A refatoração pode ajudar a reduzir:

- Duplicação;
- Métodos muito longos;
- Classes com responsabilidades excessivas;
- Dependências desnecessárias;
- Nomes confusos;
- Condições difíceis de compreender.

---

## 3. Refatoração não é reescrita

Uma refatoração altera a estrutura de forma incremental, preservando o comportamento. Uma reescrita substitui uma implementação por outra e geralmente envolve riscos e decisões maiores.

Refatorações pequenas permitem validar cada passo e reduzem a chance de introduzir regressões.

---

## 4. Testes como proteção

Antes de refatorar uma área importante, é recomendável ter testes que descrevam seus comportamentos relevantes.

Um ciclo comum é:

```text
Executar testes
      │
      ▼
Alterar estrutura
      │
      ▼
Executar testes novamente
      │
      ├── Falha → investigar e corrigir
      │
      ▼
   Continuar
```

Testes não precisam cobrir cada linha, mas devem proteger os contratos que não podem mudar.

---

## 5. Técnicas comuns

Algumas técnicas de refatoração são:

- Renomear variáveis e funções;
- Extrair um método;
- Extrair uma classe;
- Remover duplicação;
- Simplificar condicionais;
- Substituir números mágicos por constantes nomeadas;
- Separar responsabilidades.

---

## 6. Exemplo de extração de método

Um método com muitas responsabilidades pode ser dividido em operações menores:

```text
processarPedido()
   ├── validarPedido()
   ├── calcularTotal()
   ├── reservarEstoque()
   └── confirmarPagamento()
```

Cada parte passa a ter um objetivo mais claro, facilitando leitura e testes.

---

## 7. Quando refatorar

A refatoração pode ocorrer quando:

- Uma nova funcionalidade será adicionada a uma área confusa;
- A duplicação dificulta alterações;
- Testes são difíceis de escrever;
- Um defeito revela uma responsabilidade mal separada;
- A complexidade aumenta o risco de mudanças.

---

## 8. Refatoração segura

Uma refatoração segura possui escopo limitado, commits coerentes e validação frequente.

É importante evitar misturar uma grande mudança estrutural com alterações de comportamento sem relação. Assim, quando um teste falha, fica mais fácil identificar a causa.

---

## 9. Resumo

| Conceito           | Descrição                                             |
| ------------------ | ----------------------------------------------------- |
| Refatoração        | Mudança estrutural que preserva o comportamento       |
| Extração de método | Divisão de uma operação em método menor               |
| Extração de classe | Separação de responsabilidades em outra classe        |
| Regressão          | Comportamento que deixa de funcionar após uma mudança |
| Teste de proteção  | Teste que ajuda a detectar alteração indesejada       |

---

## 10. Boas práticas

- Refatorar em passos pequenos;
- Executar testes antes e depois;
- Usar nomes que expressem intenção;
- Remover duplicação com cuidado;
- Evitar alterar comportamento sem deixar isso explícito;
- Manter commits focados;
- Refatorar quando o código estiver no caminho de uma mudança real.

---

## 11. Conclusão

A refatoração mantém a estrutura do software saudável e reduz o custo de futuras alterações.

Realizada de forma incremental e protegida por testes, ela permite melhorar o código sem interromper a entrega de valor.

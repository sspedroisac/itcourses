# Documentação de Código

## 1. Introdução

A **documentação de código** explica aspectos da implementação que não são suficientemente claros apenas pela leitura do código.

O código deve comunicar sua intenção por meio de nomes, estrutura e simplicidade. Comentários e documentos complementares devem explicar contexto, regras ou decisões que não são evidentes.

---

## 2. Código legível antes de comentários

Nomes claros, funções pequenas e responsabilidades bem definidas reduzem a necessidade de comentários.

Um comentário não deve apenas repetir o que a linha faz. Ele é mais útil quando explica por que uma decisão foi tomada ou qual regra externa precisa ser preservada.

---

## 3. O que documentar

É especialmente importante documentar:

- Propósito de módulos e componentes;
- Regras de negócio não óbvias;
- Pré-condições e pós-condições;
- Formatos de entrada e saída;
- Efeitos colaterais;
- Erros e exceções possíveis;
- Limitações e decisões técnicas;
- Exemplos de uso.

---

## 4. Comentários úteis

Um comentário útil fornece contexto:

> A ordenação usa a data de atualização porque o relatório precisa refletir o estado mais recente, e não a data de criação.

Um comentário pouco útil apenas repete a implementação:

> Ordena os itens pela data.

Comentários devem ser revisados quando o código mudar. Se ficarem incorretos, podem causar mais confusão do que a ausência de explicação.

---

## 5. Documentação de interfaces

Funções, classes e módulos que são usados por outras partes do sistema devem documentar seu contrato.

O contrato pode incluir parâmetros, retorno, erros, efeitos colaterais e exemplos:

```text
Função: criarPedido
Entrada: cliente e itens válidos
Retorno: pedido criado
Erros: cliente inexistente ou estoque insuficiente
Efeito: registra o pedido e reserva itens
```

---

## 6. Documentação gerada

Ferramentas podem gerar referências a partir de tipos, assinaturas e comentários estruturados.

Isso evita duplicação, mas não substitui explicações sobre intenção, arquitetura e regras de negócio. A documentação gerada precisa fazer parte da validação do projeto.

---

## 7. Exemplos executáveis

Exemplos próximos do código ou usados em testes tendem a permanecer mais corretos.

Quando possível, exemplos importantes devem ser verificados automaticamente para evitar que a documentação ensine uma forma de uso que já não funciona.

---

## 8. Documentar código complexo

Antes de adicionar um comentário extenso, avalie se a complexidade pode ser reduzida por meio de refatoração.

Quando a complexidade for necessária, documente a restrição, o risco e o motivo da solução. Isso ajuda futuras pessoas a não removerem uma proteção importante por engano.

---

## 9. Resumo

| Prática                | Objetivo                                  |
| ---------------------- | ----------------------------------------- |
| Nomes claros           | Comunicar intenção diretamente            |
| Comentário de contexto | Explicar motivo ou regra não óbvia        |
| Contrato               | Descrever entradas, saídas e erros        |
| Exemplo executável     | Demonstrar uso de forma verificável       |
| Documentação gerada    | Manter referências técnicas sincronizadas |

---

## 10. Boas práticas

- Preferir código claro a comentários que repitam a implementação;
- Documentar motivos, contratos e restrições;
- Manter exemplos atualizados;
- Atualizar documentação na mesma alteração do código;
- Evitar comentários obsoletos;
- Usar ferramentas de documentação gerada quando fizer sentido;
- Refatorar complexidade antes de explicá-la em excesso.

---

## 11. Conclusão

Documentar código é tornar sua intenção, seus contratos e suas restrições compreensíveis.

Código legível combinado com explicações de contexto reduz o tempo de manutenção e ajuda a equipe a alterar o sistema com mais segurança.

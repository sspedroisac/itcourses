# Deadlocks

## 1. O que é um deadlock

Um **deadlock** ocorre quando duas ou mais transações ficam esperando indefinidamente por locks mantidos umas pelas outras.

Exemplo:

```text
T1 bloqueia A e espera B
T2 bloqueia B e espera A
```

Nenhuma das transações consegue continuar sozinha.

---

## 2. Como deadlocks acontecem

Um deadlock geralmente envolve quatro condições:

- exclusão mútua;
- retenção de recurso enquanto aguarda outro;
- ausência de preempção imediata;
- espera circular.

A combinação dessas condições forma o ciclo de dependências.

---

## 3. Detecção

Muitos SGBDs detectam ciclos entre transações por meio de grafos de espera. Quando um deadlock é identificado, o banco escolhe uma transação para abortar e liberar os recursos.

A aplicação deve estar preparada para receber o erro e tentar novamente quando for seguro.

---

## 4. Prevenção

Algumas práticas reduzem a chance de deadlocks:

- acessar recursos sempre na mesma ordem;
- manter transações curtas;
- evitar locks desnecessários;
- criar índices adequados;
- evitar operações externas enquanto a transação está aberta.

---

## 5. Retry

Um retry deve possuir:

- limite de tentativas;
- espera progressiva;
- tratamento de idempotência;
- registro para monitoramento;
- diferenciação entre erro temporário e erro permanente.

Repetir indiscriminadamente pode aumentar a sobrecarga e piorar o problema.

---

## 6. Exemplo de ordem consistente

Se uma operação precisa alterar as tabelas Cliente e Pedido, todas as partes do sistema devem tentar acessá-las nessa mesma ordem:

```text
1. bloquear Cliente
2. bloquear Pedido
3. executar alterações
4. confirmar
```

Essa padronização reduz ciclos de espera.

---

## 7. Monitoramento

É importante acompanhar:

- frequência de deadlocks;
- transações envolvidas;
- consultas responsáveis;
- tempo de espera;
- quantidade de retries.

Essas informações ajudam a corrigir problemas de modelagem ou de acesso.

---

## 8. Resumo

Deadlocks são ciclos de espera entre transações concorrentes. Eles não podem ser tratados apenas como falhas inesperadas: devem ser prevenidos com transações curtas, ordem consistente de acesso, monitoramento e retries controlados.

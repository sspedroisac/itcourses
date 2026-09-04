# Consistência, Disponibilidade e Particionamento

## 1. Sistemas distribuídos

Em um sistema distribuído, dados e processamento podem estar espalhados por vários nós conectados por uma rede.

A distribuição melhora escala e disponibilidade, mas torna falhas e divergências mais difíceis de controlar.

---

## 2. Consistência

**Consistência** é a garantia sobre o que uma leitura pode observar depois de uma escrita.

Ela pode ser forte, eventual ou assumir níveis intermediários definidos pelo sistema.

---

## 3. Disponibilidade

**Disponibilidade** representa a capacidade de responder a requisições, mesmo quando parte da infraestrutura apresenta falha.

Uma solução disponível pode retornar uma resposta limitada, atrasada ou baseada em uma réplica.

---

## 4. Particionamento

Uma partição de rede ocorre quando nós não conseguem trocar mensagens corretamente. O sistema precisa decidir como se comportar enquanto não sabe se o outro nó está ativo ou isolado.

---

## 5. Trade-offs

Durante uma partição, pode ser necessário escolher entre:

- rejeitar escritas para preservar consistência;
- aceitar operações e reconciliar divergências depois;
- servir dados potencialmente antigos;
- reduzir funcionalidades temporariamente.

---

## 6. Modelo de negócio

A escolha deve depender da operação. Um feed pode aceitar atraso eventual, enquanto uma transferência financeira precisa de controles mais fortes.

---

## 7. Boas práticas

- Documentar garantias por operação;
- Testar falhas de rede;
- Definir comportamento de retry;
- Monitorar divergências;
- Planejar reconciliação.

---

## 8. Resumo

Consistência, disponibilidade e particionamento são dimensões essenciais de sistemas distribuídos. Não existe uma configuração universal: cada operação deve ter garantias adequadas ao seu risco.

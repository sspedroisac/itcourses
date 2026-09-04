# Bancos de Dados Distribuídos

## 1. O que são bancos distribuídos

Um **banco de dados distribuído** armazena e processa dados em múltiplos nós que cooperam por meio de uma rede.

Para a aplicação, o sistema pode parecer um banco único, mesmo que os dados estejam distribuídos fisicamente.

---

## 2. Particionamento

O particionamento divide os dados entre nós. Pode usar:

- faixa de valores;
- hash;
- região;
- cliente;
- tempo.

A chave deve distribuir carga e permitir localizar os dados necessários.

---

## 3. Replicação

A replicação mantém cópias em mais de um nó. Ela melhora disponibilidade e leitura, mas exige sincronização e tratamento de divergências.

---

## 4. Coordenação

Operações distribuídas podem exigir consenso, eleição de líder, quórum ou protocolos de replicação. Quanto mais forte a coordenação, maior pode ser a latência.

---

## 5. Transações distribuídas

Uma transação que envolve vários nós é mais complexa do que uma transação local. Protocolos como two-phase commit podem oferecer atomicidade, mas introduzem custo e pontos de espera.

---

## 6. Localidade e latência

A localização dos dados influencia o tempo de resposta. Manter dados próximos dos usuários pode reduzir latência, mas pode aumentar complexidade de consistência.

---

## 7. Operação

É necessário monitorar:

- saúde dos nós;
- distribuição de partições;
- atraso de replicação;
- reequilíbrio;
- falhas de rede;
- capacidade por região.

---

## 8. Boas práticas

- Definir requisitos de consistência;
- Testar falhas e partições;
- Planejar reequilíbrio;
- Usar chaves de distribuição adequadas;
- Documentar topologia e recuperação.

---

## 9. Resumo

Bancos distribuídos combinam particionamento, replicação e coordenação para atender escala e disponibilidade. Seus benefícios vêm acompanhados de desafios de rede, consistência, recuperação e operação.

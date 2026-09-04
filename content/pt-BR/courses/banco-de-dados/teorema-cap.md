# Teorema CAP

## 1. O que é o Teorema CAP

O **Teorema CAP** descreve um limite de sistemas distribuídos: diante de uma partição de rede, o sistema precisa escolher entre consistência e disponibilidade.

O teorema considera três propriedades:

- Consistency;
- Availability;
- Partition tolerance.

---

## 2. Consistência

Consistência, nesse contexto, significa que toda leitura recebe um resultado compatível com uma única visão válida dos dados.

O conceito não deve ser confundido diretamente com as constraints do modelo relacional.

---

## 3. Disponibilidade

Disponibilidade significa que toda requisição a um nó que não falhou recebe uma resposta, mesmo que alguns nós estejam inacessíveis.

---

## 4. Tolerância a particionamento

Tolerância a particionamento significa continuar operando quando a rede divide os nós em grupos que não conseguem comunicar-se.

Em sistemas distribuídos reais, particionamentos precisam ser considerados.

---

## 5. Escolha durante a partição

Quando ocorre uma partição, uma arquitetura pode:

- preservar consistência e rejeitar ou atrasar operações;
- preservar disponibilidade e aceitar respostas potencialmente divergentes.

---

## 6. CAP não é uma classificação fixa

Não é correto classificar simplesmente um banco como apenas C, A ou P em todos os cenários. A escolha pode variar por operação, configuração, topologia e momento de falha.

---

## 7. Boas práticas

- Definir requisitos por caso de uso;
- Testar partições e atrasos;
- Documentar garantias de leitura e escrita;
- Planejar reconciliação;
- Evitar decisões baseadas apenas em slogans.

---

## 8. Resumo

O Teorema CAP ajuda a compreender os limites de sistemas distribuídos durante partições de rede. Ele orienta decisões entre consistência e disponibilidade, mas não substitui a análise do produto e do domínio.

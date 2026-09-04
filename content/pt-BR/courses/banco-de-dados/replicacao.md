# Replicação

## 1. O que é replicação

**Replicação** é a manutenção de cópias dos dados em outro servidor, processo ou região.

Ela pode melhorar disponibilidade, distribuir leituras e reduzir o impacto de falhas no banco principal.

---

## 2. Primário e réplica

Em um modelo comum, o servidor primário recebe escritas e envia alterações para réplicas.

As réplicas podem atender consultas de leitura, desde que a aplicação aceite eventual atraso entre a origem e a cópia.

---

## 3. Replicação síncrona

Na replicação síncrona, a confirmação da escrita depende da confirmação de uma ou mais réplicas.

Vantagem:

- menor risco de perda após falha do primário.

Custo:

- maior latência e dependência da rede.

---

## 4. Replicação assíncrona

Na replicação assíncrona, o primário confirma a operação antes de todas as réplicas receberem a alteração.

Ela oferece menor latência, mas pode haver perda das últimas alterações se o primário falhar antes da replicação.

---

## 5. Atraso de replicação

O atraso pode ocorrer por volume de escrita, rede, capacidade da réplica ou consultas longas. Aplicações que leem da réplica devem considerar que dados recém-gravados talvez ainda não estejam disponíveis.

---

## 6. Failover

Quando o primário falha, uma réplica pode ser promovida. Esse processo deve verificar consistência, conectividade, eleição e atualização das aplicações.

---

## 7. Boas práticas

- Monitorar atraso;
- Testar promoção de réplicas;
- Definir política de leitura consistente;
- Documentar topologia;
- Validar perda aceitável de dados;
- Evitar dependência de uma única região.

---

## 8. Resumo

A replicação mantém cópias dos dados para melhorar disponibilidade e distribuir carga. A escolha entre sincronismo e assincronismo deve considerar latência, consistência e tolerância à perda.

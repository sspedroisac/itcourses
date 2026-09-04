# Alta Disponibilidade

## 1. O que é alta disponibilidade

**Alta disponibilidade** é a capacidade de um sistema continuar acessível durante falhas, manutenções ou interrupções parciais.

Ela não significa ausência total de falhas, mas redução do tempo e do impacto da indisponibilidade.

---

## 2. Componentes de uma solução

Uma solução de alta disponibilidade pode incluir:

- servidores redundantes;
- replicação;
- balanceamento;
- monitoramento;
- failover automático ou manual;
- backups;
- múltiplas zonas ou regiões.

---

## 3. Failover

**Failover** é a transferência do serviço para um componente secundário quando o principal apresenta falha.

Para funcionar bem, precisa de detecção confiável, eleição, atualização de endpoints e validação de consistência.

---

## 4. Disponibilidade e consistência

Arquiteturas distribuídas podem exigir decisões entre disponibilidade, consistência, latência e custo. A escolha deve partir dos requisitos da aplicação.

Uma operação financeira pode priorizar consistência, enquanto uma consulta analítica pode aceitar atraso.

---

## 5. Manutenção sem interrupção

Replicação e troca gradual de nós podem permitir atualizações com menor indisponibilidade. Ainda assim, mudanças precisam ser compatíveis entre versões durante a transição.

---

## 6. Medindo disponibilidade

Disponibilidade pode ser acompanhada por:

- percentual de uptime;
- tempo de recuperação;
- número de incidentes;
- duração das interrupções;
- sucesso de failovers.

---

## 7. Boas práticas

- Eliminar pontos únicos de falha;
- Testar failover regularmente;
- Monitorar dependências;
- Definir RTO e RPO;
- Documentar procedimentos de emergência;
- Executar exercícios de recuperação.

---

## 8. Resumo

Alta disponibilidade combina redundância, replicação, detecção e recuperação para reduzir interrupções. A arquitetura precisa ser testada, monitorada e alinhada aos objetivos reais do negócio.

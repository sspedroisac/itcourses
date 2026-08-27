# Deploy Contínuo

## 1. Introdução

O **deploy contínuo** é a prática de publicar automaticamente em produção toda alteração que passa pelas verificações definidas.

Ele exige um nível elevado de automação, testes, observabilidade e confiança no processo de entrega.

---

## 2. Deploy e release

Deploy é a instalação de uma versão no ambiente de produção. Release é a disponibilização de uma funcionalidade para usuários.

Uma equipe pode fazer deploy sem liberar uma funcionalidade usando feature flags. Essa separação permite publicar código com menor risco.

---

## 3. Fluxo do deploy contínuo

```text
Commit
  │
  ▼
Build e testes
  │
  ▼
Artefato aprovado
  │
  ▼
Deploy automático
  │
  ▼
Monitoramento
  │
  ├── Problema → desativar, corrigir ou reverter
  │
  ▼
Usuários utilizam a versão
```

---

## 4. Estratégias de implantação

Algumas estratégias reduzem o impacto de uma mudança:

- **Rolling:** atualizar instâncias gradualmente;
- **Blue-green:** manter dois ambientes e alternar o tráfego;
- **Canary:** liberar para uma pequena parcela de usuários;
- **Shadow:** enviar cópia do tráfego para a nova versão sem afetar a resposta.

A estratégia deve considerar custo, arquitetura e facilidade de recuperação.

---

## 5. Banco de dados e deploy

Alterações de banco exigem cuidado porque dados podem ser compartilhados por versões diferentes da aplicação.

Uma abordagem segura costuma separar a mudança em etapas compatíveis: adicionar estruturas novas, migrar gradualmente e remover o que não é mais utilizado depois.

---

## 6. Observabilidade

Depois do deploy, a equipe precisa verificar se o sistema está saudável.

Logs, métricas, rastros, alertas e indicadores de negócio ajudam a detectar aumento de erros, lentidão ou comportamento inesperado.

Monitorar apenas se o processo terminou não é suficiente.

---

## 7. Reversão e parada segura

Um deploy contínuo precisa de mecanismos para interromper ou reverter uma publicação quando os sinais indicarem risco.

Reverter o código não desfaz automaticamente uma alteração irreversível de dados. Por isso, migrações e compatibilidade devem ser planejadas junto com o deploy.

---

## 8. Pré-requisitos

Antes de adotar deploy contínuo, a equipe deve possuir:

- Testes automatizados confiáveis;
- Pipeline estável;
- Artefatos reproduzíveis;
- Monitoramento e alertas;
- Controle de acesso;
- Estratégia de recuperação;
- Responsabilidade clara por incidentes.

---

## 9. Resumo

| Conceito        | Descrição                                            |
| --------------- | ---------------------------------------------------- |
| Deploy contínuo | Publicação automática de alterações aprovadas        |
| Release         | Disponibilização de uma funcionalidade para usuários |
| Rolling deploy  | Atualização gradual das instâncias                   |
| Blue-green      | Alternância entre dois ambientes                     |
| Canary          | Publicação inicial para uma pequena parcela          |
| Observabilidade | Evidências sobre o comportamento do sistema          |

---

## 10. Boas práticas

- Separar deploy de release quando isso reduzir riscos;
- Publicar pequenas alterações;
- Usar estratégias graduais em mudanças críticas;
- Monitorar indicadores técnicos e de negócio;
- Testar reversão e recuperação;
- Planejar migrações compatíveis;
- Manter acesso e auditoria das publicações.

---

## 11. Conclusão

O deploy contínuo transforma a publicação em uma capacidade automatizada e repetível.

Ele só é sustentável quando acompanhado por testes, observabilidade, segurança e uma resposta bem definida para falhas.

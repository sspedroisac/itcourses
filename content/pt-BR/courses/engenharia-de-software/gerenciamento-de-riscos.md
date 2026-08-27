# Gerenciamento de Riscos

## 1. Introdução

Um **risco** é uma condição ou evento incerto que pode afetar os objetivos de um projeto.

O impacto pode ser negativo, como um atraso ou incidente, ou positivo, como uma oportunidade de reduzir custos. Neste conteúdo, o foco principal está nos riscos que ameaçam o projeto.

Gerenciar riscos significa identificar incertezas importantes, avaliar suas consequências e preparar respostas adequadas.

---

## 2. Risco e problema

Risco e problema não são sinônimos.

- **Risco:** algo que pode acontecer;
- **Problema:** algo que já aconteceu;
- **Incidente:** evento que interrompe ou degrada uma operação.

Um fornecedor que pode atrasar representa um risco. Quando o atraso acontece, ele se torna um problema que precisa ser tratado.

---

## 3. Identificação de riscos

Os riscos podem ser identificados em conversas com a equipe, análise de projetos anteriores, revisão de dependências e observação de premissas.

Exemplos:

- Dependência de uma API externa;
- Requisito ainda não validado;
- Falta de conhecimento técnico;
- Mudança regulatória esperada;
- Indisponibilidade de uma pessoa-chave;
- Dados insuficientes para testar um fluxo;
- Limitação de infraestrutura.

Uma descrição específica é mais útil do que um registro genérico como “o projeto pode atrasar”.

---

## 4. Probabilidade e impacto

Um risco pode ser analisado pela probabilidade de acontecer e pelo impacto caso aconteça.

```text
Prioridade do risco
        =
Probabilidade × Impacto
```

Uma matriz simples ajuda a priorizar:

| Probabilidade / Impacto | Baixo     | Médio     | Alto              |
| ----------------------- | --------- | --------- | ----------------- |
| Baixa                   | Monitorar | Avaliar   | Planejar resposta |
| Média                   | Monitorar | Tratar    | Priorizar         |
| Alta                    | Tratar    | Priorizar | Ação imediata     |

Essa classificação é um apoio à conversa, não uma medição exata do futuro.

---

## 5. Respostas aos riscos

As respostas mais comuns são:

- **Evitar:** alterar o plano para eliminar a exposição;
- **Mitigar:** reduzir a probabilidade ou o impacto;
- **Transferir:** compartilhar a consequência com outra parte, quando adequado;
- **Aceitar:** reconhecer o risco e acompanhar sua evolução.

Aceitar um risco não significa ignorá-lo. Pode significar definir um limite e um plano de contingência.

---

## 6. Mitigação e contingência

Mitigação acontece antes do evento para reduzir a exposição. Contingência é a ação preparada para o caso de o evento acontecer.

Exemplo:

| Risco                        | Mitigação                     | Contingência                         |
| ---------------------------- | ----------------------------- | ------------------------------------ |
| Serviço externo indisponível | Criar timeout e monitoramento | Usar fila e reprocessamento          |
| Requisito incerto            | Fazer protótipo com usuários  | Reduzir o escopo da primeira entrega |

---

## 7. Registro de riscos

Um registro de riscos deve ser simples e atualizado.

| Campo         | Exemplo                                              |
| ------------- | ---------------------------------------------------- |
| Descrição     | Provedor externo pode não suportar o volume previsto |
| Probabilidade | Média                                                |
| Impacto       | Alto                                                 |
| Responsável   | Pessoa ou equipe responsável pelo acompanhamento     |
| Resposta      | Executar teste de carga e definir alternativa        |
| Gatilho       | Respostas acima do limite acordado                   |
| Status        | Em acompanhamento                                    |

O responsável acompanha o risco, mas isso não transforma a gestão em responsabilidade de uma única pessoa.

---

## 8. Monitoramento e gatilhos

Um **gatilho** é um sinal de que o risco está se aproximando ou se concretizou.

Exemplos de gatilhos incluem falhas repetidas em testes, aumento de tempo de resposta, mudança de legislação ou atraso de uma dependência.

Definir gatilhos permite agir antes que o impacto seja maior.

---

## 9. Riscos técnicos e de projeto

Riscos técnicos incluem arquitetura inadequada, vulnerabilidades, dívida técnica e dificuldade de integração.

Riscos de projeto incluem escopo instável, estimativas incertas, dependências, falta de recursos e comunicação insuficiente.

As categorias ajudam a organizar a análise, mas um mesmo risco pode pertencer a mais de uma delas.

---

## 10. Resumo

| Conceito      | Descrição                                           |
| ------------- | --------------------------------------------------- |
| Risco         | Evento ou condição incerta com possível impacto     |
| Problema      | Evento que já ocorreu                               |
| Probabilidade | Chance estimada de ocorrência                       |
| Impacto       | Consequência caso o risco aconteça                  |
| Mitigação     | Ação para reduzir exposição antes do evento         |
| Contingência  | Ação preparada para responder ao evento             |
| Gatilho       | Sinal que indica aproximação ou ocorrência do risco |

---

## 11. Boas práticas

- Identificar riscos cedo e continuamente;
- Escrever riscos de forma específica;
- Priorizar probabilidade e impacto;
- Definir respostas proporcionais;
- Registrar responsáveis e gatilhos;
- Revisar riscos em momentos regulares;
- Comunicar riscos sem esconder incertezas.

---

## 12. Conclusão

O gerenciamento de riscos não elimina incertezas, mas reduz surpresas e melhora a capacidade de resposta do projeto.

Ao identificar riscos, avaliar sua prioridade e preparar respostas, a equipe toma decisões mais conscientes e protege as entregas mais importantes.

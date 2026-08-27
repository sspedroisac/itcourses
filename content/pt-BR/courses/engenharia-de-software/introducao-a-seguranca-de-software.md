# Introdução à Segurança de Software

## 1. Introdução

A **segurança de software** reúne práticas para proteger sistemas, dados e usuários contra acesso indevido, alteração, exposição ou interrupção.

Segurança deve fazer parte de todo o ciclo de vida do software, desde a definição dos requisitos até a operação e a manutenção.

---

## 2. Objetivos da segurança

Uma forma comum de organizar os objetivos de segurança é a tríade CIA:

- **Confidencialidade:** somente pessoas autorizadas acessam a informação;
- **Integridade:** os dados não são alterados de maneira indevida;
- **Disponibilidade:** o serviço permanece acessível quando necessário.

```text
              Segurança
             /    |    \
Confidencialidade Integridade Disponibilidade
```

Outros objetivos, como autenticidade, rastreabilidade e privacidade, também podem ser importantes conforme o contexto.

---

## 3. Ameaças, vulnerabilidades e riscos

Uma **ameaça** é uma situação ou agente capaz de causar dano. Uma **vulnerabilidade** é uma fraqueza que pode ser explorada. O **risco** combina a possibilidade de um evento com seu impacto.

Exemplo: uma aplicação sem controle de acesso possui uma vulnerabilidade; o acesso de uma pessoa não autorizada representa uma ameaça; a exposição de dados é um possível impacto.

---

## 4. Segurança desde o início

Corrigir um problema de segurança depois que o software está em produção pode exigir mudanças no código, nos dados, na infraestrutura e na comunicação com usuários.

Por isso, a equipe deve discutir segurança durante:

- Levantamento de requisitos;
- Modelagem da solução;
- Implementação;
- Testes;
- Deploy;
- Monitoramento.

---

## 5. Modelagem de ameaças

A modelagem de ameaças identifica o que precisa ser protegido, quais podem ser os caminhos de ataque e quais controles reduzem o risco.

Um processo simplificado é:

```text
Identificar ativos
        │
        ▼
Mapear ameaças
        │
        ▼
Avaliar riscos
        │
        ▼
Definir controles
        │
        ▼
Validar e monitorar
```

---

## 6. Princípio do menor privilégio

Cada pessoa, serviço ou componente deve possuir somente as permissões necessárias para realizar sua função.

Esse princípio reduz o impacto de credenciais comprometidas e limita erros acidentais.

Permissões devem ser revisadas quando responsabilidades mudarem ou quando deixarem de ser necessárias.

---

## 7. Defesa em profundidade

Segurança não deve depender de uma única barreira.

Autenticação, autorização, validação de entradas, criptografia, logs, monitoramento e backups são controles complementares. Se uma camada falhar, as outras podem reduzir o impacto.

---

## 8. Incidentes e resposta

Mesmo com prevenção, incidentes podem acontecer. A equipe deve saber como detectar, conter, investigar, recuperar e aprender com eles.

Um plano de resposta deve definir responsabilidades, canais de comunicação, critérios de escalonamento e ações de recuperação.

---

## 9. Resumo

| Conceito               | Descrição                                   |
| ---------------------- | ------------------------------------------- |
| Confidencialidade      | Proteção contra acesso indevido             |
| Integridade            | Proteção contra alterações indevidas        |
| Disponibilidade        | Acesso ao serviço quando necessário         |
| Vulnerabilidade        | Fraqueza que pode causar exposição ou dano  |
| Menor privilégio       | Concessão apenas das permissões necessárias |
| Defesa em profundidade | Uso de várias camadas de proteção           |

---

## 10. Boas práticas

- Considerar segurança desde os requisitos;
- Proteger dados sensíveis durante armazenamento e transmissão;
- Aplicar menor privilégio;
- Validar entradas e permissões;
- Manter dependências atualizadas;
- Registrar eventos relevantes sem expor segredos;
- Preparar resposta e recuperação de incidentes.

---

## 11. Conclusão

Segurança de software é uma responsabilidade contínua que envolve pessoas, processos e tecnologia.

Ao identificar riscos cedo e combinar controles preventivos, detectivos e corretivos, a equipe reduz a probabilidade e o impacto de incidentes.

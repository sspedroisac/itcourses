# Tolerância a Falhas e Recuperação

## 1. O que é tolerância a falhas

**Tolerância a falhas** é a capacidade de continuar operando ou recuperar o serviço quando componentes apresentam problemas.

Falhas podem afetar hardware, rede, armazenamento, processos, software, credenciais ou dados.

---

## 2. Tipos de falhas

Alguns exemplos são:

- queda do servidor;
- corrupção de armazenamento;
- perda de conectividade;
- erro de configuração;
- exclusão acidental;
- corrupção lógica;
- falha em uma dependência externa.

Cada tipo exige uma estratégia diferente.

---

## 3. Recuperação após falha

A recuperação pode utilizar:

- logs de transação;
- backups completos;
- backups incrementais;
- réplicas;
- snapshots;
- procedimentos manuais de restauração.

O objetivo é retornar a um estado consistente dentro do RTO definido.

---

## 4. Plano de recuperação

Um plano deve informar:

- responsáveis;
- prioridades;
- contatos;
- dependências;
- sequência de ações;
- critérios de sucesso;
- forma de comunicação.

Sem documentação, a resposta tende a ser lenta e sujeita a erros.

---

## 5. Recuperação lógica

Quando dados são apagados ou alterados incorretamente, pode ser necessário recuperar uma cópia em ambiente separado e extrair apenas as informações corretas.

Restaurar diretamente sobre produção pode ampliar o incidente.

---

## 6. Testes e exercícios

Planos devem ser testados em exercícios controlados. O time precisa medir tempo, identificar lacunas e atualizar a documentação.

---

## 7. Boas práticas

- Definir RPO e RTO;
- Manter cópias independentes;
- Testar restauração;
- Usar checklists;
- Registrar decisões durante o incidente;
- Fazer análise posterior da causa.

---

## 8. Resumo

Tolerância a falhas e recuperação dependem de redundância, backups, logs e procedimentos testados. A preparação anterior ao incidente é o que torna a resposta previsível.

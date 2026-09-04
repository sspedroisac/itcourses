# Consistência Eventual

## 1. O que é consistência eventual

Na **consistência eventual**, réplicas podem apresentar valores diferentes temporariamente, mas tendem a convergir quando novas atualizações são propagadas.

Ela é comum em sistemas distribuídos que priorizam disponibilidade e baixa latência.

---

## 2. Exemplo

Um usuário atualiza seu perfil em uma região. Por alguns instantes, outra região pode retornar a versão anterior até que a alteração seja replicada.

---

## 3. Quando usar

Esse modelo pode ser adequado para:

- contadores aproximados;
- feeds;
- recomendações;
- catálogos;
- caches;
- dados cujo atraso não compromete o negócio.

---

## 4. Quando evitar

Não é adequado aceitar divergência sem controle em operações como:

- débito financeiro;
- autorização de acesso;
- controle de estoque crítico;
- prevenção de duplicidade;
- regras de segurança.

---

## 5. Conflitos

Se duas réplicas recebem alterações diferentes, o sistema precisa de uma política de resolução. Ela pode usar timestamp, versão, prioridade, operação de merge ou intervenção do negócio.

---

## 6. Experiência da aplicação

A aplicação pode usar leitura após escrita, afinidade com uma região ou confirmação de propagação para reduzir surpresas ao usuário.

---

## 7. Boas práticas

- Documentar atrasos aceitáveis;
- Definir resolução de conflitos;
- Monitorar tempo de convergência;
- Testar duplicidade e retries;
- Separar operações críticas das tolerantes a atraso.

---

## 8. Resumo

Consistência eventual permite que réplicas convirjam ao longo do tempo, favorecendo disponibilidade e escala. Seu uso exige limites claros, resolução de conflitos e alinhamento com o risco do negócio.

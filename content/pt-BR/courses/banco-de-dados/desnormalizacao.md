# Desnormalização

## 1. O que é desnormalização

A **desnormalização** é a introdução controlada de redundância em um modelo de dados que foi normalizado. Seu objetivo principal é melhorar o desempenho de determinadas consultas ou simplificar o acesso a informações muito utilizadas.

Ela não significa abandonar a qualidade do modelo. Deve ser uma decisão consciente, baseada em evidências e acompanhada de regras para manter a consistência.

---

## 2. Motivos para desnormalizar

A desnormalização pode ser considerada quando:

- consultas com muitas junções são executadas com frequência;
- o custo de leitura é maior que o custo de armazenamento;
- relatórios precisam de respostas rápidas;
- dados históricos são consultados repetidamente;
- a aplicação possui padrão de leitura muito previsível.

---

## 3. Técnicas comuns

### 3.1 Colunas derivadas

Armazenar valores calculados, como total do pedido, quando o cálculo frequente for muito custoso.

### 3.2 Duplicação controlada

Repetir uma informação em uma tabela de leitura para evitar junções, desde que exista um processo confiável de atualização.

### 3.3 Tabelas de resumo

Criar tabelas agregadas para relatórios, como vendas por mês ou total por cliente.

### 3.4 Materialized views

Persistir o resultado de uma consulta complexa e atualizá-lo conforme uma política definida.

---

## 4. Riscos

A desnormalização aumenta alguns riscos:

- dados duplicados e divergentes;
- maior complexidade de atualização;
- necessidade de sincronização;
- maior espaço de armazenamento;
- dificuldade para identificar a fonte oficial da informação.

Por isso, ela deve ser usada com moderação.

---

## 5. Processo de decisão

Antes de desnormalizar:

1. medir a consulta atual;
2. analisar o plano de execução;
3. verificar índices e alternativas;
4. estimar o ganho esperado;
5. definir como a consistência será mantida;
6. monitorar o resultado após a mudança.

A decisão deve ser baseada em comportamento observado, e não apenas em suposições.

---

## 6. Normalização e desnormalização juntas

Um sistema pode manter a origem dos dados normalizada e criar estruturas desnormalizadas para leitura. Essa separação permite preservar a qualidade da fonte principal sem sacrificar a performance de consultas específicas.

---

## 7. Boas práticas

- Documentar o motivo da redundância;
- Definir a fonte oficial dos dados;
- Automatizar atualizações quando possível;
- Criar testes de consistência;
- Revisar a necessidade da desnormalização ao longo do tempo.

---

## 8. Resumo

Desnormalização é uma técnica de otimização que adiciona redundância controlada para atender necessidades específicas de leitura e performance. Ela deve ser aplicada somente depois de medir o problema e definir mecanismos claros para preservar a consistência dos dados.

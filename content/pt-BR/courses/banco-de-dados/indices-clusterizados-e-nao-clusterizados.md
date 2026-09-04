# Índices Clusterizados e Não Clusterizados

## 1. Organização de índices

Índices podem ser classificados de acordo com a forma como se relacionam com a organização física ou lógica dos dados.

Os conceitos de índice **clusterizado** e **não clusterizado** variam entre SGBDs, mas ajudam a entender como dados e estruturas de busca podem ser organizados.

---

## 2. Índice clusterizado

Um índice clusterizado organiza os dados da tabela de acordo com a chave do índice ou mantém as folhas do índice como a própria organização dos registros.

Como existe uma relação direta com os dados, normalmente uma tabela possui apenas uma organização clusterizada principal.

---

## 3. Índice não clusterizado

Um índice não clusterizado é uma estrutura separada que guarda chaves e referências para encontrar os registros na tabela ou em outra estrutura.

Uma tabela pode possuir vários índices não clusterizados, cada um atendendo a um padrão de consulta.

---

## 4. Impacto nas consultas

Um índice clusterizado pode ser eficiente para:

- leituras por intervalo;
- ordenação pela chave;
- acesso sequencial relacionado à organização física.

Índices não clusterizados são úteis para filtros alternativos e colunas que não definem a organização principal.

---

## 5. Índice cobrindo a consulta

Um índice é chamado de covering quando contém todas as colunas necessárias para responder à consulta, evitando acesso adicional à tabela.

```sql
CREATE INDEX idx_pedido_status_data
ON pedido (status, data_pedido);
```

A cobertura depende das colunas selecionadas e do plano escolhido.

---

## 6. Cuidados

- Não criar índices apenas por hábito;
- Considerar o custo de manutenção;
- Avaliar colunas incluídas;
- Verificar fragmentação;
- Comparar planos antes e depois da alteração.

---

## 7. Resumo

Índices clusterizados e não clusterizados organizam dados e referências de formas diferentes. A escolha deve considerar filtros, intervalos, ordenações, escrita e características específicas do SGBD.

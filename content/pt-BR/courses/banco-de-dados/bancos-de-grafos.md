# Bancos de Grafos

## 1. O que são bancos de grafos

Bancos de grafos representam dados como **nós** e **arestas**. Nós representam entidades e arestas representam relações entre elas.

Esse modelo é adequado quando as conexões entre os dados são tão importantes quanto os próprios dados.

---

## 2. Exemplo

```text
(Ana) ── segue ──> (Bruno)
(Bruno) ── participa ──> (Projeto X)
```

A relação pode possuir propriedades, como data, peso ou tipo.

---

## 3. Casos de uso

São comuns em:

- redes sociais;
- recomendações;
- detecção de fraude;
- mapas e rotas;
- gerenciamento de conhecimento;
- análise de dependências.

---

## 4. Travessias

Uma consulta em grafo normalmente percorre relações para encontrar caminhos, vizinhos ou padrões.

Exemplos de perguntas:

- Quais amigos de amigos um usuário possui?
- Qual caminho conecta dois pontos?
- Quais entidades compartilham relações suspeitas?

---

## 5. Vantagens

O modelo de grafos torna relações explícitas e pode simplificar consultas que seriam complexas com muitas tabelas associativas.

Ele também permite adicionar novos tipos de relação com flexibilidade.

---

## 6. Cuidados

É necessário controlar profundidade de travessias, ciclos, volume de relações e padrões de consulta. Uma travessia sem limite pode consumir muitos recursos.

---

## 7. Boas práticas

- Definir nós e relações a partir do domínio;
- Criar índices para propriedades de busca;
- Limitar travessias quando possível;
- Monitorar consultas complexas;
- Validar se o grafo realmente agrega valor.

---

## 8. Resumo

Bancos de grafos priorizam relações e travessias entre entidades. São adequados para domínios conectados, nos quais recomendações, caminhos e padrões relacionais são centrais.

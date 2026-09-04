# Modelo Entidade-Relacionamento

## 1. O que é o Modelo Entidade-Relacionamento

O **Modelo Entidade-Relacionamento (MER)** é uma técnica conceitual usada para representar dados, entidades, atributos e relacionamentos de um domínio.

Ele foi criado para facilitar a comunicação entre pessoas de negócio, analistas, arquitetos e desenvolvedores antes da implementação do banco de dados.

---

## 2. Elementos do MER

Os principais elementos são:

- **entidades**: objetos ou conceitos relevantes;
- **atributos**: características das entidades;
- **relacionamentos**: associações entre entidades;
- **cardinalidades**: quantidade de ocorrências relacionadas;
- **participações**: obrigatoriedade da associação.

---

## 3. Exemplo de domínio

Considere um sistema de vendas:

```text
Cliente ─── realiza ─── Pedido ─── contém ─── Produto
```

Nesse exemplo:

- Cliente, Pedido e Produto são entidades;
- realiza e contém são relacionamentos;
- quantidade pode ser um atributo de ItemPedido;
- as cardinalidades definem quantos pedidos e produtos podem existir.

---

## 4. Diagrama ER

O diagrama ER apresenta visualmente os componentes do modelo. Uma notação comum utiliza:

- retângulos para entidades;
- elipses para atributos;
- losangos para relacionamentos;
- linhas para representar associações.

Outras notações, como a notação Crow's Foot, representam cardinalidades diretamente nas extremidades das relações.

---

## 5. Etapas para criar um MER

1. Entender o problema e os processos do negócio;
2. Identificar substantivos relevantes como possíveis entidades;
3. Identificar características como possíveis atributos;
4. Identificar verbos como possíveis relacionamentos;
5. Definir chaves e regras de identificação;
6. Determinar cardinalidades e participações;
7. Validar o modelo com pessoas do domínio.

---

## 6. Benefícios do modelo

O MER ajuda a:

- reduzir ambiguidades;
- identificar informações ausentes;
- antecipar problemas de estrutura;
- comunicar decisões técnicas;
- servir de base para o modelo relacional.

Corrigir um erro no modelo conceitual costuma ser menos custoso do que corrigir o mesmo erro depois da implementação.

---

## 7. Boas práticas

- Manter o diagrama legível;
- Evitar entidades sem responsabilidade clara;
- Usar nomes consistentes;
- Não misturar detalhes físicos prematuramente;
- Atualizar o modelo quando as regras mudarem.

---

## 8. Resumo

O Modelo Entidade-Relacionamento é uma representação conceitual do domínio que organiza entidades, atributos e relacionamentos. Ele serve como ponte entre os requisitos do negócio e a implementação do banco de dados.

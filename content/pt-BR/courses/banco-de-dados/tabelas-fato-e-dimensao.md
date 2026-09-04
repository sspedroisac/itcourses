# Tabelas Fato e Dimensão

## 1. Tabela fato

Uma **tabela fato** registra eventos ou estados mensuráveis do negócio. Cada linha representa um evento em uma granularidade definida.

Exemplo:

```text
fato_venda
- chave_tempo
- chave_produto
- chave_cliente
- quantidade
- valor_total
```

---

## 2. Tabela dimensão

Uma **dimensão** descreve os elementos relacionados ao evento.

Exemplo:

```text
dim_produto
- chave_produto
- codigo_produto
- nome
- categoria
- marca
```

Ela fornece contexto para filtros, agrupamentos e apresentação.

---

## 3. Chaves substitutas

Dimensões frequentemente usam chaves substitutas geradas no ambiente analítico. Isso permite preservar versões históricas mesmo quando o identificador do sistema de origem permanece igual.

---

## 4. Medidas

Medidas representam valores numéricos do evento, como quantidade, receita, custo e desconto.

É importante registrar unidade, moeda, precisão e regras de cálculo.

---

## 5. Dimensões de mudança lenta

Quando atributos de uma dimensão mudam, o modelo precisa definir se deve:

- sobrescrever o valor;
- criar nova versão;
- guardar valor anterior e atual;
- registrar apenas o histórico necessário.

---

## 6. Relacionamentos

A tabela fato normalmente referencia dimensões por chaves. Consultas analíticas combinam essas estruturas para obter indicadores por tempo, produto, cliente ou região.

---

## 7. Boas práticas

- Definir o significado de cada linha;
- Validar medidas com o negócio;
- Evitar fatos sem granularidade clara;
- Padronizar dimensões compartilhadas;
- Monitorar chaves sem correspondência.

---

## 8. Resumo

Tabelas fato registram eventos e medidas; dimensões fornecem contexto. A combinação permite análises flexíveis sem depender da estrutura operacional original.

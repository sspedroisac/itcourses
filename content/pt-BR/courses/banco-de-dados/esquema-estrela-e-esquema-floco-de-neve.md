# Esquema Estrela e Esquema Floco de Neve

## 1. O que são esquemas dimensionais

O **esquema estrela** e o **esquema floco de neve** são formas de organizar fatos e dimensões em ambientes analíticos.

A escolha influencia simplicidade, redundância, número de junções e manutenção.

---

## 2. Esquema estrela

No esquema estrela, uma tabela fato fica no centro e se relaciona diretamente com dimensões geralmente desnormalizadas.

```text
        dim_produto
             │
dim_tempo ─ fato_venda ─ dim_cliente
             │
        dim_loja
```

Esse modelo simplifica consultas e costuma reduzir a quantidade de junções.

---

## 3. Esquema floco de neve

No esquema floco de neve, dimensões são normalizadas em tabelas relacionadas.

Produto pode ser separado de categoria e marca, por exemplo. Isso reduz redundância, mas aumenta joins e complexidade das consultas.

---

## 4. Comparação

| Característica | Estrela | Floco de neve |
| --- | --- | --- |
| Dimensões | Desnormalizadas | Normalizadas |
| Consultas | Mais simples | Mais junções |
| Redundância | Maior | Menor |
| Usabilidade | Mais direta | Mais complexa |
| Manutenção | Pode duplicar dados | Centraliza atributos |

---

## 5. Escolha

O esquema estrela é comum quando simplicidade e performance de leitura são prioridades. O floco de neve pode ser útil quando dimensões são grandes, compartilhadas ou possuem hierarquias complexas.

---

## 6. Boas práticas

- Considerar o perfil dos usuários;
- Medir consultas reais;
- Evitar normalização excessiva;
- Documentar hierarquias;
- Manter dimensões conformadas.

---

## 7. Resumo

O esquema estrela prioriza simplicidade e leitura; o floco de neve reduz redundância e explicita hierarquias. A decisão depende de volume, consultas, governança e experiência dos consumidores.

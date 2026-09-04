# Bancos Chave-Valor

## 1. O que são bancos chave-valor

Bancos chave-valor armazenam pares formados por uma chave única e um valor associado.

```text
chave: sessao:abc123
valor: dados da sessão do usuário
```

A simplicidade favorece acesso rápido por chave.

---

## 2. Casos de uso

São usados com frequência para:

- cache;
- sessões;
- contadores;
- filas simples;
- tokens temporários;
- configurações distribuídas;
- controle de expiração.

---

## 3. Expiração

Muitos bancos chave-valor permitem definir TTL (**Time To Live**) para que um valor expire automaticamente.

Isso é útil para sessões, tokens e caches que não devem permanecer indefinidamente.

---

## 4. Operações atômicas

Operações como incremento, inserção condicional e remoção podem ser oferecidas de forma atômica. Isso ajuda a controlar contadores e recursos compartilhados.

---

## 5. Limitações

O modelo é menos adequado quando o sistema precisa de consultas complexas por vários atributos ou relacionamentos ricos entre entidades.

Nesse caso, outro modelo pode ser mais apropriado.

---

## 6. Cache e consistência

Quando usado como cache, é necessário definir o comportamento em caso de expiração, falha ou divergência em relação à fonte principal.

Estratégias como cache-aside exigem cuidado com invalidação e concorrência.

---

## 7. Boas práticas

- Definir convenções para chaves;
- Controlar tamanho dos valores;
- Usar TTL quando apropriado;
- Monitorar memória e evictions;
- Não tratar cache como única fonte sem necessidade.

---

## 8. Resumo

Bancos chave-valor oferecem acesso simples e rápido por identificador. São excelentes para cache, sessões e contadores, mas não substituem modelos voltados a consultas relacionais ou analíticas complexas.

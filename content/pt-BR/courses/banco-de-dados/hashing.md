# Hashing

## 1. O que é hashing

**Hashing** é uma técnica que usa uma função de dispersão para transformar uma chave em uma posição de acesso.

Seu objetivo é localizar registros rapidamente em buscas por igualdade.

---

## 2. Função hash

A função hash recebe uma chave e produz um valor que indica o bucket ou posição provável do registro.

```text
hash(id_cliente) -> bucket 42
```

Uma boa função distribui as chaves de forma equilibrada.

---

## 3. Colisões

Uma colisão ocorre quando chaves diferentes produzem a mesma posição. O sistema precisa tratar esse caso usando estruturas adicionais, encadeamento ou redimensionamento.

Muitas colisões prejudicam a eficiência do acesso.

---

## 4. Quando hashing é adequado

Hashing é especialmente adequado para consultas de igualdade:

```sql
SELECT *
FROM cliente
WHERE id_cliente = 42;
```

Ele não é naturalmente adequado para consultas por intervalo ou ordenação.

---

## 5. Comparação com árvores

Árvores B e B+ são melhores para:

- intervalos;
- ordenações;
- buscas por prefixo em alguns cenários.

Hashing pode ser vantajoso para acesso direto por igualdade, dependendo do SGBD e da implementação.

---

## 6. Hashing e distribuição

Em sistemas distribuídos, funções hash também ajudam a distribuir dados entre nós. Alterações na quantidade de nós podem exigir técnicas como consistent hashing para reduzir movimentação de dados.

---

## 7. Cuidados

- Avaliar distribuição das chaves;
- Monitorar colisões;
- Considerar crescimento da estrutura;
- Não usar hashing quando ordenação for requisito;
- Conferir o suporte específico do SGBD.

---

## 8. Resumo

Hashing oferece acesso eficiente por igualdade ao distribuir chaves em posições calculadas. Sua principal limitação é não atender naturalmente a consultas por intervalo e ordenação.

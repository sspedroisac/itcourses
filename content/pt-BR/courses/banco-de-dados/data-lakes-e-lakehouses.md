# Data Lakes e Lakehouses

## 1. O que é um Data Lake

Um **Data Lake** é um repositório que armazena dados em diferentes formatos, geralmente mantendo-os próximos da forma original.

Ele pode receber dados estruturados, semiestruturados e não estruturados.

---

## 2. Zonas de dados

Um lake pode ser organizado em zonas como:

- raw ou bronze: dados originais;
- trusted ou silver: dados tratados;
- curated ou gold: dados prontos para consumo.

As zonas ajudam a controlar qualidade e responsabilidades.

---

## 3. Risco de Data Swamp

Sem catálogo, governança, contratos e qualidade, o Data Lake pode tornar-se um **data swamp**, no qual os dados existem, mas são difíceis de localizar, interpretar ou confiar.

---

## 4. Lakehouse

Um **Lakehouse** combina armazenamento flexível de Data Lake com recursos típicos de Data Warehouse, como transações, catálogo, schema e consultas analíticas.

Ele busca reduzir a duplicação entre ambientes de dados brutos e analíticos.

---

## 5. Formatos e particionamento

Formatos colunares e particionamento por tempo ou domínio podem reduzir leituras e custos. O particionamento deve evitar excesso de arquivos pequenos e distribuição desequilibrada.

---

## 6. Casos de uso

- ciência de dados;
- exploração de eventos;
- machine learning;
- histórico de arquivos;
- integração de fontes variadas.

---

## 7. Boas práticas

- Catalogar conjuntos de dados;
- Definir proprietários;
- Controlar schemas;
- Aplicar políticas de acesso;
- Monitorar qualidade e custo;
- Evitar duplicação sem propósito.

---

## 8. Resumo

Data Lakes armazenam dados variados com flexibilidade. Lakehouses acrescentam recursos de organização e confiabilidade analítica. Ambos precisam de governança para permanecerem úteis.

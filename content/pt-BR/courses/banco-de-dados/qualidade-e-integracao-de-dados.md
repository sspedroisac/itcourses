# Qualidade e Integração de Dados

## 1. O que é qualidade de dados

**Qualidade de dados** é o grau em que os dados são adequados ao uso pretendido.

Um dado pode ser tecnicamente válido, mas ainda não possuir qualidade suficiente para uma decisão específica.

---

## 2. Dimensões de qualidade

As principais dimensões incluem:

- completude;
- validade;
- consistência;
- unicidade;
- atualidade;
- precisão;
- conformidade.

Cada dimensão deve possuir regras e métricas observáveis.

---

## 3. Integração de fontes

Integrar dados exige resolver diferenças de:

- nomes;
- identificadores;
- formatos;
- unidades;
- fusos horários;
- regras de negócio;
- frequência de atualização.

---

## 4. Validações

Pipelines podem verificar:

- colunas obrigatórias;
- tipos e intervalos;
- chaves duplicadas;
- referências sem correspondência;
- quantidade esperada de registros;
- alterações fora do padrão.

---

## 5. Reconciliação

A reconciliação compara origem e destino para verificar se o carregamento está completo e correto.

Exemplos incluem comparar contagens, somas, períodos e identificadores.

---

## 6. Contratos de dados

Um contrato define schema, semântica, frequência e responsabilidades entre produtores e consumidores. Mudanças incompatíveis devem ser comunicadas e versionadas.

---

## 7. Boas práticas

- Definir métricas de qualidade;
- Monitorar falhas;
- Tratar dados inválidos explicitamente;
- Registrar origem e transformação;
- Possibilitar correção e reprocessamento;
- Envolver responsáveis pelo negócio.

---

## 8. Resumo

Qualidade e integração garantem que dados de fontes diferentes possam ser usados com confiança. O processo deve combinar regras técnicas, contexto de negócio, monitoramento e rastreabilidade.

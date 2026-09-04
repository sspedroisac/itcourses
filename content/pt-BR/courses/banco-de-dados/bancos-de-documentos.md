# Bancos de Documentos

## 1. O que são bancos de documentos

Bancos de documentos armazenam informações em documentos, geralmente representados por JSON ou estruturas semelhantes.

Cada documento pode possuir campos diferentes, o que oferece flexibilidade de schema.

---

## 2. Exemplo de documento

```json
{
  "id": 10,
  "nome": "Ana",
  "enderecos": [
    {
      "cidade": "São Paulo",
      "principal": true
    }
  ]
}
```

Dados relacionados podem ser incorporados ao mesmo documento quando são lidos juntos.

---

## 3. Embedding e referência

O **embedding** coloca dados relacionados dentro do documento. É útil quando o conjunto é pequeno e geralmente consultado junto.

A referência mantém dados separados e relaciona documentos por identificadores. É útil quando os dados são compartilhados ou crescem independentemente.

---

## 4. Schema flexível

A flexibilidade permite evoluir documentos sem alterar todos os registros de uma vez. Porém, a aplicação precisa lidar com versões e campos ausentes.

Flexibilidade não significa ausência de regras: validações e convenções continuam importantes.

---

## 5. Consultas e índices

Bancos de documentos oferecem consultas por campos internos e índices sobre atributos específicos. Índices devem refletir os padrões de acesso mais frequentes.

---

## 6. Boas práticas

- Definir tamanho máximo dos documentos;
- Evitar documentos que crescem indefinidamente;
- Versionar mudanças de estrutura;
- Validar campos essenciais;
- Escolher embedding e referências conscientemente.

---

## 7. Resumo

Bancos de documentos representam dados em estruturas flexíveis e próximas do formato consumido pelas aplicações. Seu bom uso depende de modelagem orientada ao acesso, controle de crescimento e validação consistente.

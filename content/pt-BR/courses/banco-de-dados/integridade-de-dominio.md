# Integridade de Domínio

## 1. O que é integridade de domínio

A **integridade de domínio** garante que os valores armazenados pertençam ao conjunto de valores válidos para cada atributo.

Por exemplo, uma idade não deve ser negativa, um status deve utilizar valores permitidos e uma data de nascimento deve possuir um formato válido.

---

## 2. Domínio de um atributo

O domínio define características como:

- tipo de dado;
- tamanho;
- formato;
- valores permitidos;
- obrigatoriedade;
- valor padrão.

```text
status_pedido: {'aberto', 'pago', 'enviado', 'cancelado'}
```

---

## 3. Tipos de validação

A integridade de domínio pode ser garantida por:

- tipos nativos, como `INTEGER`, `DATE` e `DECIMAL`;
- `NOT NULL`;
- `CHECK`;
- `DEFAULT`;
- tipos enumerados ou domínios definidos pelo SGBD;
- validações complementares na aplicação.

---

## 4. Exemplo

```sql
CREATE TABLE pagamento (
  id_pagamento INTEGER PRIMARY KEY,
  valor DECIMAL(10, 2) CHECK (valor > 0),
  status VARCHAR(20) CHECK (status IN ('pendente', 'aprovado', 'recusado')),
  criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

Nesse exemplo, cada coluna possui regras que limitam valores inadequados.

---

## 5. Banco e aplicação

A aplicação pode validar dados para fornecer mensagens amigáveis, mas o banco também deve proteger suas próprias regras. Isso é especialmente importante quando diferentes aplicações ou integrações acessam a mesma base.

---

## 6. Benefícios

A integridade de domínio ajuda a:

- reduzir dados inválidos;
- evitar estados desconhecidos;
- simplificar consultas;
- melhorar a confiabilidade dos relatórios;
- preservar o significado dos atributos.

---

## 7. Boas práticas

- Definir domínios a partir das regras do negócio;
- Preferir restrições explícitas;
- Evitar armazenar códigos sem documentação;
- Padronizar formatos e unidades;
- Testar limites e valores inválidos.

---

## 8. Resumo

A integridade de domínio garante que cada atributo receba valores compatíveis com seu significado. Ela combina tipos, restrições e regras claras para manter a qualidade dos dados.

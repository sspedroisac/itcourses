# Documentação de APIs

## 1. Introdução

A **documentação de APIs** descreve como sistemas ou componentes podem se comunicar.

Ela deve permitir que uma pessoa consumidora compreenda os recursos disponíveis, envie requisições válidas, interprete respostas e trate erros.

---

## 2. O que documentar

Uma API deve documentar:

- Objetivo de cada recurso;
- Endpoints e métodos;
- Parâmetros e cabeçalhos;
- Formatos de requisição;
- Respostas de sucesso;
- Códigos e mensagens de erro;
- Autenticação e autorização;
- Paginação, filtros e limites;
- Versionamento e compatibilidade.

---

## 3. Exemplo de contrato

Um contrato simples pode ser representado assim:

```text
POST /pedidos

Entrada:
  clienteId: identificador do cliente
  itens: produtos e quantidades

Sucesso: 201 Created
Erro: 400 entrada inválida
Erro: 401 não autenticado
Erro: 409 estoque insuficiente
```

O contrato deve ser preciso sobre campos obrigatórios, tipos e regras de validação.

---

## 4. Exemplos de requisição e resposta

Exemplos ajudam a transformar a documentação em uma referência prática:

```json
{
  "clienteId": "123",
  "itens": [
    {
      "produtoId": "456",
      "quantidade": 2
    }
  ]
}
```

Exemplos devem representar dados válidos e evitar informações sensíveis reais.

---

## 5. Códigos de status e erros

Erros devem indicar o que aconteceu e, quando possível, como a pessoa consumidora pode tratar a situação.

| Situação            | Exemplo de resposta         |
| ------------------- | --------------------------- |
| Entrada inválida    | `400 Bad Request`           |
| Não autenticado     | `401 Unauthorized`          |
| Sem permissão       | `403 Forbidden`             |
| Recurso inexistente | `404 Not Found`             |
| Conflito de estado  | `409 Conflict`              |
| Falha inesperada    | `500 Internal Server Error` |

Mensagens não devem expor detalhes internos, segredos ou informações de outras pessoas.

---

## 6. Autenticação e autorização

A documentação deve explicar como obter e enviar credenciais sem expor valores reais.

Também deve diferenciar autenticação de autorização e indicar quais papéis ou permissões são necessários para cada operação.

---

## 7. Compatibilidade e versionamento

Alterações incompatíveis podem quebrar consumidores existentes.

Uma API deve definir como versões são identificadas, quais mudanças são compatíveis e como consumidores serão avisados sobre descontinuações.

```text
Versão atual → Aviso de mudança → Período de migração → Remoção planejada
```

---

## 8. Especificações e ferramentas

Formatos como OpenAPI podem descrever endpoints, parâmetros, schemas e respostas de maneira estruturada.

A especificação pode apoiar geração de referências, clientes, mocks e testes de contrato. Ela precisa ser revisada junto com a implementação para não se tornar obsoleta.

---

## 9. Resumo

| Elemento      | Função                                  |
| ------------- | --------------------------------------- |
| Endpoint      | Recurso ou endereço acessível           |
| Método HTTP   | Operação realizada sobre o recurso      |
| Schema        | Estrutura e tipos dos dados             |
| Status        | Resultado da requisição                 |
| Autenticação  | Verificação da identidade do consumidor |
| Versionamento | Controle de mudanças e compatibilidade  |

---

## 10. Boas práticas

- Documentar contratos antes ou junto da implementação;
- Incluir exemplos válidos e erros comuns;
- Explicar autenticação, autorização e limites;
- Não usar dados sensíveis nos exemplos;
- Validar a documentação automaticamente quando possível;
- Comunicar mudanças incompatíveis;
- Manter a especificação sincronizada com a API.

---

## 11. Conclusão

Uma boa documentação de API reduz dúvidas e facilita a integração entre sistemas e equipes.

Contratos claros, exemplos realistas, erros bem descritos e versionamento previsível tornam a comunicação mais confiável.

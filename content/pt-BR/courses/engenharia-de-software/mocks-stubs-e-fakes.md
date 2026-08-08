# Mocks, Stubs e Fakes

## 1. O que são Mocks, Stubs e Fakes

**Mocks, Stubs e Fakes** são tipos de **Test Doubles**, ou substitutos utilizados durante os testes de software.

Eles permitem substituir temporariamente uma dependência real por uma implementação controlada, facilitando a execução dos testes.

São especialmente úteis quando o sistema depende de componentes externos, como:

- Bancos de dados;
- APIs;
- Serviços de terceiros;
- Sistemas de pagamento;
- Serviços de envio de e-mail;
- Filas de mensagens.

Por exemplo, durante um teste unitário não é desejável depender de um serviço externo real para verificar uma regra de negócio.

Nesse caso, uma dependência pode ser substituída por um Test Double.

---

## 2. O que são Test Doubles

**Test Double** é um termo genérico utilizado para representar objetos ou componentes que substituem uma dependência real durante um teste.

O objetivo é controlar o comportamento da dependência e tornar o teste:

- Mais previsível;
- Mais rápido;
- Mais isolado;
- Mais fácil de executar.

Um exemplo simplificado:

```text
Teste
  │
  ▼
Sistema sob teste
  │
  ├──────► Dependência real
  │
  └──────► Test Double
```

Durante o teste, a dependência real pode ser substituída pelo Test Double.

---

## 3. Stub

Um **Stub** é utilizado principalmente para fornecer respostas controladas durante a execução de um teste.

Ele permite definir previamente o que uma dependência deve retornar.

Imagine que uma aplicação consulta um serviço para obter os dados de um usuário.

Em vez de chamar a API real, podemos utilizar um Stub:

```javascript
const usuarioStub = {
  buscarUsuario: () => ({
    id: 1,
    nome: "Pedro",
  }),
};
```

Quando o código consultar o usuário, o Stub sempre fornecerá os dados definidos.

O foco está em **controlar a resposta da dependência**.

---

## 4. Quando utilizar Stubs

Stubs são úteis quando o teste precisa de uma resposta específica para verificar determinado comportamento.

Por exemplo:

```text
Teste
  │
  ▼
Sistema
  │
  ▼
Stub da API
  │
  ▼
Retorna usuário válido
  │
  ▼
Sistema continua execução
```

Também podemos configurar o Stub para simular diferentes situações:

```text
Stub
 ├── Usuário encontrado
 ├── Usuário não encontrado
 ├── Erro na API
 └── Resposta vazia
```

Isso permite testar diferentes cenários sem depender do serviço real.

---

## 5. Mock

Um **Mock** é utilizado para verificar se uma determinada interação com uma dependência aconteceu conforme o esperado.

Diferentemente do Stub, que está principalmente preocupado com **retornar dados**, o Mock está interessado em **verificar chamadas e interações**.

Por exemplo, podemos verificar se uma função foi chamada:

```javascript
expect(emailService.enviar).toHaveBeenCalled();
```

Também podemos verificar:

- Quantas vezes uma função foi chamada;
- Quais argumentos foram utilizados;
- Em qual ordem determinadas chamadas ocorreram.

---

## 6. Exemplo de Mock

Imagine um sistema responsável por enviar um e-mail após o cadastro de um usuário.

Durante o teste, podemos utilizar um Mock para verificar se o serviço de e-mail foi chamado:

```text
Cadastro de usuário
        │
        ▼
Sistema
        │
        ▼
Mock do serviço de e-mail
        │
        ▼
Verificar interação
```

O teste pode verificar:

```text
O serviço de e-mail foi chamado?
        │
        ├── Sim → Teste aprovado
        │
        └── Não → Teste falhou
```

Nesse caso, não é necessário enviar um e-mail real.

---

## 7. Fake

Um **Fake** é uma implementação simplificada e funcional de uma dependência real.

Ele possui comportamento real, mas geralmente é mais simples do que a implementação utilizada em produção.

Um exemplo comum é substituir um banco de dados real por um banco de dados em memória.

```javascript
class UsuarioRepositoryFake {
  constructor() {
    this.usuarios = [];
  }

  salvar(usuario) {
    this.usuarios.push(usuario);
  }

  buscarPorId(id) {
    return this.usuarios.find((usuario) => usuario.id === id);
  }
}
```

Esse componente realmente armazena e recupera dados, mas utiliza memória em vez de um banco de dados real.

---

## 8. Quando utilizar Fakes

Fakes são úteis quando precisamos de uma implementação funcional, mas não queremos utilizar a infraestrutura real.

Exemplos:

- Banco de dados em memória;
- Sistema de arquivos temporário;
- Repositório em memória;
- Serviço de mensagens simplificado.

O Fake permite que o teste interaja com a dependência de maneira semelhante à implementação real.

---

## 9. Diferenças entre Mock, Stub e Fake

Uma forma simples de diferenciar os três é observar seu objetivo principal.

| Test Double | Principal objetivo                                  |
| ----------- | --------------------------------------------------- |
| Stub        | Fornecer respostas controladas                      |
| Mock        | Verificar interações                                |
| Fake        | Fornecer uma implementação simplificada e funcional |

Podemos visualizar:

```text
Stub
  │
  └── "O que a dependência deve retornar?"

Mock
  │
  └── "Como a dependência foi chamada?"

Fake
  │
  └── "Como posso ter uma implementação funcional simplificada?"
```

---

## 10. Exemplo prático

Imagine uma aplicação que realiza pedidos.

Para criar um pedido, o sistema precisa:

- Consultar um cliente;
- Salvar o pedido;
- Enviar uma notificação.

Durante um teste, podemos substituir essas dependências:

```text
                 Sistema de pedidos
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
        Stub            Fake           Mock
          │              │              │
     Cliente         Repositório     Notificação
```

### Stub

O Stub pode fornecer um cliente previamente definido:

```text
buscarCliente()
      ↓
Cliente válido
```

### Fake

O Fake pode representar um repositório em memória:

```text
salvarPedido()
      ↓
Pedido armazenado em memória
```

### Mock

O Mock pode verificar se a notificação foi enviada:

```text
enviarNotificacao()
      ↓
Verificar chamada
```

---

## 11. Vantagens dos Test Doubles

Mocks, Stubs e Fakes podem ajudar a:

- Isolar o código que está sendo testado;
- Evitar dependências externas;
- Tornar os testes mais rápidos;
- Controlar diferentes cenários;
- Simular erros;
- Tornar os testes mais previsíveis.

Por exemplo, testar uma integração com uma API real pode ser lento e depender de fatores externos.

Com um Test Double, o teste pode controlar exatamente a resposta recebida.

---

## 12. Cuidados ao utilizar Test Doubles

O uso excessivo de Test Doubles pode tornar os testes excessivamente acoplados à implementação.

Por exemplo, um teste que verifica cada chamada interna de uma classe pode quebrar mesmo quando o comportamento final do sistema continua correto.

Por isso, é importante priorizar testes que validem o **comportamento esperado**.

Também é importante evitar substituir todas as dependências automaticamente.

O Test Double deve ser utilizado quando ele realmente ajuda a tornar o teste mais isolado, previsível ou controlável.

---

## 13. Relação com Testes Unitários

Mocks, Stubs e Fakes são muito utilizados em **testes unitários**, especialmente quando a unidade testada possui dependências externas.

Por exemplo:

```text
Teste unitário
      │
      ▼
Serviço de pedidos
      │
      ├── Stub → Cliente
      ├── Fake → Repositório
      └── Mock → Notificação
```

Dessa forma, o teste consegue concentrar-se na lógica do serviço sem depender diretamente de sistemas externos.

---

## 14. Resumo

| Conceito    | Função                                  |
| ----------- | --------------------------------------- |
| Test Double | Substituto utilizado durante um teste   |
| Stub        | Fornece respostas controladas           |
| Mock        | Verifica interações com uma dependência |
| Fake        | Implementação simplificada e funcional  |

---

## 15. Boas práticas

- Utilizar Test Doubles quando houver uma necessidade clara.
- Usar Stubs para controlar respostas.
- Usar Mocks para verificar interações importantes.
- Usar Fakes quando uma implementação simplificada for suficiente.
- Evitar acoplamento excessivo dos testes à implementação.
- Priorizar a verificação do comportamento esperado.
- Manter os Test Doubles simples.
- Evitar substituir dependências reais sem necessidade.

---

## 16. Conclusão

**Mocks, Stubs e Fakes** são ferramentas importantes para criar testes mais isolados, previsíveis e rápidos.

O **Stub** é utilizado principalmente para controlar respostas, o **Mock** para verificar interações e o **Fake** para fornecer uma implementação simplificada e funcional.

Com o uso adequado desses Test Doubles, é possível testar componentes individualmente sem depender diretamente de bancos de dados, APIs e outros serviços externos, tornando a execução dos testes mais confiável e eficiente.

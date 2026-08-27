# Características de Qualidade

## 1. Introdução

As **características de qualidade** descrevem diferentes aspectos que podem ser avaliados em um software.

Uma funcionalidade pode produzir o resultado correto e ainda ser difícil de usar, lenta, insegura ou impossível de manter. Por isso, a avaliação da qualidade precisa considerar mais de uma dimensão.

---

## 2. Funcionalidade

A funcionalidade indica se o sistema oferece os recursos necessários e produz resultados corretos para as situações previstas.

Perguntas úteis incluem:

- O sistema realiza as operações solicitadas?
- As regras de negócio foram implementadas corretamente?
- Os resultados são completos e consistentes?
- O sistema trata entradas inválidas?

Testes funcionais e critérios de aceitação ajudam a avaliar esse aspecto.

---

## 3. Confiabilidade

A confiabilidade representa a capacidade de o software funcionar de forma consistente durante um período e em condições definidas.

Ela envolve disponibilidade, tolerância a falhas e recuperação após problemas.

Exemplos de práticas relacionadas:

- Tratamento adequado de exceções;
- Backup e restauração;
- Reexecução segura de operações;
- Monitoramento de falhas;
- Testes de recuperação.

---

## 4. Usabilidade

A usabilidade indica o quanto os usuários conseguem compreender e utilizar o sistema para alcançar seus objetivos.

Um sistema utilizável apresenta linguagem clara, fluxos previsíveis, mensagens úteis e suporte a diferentes necessidades de acesso.

A usabilidade pode ser avaliada por observação de usuários, testes de interação, análise de tarefas e métricas de conclusão.

---

## 5. Eficiência de desempenho

A eficiência de desempenho está relacionada ao tempo de resposta, ao uso de recursos e à capacidade de atender à demanda esperada.

É importante considerar não apenas o cenário ideal, mas também aumentos de volume, concorrência e limites de infraestrutura.

Exemplos:

- Tempo médio de resposta;
- Tempo de processamento;
- Uso de memória e CPU;
- Quantidade de requisições atendidas;
- Comportamento sob carga.

---

## 6. Segurança

A segurança envolve proteger dados e operações contra acesso, alteração ou interrupção indevidos.

Alguns aspectos importantes são:

- Autenticação de usuários;
- Autorização de operações;
- Proteção de dados sensíveis;
- Registro de eventos relevantes;
- Validação de entradas;
- Atualização de dependências.

Segurança deve ser considerada desde o desenho da solução e não apenas depois de um incidente.

---

## 7. Manutenibilidade

A manutenibilidade representa a facilidade de compreender, corrigir, testar e modificar o software.

Código legível, responsabilidades bem definidas, testes confiáveis e baixo acoplamento reduzem o esforço necessário para realizar mudanças.

Uma solução que funciona hoje, mas exige alterações arriscadas para qualquer melhoria, possui baixa manutenibilidade.

---

## 8. Compatibilidade e portabilidade

A compatibilidade indica a capacidade de o software coexistir e interagir com outros sistemas.

A portabilidade está relacionada à facilidade de executar o software em diferentes ambientes, plataformas ou infraestruturas.

Interfaces bem definidas, configuração externa e uso consciente de recursos específicos da plataforma favorecem esses atributos.

---

## 9. Atributos em conflito

As características de qualidade podem entrar em conflito.

Por exemplo, uma validação adicional pode aumentar a segurança, mas adicionar tempo ao fluxo. Uma abstração pode facilitar a manutenção, mas aumentar o custo de execução em determinado cenário.

A equipe precisa entender o contexto do produto, priorizar riscos e registrar decisões técnicas.

```text
Necessidades do produto
          │
          ▼
Prioridades de qualidade
          │
          ▼
Decisões e compromissos
```

---

## 10. Como avaliar características de qualidade

Uma característica precisa ser traduzida em uma expectativa observável.

| Característica   | Exemplo de critério                                      |
| ---------------- | -------------------------------------------------------- |
| Desempenho       | Responder à consulta em até dois segundos                |
| Segurança        | Bloquear acesso sem autorização                          |
| Usabilidade      | Permitir concluir o cadastro sem ajuda externa           |
| Confiabilidade   | Recuperar a operação após uma falha de conexão           |
| Manutenibilidade | Alterar uma regra sem modificar módulos não relacionados |

Critérios objetivos facilitam testes, acompanhamento e tomada de decisão.

---

## 11. Resumo

| Característica   | Foco                                        |
| ---------------- | ------------------------------------------- |
| Funcionalidade   | Fazer o que foi especificado                |
| Confiabilidade   | Operar de maneira consistente               |
| Usabilidade      | Permitir o uso claro e eficiente            |
| Desempenho       | Responder e utilizar recursos adequadamente |
| Segurança        | Proteger dados e operações                  |
| Manutenibilidade | Facilitar mudanças e correções              |
| Compatibilidade  | Interagir com outros sistemas               |
| Portabilidade    | Executar em diferentes ambientes            |

---

## 12. Conclusão

Avaliar características de qualidade permite enxergar o software de forma mais completa do que apenas verificar suas funcionalidades.

As prioridades devem ser definidas conforme o contexto e transformadas em critérios que possam ser observados, medidos e melhorados.

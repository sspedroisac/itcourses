# Tipos de Manutenção

## 1. Introdução

As atividades de manutenção podem ser classificadas conforme o motivo da alteração e o resultado esperado.

Essa classificação ajuda a organizar o trabalho, embora uma mesma mudança possa possuir mais de uma característica.

Os tipos mais conhecidos são manutenção corretiva, adaptativa, perfectiva e preventiva.

---

## 2. Manutenção corretiva

A **manutenção corretiva** corrige defeitos encontrados no software.

Exemplos:

- Corrigir um cálculo incorreto;
- Resolver uma falha no login;
- Ajustar uma tela que não salva os dados;
- Corrigir uma integração que rejeita uma requisição válida.

Depois da correção, é importante criar ou atualizar testes para reduzir a chance de regressão.

---

## 3. Manutenção adaptativa

A **manutenção adaptativa** modifica o software para que ele continue funcionando em um ambiente alterado.

Exemplos:

- Adequar o sistema a uma nova legislação;
- Migrar para uma nova versão do banco de dados;
- Adaptar uma integração a uma API atualizada;
- Suportar um novo sistema operacional.

O comportamento desejado pode permanecer parecido, mas o ambiente exige adaptação.

---

## 4. Manutenção perfectiva

A **manutenção perfectiva** melhora funcionalidades ou atributos do sistema conforme novas necessidades são identificadas.

Exemplos:

- Adicionar um filtro solicitado pelos usuários;
- Melhorar a experiência de uma tela;
- Reduzir o tempo de resposta de uma consulta;
- Adicionar uma forma de exportação.

Essa manutenção amplia ou aperfeiçoa o valor oferecido pelo produto.

---

## 5. Manutenção preventiva

A **manutenção preventiva** reduz a probabilidade de problemas futuros.

Exemplos:

- Refatorar um módulo difícil de alterar;
- Atualizar uma dependência antes que ela deixe de receber suporte;
- Melhorar testes de uma área crítica;
- Remover código duplicado.

Ela protege a evolução do sistema mesmo sem alterar diretamente uma funcionalidade percebida pelo usuário.

---

## 6. Comparando os tipos

| Tipo       | Motivação principal           | Exemplo                    |
| ---------- | ----------------------------- | -------------------------- |
| Corretiva  | Remover um defeito            | Corrigir cálculo incorreto |
| Adaptativa | Responder a mudanças externas | Atualizar integração       |
| Perfectiva | Melhorar ou ampliar o produto | Adicionar filtro           |
| Preventiva | Reduzir problemas futuros     | Refatorar módulo frágil    |

---

## 7. Uma solicitação pode ter mais de um tipo

Uma mudança pode começar como corretiva e também exigir uma ação preventiva.

Depois de corrigir uma falha em um cálculo, por exemplo, a equipe pode criar testes adicionais e reorganizar o código para evitar que a mesma classe de erro volte a acontecer.

```text
Falha encontrada
       │
       ├──► Correção do comportamento
       │
       └──► Melhoria para evitar recorrência
```

---

## 8. Prioridade e urgência

O tipo de manutenção não define sozinho sua prioridade.

Uma melhoria perfectiva pode ser essencial para um lançamento, enquanto uma manutenção corretiva pode ter baixo impacto. Segurança, indisponibilidade, usuários afetados e obrigações legais também devem ser considerados.

---

## 9. Resumo

| Conceito   | Descrição                                  |
| ---------- | ------------------------------------------ |
| Corretiva  | Corrige defeitos existentes                |
| Adaptativa | Adapta o sistema a mudanças no ambiente    |
| Perfectiva | Melhora ou amplia funcionalidades          |
| Preventiva | Reduz a probabilidade de problemas futuros |

---

## 10. Boas práticas

- Classificar a motivação da manutenção;
- Avaliar impacto e urgência separadamente;
- Criar testes para correções;
- Considerar melhorias preventivas em áreas frágeis;
- Registrar o motivo e o resultado da mudança;
- Usar a classificação como apoio, não como substituto da análise de risco.

---

## 11. Conclusão

Conhecer os tipos de manutenção ajuda a compreender por que uma mudança está sendo realizada e a escolher uma resposta adequada.

Manutenção corretiva, adaptativa, perfectiva e preventiva se complementam na preservação e na evolução do software.

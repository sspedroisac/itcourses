# Entrega Contínua

## 1. Introdução

A **entrega contínua** é a prática de manter o software em um estado que permita sua liberação para produção a qualquer momento.

Cada alteração passa por um processo automatizado de build, testes e preparação. A decisão de publicar pode continuar sendo humana e orientada pelo negócio.

---

## 2. Integração e entrega

Integração contínua verifica se as alterações podem ser combinadas. Entrega contínua leva esse código validado até um artefato pronto para publicação.

```text
Código → Build → Testes → Artefato pronto → Decisão de liberar
```

Uma prática apoia a outra, mas são objetivos diferentes.

---

## 3. Pipeline de entrega

Um pipeline pode conter:

- Compilação e empacotamento;
- Testes automatizados;
- Análise de segurança;
- Publicação do artefato;
- Testes em ambiente semelhante à produção;
- Aprovação ou decisão de release.

Cada etapa deve produzir evidências que permitam confiar na próxima.

---

## 4. Artefatos imutáveis

O artefato validado deve ser identificado e armazenado para que o mesmo resultado possa ser promovido entre ambientes.

Recompilar o código de maneiras diferentes para cada ambiente pode introduzir diferenças difíceis de investigar.

```text
Build único → Teste → Homologação → Produção
```

Configurações específicas devem ser fornecidas pelo ambiente, sem alterar o artefato.

---

## 5. Ambientes e aprovação

Ambientes de teste e homologação permitem validar o comportamento antes da publicação.

Uma aprovação manual pode ser necessária por razões de negócio, segurança ou conformidade. Ela não deve substituir as verificações automáticas e precisa ter critérios claros.

---

## 6. Feature flags

Feature flags permitem publicar código sem disponibilizar imediatamente uma funcionalidade para todos os usuários.

Elas podem apoiar testes com grupos menores e facilitar uma desativação rápida. Flags antigas devem ser removidas para não aumentar a complexidade permanente do sistema.

---

## 7. Reversão e recuperação

Uma entrega deve ter uma estratégia para lidar com problemas.

Dependendo do caso, a resposta pode ser reverter para uma versão anterior, desativar uma flag, corrigir os dados ou aplicar uma nova alteração.

A estratégia deve ser testada e considerar migrações que não podem ser simplesmente desfeitas.

---

## 8. Benefícios

A entrega contínua ajuda a:

- Reduzir o tamanho das releases;
- Diminuir o risco de cada publicação;
- Obter feedback mais cedo;
- Evitar acúmulo de alterações não entregues;
- Separar decisão de liberar da capacidade técnica de liberar.

---

## 9. Resumo

| Conceito         | Descrição                                    |
| ---------------- | -------------------------------------------- |
| Entrega contínua | Manter o software pronto para ser liberado   |
| Artefato         | Resultado identificado e armazenado do build |
| Promoção         | Levar o mesmo artefato entre ambientes       |
| Aprovação        | Decisão explícita para liberar uma versão    |
| Reversão         | Retorno a uma versão ou estado anterior      |

---

## 10. Boas práticas

- Automatizar o caminho até um artefato pronto;
- Promover o mesmo artefato entre ambientes;
- Manter configurações fora do artefato;
- Definir critérios de aprovação;
- Preparar reversão e recuperação;
- Usar feature flags com prazo de remoção;
- Monitorar a entrega depois da publicação.

---

## 11. Conclusão

A entrega contínua cria uma capacidade confiável de disponibilizar software sem exigir uma grande preparação no fim do projeto.

Com automação, artefatos rastreáveis e estratégias de recuperação, as releases podem ser menores, mais frequentes e menos arriscadas.

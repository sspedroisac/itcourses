# Desenvolvimento Seguro

## 1. Segurança no ciclo de vida

Desenvolvimento seguro integra requisitos e controles ao planejamento, arquitetura, implementação, testes, publicação e manutenção. Não é uma etapa final nem responsabilidade exclusiva de uma equipe de segurança. Pessoas que definem, constroem, implantam e operam o sistema têm papéis complementares.

Resolver falhas cedo tende a reduzir custo e impacto, mas não existe uma ferramenta única que garanta segurança. O processo deve combinar decisões de projeto, práticas de código, automação, revisão e resposta a problemas identificados em produção.

## 2. Requisitos e modelagem de ameaças

Antes de implementar uma funcionalidade, identifique dados tratados, perfis de usuário, integrações, operações sensíveis e requisitos de disponibilidade. Transforme esses aspectos em requisitos verificáveis, como “somente o proprietário autorizado pode alterar o endereço de entrega”.

Modelagem de ameaças ajuda a explorar como um recurso pode ser usado de forma indevida. Desenhe os limites de confiança, entradas, componentes e fluxos de dados; identifique ativos e consequências; priorize cenários; e escolha mitigadores. O objetivo é melhorar decisões, não prever todos os ataques possíveis.

## 3. Práticas de implementação

Use bibliotecas consolidadas, consultas parametrizadas e mecanismos de autorização do lado servidor. Valide entradas conforme formato e regras de negócio, codifique saída de acordo com o contexto, trate erros sem expor dados internos e evite segredos em código, imagens ou logs.

Revisões de código devem considerar autorização, manipulação de dados sensíveis, tratamento de falhas, dependências e configurações. Uma revisão eficaz é colaborativa e tem critérios claros; a aprovação não substitui testes automatizados ou análise arquitetural quando necessários.

## 4. Testes e pipeline

Testes unitários e de integração verificam comportamentos; testes de segurança direcionados podem cobrir autorização, validação, configuração e tratamento de erros. Inclua casos negativos: operações que devem ser recusadas, dados fora das regras e falhas de dependência.

Pipelines podem executar testes, análise de dependências, detecção de segredos e verificações de configuração. Resultados precisam de triagem, responsável e política para bloqueios ou exceções. Automatizar um scanner sem tratar alertas cria ruído em vez de proteção.

## 5. Publicação e manutenção

Use configurações seguras por padrão, minimize permissões de execução e registre mudanças. Separar ambientes reduz exposição acidental de dados de produção. O processo de lançamento deve incluir aprovação proporcional ao risco, monitoramento posterior e capacidade de reversão.

Após publicação, acompanhe vulnerabilidades de dependências, mudanças de uso, falhas e incidentes. Quando um problema ocorre, corrija a causa e avalie como evitar recorrência — por exemplo, atualizar um padrão, teste ou processo de revisão.

## 6. Síntese e aplicação

Para uma funcionalidade fictícia de alteração de pedidos, liste dados, perfis, ações, requisitos de autorização e eventos que devem ser registrados. Proponha testes para caminhos permitidos e negados e descreva quem valida a mudança. Segurança eficaz acompanha a funcionalidade por todo o ciclo de vida.

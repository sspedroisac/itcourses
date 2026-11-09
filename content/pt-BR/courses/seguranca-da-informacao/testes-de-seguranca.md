# Testes de Segurança

## 1. Propósito e tipos de teste

Testes de segurança verificam se requisitos e controles funcionam e procuram falhas antes que causem impacto. Incluem revisão de código, análise de configuração, testes automatizados, revisão de arquitetura, exercícios de resposta e avaliações técnicas autorizadas. Cada método observa aspectos diferentes e não oferece garantia absoluta.

O teste deve responder a uma pergunta: uma regra de autorização é aplicada? Uma restauração atende ao objetivo? Uma configuração está restrita? Definir propósito ajuda a selecionar método, ambiente, evidência e critério de sucesso.

## 2. Planejamento e autorização

Documente objetivo, escopo, sistemas, dados permitidos, janela, limites, participantes, contatos e critérios para interromper a atividade. Confirme dependências e autorização de terceiros. Sistemas de produção podem exigir monitoramento conjunto e plano de reversão.

Use dados fictícios ou especialmente preparados sempre que possível. Não colete ou exponha dados reais além do necessário. Atividades técnicas fora do escopo ou sem autorização podem causar indisponibilidade, violar contratos ou comprometer privacidade.

## 3. Execução responsável

Siga o plano e registre alterações, resultados e limitações. Se surgir impacto inesperado, pare conforme o procedimento e avise os responsáveis. Evite ações destrutivas ou mudanças não previstas. Ferramentas de teste precisam ser configuradas e operadas por pessoas competentes; automatizar uma atividade não a torna segura por si só.

Coordene com operações para diferenciar efeitos de teste de alertas reais, sem desabilitar monitoramento. Preserve evidências de forma restrita e segura, pois relatórios podem revelar falhas e detalhes internos.

## 4. Achados e validação

Um achado útil identifica ativo, condição observada, evidência, impacto plausível, prioridade, limitações e recomendação verificável. Diferencie observação de hipótese; evite afirmações de certeza quando o escopo não permite concluir.

Cada achado deve gerar correção, mitigação ou aceitação formal do risco. Defina responsável e prazo. Após a mudança, reteste dentro do escopo autorizado para confirmar que a causa foi tratada e que o controle não quebrou outras funções.

## 5. Frequência e melhoria

Teste após mudanças importantes e em ciclos adequados à criticidade, exposição e capacidade de resposta. Um teste anual não cobre automaticamente alterações feitas depois dele. Combine métodos: revisão automatizada frequente e avaliação humana em decisões de alto impacto, por exemplo.

Revise o processo com base em resultados, incidentes e falsos positivos. A meta é melhorar confiança e reduzir risco continuamente, não cumprir calendário ou produzir relatórios sem acompanhamento.

## 6. Síntese e aplicação

Para verificar uma mudança fictícia de permissões, defina objetivo, autorização, ambiente, contas de teste, casos permitidos e negados, critérios de sucesso e plano de interrupção. Descreva como registrar achados e validar a correção sem acessar dados reais.

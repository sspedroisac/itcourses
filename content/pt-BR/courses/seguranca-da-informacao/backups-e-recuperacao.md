# Backups e Recuperação

## 1. Finalidade das cópias de segurança

Backups são cópias destinadas a recuperar dados ou configurações após exclusão acidental, corrupção, falha técnica, erro de mudança ou incidente. Eles reduzem consequências, mas não impedem que o evento original aconteça. Uma cópia acessível às mesmas contas e sistemas do ambiente principal pode ser apagada junto com os dados de produção.

Comece identificando o que precisa ser recuperado: dados, configurações, aplicações, documentação, certificados, chaves e dependências. Sem esses elementos, uma cópia isolada pode não ser suficiente para restaurar o serviço.

## 2. RPO e RTO

O **Recovery Point Objective (RPO)** define a perda máxima de dados aceitável, medida em tempo. Um RPO de quatro horas indica que a recuperação pode voltar a um ponto de até quatro horas antes do incidente.

O **Recovery Time Objective (RTO)** define o tempo máximo para restabelecer o serviço ou processo. RPO e RTO devem ser definidos conforme impacto de interrupção, dependências e necessidades do negócio; não são apenas metas técnicas. Objetivos menores normalmente exigem maior investimento e complexidade.

## 3. Estratégia de backup

Backups completos copiam o conjunto selecionado; incrementais copiam mudanças desde a última cópia; diferenciais copiam mudanças desde a última completa. Cada abordagem envolve compromissos entre armazenamento, duração e complexidade de restauração.

Mantenha cópias separadas do ambiente principal, controle quem pode ler, alterar ou excluir, e aplique retenção definida. Para reduzir risco de comprometimento conjunto, considere cópias isoladas ou imutáveis quando apropriado. Proteja dados de backup de forma coerente com sua classificação e planeje gestão de chaves.

## 4. Monitoramento e restauração

Monitore sucesso, falhas, duração e cobertura das rotinas. Alertas devem indicar responsável e procedimento. Verifique que a cópia contém os dados esperados e que não está corrompida, mas lembre que integridade técnica não substitui teste de recuperação.

Exercícios de restauração devem ocorrer em ambiente controlado, com autorização e critérios claros. Verifique consistência dos dados, funcionamento da aplicação, permissões, dependências e tempo total. Registre resultados e corrija falhas descobertas; teste também se os responsáveis conseguem executar o procedimento sem depender de conhecimento informal.

## 5. Recuperação após incidente

Antes de restaurar, entenda a causa e confirme que o ambiente de destino está seguro. Caso contrário, dados recuperados podem ser comprometidos novamente. Determine o ponto de recuperação, valide dados, priorize serviços e comunique status às áreas afetadas.

Backups não substituem continuidade de negócios: podem restaurar tecnologia, mas não necessariamente pessoas, fornecedor, comunicação ou processo manual. O plano deve se alinhar aos objetivos de recuperação e ser revisto quando sistemas mudarem.

## 6. Síntese e aplicação

Defina RPO e RTO para um serviço fictício e desenhe um teste que os meça. Inclua dados, configurações, permissões, dependências, responsáveis e critérios de sucesso. Uma rotina de cópia só é confiável depois que a restauração foi demonstrada.

# Confidencialidade, Integridade e Disponibilidade

## 1. A tríade CIA

Confidencialidade, integridade e disponibilidade — frequentemente abreviadas como CIA, pelas palavras inglesas *Confidentiality, Integrity, Availability* — são objetivos usados para analisar a proteção de informações e serviços. A tríade não é uma lista completa de requisitos, mas oferece um modelo útil para identificar o que pode falhar e quais controles são relevantes.

## 2. Confidencialidade

Confidencialidade significa que a informação só é conhecida ou acessada por entidades autorizadas, para finalidades permitidas. Uma exposição pode ocorrer por permissões excessivas, envio ao destinatário errado, perda de um dispositivo ou credenciais comprometidas.

Classificação de dados, autorização por função, autenticação forte, criptografia e compartilhamento controlado ajudam a proteger esse objetivo. Criptografia reduz exposição em determinados cenários, mas não impede que um usuário com acesso legítimo copie ou divulgue o conteúdo. É necessário limitar também quem pode abrir os dados e o que pode fazer com eles.

## 3. Integridade

Integridade é a confiança de que dados e configurações permanecem corretos, completos e alterados somente por processos autorizados. Um valor financeiro modificado sem aprovação, um registro apagado ou uma atualização acidental de cadastro afetam a integridade.

Controles incluem validação de regras de negócio, permissões de escrita, revisão e aprovação de mudanças, versionamento, trilhas de auditoria e mecanismos criptográficos de verificação. Um hash pode ajudar a identificar alterações em um arquivo, mas não prova sozinho quem o criou ou se o conteúdo original era correto.

## 4. Disponibilidade

Disponibilidade é a possibilidade de usar dados e serviços quando necessário. Falhas de equipamento, erros de implantação, interrupções de rede, dependência de fornecedor, falta de capacidade ou incidentes de segurança podem interromper um serviço.

Redundância, planejamento de capacidade, manutenção, monitoramento, cópias recuperáveis e procedimentos de continuidade contribuem para a disponibilidade. O objetivo adequado depende do processo: nem todo sistema precisa funcionar sem interrupção, mas níveis e tempos de recuperação devem ser conhecidos e acordados.

## 5. Equilíbrio entre objetivos

Os objetivos podem entrar em tensão. Bloquear qualquer acesso protege contra divulgação, mas impede o trabalho. Permitir que todos alterem registros facilita a operação, mas ameaça a integridade. Replicar dados para muitas regiões pode melhorar disponibilidade, mas amplia as responsabilidades de proteção e gestão.

Uma decisão de segurança deve explicitar o objetivo do controle, os custos e o risco residual. Para um relatório financeiro, por exemplo, acesso baseado em função protege confidencialidade; aprovação e histórico de mudanças apoiam integridade; cópias testadas ajudam na disponibilidade.

## 6. Usando a tríade na análise

Para cada ativo, pergunte:

1. Quem pode consultar a informação e em quais circunstâncias?
2. Quem pode criar, alterar ou excluir dados e como essas ações são verificadas?
3. Qual interrupção é aceitável e como o serviço será restaurado?

Uma única ocorrência pode afetar mais de um objetivo. Um ransomware pode impedir o acesso a arquivos e também alterar ou destruir informações. Uma exportação indevida afeta confidencialidade e pode ainda comprometer integridade se os dados forem modificados no processo.

## 7. Síntese e aplicação

A tríade ajuda a tornar requisitos abstratos verificáveis. Escolha um sistema fictício, descreva um cenário que ameace cada objetivo e associe um controle preventivo e um de detecção ou recuperação. Explique como verificar os controles sem utilizar dados reais. Uma resposta completa considera o equilíbrio operacional, em vez de maximizar um único objetivo.

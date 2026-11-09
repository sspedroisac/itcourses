# Avaliação de Vulnerabilidades

## 1. Objetivo da avaliação

Avaliação de vulnerabilidades identifica condições conhecidas que podem expor sistemas: versões vulneráveis, configurações inseguras, componentes sem suporte ou controles ausentes. O resultado deve apoiar decisões e correções, não apenas gerar uma lista crescente de achados.

Ferramentas automatizadas observam aspectos diferentes e podem produzir falsos positivos, dados incompletos ou alertas sem contexto. Combine resultados com inventário, arquitetura e validação apropriada. A ausência de achado não prova que o sistema está seguro.

## 2. Escopo e autorização

Antes de avaliar, documente autorização, ativos incluídos, limites, janela, contatos, regras de tratamento de dados e procedimento de interrupção. Confirme se fornecedores e ambientes envolvidos estão cobertos. Avaliar sistemas fora do escopo pode causar interrupção, exposição ou conflito contratual.

Escolha métodos adequados ao ambiente e à finalidade. Sistemas críticos podem exigir abordagens menos intrusivas, coordenação com operações e execução em ambiente de teste. A autorização deve ser explícita e vigente; não presuma que possuir acesso técnico concede permissão para qualquer avaliação.

## 3. Triagem e priorização

Valide se o achado se aplica ao ativo e versão observados. Registre evidência suficiente para permitir reprodução autorizada, sem armazenar dados sensíveis desnecessários. Priorize considerando exposição, criticidade, impacto, disponibilidade de correção, sinais de exploração e controles compensatórios.

Uma pontuação técnica pode ser um insumo, mas precisa de contexto. Uma falha em serviço exposto que processa dados importantes pode exigir atenção distinta da mesma falha em sistema isolado. Explique incertezas e critérios usados.

## 4. Gestão da correção

Cada achado deve ter ativo, descrição, evidência, impacto, prioridade, responsável, prazo e decisão. A correção pode envolver atualização, mudança de configuração, remoção de componente ou mitigação temporária. Se a ação for adiada, documente aprovação, risco residual, controles compensatórios e data de reavaliação.

Evite duplicar tarefas ou fechar achados apenas porque um pacote foi atualizado. Confirme a versão, configuração ou condição no ativo certo e verifique se sistemas relacionados também foram tratados. Retestes devem respeitar autorização e escopo.

## 5. Programa contínuo

Integre avaliações a inventário, gestão de mudanças e resposta a vulnerabilidades. Defina periodicidade proporcional ao risco e reavalie após exposição de um novo serviço, mudança arquitetural ou alerta relevante. Acompanhe prazos e causas de atrasos para melhorar capacidade de correção.

Relatórios devem separar fatos, impacto estimado e recomendações. Use linguagem acessível a quem aprova recursos e prioriza trabalho; anexe detalhes técnicos conforme necessidade e proteja os resultados.

## 6. Síntese e aplicação

Prepare um plano para ambiente fictício de teste com autorização, escopo, janela, contatos, limites e procedimento de interrupção. Explique como triar uma descoberta e qual evidência confirmará seu fechamento. A qualidade da avaliação depende tanto da segurança da atividade quanto da utilidade das decisões posteriores.

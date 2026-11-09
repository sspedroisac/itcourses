# Validação de Entradas

## 1. Entradas e limites de confiança

Formulários, URLs, cabeçalhos, cookies, arquivos, integrações e mensagens entre serviços podem conter dados malformados ou manipulados. Trate dados recebidos como não confiáveis até que sejam verificados para o uso pretendido. Uma entrada produzida por outro componente da mesma organização também pode estar incorreta ou comprometida.

Validação deve refletir regras do domínio, não apenas uma lista de caracteres considerados suspeitos. Um campo quantidade pode exigir inteiro positivo dentro de uma faixa; um identificador pode exigir formato e existência válidos; um arquivo precisa de limites e tratamento específico.

## 2. Validação no servidor

Validação no navegador melhora a experiência, mas pode ser alterada ou ignorada. O servidor deve repetir as verificações antes de tomar decisões. Não confie em campos ocultos, preços enviados pelo cliente ou controles visuais para garantir autorização.

Defina comportamento para entradas inválidas: rejeite com mensagem segura, registre apenas o necessário e não execute parcialmente uma operação sensível. Erros devem ser úteis ao usuário legítimo sem revelar detalhes internos ou dados de outras pessoas.

## 3. Validação e codificação são controles diferentes

Um valor aceito para um campo não é automaticamente seguro para todos os destinos. Texto destinado a uma página deve ser codificado para o contexto de saída. Dados usados em consultas devem ser enviados por parâmetros, separando dados de instruções. Comandos do sistema e caminhos de arquivos exigem APIs e controles próprios.

Listas de formatos permitidos geralmente são mais confiáveis do que tentar remover sequências perigosas. Nenhuma lista genérica cobre todos os contextos; use bibliotecas e APIs que tratem corretamente o destino dos dados.

## 4. Arquivos e uploads

Para upload, limite tamanho e quantidade, valide o tipo esperado além da extensão declarada, armazene com nome interno e mantenha o arquivo fora de áreas executáveis ou diretamente públicas. Se houver necessidade de processamento, use ambiente e permissões apropriados.

Considere também retenção e privacidade: arquivos podem conter dados pessoais ou metadados. Defina quem pode baixá-los, quanto tempo serão mantidos e como serão removidos.

## 5. Validação de negócio

Validade sintática não garante que uma operação faz sentido. Uma data pode estar no formato correto e ainda ser inválida para o processo; um usuário pode fornecer identificador bem formado para um recurso que não lhe pertence. Combine validação de dados com autorização e regras de negócio no servidor.

## 6. Síntese e aplicação

Para um formulário fictício com nome, quantidade e anexo, defina tipo, faixa, tamanho, regra de negócio, camada de validação e tratamento de saída. Indique o comportamento esperado para valores inválidos. Rejeitar dados de forma consistente deve preservar integridade sem expor detalhes sensíveis.

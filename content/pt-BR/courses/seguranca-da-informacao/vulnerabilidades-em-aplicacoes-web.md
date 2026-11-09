# Principais Vulnerabilidades em Aplicações Web

## 1. Como surgem falhas web

Aplicações web conectam usuários a dados e operações por meio de navegadores, APIs, serviços e componentes de terceiros. Vulnerabilidades surgem quando a aplicação confia excessivamente em entradas, identidades, permissões, configurações ou dependências.

Categorias recorrentes incluem controle de acesso inadequado, injeção, falhas de autenticação e sessão, exposição de dados, configuração insegura e componentes vulneráveis. Uma categoria ajuda a orientar análise, mas a correção depende de entender a causa no sistema concreto.

## 2. Controle de acesso

Autenticação confirma a identidade; autorização verifica se aquela identidade pode realizar a operação sobre aquele recurso. A aplicação deve verificar a autorização no servidor em cada solicitação sensível. Ocultar botões ou alterar IDs difíceis de adivinhar não protege objetos.

Use testes com contas e dados fictícios para confirmar que uma pessoa pode acessar apenas os recursos permitidos. Limite os dados retornados e revise regras em operações de leitura, alteração, exclusão e exportação.

## 3. Injeção e interpretação de conteúdo

Injeção ocorre quando dados são interpretados como parte de uma instrução. Consultas parametrizadas e APIs que separam instruções de valores reduzem esse risco em bancos. A saída exibida em páginas precisa de codificação contextual ou componentes seguros para evitar que conteúdo seja interpretado como código ativo.

Filtros que removem caracteres isolados são frágeis: podem deixar passar formatos não previstos e prejudicar entradas legítimas. Use defesas adequadas ao destino e teste casos válidos e inválidos.

## 4. Autenticação, sessão e configuração

Proteja processos de login, recuperação e mudança de fatores, não apenas a senha. Sessões precisam de escopo, expiração e revogação coerentes com o risco. Erros não devem revelar credenciais, tokens, detalhes de infraestrutura ou informações de outros usuários.

Configurações padrão, permissões amplas, interfaces de depuração expostas e logs com segredos podem transformar uma falha pequena em exposição maior. Revisões e automação devem verificar o estado efetivo do ambiente, não somente o código-fonte.

## 5. Dependências e defesa sistêmica

Bibliotecas e serviços de terceiros ampliam a cadeia de dependências. Mantenha inventário, acompanhe atualizações, avalie exposição e remova componentes sem uso. Testes automatizados, revisão de código, monitoramento e processo de correção devem atuar em conjunto.

Corrija a causa e verifique a mudança no ambiente afetado. Um teste que reproduz um único exemplo não basta se outras rotas ou recursos continuam vulneráveis.

## 6. Síntese e aplicação

No cenário fictício em que uma pessoa altera um identificador e acessa o pedido de outra, identifique a falha de autorização, o ponto de validação no servidor e os testes necessários. Use contas e dados de teste autorizados; cubra leitura e alteração sem acessar informações reais.

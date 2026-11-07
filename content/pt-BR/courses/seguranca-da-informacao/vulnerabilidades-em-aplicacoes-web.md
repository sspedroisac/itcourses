# Principais Vulnerabilidades em Aplicações Web

## 1. Falhas frequentes

Aplicações web enfrentam falhas de controle de acesso, injeção, exposição de dados, autenticação inadequada, configuração insegura e dependências vulneráveis. O padrão comum é confiar em uma entrada, identidade ou configuração sem validação suficiente.

## 2. Controle de acesso no servidor

Toda ação e todo recurso sensível precisam verificar autorização no servidor. Ocultar um botão não impede uma requisição direta. Se um usuário altera um identificador na URL e consegue ver outro registro, há uma falha de autorização por objeto.

## 3. Injeção e conteúdo no navegador

Consultas e comandos devem separar instruções de dados por meio de parâmetros e APIs adequadas. Ao mostrar conteúdo não confiável em uma página, use codificação ou componentes seguros para o contexto. Nunca tente resolver esses problemas apenas removendo caracteres específicos.

## 4. Proteção sistêmica

Use configurações seguras por padrão, trate erros sem expor detalhes internos, atualize componentes e limite dados retornados. Revisão de código e testes devem cobrir tanto os caminhos permitidos quanto tentativas de acesso indevido.

## 5. Regra prática

Corrija a causa, não apenas o exemplo usado no teste. Se uma entrada contorna uma validação, reveja o modelo de autorização ou a forma como dados e instruções são separados.

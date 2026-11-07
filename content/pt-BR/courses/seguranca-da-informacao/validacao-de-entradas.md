# Validação de Entradas

## 1. Dados externos não são confiáveis

Formulários, URLs, cookies, arquivos, cabeçalhos e integrações são entradas externas. Mesmo dados originados pela própria aplicação podem ter sido alterados no caminho. Portanto, valide antes de usá-los em uma operação sensível.

## 2. Validação depende do contexto

Um identificador numérico, um e-mail e um anexo possuem regras diferentes. Além disso, um valor seguro para exibir em uma página não é automaticamente seguro para uma consulta ao banco, um comando ou um caminho de arquivo. Cada destino exige uma defesa apropriada.

## 3. Permitir formatos conhecidos

Sempre que possível, defina tipo, tamanho, faixa e formato permitidos. Uma lista de valores aceitos é mais robusta que tentar bloquear palavras ou caracteres perigosos, pois novos caminhos de abuso surgem continuamente.

## 4. Controles complementares

Use consultas parametrizadas, APIs que separem dados de comandos, codificação de saída, limites de tamanho, tratamento seguro de erros e permissões mínimas. Validação no navegador melhora a experiência, mas o servidor deve validar novamente porque o cliente pode ser manipulado.

## 5. Exemplo

Para upload de arquivos, valide tamanho, tipo esperado e conteúdo quando aplicável; armazene fora da área pública e gere nomes internos. Confiar somente na extensão enviada pelo navegador é insuficiente.

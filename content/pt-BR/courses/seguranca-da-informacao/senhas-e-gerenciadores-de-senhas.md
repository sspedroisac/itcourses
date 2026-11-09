# Senhas e Gerenciadores de Senhas

## 1. Limites das senhas

Senhas podem ser adivinhadas, reutilizadas, expostas em vazamentos, capturadas em páginas falsas ou compartilhadas por engano. A reutilização é especialmente arriscada: uma senha obtida em um serviço pode ser tentada em outros. Por isso, credenciais devem ser únicas e combinadas com autenticação multifator nos acessos relevantes.

Uma senha longa e exclusiva é mais difícil de adivinhar do que padrões curtos e previsíveis, como substituições comuns de letras, nomes ou datas. Regras que forçam mudanças frequentes sem motivo podem levar a pequenas variações reutilizadas; siga os requisitos atuais da organização e troque a senha quando houver suspeita ou evidência de comprometimento.

## 2. Gerenciadores de senhas

Um gerenciador cria e guarda credenciais diferentes para cada serviço, evitando que a memória leve à reutilização. Muitos verificam o domínio antes de preencher a senha, o que também pode ajudar a perceber uma página falsa. Escolha somente uma solução aprovada, configure uma senha mestra forte e ative MFA quando disponível.

A senha mestra protege um conjunto concentrado de credenciais e deve ser tratada com cuidado. Entenda como funciona recuperação, sincronização entre dispositivos e acesso de emergência. Guarde códigos de recuperação conforme as orientações aprovadas e não armazene a senha mestra no mesmo local que o cofre desbloqueado.

## 3. Armazenamento de senhas em sistemas

Aplicações não devem armazenar senhas em texto legível nem usar criptografia reversível para substituí-lo. O sistema deve armazenar verificadores derivados por algoritmo apropriado para senhas, com salt único e parâmetros de custo atualizados. Isso reduz o impacto de uma cópia da base, mas não dispensa controle de acesso e proteção do banco.

O desenho de redefinição também importa. Links ou códigos devem expirar, ser de uso limitado e não revelar se uma conta existe além do necessário. A equipe deve revisar notificações e sessões após alterações de credenciais.

## 4. Hábitos e recuperação

- Não compartilhe senhas por e-mail, chat ou planilhas;
- Não informe códigos de autenticação a outra pessoa;
- Use o fluxo oficial de redefinição e ignore pedidos inesperados;
- Revogue sessões e tokens quando houver suspeita de exposição;
- Informe rapidamente a equipe responsável se uma credencial corporativa puder ter sido comprometida.

Se uma senha foi reutilizada em um serviço afetado por vazamento, troque a credencial corporativa por um canal confiável e examine outras contas onde ela foi usada. Não espere comprovar uso indevido para reportar uma suspeita.

## 5. Síntese e aplicação

Descreva como um gerenciador e MFA complementam uma senha única. Para o cenário fictício de vazamento em um serviço pessoal, liste ações de contenção e recuperação sem escrever senhas reais. A meta é reduzir reutilização e tornar a resposta simples e rápida.

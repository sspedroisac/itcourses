# Fundamentos de Segurança de Redes

## 1. Rede como superfície de ataque

Redes conectam pessoas, dispositivos e serviços. Essa conectividade também cria caminhos pelos quais dados podem ser interceptados, serviços podem ser acessados indevidamente e um comprometimento pode se espalhar. Segurança de rede controla quem se conecta, quais comunicações são permitidas e como o tráfego é protegido.

## 2. Inventário e fluxos legítimos

O ponto de partida é saber quais ativos existem, em quais redes estão e de quais serviços dependem. Documente fluxos essenciais: por exemplo, o navegador acessa a API pela porta HTTPS, a API consulta o banco por uma porta interna específica e o serviço de monitoramento coleta registros. O que não é necessário não deve ficar aberto.

## 3. Princípios de proteção

Use comunicação criptografada, restrinja serviços administrativos, aplique regras de rede específicas e mantenha dispositivos atualizados. Monitore tráfego anômalo, como volume inesperado, comunicação entre segmentos não relacionados ou tentativas repetidas de conexão.

## 4. Confiança baseada em contexto

Estar na rede interna não deve ser sinônimo de acesso irrestrito. Um notebook interno pode estar comprometido. Valide identidade, dispositivo, destino e necessidade da conexão, especialmente para sistemas sensíveis.

## 5. Perguntas para revisão

- Quais portas e serviços estão expostos?
- Quem precisa falar com cada serviço?
- O tráfego é criptografado e registrado?
- Há caminhos desnecessários entre ambientes de usuário, teste e produção?

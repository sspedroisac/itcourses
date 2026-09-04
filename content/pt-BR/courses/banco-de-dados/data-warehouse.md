# Data Warehouse

## 1. O que é um Data Warehouse

Um **Data Warehouse** é um repositório organizado para armazenar dados históricos de várias fontes com foco em análise e tomada de decisão.

Ele integra dados operacionais e os disponibiliza em uma estrutura preparada para relatórios, indicadores e exploração analítica.

---

## 2. Características

Um Data Warehouse costuma ser:

- orientado a assuntos;
- integrado;
- histórico;
- relativamente estável para leitura;
- organizado para análise.

---

## 3. Fontes de dados

As fontes podem incluir:

- bancos transacionais;
- APIs;
- arquivos;
- sistemas de atendimento;
- plataformas de marketing;
- sensores e eventos.

A integração precisa tratar formatos, identificadores, qualidade e frequência de atualização.

---

## 4. Camadas

Uma arquitetura comum possui:

- área de ingestão;
- staging;
- transformação;
- armazenamento analítico;
- camada semântica;
- ferramentas de visualização.

Essa separação facilita controle, reprocessamento e auditoria.

---

## 5. Histórico

O Data Warehouse preserva alterações ao longo do tempo. Isso permite analisar o estado passado de clientes, produtos, contratos e indicadores.

---

## 6. Boas práticas

- Documentar fontes e regras;
- Controlar cargas incrementais;
- Preservar linhagem;
- Validar reconciliação;
- Definir políticas de retenção e acesso.

---

## 7. Resumo

Data Warehouse integra e organiza dados históricos para análise. Seu valor depende de dados confiáveis, processos rastreáveis e modelos que respondam às perguntas do negócio.

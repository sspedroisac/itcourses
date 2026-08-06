# Tipos de Teste de Software

## 1. O que são Tipos de Teste

Os **tipos de teste** classificam os testes de software de acordo com seu objetivo.

Enquanto os **níveis de teste** indicam **quando** e **em que parte do sistema** os testes são executados, os **tipos de teste** indicam **o que está sendo avaliado**.

Um mesmo nível de teste pode utilizar diferentes tipos de teste.

Por exemplo, durante um teste de sistema podem ser realizados testes funcionais, de desempenho, de segurança e de usabilidade.

---

## 2. Objetivos dos Tipos de Teste

Os tipos de teste têm como principais objetivos:

- Verificar se o software atende aos requisitos funcionais;
- Avaliar características não funcionais do sistema;
- Detectar defeitos específicos;
- Aumentar a qualidade do software;
- Reduzir riscos antes da entrega ao cliente.

---

## 3. Testes Funcionais

Os **testes funcionais** verificam se o software executa corretamente as funcionalidades especificadas nos requisitos.

O foco está no comportamento externo da aplicação, sem considerar sua implementação interna.

Esses testes respondem à seguinte pergunta:

> O sistema faz aquilo que deveria fazer?

### 3.1 O que é avaliado

- Regras de negócio;
- Funcionalidades;
- Entradas e saídas de dados;
- Fluxos do sistema;
- Requisitos funcionais.

### 3.2 Exemplo

Em um sistema bancário, um teste funcional pode verificar se uma transferência entre contas é realizada corretamente e se o saldo é atualizado após a operação.

---

## 4. Testes Não Funcionais

Os **testes não funcionais** verificam atributos de qualidade do software.

Seu objetivo não é validar funcionalidades, mas avaliar como o sistema se comporta em diferentes condições.

Esses testes respondem à seguinte pergunta:

> O sistema funciona com qualidade?

### 4.1 O que pode ser avaliado

- Desempenho;
- Segurança;
- Usabilidade;
- Confiabilidade;
- Compatibilidade;
- Escalabilidade;
- Disponibilidade.

---

## 5. Teste de Regressão

O **Teste de Regressão** verifica se alterações realizadas no software não introduziram novos defeitos em funcionalidades que anteriormente funcionavam corretamente.

Esse tipo de teste é executado sempre que ocorre:

- Correção de bugs;
- Inclusão de novas funcionalidades;
- Refatoração do código;
- Atualização de bibliotecas ou dependências.

### 5.1 Objetivo

Garantir que mudanças não provoquem efeitos colaterais indesejados.

### 5.2 Exemplo

Após corrigir um problema na tela de login, executam-se novamente testes em outras funcionalidades, como cadastro de usuários e recuperação de senha, para verificar se continuam funcionando corretamente.

---

## 6. Teste Smoke

O **Teste Smoke** é um conjunto reduzido de testes executados para verificar se a versão do software está suficientemente estável para prosseguir com testes mais detalhados.

Seu objetivo é identificar rapidamente falhas críticas.

Caso o teste Smoke falhe, normalmente os demais testes são interrompidos.

### 6.1 O que é verificado

- Inicialização da aplicação;
- Login;
- Funcionalidades principais;
- Navegação básica.

### 6.2 Exemplo

Após gerar uma nova versão do sistema, verifica-se se a aplicação inicia corretamente, permite login e executa suas funcionalidades essenciais.

---

## 7. Teste Sanity

O **Teste Sanity** verifica se uma alteração específica resolveu o problema esperado sem comprometer funcionalidades relacionadas.

É um teste mais restrito que o Smoke Test.

Enquanto o Smoke avalia a estabilidade geral da aplicação, o Sanity concentra-se em uma funcionalidade específica.

### 7.1 Exemplo

Após corrigir um erro no cálculo de impostos, realiza-se um teste Sanity apenas nessa funcionalidade para verificar se a correção foi efetiva.

---

## 8. Teste Exploratório

O **Teste Exploratório** é realizado sem um roteiro rígido de execução.

O testador utiliza seu conhecimento, experiência e criatividade para explorar o sistema em busca de defeitos.

Durante sua execução, aprendizado, planejamento e testes acontecem simultaneamente.

### 8.1 Características

- Não segue casos de teste detalhados;
- Depende da experiência do testador;
- Possui grande capacidade de encontrar defeitos inesperados;
- Complementa os testes planejados.

---

## 9. Testes Alfa e Beta

Os testes **Alfa** e **Beta** são utilizados para validar o software antes de sua disponibilização definitiva aos usuários.

### 9.1 Teste Alfa

O **Teste Alfa** é realizado em ambiente controlado, geralmente nas instalações da organização desenvolvedora.

Participam desse teste:

- Desenvolvedores;
- Equipe de QA;
- Representantes do cliente.

Seu objetivo é identificar defeitos antes da disponibilização do sistema para usuários externos.

### 9.2 Teste Beta

O **Teste Beta** é realizado por usuários reais em ambiente real de utilização.

Seu objetivo é obter feedback sobre o funcionamento do sistema antes do lançamento oficial.

Problemas encontrados nessa etapa auxiliam na melhoria do produto antes de sua versão final.

---

## 10. Relação entre Níveis e Tipos de Teste

Os níveis de teste e os tipos de teste são conceitos complementares.

Os níveis indicam **em que etapa** o software está sendo testado.

Os tipos indicam **qual característica** está sendo avaliada.

Por exemplo:

| Nível      | Tipos de teste possíveis               |
| ---------- | -------------------------------------- |
| Unitário   | Funcional, Regressão                   |
| Integração | Funcional, Regressão, Smoke            |
| Sistema    | Funcional, Não Funcional, Exploratório |
| Aceitação  | Funcional, Alfa, Beta                  |

---

## 11. Boas práticas

- Executar testes funcionais sempre que uma funcionalidade for implementada.
- Automatizar testes de regressão sempre que possível.
- Executar Smoke Tests antes de iniciar uma bateria completa de testes.
- Utilizar Testes Sanity após pequenas correções.
- Complementar testes planejados com testes exploratórios.
- Envolver usuários reais durante os testes Beta.

---

## 12. Resumo

| Tipo          | Finalidade                                         |
| ------------- | -------------------------------------------------- |
| Funcional     | Validar funcionalidades do sistema.                |
| Não Funcional | Avaliar atributos de qualidade.                    |
| Regressão     | Garantir que mudanças não causaram novos defeitos. |
| Smoke         | Verificar rapidamente a estabilidade da aplicação. |
| Sanity        | Validar uma alteração específica.                  |
| Exploratório  | Descobrir defeitos por exploração do sistema.      |
| Alfa          | Validar o software em ambiente controlado.         |
| Beta          | Validar o software com usuários reais.             |

---

## 13. Conclusão

Os tipos de teste classificam os testes de acordo com seu objetivo, permitindo avaliar diferentes aspectos da qualidade do software. Enquanto os testes funcionais verificam se o sistema faz o que foi especificado, os testes não funcionais analisam características como desempenho, segurança e usabilidade.

Além disso, testes como Regressão, Smoke, Sanity, Exploratório, Alfa e Beta complementam o processo de validação, aumentando a confiabilidade do software antes de sua entrega ao cliente.

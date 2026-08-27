# Principais Vulnerabilidades

## 1. Introdução

Vulnerabilidades são fraquezas que podem permitir comportamentos indevidos, exposição de dados ou interrupção de serviços.

Conhecer categorias comuns ajuda a prevenir problemas e a definir testes de segurança. Os exemplos a seguir têm finalidade defensiva e devem ser tratados em ambientes autorizados.

---

## 2. Injeção

Vulnerabilidades de **injeção** acontecem quando dados externos são interpretados como parte de um comando ou consulta.

Prevenção:

- Usar consultas parametrizadas;
- Validar entradas;
- Aplicar APIs seguras;
- Limitar permissões da conta usada pela aplicação.

---

## 3. Falhas de autenticação e autorização

Problemas em login, sessões ou permissões podem permitir que alguém acesse uma conta ou recurso indevido.

Prevenção:

- Usar mecanismos de autenticação confiáveis;
- Proteger sessões e tokens;
- Verificar autorização no servidor;
- Testar acesso entre usuários e papéis diferentes.

---

## 4. Exposição de dados sensíveis

Dados pessoais, financeiros, credenciais e informações internas podem ser expostos por armazenamento, transporte, logs ou mensagens inadequadas.

A equipe deve minimizar a coleta, proteger dados em trânsito e em repouso e revisar quem pode acessá-los.

---

## 5. Configuração insegura

Configurações padrão, serviços desnecessários, permissões excessivas e mensagens detalhadas em produção podem aumentar a superfície de ataque.

Ambientes devem ser configurados de forma segura, revisados e monitorados.

---

## 6. Componentes vulneráveis

Bibliotecas e serviços de terceiros podem conter vulnerabilidades ou deixar de receber suporte.

Inventário de dependências, atualizações, análise automatizada e avaliação de origem ajudam a reduzir esse risco.

---

## 7. Falhas de integridade

Um sistema pode aceitar artefatos, atualizações ou dados sem verificar sua origem e integridade.

Assinatura, verificação de checksums, controle de acesso e pipelines protegidos ajudam a garantir que somente artefatos confiáveis sejam utilizados.

---

## 8. Falhas de logging e monitoramento

Sem registros e alertas adequados, incidentes podem permanecer ocultos ou ser descobertos tarde demais.

Logs devem registrar eventos relevantes, possuir proteção contra alteração e evitar dados sensíveis.

---

## 9. Como tratar uma vulnerabilidade

Um processo defensivo pode seguir estas etapas:

```text
Identificar → Avaliar impacto → Corrigir → Validar → Monitorar
```

Vulnerabilidades críticas devem receber prioridade compatível com o risco. A correção deve ser acompanhada de testes e, quando necessário, comunicação aos envolvidos.

---

## 10. Resumo

| Categoria                  | Exemplo de proteção                       |
| -------------------------- | ----------------------------------------- |
| Injeção                    | Consultas parametrizadas                  |
| Autenticação e autorização | Sessões protegidas e checagem no servidor |
| Dados sensíveis            | Minimização e criptografia adequada       |
| Configuração               | Padrões seguros e revisão de ambientes    |
| Componentes vulneráveis    | Inventário e atualização                  |
| Integridade                | Verificação de origem e artefatos         |
| Monitoramento              | Logs, alertas e auditoria                 |

---

## 11. Boas práticas

- Validar entradas conforme o contexto;
- Usar bibliotecas e APIs mantidas;
- Revisar configurações de produção;
- Testar autenticação e autorização;
- Proteger segredos e dados sensíveis;
- Monitorar eventos relevantes;
- Corrigir vulnerabilidades priorizando risco e impacto.

---

## 12. Conclusão

Vulnerabilidades podem surgir no código, nas configurações, nas dependências e nos processos.

Prevenção, testes, atualização e monitoramento contínuos formam uma estratégia mais eficaz do que depender de uma única revisão no final do desenvolvimento.

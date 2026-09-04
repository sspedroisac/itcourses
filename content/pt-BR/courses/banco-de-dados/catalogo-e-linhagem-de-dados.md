# Catálogo e Linhagem de Dados

## 1. O que é um catálogo de dados

Um **catálogo de dados** reúne informações sobre os ativos de dados disponíveis em uma organização.

Ele pode descrever tabelas, colunas, arquivos, dashboards, APIs, proprietários, classificações e regras de uso.

---

## 2. Metadados

Metadados são dados sobre os dados. Podem ser:

- técnicos, como tipo e localização;
- de negócio, como definição e responsável;
- operacionais, como frequência de atualização;
- de segurança, como classificação e restrição.

---

## 3. Linhagem de dados

A **linhagem** mostra a origem, as transformações e os destinos de um dado.

```text
Fonte operacional
      │
      ▼
Pipeline de transformação
      │
      ▼
Tabela analítica
      │
      ▼
Dashboard
```

---

## 4. Benefícios

Catálogo e linhagem ajudam a:

- encontrar dados confiáveis;
- entender métricas;
- investigar incidentes;
- avaliar impacto de mudanças;
- atender auditorias;
- evitar duplicação de fontes.

---

## 5. Catálogo ativo

Um catálogo útil precisa estar atualizado e integrado aos processos de desenvolvimento, ingestão e governança. Documentação manual que nunca é revisada perde valor rapidamente.

---

## 6. Impacto de mudanças

Ao alterar uma coluna, a linhagem ajuda a identificar pipelines, relatórios e aplicações que podem ser afetados.

Isso reduz riscos de mudanças incompatíveis.

---

## 7. Boas práticas

- Definir responsáveis por ativos;
- Automatizar coleta de metadados;
- Registrar glossário de negócio;
- Controlar versões;
- Marcar dados sensíveis;
- Validar linhagem com os times consumidores.

---

## 8. Resumo

O catálogo facilita a descoberta e interpretação dos dados. A linhagem mostra seu caminho e seus impactos, fortalecendo governança, qualidade e manutenção.

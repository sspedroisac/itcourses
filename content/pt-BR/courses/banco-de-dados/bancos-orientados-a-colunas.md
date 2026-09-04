# Bancos Orientados a Colunas

## 1. O que são bancos orientados a colunas

Bancos orientados a colunas, também chamados de bancos de colunas largas em determinados contextos, organizam dados para distribuir e consultar grandes volumes por famílias de colunas.

Eles são diferentes de bancos relacionais que armazenam tabelas com esquema fixo e de bancos analíticos que podem usar armazenamento colunar para leitura.

---

## 2. Organização dos dados

A estrutura pode ser pensada como linhas identificadas por uma chave e grupos de colunas relacionados. Diferentes linhas podem possuir colunas distintas.

Esse modelo oferece flexibilidade e distribuição por partição.

---

## 3. Padrão de acesso

A modelagem deve começar pelas consultas. A chave de partição precisa distribuir os dados e evitar que todo o tráfego se concentre em poucos nós.

Também é importante definir a ordenação dentro da partição.

---

## 4. Escalabilidade

Esses bancos são usados em cenários de grande volume e alta taxa de escrita, distribuindo dados entre vários servidores.

A escalabilidade depende da escolha de chaves, do balanceamento e do padrão de leitura.

---

## 5. Limitações

Consultas que não seguem a chave de partição podem ser caras ou não suportadas. Joins e filtros arbitrários geralmente não possuem o mesmo comportamento de um banco relacional.

---

## 6. Casos de uso

Podem ser usados para:

- telemetria;
- eventos;
- logs distribuídos;
- catálogos de grande escala;
- histórico de atividades.

---

## 7. Boas práticas

- Modelar por consulta;
- Escolher partições bem distribuídas;
- Evitar partições gigantes;
- Definir políticas de retenção;
- Testar carga e crescimento.

---

## 8. Resumo

Bancos orientados a colunas são adequados para volumes grandes e cargas distribuídas. Seu desempenho depende fortemente da modelagem das partições e da forma como as consultas acessam os dados.

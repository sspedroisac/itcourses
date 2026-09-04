# Armazenamento e Organização Física dos Dados

## 1. O que é armazenamento físico

O **armazenamento físico** descreve como os dados são gravados, organizados e recuperados nos dispositivos usados pelo SGBD.

Embora aplicações trabalhem com tabelas e registros, o banco precisa transformar essas estruturas lógicas em arquivos, páginas, blocos e outras unidades físicas.

---

## 2. Hierarquia de armazenamento

Os dados podem passar por diferentes níveis:

- memória de operação;
- cache do SGBD;
- memória do sistema operacional;
- armazenamento persistente;
- backups e réplicas.

A velocidade e a durabilidade variam de acordo com o nível utilizado.

---

## 3. Arquivos de dados

O SGBD organiza tabelas, índices e metadados em arquivos próprios. Esses arquivos podem ser divididos em estruturas menores para facilitar leitura, escrita, expansão e recuperação.

A aplicação normalmente não deve manipular esses arquivos diretamente, pois o SGBD controla sua consistência.

---

## 4. Organização de registros

Registros podem ser armazenados de forma não ordenada ou seguindo uma organização específica. A escolha influencia inserções, atualizações, leituras e utilização de índices.

Também é necessário considerar o tamanho dos registros e a possibilidade de crescimento variável.

---

## 5. Cache e buffer pool

O SGBD mantém páginas frequentemente acessadas em memória para reduzir leituras no disco. Essa área é geralmente chamada de buffer pool ou cache de páginas.

Uma boa utilização do cache pode reduzir significativamente o tempo de resposta.

---

## 6. Persistência e recuperação

Alterações precisam ser gravadas de forma segura. Logs de transação e mecanismos de recuperação permitem reconstruir ou desfazer operações após falhas.

A durabilidade depende da configuração do SGBD e do dispositivo de armazenamento.

---

## 7. Boas práticas

- Monitorar espaço disponível;
- Separar dados, logs e backups quando apropriado;
- Planejar crescimento;
- Usar armazenamento compatível com a carga;
- Testar recuperação após falhas.

---

## 8. Resumo

A organização física influencia performance, capacidade e recuperação do banco de dados. Compreender arquivos, memória, cache e persistência ajuda a diagnosticar problemas e planejar ambientes confiáveis.

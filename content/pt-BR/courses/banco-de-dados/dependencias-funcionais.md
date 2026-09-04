# Dependências Funcionais

## 1. O que são dependências funcionais

Uma **dependência funcional** descreve uma relação entre atributos em uma relação. Dizemos que o atributo ou conjunto de atributos X determina funcionalmente Y quando dois registros que possuem o mesmo valor de X também precisam possuir o mesmo valor de Y.

A dependência é representada por:

```text
X -> Y
```

Isso significa que X determina Y.

---

## 2. Exemplo

Considere a relação:

```text
Aluno(id_aluno, nome, curso)
```

Se cada `id_aluno` identifica exatamente um aluno, então:

```text
id_aluno -> nome, curso
```

O identificador determina o nome e o curso do aluno.

---

## 3. Dependência total e parcial

Uma dependência é **total** quando todos os atributos de uma chave composta são necessários para determinar o atributo dependente.

Ela é **parcial** quando apenas parte da chave composta determina o atributo.

Dependências parciais podem indicar problemas de modelagem e são importantes na análise da Segunda Forma Normal.

---

## 4. Dependência transitiva

Existe dependência transitiva quando um atributo não-chave depende de outro atributo não-chave.

Exemplo:

```text
id_funcionario -> id_departamento
id_departamento -> nome_departamento
```

Nesse caso, `nome_departamento` depende indiretamente de `id_funcionario`. Essa situação é analisada na Terceira Forma Normal.

---

## 5. Relação com chaves

As dependências funcionais ajudam a identificar:

- chaves candidatas;
- atributos que dependem de uma chave;
- redundâncias;
- problemas de atualização;
- oportunidades de decomposição.

Uma chave deve determinar todos os atributos da relação e ser mínima para essa finalidade.

---

## 6. Uso na normalização

A análise de dependências funcionais é uma das bases da normalização. Ela permite verificar se atributos estão em tabelas apropriadas e se a estrutura evita anomalias.

Ao decompor uma relação, é importante preservar as dependências relevantes e permitir a reconstrução dos dados por meio de relacionamentos válidos.

---

## 7. Boas práticas

- Identificar dependências a partir das regras do negócio;
- Não inferir dependências apenas pelos valores atuais;
- Documentar chaves e determinantes;
- Verificar dependências parciais e transitivas;
- Validar a análise com especialistas do domínio.

---

## 8. Resumo

Dependências funcionais descrevem como atributos determinam outros atributos em uma relação. Elas são fundamentais para identificar chaves, reduzir redundância e orientar a normalização do banco de dados.

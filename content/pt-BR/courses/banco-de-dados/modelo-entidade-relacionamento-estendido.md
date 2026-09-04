# Modelo Entidade-Relacionamento Estendido

## 1. O que é o Modelo ER Estendido

O **Modelo Entidade-Relacionamento Estendido (EER)** amplia o Modelo Entidade-Relacionamento com recursos para representar domínios mais complexos.

Ele permite modelar hierarquias, especializações, generalizações, categorias e atributos herdados, aproximando o modelo conceitual de situações reais mais detalhadas.

---

## 2. Generalização e especialização

A **generalização** identifica características comuns em diferentes entidades e cria uma entidade mais abrangente.

A **especialização** divide uma entidade geral em subtipos mais específicos.

Exemplo:

```text
Pessoa
 ├── Cliente
 └── Funcionário
```

Nome e documento podem pertencer a Pessoa, enquanto limite de crédito pertence a Cliente e cargo pertence a Funcionário.

---

## 3. Herança de atributos

Os subtipos herdam atributos e relacionamentos do supertipo. Isso evita duplicação e representa corretamente as características compartilhadas.

Se Pessoa possui nome e data de nascimento, Cliente e Funcionário podem reutilizar essas informações sem redefini-las.

---

## 4. Restrições de especialização

Uma especialização pode possuir restrições importantes.

### 4.1 Disjunta

Uma ocorrência só pode pertencer a um subtipo.

### 4.2 Sobreposta

Uma ocorrência pode pertencer a mais de um subtipo.

### 4.3 Total

Toda ocorrência do supertipo deve pertencer a algum subtipo.

### 4.4 Parcial

Algumas ocorrências podem permanecer apenas no supertipo.

---

## 5. Categorias e união

Uma categoria representa um subtipo formado por entidades de diferentes supertipos.

Por exemplo, uma entidade ParteInteressada pode ser formada por Cliente, Fornecedor ou Funcionário. Esse recurso é útil quando diferentes tipos de entidade participam de uma mesma regra.

---

## 6. Quando usar o EER

O modelo estendido é útil quando:

- há hierarquias claras no domínio;
- diferentes tipos compartilham atributos;
- regras variam de acordo com o subtipo;
- a generalização evita repetição;
- a estrutura precisa representar especializações reais.

Ele não deve ser usado apenas para tornar o diagrama mais sofisticado.

---

## 7. Boas práticas

- Usar supertipos apenas quando houver características comuns reais;
- Definir claramente as restrições de especialização;
- Evitar hierarquias artificiais;
- Validar herança com especialistas do domínio;
- Planejar como a hierarquia será convertida para tabelas.

---

## 8. Resumo

O Modelo Entidade-Relacionamento Estendido amplia o MER com mecanismos de herança, generalização e especialização. Ele é adequado para representar domínios complexos sem duplicar informações e sem perder clareza conceitual.

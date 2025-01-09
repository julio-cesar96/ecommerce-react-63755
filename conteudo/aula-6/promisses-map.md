# Aula: API de Promise e Renderização de Listas com o Método map()

## Objetivos da Aula

1. **Conhecer a API de Promise:**
   - Entender o que é uma Promise e o problema que ela resolve.
   - Compreender os estados de uma Promise.
   - Aprender a criar Promises e trabalhar com `then`, `catch`, e `finally`.
   - Entender como usar `async/await` para trabalhar com Promises.
   - Realizar requisições assíncronas a APIs externas ou arquivos JSON internos.

2. **Método map():**
   - Entender o que é o método `map`.
   - Identificar problemas resolvidos pelo `map`.
   - Aprender o uso do parâmetro `key` no React e sua importância.
   - Utilizar o método `map` para iterar sobre listas e renderizar componentes.

---

## Parte 1: API de Promise

### O que é uma Promise?
- **Definição:** Uma Promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.
- **Problema Resolvido:** Substitui callbacks aninhados (o famoso "callback hell") por uma abordagem mais legível e estruturada.

### Estados de uma Promise
1. **Pending (pendente):** A operação ainda está em execução.
2. **Fulfilled (resolvida):** A operação foi concluída com sucesso.
3. **Rejected (rejeitada):** A operação falhou.

### Como Criar e Utilizar Promises

#### Exemplo com `then`, `catch`, e `finally`
```javascript
const minhaPromise = new Promise((resolve, reject) => {
  const sucesso = true;

  if (sucesso) {
    resolve("Operação bem-sucedida!");
  } else {
    reject("Houve um erro na operação.");
  }
});

minhaPromise
  .then((resultado) => {
    console.log(resultado); // "Operação bem-sucedida!"
  })
  .catch((erro) => {
    console.error(erro); // "Houve um erro na operação."
  })
  .finally(() => {
    console.log("Operação finalizada.");
  });
```

#### Exemplo com `async/await`
```javascript
const executarOperacao = async () => {
  try {
    const resultado = await minhaPromise;
    console.log(resultado);
  } catch (erro) {
    console.error(erro);
  } finally {
    console.log("Operação finalizada.");
  }
};

executarOperacao();
```

### Requisições Assíncronas

#### Utilizando `fetch` com `then`
```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Erro ao buscar dados:", error);
  });
```

#### Utilizando `async/await`
```javascript
const buscarDados = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};

buscarDados();
```

#### Utilizando `useEffect` para Fazer Requisições
```javascript
import React, { useEffect, useState } from "react";

function ListaDePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      }
    };

    fetchPosts();
  }, []); // O array vazio garante que o efeito seja executado apenas uma vez.

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default ListaDePosts;
```

### Consumindo um Arquivo JSON Local
1. Crie um arquivo chamado `dados.json` na pasta `public`:
```json
[
  { "id": 1, "nome": "Ana", "idade": 25 },
  { "id": 2, "nome": "João", "idade": 30 },
  { "id": 3, "nome": "Maria", "idade": 22 }
]
```

2. Utilize `fetch` para consumir o arquivo:
```javascript
import React, { useEffect, useState } from "react";

function ListaDeDados() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const response = await fetch("/dados.json"); // Caminho relativo ao arquivo na pasta public
        const data = await response.json();
        setDados(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchDados();
  }, []);

  return (
    <div>
      {dados.map((item) => (
        <div key={item.id}>
          <h2>{item.nome}</h2>
          <p>Idade: {item.idade}</p>
        </div>
      ))}
    </div>
  );
}

export default ListaDeDados;
```

---

## Parte 2: Método map()

### O que é o Método `map`?
- **Definição:** É um método do array que cria um novo array ao aplicar uma função a cada elemento do array original.
- **Problema Resolvido:** Substitui loops como `for` para transformar dados de forma mais concisa e funcional.

### Parâmetro `key` no React
- **O que é:** Um identificador único para cada elemento em uma lista renderizada.
- **Importância:**
  - Ajuda o React a identificar quais itens mudaram, foram adicionados ou removidos.
  - Melhora a performance do React ao evitar re-renderizações desnecessárias.

### Renderizando Listas com `map`

#### Exemplo Simples
```javascript
const nomes = ["Ana", "João", "Maria"];

function ListaDeNomes() {
  return (
    <ul>
      {nomes.map((nome, index) => (
        <li key={index}>{nome}</li>
      ))}
    </ul>
  );
}

export default ListaDeNomes;
```

#### Exemplo com Componentes e Dados Externos
```javascript
const dados = [
  { id: 1, nome: "Ana", idade: 25 },
  { id: 2, nome: "João", idade: 30 },
  { id: 3, nome: "Maria", idade: 22 }
];

function Card({ nome, idade }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Idade: {idade}</p>
    </div>
  );
}

function ListaDeCards() {
  return (
    <div>
      {dados.map((pessoa) => (
        <Card key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} />
      ))}
    </div>
  );
}

export default ListaDeCards;
```

---

## Exercícios Propostos

### 1. Trabalhando com Promises
- Crie uma função que faça uma requisição para a API `https://jsonplaceholder.typicode.com/users`.
- Liste os nomes dos usuários em uma página.

### 2. Renderizando Listas
- A partir dos dados abaixo, crie componentes que mostrem o nome e o email de cada usuário:
```javascript
const usuarios = [
  { id: 1, nome: "Alice", email: "alice@example.com" },
  { id: 2, nome: "Bob", email: "bob@example.com" },
  { id: 3, nome: "Charlie", email: "charlie@example.com" }
];
```
- Certifique-se de usar a propriedade `key` corretamente.

---

## Conclusão
Nesta aula, aprendemos:
1. Como trabalhar com a API de Promise para operações assíncronas.
2. A importância do método `map` no React para renderização eficiente de listas.
3. Boas práticas no uso de `key` para garantir a performance e funcionalidade no React.

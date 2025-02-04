# Aula 12 - Firebase com React

## Objetivos da Aula
- Diferenciar o modelo de serverless-computing de um modelo tradicional.
- Conectar nossa aplicação a serviços cloud-first de alta disponibilidade.
- Configurar um storage e suas coleções e acessar a informação.

## Conceitos Fundamentais

### 1. O que é Firebase?
Firebase é uma plataforma do Google que fornece diversos serviços para desenvolvimento de aplicações modernas. Ele simplifica tarefas como autenticação, banco de dados em tempo real, storage e muito mais. 

### 2. Serverless Computing vs. Modelo Tradicional
**Modelo Tradicional:**
- Aplicações utilizam servidores dedicados para armazenar e processar dados.
- Requer configuração de infraestrutura, manutenção e escalabilidade manual.

**Serverless Computing:**
- Não há necessidade de gerenciar servidores.
- Serviços são pagos conforme o uso.
- Escala automaticamente conforme a demanda.

O Firebase segue esse modelo serverless, permitindo que os desenvolvedores foquem na lógica do aplicativo sem se preocupar com infraestrutura.

## Configuração Inicial

### 1. Criando um Projeto no Firebase
1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em "Adicionar Projeto" e siga os passos:
   - Escolha um nome significativo.
   - Desative o Google Analytics (opcional para simplificação).
   - Finalize a criação do projeto.

### 2. Configurando Firestore
1. No painel do Firebase, acesse **Firestore Database**.
2. Clique em **Criar Banco de Dados** e selecione o modo **Teste** (para desenvolvimento inicial).
3. Escolha a localização do banco de dados e finalize a configuração.
4. Crie uma **coleção** inicial para armazenar dados.

## Integração com React

### 1. Instalando Firebase no Projeto React
No terminal, dentro do diretório do projeto, execute:
```sh
npm install firebase
```

### 2. Configurando Firebase no Projeto
Crie um arquivo `firebaseConfig.js` e adicione:
```js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
```

Substitua os valores pelos fornecidos no console do Firebase.

### 3. Acessando um Documento no Firestore
```js
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const getDocument = async (collectionName, docId) => {
  const docRef = doc(db, collectionName, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Dados do documento:", docSnap.data());
  } else {
    console.log("Nenhum documento encontrado!");
  }
};
```

### 4. Acessando uma Coleção no Firestore
```js
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

const getCollection = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
  });
};
```

## Exercício Prático
1. Configure sua conta Firebase e crie uma coleção chamada **produtos**.
2. Adicione documentos com os campos: `id`, `nome`, `preco`, `categoria`.
3. Faça uma consulta para listar todos os produtos na tela.
4. Adicione um filtro para exibir apenas produtos de uma categoria específica.

### Sugestão de Desenvolvimento
Para realizar esse exercício, siga os seguintes passos:
- No Firebase Console, crie manualmente a coleção `produtos` e adicione alguns documentos de exemplo.
- No React, crie um estado para armazenar os produtos usando `useState`.
- Utilize `useEffect` para carregar os produtos ao montar o componente.
- Utilize a função `getCollection` mostrada acima para buscar todos os produtos.
- Exiba os produtos em uma lista dentro de um componente funcional.
- Crie um `input` para que o usuário possa digitar uma categoria e, ao pressionar um botão, os produtos sejam filtrados dinamicamente com a função `where` do Firestore.

Exemplo de código para exibir produtos:
```js
import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebaseConfig';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    const fetchProdutos = async () => {
      const querySnapshot = await getDocs(collection(db, 'produtos'));
      setProdutos(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchProdutos();
  }, []);

  const filtrarPorCategoria = async () => {
    const q = query(collection(db, 'produtos'), where('categoria', '==', categoria));
    const querySnapshot = await getDocs(q);
    setProdutos(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Digite a categoria" 
        value={categoria} 
        onChange={(e) => setCategoria(e.target.value)}
      />
      <button onClick={filtrarPorCategoria}>Filtrar</button>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>{produto.nome} - R${produto.preco}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produtos;
```

## Conclusão
Nesta aula, abordamos o conceito de **serverless computing**, a configuração do **Firestore** e a integração com um projeto **React**. No próximo encontro, exploraremos **autenticação com Firebase** e **armazenamento de arquivos**.


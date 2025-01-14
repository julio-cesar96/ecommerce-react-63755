# Aula: Paradigmas de Troca de Dados e Consumo de APIs com React

## Objetivos
1. Identificar diferentes paradigmas de troca de dados.
2. Consumir recursos via chamadas a APIs.

---

## Paradigmas de Troca de Informação

### O que é
A troca de informação é o processo de envio e recebimento de dados entre diferentes sistemas ou componentes de software. No contexto de aplicações web, isso normalmente ocorre entre o cliente (navegador) e o servidor.

### Modelo Cliente-Servidor
- **Definição:** O cliente faz requisições para o servidor, que processa a solicitação e retorna uma resposta.
- **Exemplo:**
  O cliente solicita dados de um usuário e o servidor retorna a resposta.

### Push
- **Definição:** O servidor envia dados para o cliente sem que o cliente precise requisitar constantemente.
- **Exemplo no React:** WebSockets para implementar chat em tempo real.

### Polling
- **Definição:** O cliente faz requisições periódicas para verificar se há novos dados.
- **Exemplo no React:** Usar `setInterval` para verificar atualizações em um endpoint.

---

## Requests via HTTP/S

### O que é
HTTP (HyperText Transfer Protocol) e HTTPS (HTTP Secure) são os protocolos usados para comunicação na web.
- **Requisição:** O cliente solicita dados ou executa ações no servidor.
- **Resposta:** O servidor responde com os dados ou uma mensagem sobre o estado da solicitação.

### Estrutura de uma URL
```
https://api.exemplo.com/users/123?sort=name
```
- **Protocolo:** `https`
- **Host:** `api.exemplo.com`
- **Caminho:** `/users/123`
- **Query Params:** `?sort=name`

### Métodos HTTP
- **GET:** Obter dados.
- **POST:** Enviar dados.
- **PUT:** Atualizar dados.
- **DELETE:** Excluir dados.

### Query Params
- **Uso:** Enviar informações adicionais na URL.
- **Exemplo:** `https://api.exemplo.com/users?age=25`

### URL Params
- **Uso:** Identificar recursos específicos na URL.
- **Exemplo:** `https://api.exemplo.com/users/123`

### Body
- **Uso:** Enviar dados no corpo da requisição, geralmente em JSON.
- **Exemplo:**
  ```json
  {
    "name": "John Doe",
    "age": 30
  }
  ```

### Headers
- **Uso:** Enviar metadados sobre a requisição.
- **Exemplo:**
  ```json
  {
    "Authorization": "Bearer token123",
    "Content-Type": "application/json"
  }
  ```

---

## Fetch com Async/Await

### O que é
O método `fetch` permite fazer requisições HTTP no navegador. Usar `async/await` torna o código mais legível e fácil de entender.

### Exemplo: Consumir uma API
```javascript
import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://api.exemplo.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
```

---

## CORS (Cross-Origin Resource Sharing)
- **O que é:** Uma política de segurança que restringe requisições feitas para um domínio diferente do que a aplicação está rodando.
- **Como lidar com CORS:**
  - Configurar o servidor para permitir origens específicas.
  - Usar proxies para evitar erros de CORS no desenvolvimento.
- **Exemplo:** Adicionar o cabeçalho `Access-Control-Allow-Origin: *` no servidor.

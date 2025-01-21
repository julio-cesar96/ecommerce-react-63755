# Aula: Eventos em React

## Objetivos da Aula
- Entender o sistema de eventos do React e sua implementação.
- Projetar componentes orientados a eventos.

## Estrutura da Aula
### 1. Introdução aos Eventos
#### O que é um Evento?
- Um **evento** é um estímulo programático que ocorre devido a uma interação do usuário ou automaticamente.
  - **Exemplo:** Clicar em um botão, pressionar uma tecla ou um temporizador disparando um evento.

#### Tipos de Eventos
1. **Manuais**: Produzidos pela interação do usuário.
   - Exemplo: Clique do mouse, entrada no teclado.
2. **Automáticos**: Disparados sem intervenção do usuário.
   - Exemplo: Evento de inatividade.

### 2. DOM Events e Event Listeners
#### O que são DOM Events?
- Eventos que são nativamente suportados pelo navegador e associados a elementos DOM.
- **Categorias Comuns**:
  - **Mouse**: `click`, `dblclick`, `mousemove`.
  - **Teclado**: `keydown`, `keypress`.
  - **Input**: `change`, `input`.

#### Event Listener
- Um **Event Listener** é uma função que “escura” eventos e executa ações em resposta.
  - Configuração:
    ```javascript
    const handleClick = () => {
      console.log('Botão clicado!');
    };

    document.getElementById('meuBotao').addEventListener('click', handleClick);
    ```
  - Remoção do Event Listener:
    ```javascript
    document.getElementById('meuBotao').removeEventListener('click', handleClick);
    ```

#### Problemas Comuns
- **Leaking de Memória**: Ocorre quando Event Listeners não são removidos corretamente.

### 3. Eventos em React
#### Synthetic Events
- O React utiliza **Synthetic Events** para normalizar eventos entre diferentes browsers.
  - O evento é encapsulado, mas você pode acessar o evento nativo através de `event.nativeEvent`.
  - **Exemplo:**
    ```javascript
    const handleClick = (event) => {
      console.log(event.nativeEvent); // Evento nativo
    };

    <button onClick={handleClick}>Clique aqui</button>
    ```

#### Vantagens dos Synthetic Events
- Compatibilidade entre navegadores.
- Melhor performance devido ao reaproveitamento de eventos.

### 4. Cancelando e Gerenciando Eventos
#### Cancelando Comportamentos
- **Prevent Default**: Cancela o comportamento padrão do navegador.
  ```javascript
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Envio cancelado!');
  };

  <form onSubmit={handleSubmit}></form>
  ```

- **Stop Propagation**: Impede que o evento seja propagado para elementos ancestrais.
  ```javascript
  const handleClick = (event) => {
    event.stopPropagation();
    console.log('Propagação interrompida!');
  };

  <div onClick={() => console.log('Pai clicado!')}>
    <button onClick={handleClick}>Clique no filho</button>
  </div>
  ```

### 5. Componentes Baseados em Eventos
#### Conceito
- Componentes que utilizam eventos para manipular estados e comportamento.

#### Exemplo Prático
- **Contador com evento de clique:**
  ```javascript
  import React, { useState } from 'react';

  const Contador = () => {
    const [contador, setContador] = useState(0);

    const incrementar = () => setContador(contador + 1);

    return (
      <div>
        <p>Valor do contador: {contador}</p>
        <button onClick={incrementar}>Incrementar</button>
      </div>
    );
  };

  export default Contador;
  ```

### 6. Atividade Prática
#### Parte 1: Criar uma máscara de input
- **Requisito**: Impedir que o usuário insira vogais em um campo de texto.
  ```javascript
  const handleKeyDown = (event) => {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    if (vogais.includes(event.key.toLowerCase())) {
      event.preventDefault();
    }
  };

  <input type="text" onKeyDown={handleKeyDown} />
  ```

#### Parte 2: Sincronizar contador com componente pai
- **Cenário**: Atualizar o estado do componente pai quando um evento ocorre no filho.
  ```javascript
  const ItemCount = ({ onAdd }) => {
    const [count, setCount] = useState(0);

    const addToCart = () => {
      setCount(count + 1);
      onAdd(count + 1);
    };

    return <button onClick={addToCart}>Adicionar</button>;
  };

  const ItemDetail = () => {
    const handleAdd = (quantity) => {
      console.log(`Quantidade adicionada: ${quantity}`);
    };

    return <ItemCount onAdd={handleAdd} />;
  };
  ```

### 7. Resumo
- **Eventos no React**:
  - Utilizam Synthetic Events para padronização.
  - Possibilitam manutenção e reutilização de código.
- **Práticas Recomendadas**:
  - Sempre remover event listeners.
  - Evitar leaks de memória.



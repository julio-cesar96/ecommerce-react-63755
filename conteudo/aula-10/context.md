# Aula: Context API em React

## Objetivos da Aula
- **Organizar os eventos de aplicações de nossos projetos.**
- **Criar interações persistentes entre componentes.**
- **Desenvolver implementações customizadas de Context.**

---

## 1. O que é o Context API?
- **Definição**: Um mecanismo nativo do React para compartilhar dados entre componentes, sem necessidade de passar `props` manualmente por toda a árvore de componentes.
- **Problema que resolve**:
  - Evita o "prop drilling" (passar props desnecessariamente por múltiplos níveis).
  - Centraliza informações compartilhadas globalmente, como temas, autenticação ou estado de carrinho de compras.
- **Melhores casos de uso**:
  - Compartilhamento de temas (light/dark mode).
  - Autenticação do usuário.
  - Estado global de carrinhos de compras.
- **Fluxo de dados no React**: Reforçar que o React utiliza fluxo unidirecional de dados e o Context ajuda a gerenciar informações compartilhadas.

---

## 2. Criando um Context
1. **Passos básicos para criar um Context**:
   - Declarar o contexto:
     ```javascript
     import { createContext } from "react";

     export const MyContext = createContext(defaultValue);
     ```
   - Fornecer o contexto usando um Provider:
     ```javascript
     import React, { useState } from "react";
     import { MyContext } from "./MyContext";

     const MyProvider = ({ children }) => {
       const [value, setValue] = useState(defaultValue);

       return (
         <MyContext.Provider value={{ value, setValue }}>
           {children}
         </MyContext.Provider>
       );
     };

     export default MyProvider;
     ```
2. **Default Value**: Explicar que, se nenhum `Provider` for encontrado, o contexto usará o valor padrão.

---

## 3. Context Provider (Provedor)
- **O que é**: Um componente que "envolve" outros componentes para fornecer o contexto.
- **Configuração**:
  - Escolher estrategicamente o local do Provider para garantir que todos os consumidores relevantes estejam dentro do contexto.
  - Combinar com `useState` ou `useReducer` para estados mutáveis.
- **Exemplo**:
  ```javascript
  <MyProvider>
    <App />
  </MyProvider>
  ```

---

## 4. Consumindo o Contexto
1. **Com o Hook `useContext`**:
   - Maneira mais comum e moderna de consumir um contexto.
   ```javascript
   import { useContext } from "react";
   import { MyContext } from "./MyContext";

   const MyComponent = () => {
     const { value, setValue } = useContext(MyContext);

     return <div>{value}</div>;
   };
   ```
2. **Com o Consumer (modo alternativo)**:
   - Útil para componentes de classe ou casos específicos.
   ```javascript
   import { MyContext } from "./MyContext";

   const MyComponent = () => (
     <MyContext.Consumer>
       {({ value }) => <div>{value}</div>}
     </MyContext.Consumer>
   );
   ```

---

## 5. Contexto Dinâmico e Custom Provider
- **Contexto Dinâmico**:
  - Alterar valores de contexto em tempo de execução, propagando as mudanças automaticamente para os consumidores.
- **Custom Provider**:
  - Adicionar lógica específica ao Provider, como métodos personalizados ou validações.
  - Exemplo:
    ```javascript
    const CartProvider = ({ children }) => {
      const [cart, setCart] = useState([]);

      const addItem = (item) => {
        setCart((prev) => [...prev, item]);
      };

      const removeItem = (itemId) => {
        setCart((prev) => prev.filter((item) => item.id !== itemId));
      };

      return (
        <CartContext.Provider value={{ cart, addItem, removeItem }}>
          {children}
        </CartContext.Provider>
      );
    };
    ```

---

## 6. Implementação Prática: CartContext
1. **Criar um contexto para carrinho de compras**:
   - `src/context/CartContext.js`
   - Incluir métodos como `addItem`, `removeItem`, `clear` e `isInCart`.
2. **Exemplo**:
   ```javascript
   import { createContext, useState } from "react";

   export const CartContext = createContext();

   const CartProvider = ({ children }) => {
     const [cart, setCart] = useState([]);

     const addItem = (item) => {
       if (!cart.find((i) => i.id === item.id)) {
         setCart((prev) => [...prev, item]);
       }
     };

     const removeItem = (id) => {
       setCart((prev) => prev.filter((item) => item.id !== id));
     };

     const clear = () => setCart([]);

     return (
       <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
         {children}
       </CartContext.Provider>
     );
   };

   export default CartProvider;
   ```

---

## 7. Dicas e Boas Práticas
- **Quando usar Context**:
  - Para dados globais e altamente reutilizáveis.
  - Evitar contextos para estados locais de componentes.
- **Evitar re-renders desnecessários**:
  - Usar `React.memo` ou dividir contextos quando possível.
- **Combinar Context com outros Hooks**:
  - Usar `useReducer` para estados complexos.
  - Integrar com hooks como `useEffect` para sincronização.

---

## 8. Atividade Prática
- **Criar um `CartContext`**:
  - **Passos**:
    1. Criar um arquivo `CartContext.js` no diretório `src/context/`.
    2. Implementar métodos sugeridos como `addItem`, `removeItem` e `clear`.
    3. Utilizar o `CartContext` para gerenciar um carrinho de compras simples.
  - **Desafio adicional**:
    - Implementar validação para evitar itens duplicados no carrinho.
    - Adicionar persistência no `localStorage` usando o hook `useEffect`.

---

## 9. Recapitulando
- **Context API**: Permite compartilhar valores globalmente no app React.
- **Provider e Consumer**: Chaves para configuração e consumo.
- **Custom Provider**: Adiciona lógica e flexibilidade ao contexto.
- **Contexto Dinâmico**: Permite alterações de estado em tempo de execução.

**Muito obrigado!**

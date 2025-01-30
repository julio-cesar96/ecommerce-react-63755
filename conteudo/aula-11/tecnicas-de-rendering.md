# Aula 11 - Técnicas de Renderização no React

## Objetivos da Aula
- Detalhar a renderização condicional e suas implicações.
- Diagnosticar e solucionar problemas de rendering.

## 1. Introdução ao React
O React é uma biblioteca JavaScript para construção de interfaces de usuário. Ele resolve o problema de atualização eficiente do DOM utilizando o Virtual DOM e um processo chamado **reconciliação**.

Principais conceitos:
- **Componentes**: Blocos reutilizáveis da UI.
- **Estado (State) e Propriedades (Props)**: Definem o comportamento e os dados de um componente.
- **Ciclo de Vida**: Como os componentes são montados, atualizados e desmontados.
- **Virtual DOM**: Representação leve do DOM real para otimizar re-renderizações.

## 2. Renderização Condicional
A renderização condicional permite que um componente exiba diferentes elementos com base em uma condição específica.

### Técnicas de Renderização Condicional

1. **Uso de `if` com `return` precoce**:
```jsx
function Mensagem({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <p>Por favor, faça login.</p>;
  }
  return <p>Bem-vindo de volta!</p>;
}
```

2. **Uso de operadores lógicos (`&&`)**:
```jsx
function Mensagem({ isAdmin }) {
  return (
    <div>
      <p>Usuário logado.</p>
      {isAdmin && <p>Você tem acesso administrativo.</p>}
    </div>
  );
}
```

3. **Uso do operador ternário (`? :`)**:
```jsx
function Mensagem({ isLoggedIn }) {
  return (
    <p>{isLoggedIn ? 'Bem-vindo de volta!' : 'Por favor, faça login.'}</p>
  );
}
```

### Problemas e Soluções
- **Re-renderizações desnecessárias**: Podem causar perda de estado e performance reduzida.
- **Uso excessivo de desmontagem (`unmount`)**: Pode causar perda de dados do componente.
- **Melhor abordagem**: Evitar desmontar componentes desnecessariamente e utilizar técnicas como `React.memo`.

## 3. Otimização de Renderização (Render Optimization)
O React re-renderiza componentes quando:
- O estado muda (`setState` ou `useState`).
- As `props` mudam.
- O componente pai re-renderiza.

### Técnicas de Otimização

#### 1. `React.memo`
`React.memo` é um **higher-order component (HOC)** que evita re-renderizações desnecessárias ao memorizar o resultado de um componente puro.

```jsx
const MeuComponente = React.memo(function MeuComponente({ nome }) {
  console.log('Renderizou:', nome);
  return <p>Nome: {nome}</p>;
});
```

> **Quando usar?**
> - Em componentes que recebem as mesmas props frequentemente.
> - Em componentes que fazem renderizações pesadas.
> - Evitar uso indiscriminado, pois pode aumentar o custo de memória.

#### 2. `useMemo`
`useMemo` memoriza cálculos pesados para evitar recomputações desnecessárias.

```jsx
import { useMemo } from 'react';

function ListaPesada({ numeros }) {
  const soma = useMemo(() => numeros.reduce((acc, num) => acc + num, 0), [numeros]);
  return <p>Soma: {soma}</p>;
}
```

> **Melhores casos de uso:**
> - Cálculos pesados que não devem ser reexecutados sem necessidade.
> - Geração de listas grandes.

#### 3. `useCallback`
`useCallback` evita recriação de funções inline dentro de componentes filhos.

```jsx
import { useCallback } from 'react';

function Botao({ onClick }) {
  return <button onClick={onClick}>Clique aqui</button>;
}

function App() {
  const handleClick = useCallback(() => {
    console.log('Botão clicado');
  }, []);

  return <Botao onClick={handleClick} />;
}
```

> **Evita:**
> - Recriação desnecessária de funções a cada renderização.

## 4. Exercício Prático
Crie um componente `Loader` que exiba "Carregando..." apenas quando a prop `loading` for `true`.

```jsx
function Loader({ loading }) {
  return loading ? <p>Carregando...</p> : null;
}

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div>
      <Loader loading={isLoading} />
      <button onClick={() => setIsLoading(!isLoading)}>Toggle Loading</button>
    </div>
  );
}
```

## 5. Conclusão
### O que aprendemos hoje?
✅ Como o React processa renderizações
✅ Como renderizar componentes de forma condicional
✅ Como evitar re-renderizações desnecessárias
✅ Uso de `React.memo`, `useMemo` e `useCallback` para otimização

### Próximos Passos
Na próxima aula, vamos abordar **integração com Firebase** e estratégias para gerenciar dados de forma eficiente no React.

📌 **Dúvidas?** Fique à vontade para perguntar!



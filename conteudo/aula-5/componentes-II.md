# Aula: Ciclos de Vida, Propriedades, Estados e Eventos em React

## Objetivos da Aula
- Conhecer os ciclos de vida de um componente.
- Compreender como aplicar propriedades, eventos, estados e ciclos de vida em um componente.
- Anatomia de um componente funcional em React.

---

## **Ciclo de Vida de um Componente**

### O que é o ciclo de vida de um componente?
O ciclo de vida de um componente em React representa as fases pelas quais um componente passa desde a sua criação até a remoção da interface. Em componentes funcionais, os Hooks, como `useEffect`, são utilizados para gerenciar essas fases.

### Fases do ciclo de vida (em componentes funcionais):
1. **Montagem (Mounting):**
   - O componente é inserido na interface.
   - Hook: `useEffect` com dependências vazias.
   ```javascript
   React.useEffect(() => {
     console.log('Componente montado!');
   }, []);
   ```

2. **Atualização (Updating):**
   - Ocorre quando as `props` ou o estado (`state`) mudam.
   - Hook: `useEffect` com dependências específicas.
   ```javascript
   React.useEffect(() => {
     console.log('Componente atualizado!');
   }, [dependencia]);
   ```

3. **Desmontagem (Unmounting):**
   - O componente é removido da interface.
   - Hook: Retorno de limpeza em `useEffect`.
   ```javascript
   React.useEffect(() => {
     return () => {
       console.log('Componente desmontado!');
     };
   }, []);
   ```

### O que o ciclo de vida resolve?
- Gerenciamento de efeitos colaterais (e.g., requisições de dados, subscrições).
- Limpeza de recursos (e.g., listeners, timers).

---

## **Propriedades (Props)**

### Relação entre `children` e `props`

- `props`: Dados passados de um componente pai para um filho.
- `children`: Um tipo especial de `prop` que permite incluir elementos ou componentes dentro de outro componente.

#### Exemplo:
```javascript
function Layout({ children }) {
  return <div className="layout">{children}</div>;
}

function App() {
  return (
    <Layout>
      <h1>Bem-vindo!</h1>
    </Layout>
  );
}
```

### Render Props
Render Props é um padrão para passar funções que retornam elementos JSX como propriedades, aumentando a flexibilidade de componentes.

#### Exemplo:
```javascript
function Renderizador({ render }) {
  return <div>{render()}</div>;
}

function App() {
  return (
    <Renderizador render={() => <h1>Conteúdo dinâmico!</h1>} />
  );
}
```

---

## **Correlação entre Render, Props, Estado e Eventos**

1. **Renderização (`render`)**
   - O React chama a função do componente para gerar a interface.
   - A renderização depende diretamente das `props` e do `estado`.

2. **Props**
   - Dados imutáveis fornecidos pelo pai.
   - Afetam a renderização inicial e todas as atualizações subsequentes.

3. **Estado (`state`)**
   - Dados mutáveis gerenciados internamente pelo componente.
   - Alterações no estado acionam uma nova renderização.

4. **Eventos**
   - Permitem que o usuário interaja com a interface.
   - Alteram o estado ou chamam funções específicas.

#### Exemplo de integração:
```javascript
function Contador({ valorInicial }) {
  const [contador, setContador] = React.useState(valorInicial);

  function incrementar() {
    setContador(contador + 1);
  }

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}
```

---

## Por que migramos de componentes de classe para funcionais?

### Motivações para a migração:
1. **Hooks:** Introduzidos no React 16.8, os Hooks permitem:
   - Gerenciar estado e efeitos colaterais em componentes funcionais.
   - Eliminar a necessidade de classes para lidar com o ciclo de vida.
2. **Sintaxe mais simples:** Componentes funcionais têm menos boilerplate.
3. **Melhoria na performance:** Componentes funcionais têm menos overhead do que classes.

### Ganhos obtidos:
- **Legibilidade:** Código mais conciso e fácil de entender.
- **Testabilidade:** Componentes funcionais são mais simples de testar.
- **Reutilização de lógica:** Hooks personalizados permitem compartilhar lógica entre componentes.

#### Comparação:
##### Antes (Classe):
```javascript
class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contador: props.valorInicial };
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}
```

##### Agora (Funcional):
```javascript
function Contador({ valorInicial }) {
  const [contador, setContador] = React.useState(valorInicial);

  function incrementar() {
    setContador(contador + 1);
  }

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

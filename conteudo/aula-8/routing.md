# Aula de Routing e Navegação com React

## Objetivos da Aula
- Organizar a estrutura da aplicação.
- Configurar a navegabilidade entre componentes.

---

## O que é o React Router?
O React Router é uma biblioteca para gerenciamento de rotas em aplicações React. Ele permite criar uma navegação fluida e eficiente, simulando o comportamento de múltiplas páginas em uma aplicação de página única (SPA).

### Principais funcionalidades:
- Navegação entre componentes.
- Rotas dinâmicas com parâmetros.
- Suporte a navegação baseada em URL.

### Instalação
Para instalar o React Router, execute o seguinte comando:
```bash
npm install react-router-dom
```

### Configuração Básica
1. **Envolver a aplicação com o `BrowserRouter`:**
   ```jsx
   import { BrowserRouter } from 'react-router-dom';

   function App() {
       return (
           <BrowserRouter>
               {/* Outros componentes aqui */}
           </BrowserRouter>
       );
   }

   export default App;
   ```

2. **Definir as rotas com o `Routes` e o `Route`:**
   ```jsx
   import { BrowserRouter, Routes, Route } from 'react-router-dom';
   import Home from './components/Home';
   import About from './components/About';

   function App() {
       return (
           <BrowserRouter>
               <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/about" element={<About />} />
               </Routes>
           </BrowserRouter>
       );
   }

   export default App;
   ```

---

## Navegação com React Router

### Navegação entre rotas
Use o componente `Link` para criar links navegáveis:
```jsx
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    );
}
```

### Navegação com parâmetros
É possível passar parâmetros dinâmicos através da URL:
1. **Definir a rota com parâmetros:**
   ```jsx
   <Route path="/user/:id" element={<UserDetail />} />
   ```

2. **Acessar os parâmetros com `useParams`:**
   ```jsx
   import { useParams } from 'react-router-dom';

   function UserDetail() {
       const { id } = useParams();

       return <h1>Detalhes do Usuário {id}</h1>;
   }
   ```

### Navegação com estilos dinâmicos
Use o componente `NavLink` para aplicar estilos com base na rota ativa:
```jsx
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
        </nav>
    );
}
```

---

## Exercício Prático
1. Instale o `react-router-dom` no projeto.
2. Configure as seguintes rotas no arquivo `App.js`:
   - `/` -> Componente `Home`.
   - `/about` -> Componente `About`.
   - `/user/:id` -> Componente `UserDetail`.
3. Crie uma barra de navegação que permita alternar entre essas rotas.
4. No componente `UserDetail`, exiba o ID do usuário obtido a partir dos parâmetros da URL.

---

## Dicas e Boas Práticas
- Use o `BrowserRouter` para aplicações web e evite o uso do `HashRouter`, exceto em casos específicos.
- Sempre envolva a aplicação inteira no `BrowserRouter`.
- Para rotas dinâmicas, combine `useParams` com `useEffect` para lidar com atualizações baseadas em parâmetros.
- Utilize o `NavLink` para indicar visualmente a rota ativa.

---

## Recursos Adicionais
- [Documentação Oficial do React Router](https://reactrouter.com/)
- [Tutorial de Navegação em React](https://react.dev/)


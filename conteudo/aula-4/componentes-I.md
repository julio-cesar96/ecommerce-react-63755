# Aula: Introdução a Componentes em React com JavaScript

## Objetivos da Aula
- Compreender o que são os componentes e os problemas que resolvem.
- Conhecer os tipos de componentes em React.

---

## **Componentes**

### O que são?
Componentes são blocos reutilizáveis de código que encapsulam a lógica, o layout e o comportamento de uma parte específica da interface do usuário. 

### Como aplicar conceitos de design modular usando componentes?
- Divida a interface em pequenas partes independentes.
- Crie componentes que possam ser reutilizados em diferentes partes da aplicação.

### Quais problemas os componentes resolvem?
- **Manutenção:** Ao encapsular a lógica, fica mais fácil localizar e corrigir problemas.
- **Reutilização:** Reduz a duplicação de código.
- **Colaboração:** Equipes podem trabalhar simultaneamente em diferentes partes da interface.

### Vantagens
- Reutilizáveis em diversos lugares.
- Facilidade para testar individualmente.
- Melhoria na legibilidade e organização do código.

### Desvantagens
- Pode adicionar complexidade inicial para novos desenvolvedores.
- Overhead de gerenciar estados e propriedades entre muitos componentes.

### Como usar?
```javascript
function MeuComponente() {
  return (
    <div>
      <h1>Olá, Mundo!</h1>
    </div>
  );
}
export default MeuComponente;
```

---

## **Propriedades (Props)**

### O que são?
Propriedades são argumentos passados para os componentes, permitindo que eles sejam dinâmicos e personalizáveis.

### Que tipo de problemas elas resolvem?
- Permitem que componentes funcionem de forma genérica e ajustável.
- Facilitam a comunicação de dados de um componente pai para um componente filho.

### Como usar?
```javascript
function Saudacao(props) {
  return <h1>Olá, {props.nome}!</h1>;
}

function App() {
  return <Saudacao nome="João" />;
}
```

### Vantagens
- Flexibilidade ao criar interfaces dinâmicas.
- Melhor separação de responsabilidades.

### Desvantagens
- Pode ser confuso lidar com muitos níveis de propriedades aninhadas.
- Propriedades não podem ser modificadas dentro do componente.

---

## **Children**

### O que é?
`Children` é uma propriedade especial que permite passar elementos JSX ou outros componentes para dentro de outro componente.

### Que tipo de problemas resolve?
- Facilita a criação de layouts que precisam envolver outros elementos.

### Como usar?
```javascript
function Card({ children }) {
  return (
    <div style={{ border: '1px solid #000', padding: '10px' }}>
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>Conteúdo dentro do card</h2>
    </Card>
  );
}
```

### Vantagens
- Melhora a flexibilidade de componentes.
- Permite criar layouts genéricos.

### Desvantagens
- Pode ser mais difícil rastrear o que está sendo renderizado.

---

## **Padrões de Componentes**

### Componentes de Apresentação

#### O que são?
Componentes focados em renderizar a interface do usuário, sem lógica de negócios ou manipulação de estado.

#### Como usar?
```javascript
function Botao({ texto, onClick }) {
  return <button onClick={onClick}>{texto}</button>;
}
```

#### Vantagens
- Simples e fáceis de testar.
- Reutilizáveis em diferentes contextos.

#### Desvantagens
- Dependem de componentes externos para lógica.

---

### Componentes Containers

#### O que são?
Componentes responsáveis pela lógica de negócios e manipulação de estado.

#### Como usar?
```javascript
function ListaUsuarios() {
  const [usuarios, setUsuarios] = React.useState(["João", "Maria"]);

  return (
    <ul>
      {usuarios.map((usuario, index) => (
        <li key={index}>{usuario}</li>
      ))}
    </ul>
  );
}
```

#### Vantagens
- Centralizam a lógica de estado.
- Facilitam o gerenciamento de dados.

#### Desvantagens
- Podem ficar grandes e difíceis de testar.

---

## Por que migramos de componentes de classe para funcionais?

### Principais Motivações
1. **Simplificação do Código:** Componentes funcionais são mais concisos.
2. **Hooks:** Com a introdução de Hooks, funcionalidades como estado e ciclos de vida se tornaram acessíveis aos componentes funcionais.
3. **Performance:** Componentes funcionais podem ser mais performáticos.

### Ganhos Obtidos
- Redução de boilerplate.
- Melhor separação de responsabilidades.
- Melhor experiência para desenvolvedores com APIs simplificadas.

Exemplo de conversão de classe para funcional:
#### Antes (Classe)
```javascript
class MeuComponente extends React.Component {
  render() {
    return <h1>Olá, {this.props.nome}!</h1>;
  }
}
```
#### Depois (Funcional)
```javascript
function MeuComponente({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}

import Button from "./components/Button/Button"
import Card from "./components/Card/Card"
import UserList from "./components/UserList/UserList";

function App() {

  const handleButtonClick = () => {
    console.log("Fui clicado");
  }

  return (
    <>
      <Card>
        <h2> Titulo do card </h2>
        <Button onClick={handleButtonClick} label="Ver mais" />
      </Card>
      <UserList />
    </>
  )
}

export default App

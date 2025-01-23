import { useEffect } from "react";
import { Menu } from "./components/Menu/Menu"
import { Saudacao } from "./components/Saudacao/Saudacao"
import ListaDePost from "./ListaDePost"
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"

function App() {
   const { userId } = useParams();
   useEffect(() => {
      console.log('Recebendo userId:', userId);
      return () => {
        console.log('userId mudando:', userId);
      }
   }, [userId]);
  return (
    <>
      <BrowserRouter>
      <Menu />
        <Routes>
          <Route exact path="/" element={<Saudacao name="Julio" />}/>
          <Route exact path="/post" element={<ListaDePost />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App






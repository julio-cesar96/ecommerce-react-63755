import { useState, useEffect } from "react";


function App() {

  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);

    return () => { // 
      console.log("inicio da limpeza ao componente ser desmontado");
      clearInterval(intervalo);
      console.log("final da limpeza ao componente ser desmontado");
    }
  }, []); //array de dependencias: determina quando o efeito vai ser executado
  
 
  return (
    <>
     <h1> Tempo: {segundos} segundos</h1>
    </>
  )
}

export default App

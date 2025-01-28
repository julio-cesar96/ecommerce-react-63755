function App() {
   const handleClickButton = (event) => {
    console.log("Fui clicado", event);
   }

   const handleInput = (event) => {
   }
  return (
    <>
      <button type="button" onClick={handleClickButton}>Clique em mim </button>
      <input type="text" onKeyDown={handleInput} />
    </>
  )
}

export default App






import { useState } from 'react';

const ClickTracker = () => {
  // Estado para armazenar o número de cliques
  const [clickCount, setClickCount] = useState(0);
  
  // Estado para armazenar a data/hora do último clique
  const [lastClickTime, setLastClickTime] = useState(null);

  // Função chamada ao clicar no botão
  function handleClick() {
    // Incrementa o número de cliques
    setClickCount(clickCount + 1);

    // Atualiza a data/hora do último clique
    setLastClickTime(new Date().toLocaleString());
  }

  return (
    <div>
      {/* Exibe o número de cliques */}
      <p>Você clicou {clickCount} vezes.</p>

      {/* Exibe a data/hora do último clique */}
      <p>Último clique: {lastClickTime || 'Nenhum clique registrado'}</p>

      {/* Botão que registra os cliques */}
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
}

export default ClickTracker;
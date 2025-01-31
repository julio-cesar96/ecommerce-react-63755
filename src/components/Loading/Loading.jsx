import { useState, useEffect } from 'react'

const Loading = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 10000);
    }, []);
    
  return (
    <>
    {loading ? <h2>Carregando componente</h2> : <h3>Componente carregado</h3>}
    </>
  )
}

export default Loading
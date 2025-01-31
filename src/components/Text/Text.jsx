import React from 'react'

const Text = ( { condition } ) => {
  return (
    <h2 style={{ color: !condition ? "red" : "green"}}> Renderização condição usando styles </h2>
  )
}

export default Text

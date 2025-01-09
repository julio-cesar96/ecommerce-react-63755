import React from 'react'

const Render = ( { renderComponent } ) => {
  return (
    <div>
      {renderComponent()};
    </div>
  )
}

export default Render

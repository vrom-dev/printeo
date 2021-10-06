import React from 'react'
import ReactDOM from 'react-dom'

import './style.css'

function App () {
  return <h1 className='hello'>Hello World</h1>
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)

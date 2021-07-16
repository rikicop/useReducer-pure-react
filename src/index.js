import React from 'react'
import ReactDOM from 'react-dom'
import ShoppingList from './ ShoppingList'
/* import Counter from './Counter'*/
import './index.css'


function App() {
  
  return (
    <div>
      <ShoppingList/>
    </div>
  )
}

export default App




ReactDOM.render(<App/>, document.querySelector('#root'));
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>{count}</h1>
        <h2>{count + 1}</h2>
        <h3>{count + 3}</h3>
      </header>
      <button onClick={() => setCount(count + 1)}> Add</button>
    </div>
  )
}

export default App

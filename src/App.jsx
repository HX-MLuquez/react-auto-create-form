import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './component/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Form></Form>
        
    </div>
  )
}

export default App

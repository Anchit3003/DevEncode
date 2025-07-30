import { useState } from 'react'
import './App.css'
import JsonConverter from './assets/component/JsonConverter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <JsonConverter />
    </>
  )
}

export default App

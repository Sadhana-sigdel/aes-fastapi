import { useState } from 'react'
import './App.css'

function App() {
  
  const [plaintext, setPlaintext] = useState("")
  const [key, setKey] = useState("")
  return (

    <div className="App">
      <h1>AES</h1>

      <label>Plaintext: </label>
      <textarea value = {plaintext} onChange= {(event) => setPlaintext(event.target.value)}></textarea><br />

      <label>Key:</label>
      <input value={key} onChange= {(event) => setKey(event.target.value)}/><br/>
      <button onClick= {() => console.log("Encrypt button clicked")}>Encrypt</button>
      <button onClick= {() => console.log("Decrypt button clicked")}> Decrypt</button>
    </div>
  )
}

export default App

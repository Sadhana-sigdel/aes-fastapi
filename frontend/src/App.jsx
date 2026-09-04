import { useState } from 'react'
import './App.css'

function App() {
  
  const [plaintext, setPlaintext] = useState("")
  const [key, setKey] = useState("")

  function encrypt() {
    console.log(plaintext)
    console.log(key)
  
  }

  function decrypt() {
  
  }

  return (

    <div className="App">
      <h1>AES</h1>

      <label>Plaintext: </label>
      <textarea value = {plaintext} onChange= {(event) => setPlaintext(event.target.value)}></textarea><br />

      <label>Key:</label>
      <input value={key} onChange= {(event) => setKey(event.target.value)}/><br/>
      <button onClick= {() => encrypt()}>Encrypt</button>
      <button onClick= {() => decrypt()}> Decrypt</button>
    </div>
  )
}

export default App

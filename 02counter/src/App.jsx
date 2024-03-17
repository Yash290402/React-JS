import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setcounter] = useState(15)

  const addvalue = () => {
    console.log("value added", counter);
    setcounter(counter + 1);
  }

  const removevalue = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
    else {
      console.log("negative not allowed")
    }
  }
  return (
    <>
      <h1>Counter value:{counter}</h1>
      <button onClick={addvalue}>add value{counter}</button>
      <br />
      <button onClick={removevalue}>remove value{counter}</button>
    </>
  )
}

export default App

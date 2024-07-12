import { useState } from 'react'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter=5

  let addValue = () => {
    // counter=counter + 1
    setCounter(counter+1)
    console.log("Clicked", counter);
  }

  let removeValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Hello, React! | Natalian Dsouza</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App

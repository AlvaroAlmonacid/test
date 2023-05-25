import { useState } from 'react'

import './App.css'

function App() {

  const [value1, setValue1] = useState();
  const [value2, setvalue2] = useState();


  const Sumar = () => {
    let total = value1 + value2
    return total
  }

  return (
    <form>
      <label>digito 1  </label>
      <input type="tex" onChange={event => setValue1(event.target.value)}/>
      <label>digito 1  </label>
      <input type="tex"onChange={event => setvalue2(event.target.value)}/>

      <input type="submit" value="sumar" />

      <label> resultado : {Sumar}</label>
    </form>
  )
}

export default App

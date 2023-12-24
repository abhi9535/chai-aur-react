import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


let myObj={
  name:"abhi",
  usn:10
}

let newArr=[1,2,3]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 mb-4' >Tailwind test</h1>
      <Card />
      <br />
      <Card />
    </>
  )
}

export default App

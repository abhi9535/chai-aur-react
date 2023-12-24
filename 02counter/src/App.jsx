import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, myCounter] = useState(0)


   //let counter=15
  
   const addValue=()=>{
      if(counter<20){
        // myCounter(counter+1)
        // myCounter(counter+1)
        // myCounter(counter+1)
        myCounter(prevCounter=>prevCounter+1)
        myCounter(prevCounter=>prevCounter+1)
        myCounter(prevCounter=>prevCounter+1)
        myCounter(prevCounter=>prevCounter+1)
        myCounter(prevCounter=>prevCounter+1)
      }
        
   }

   const removevalue=()=>{
    if(counter>0){
      myCounter(counter-1)
    }
   }

  return (
   <>
   <h1>chai aur react</h1>
   <br />
   <h2>Counter value: {counter}</h2>
   <br />
   <button onClick={addValue}>Add value {counter}</button>
   <br />
   <button onClick={removevalue}>remove value{counter}</button>
   </>
  )
}

export default App

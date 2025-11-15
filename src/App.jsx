import { useState } from 'react'
import './App.css'

function App() {
  const [display,setDisplay]=useState(' ')


  const input=(number)=>{
    setDisplay(String(display)+number);
  }

  const calculate=()=>{
    setDisplay(eval(display))

  }

  const clear=()=>{
    setDisplay('')
  }

  const deleteLastNumber=()=>{
    setDisplay(display.slice(0, -1))

  }





  return (
    <>

      
      <input  value={display} />


      <br />
      
      <button onClick={()=>clear()}>C </button>
      <button onClick={()=>input('/')}>/ </button>
      <button onClick={()=>input('*')}>X</button>
      <button onClick={()=>deleteLastNumber()}>D </button>

      <br />
      
      <button onClick={()=>input(7)}>7 </button>
      
      <button onClick={()=>input(8)}>8 </button>
      
      <button onClick={()=>input(9)}>9 </button>
      
      <button onClick={()=>input('-')}>- </button>
      <br />

      <button onClick={()=>input(4)}>4 </button>
      
      <button onClick={()=>input(5)}>5 </button>
      
      <button onClick={()=>input(6)}>6 </button>
      <button onClick={()=>input('+')}>+ </button>      
      <br />

      <button onClick={()=>input(1)}>1 </button>
      
      <button onClick={()=>input(2)}>2 </button>
      
      <button onClick={()=>input(3)}>3 </button>
      <button onClick={()=>input('%')}>% </button>      
      <br />

      <button onClick={()=>input('0')}>0 </button>
      <button onClick={()=>calculate()}>= </button>







    </>
  



  )
}

export default App

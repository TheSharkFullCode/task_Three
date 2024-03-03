import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formcss from './component/Formcss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center border-[2px] rounded hover:bg-blue'>
      <h1>Vite + React</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="flex items-center  gap-7">
        <button onClick={() => setCount((count) => count + 1)} className='border-[2px] rounded py-2 px-3  hover:bg-purple bg-yellow text-[white] '>
          count is {count}
        </button>
     
        <p className="font-bold  text-[2xl]">     Bienvenido al desafio de 100 dias con css     </p>
      </div>
      
      <Formcss/>
    </>
  )
}

export default App

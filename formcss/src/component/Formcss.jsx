import React, { useState } from 'react'

const Formcss = () => {
  const [great,setGreat] = useState(0)

  const [isClicked, setIsClicked] = useState(false);
    
    // const [top, setTop] = useState(false);
    // const [centro, setCentro] = useState(false);
    // const [button, setButton] = useState(false);
    
   
    const Saludar=()=>{
      setGreat(alert("hello world"))
    }

    const handleClick = () => {
      // setTop(true);
      // setCentro(true);
      // setButton(true);
      setIsClicked(!isClicked);
  };

  const Resetear=()=>{
    
  }

  return (
    <>
    <button className="border-[2px] rounded    hover:bg-pink bg-green text-[white]" onClick={Saludar} >click me</button>
    <button className="border-[2px] rounded    hover:bg-yellow bg-green text-[#3353bd]" onClick={Saludar} > Reset</button>

    <div className='menu mt-4 border-[2px] bg-[#3faf82] rounded' onClick={handleClick} >

                <p className={`linea_1 ${isClicked ? 'top' : ''}`}></p>
                <p className={`linea_2 ${isClicked ? 'centro' : ''}`}></p>
                <p className={`linea_3 ${isClicked ? 'button' : ''}`}></p>
    </div>

    </>
  )

}

export default Formcss
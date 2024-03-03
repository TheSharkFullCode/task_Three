import React, { useState } from 'react'

const Formcss = () => {

  const [isClicked, setIsClicked] = useState(false);
    
    // const [top, setTop] = useState(false);
    // const [centro, setCentro] = useState(false);
    // const [button, setButton] = useState(false);
    
   


    const handleClick = () => {
      // setTop(true);
      // setCentro(true);
      // setButton(true);
      setIsClicked(!isClicked);
  };



  return (
    <>
    <button className="border-[2px] rounded py-2 px-3  hover:bg-pink bg-green text-[white]" >click me</button>

    <div className='menu mt-4' onClick={handleClick} >
      
                <p className={`linea_1 ${isClicked ? 'top' : ''}`}></p>
                <p className={`linea_2 ${isClicked ? 'centro' : ''}`}></p>
                <p className={`linea_3 ${isClicked ? 'button' : ''}`}></p>
    </div>

    </>
  )

}

export default Formcss
import React, { useRef } from 'react';
import { useEffect } from 'react';
import ReactDice, { ReactDiceRef } from 'react-dice-complete';



const MyDiceApp = () => {
  const reactDice = useRef(null);

  const rollDone = (totalValue, values) => {
    console.log('individual die values array:', values);
    console.log('total dice value:', totalValue);
  };

  useEffect(()=>{
    setTimeout(() => {
      
      reactDice.current.rollAll([5, 1])
    }, 2000);
  },[])

 

  return (
    <>
    <ReactDice
      numDice={2}
      ref={reactDice}
      rollDone={rollDone}
        faceColor="radial-gradient(rgb(255, 60, 60), rgb(180, 0, 0))"
        dotColor="#fff"
        dieSize={40}
    />
      <button onClick={() => reactDice.current.rollAll([5, 1])}>Roll 6s</button>
    </>
    
  );
};

export default MyDiceApp;




const Dice =()=>{
  return(
  <>
  </>
  )
}
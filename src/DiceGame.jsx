import { Html, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import { animated as a,useSpring } from '@react-spring/three'

import { Dices } from './Dices';



const faces = ['one', 'two', 'three', 'four', 'five', 'six'];

function Dice({ position, color,setScore,cheatFactor = 1 }){
  const dieRef = useRef();
  const [rolling, setRolling] = useState(false);
  const [face, setFace] = useState(1)

  const {rotation}=useSpring({
    rotation: rolling ? [Math.random() * 5, Math.random() * 5, Math.random() * 5] : [0, 0, 0],
  })

//  const rollDie = () => {
//     const newFace = Math.floor(Math.random() * 6) + 1;
//     setRolling(true);
//     setTimeout(() => setRolling(false), 1000); // Assuming the animation lasts 1 
    
//     setTimeout(() => {
//       setScore(newFace);
//     }, 2000);
//   };



//   useEffect(()=>{
//     setTimeout(() => {
//       rollDie()
//     }, 1000);
   
//   },[])


const rollDie = () => {
    const newFace = Math.floor(Math.random() * 6) + 1;
    // Apply cheat factor to the face value
    const cheatedFace = Math.min(6, Math.max(1, newFace + cheatFactor));
    setRolling(true);

    setTimeout(() => {
      setRolling(false);
      setScore(cheatedFace);
    }, 1000); // Assuming the animation lasts 1 second
  };

  useEffect(() => {
    setTimeout(() => {
      rollDie();
    }, 1000);
  }, []);





  return(

    <a.mesh
    castShadow
    position={position} 
    ref={dieRef}
    rotation={rotation}
    onClick={rollDie}
    scale={rolling ? [1.5, 1.5, 1.5] : [1, 1, 1]}
    >
      {/* <Dices/> */}
    
    <boxGeometry attach="geometry" args={[1, 1, 1]} />
    <a.meshBasicMaterial color={color}/>
    
  </a.mesh>
  )
}




function DiceGame() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const cheatFactor1 = 2; // Set the cheat factor for the first die
  const cheatFactor2 = -1; // Set the cheat factor for the second die
  return (

   <>
   <Canvas>
    <OrbitControls/>
    <ambientLight intensity={1}/>
    <directionalLight
    castShadow
    position={[5, 5, 5]}
    intensity={1}
    shadow-mapSize-width={1024}
    shadow-mapSize-height={1024}
    shadow-camera-far={50}
    shadow-camera-left={-10}
    shadow-camera-right={10}
    shadow-camera-top={10}
    shadow-camera-bottom={-10}
    />
    <Dice position={[-1,0,0]}  color="blue"  setScore={setScore1} cheatFactor={cheatFactor1}/>
    <Dice position={[1,0,0]} color="blue" setScore={setScore2} cheatFactor={cheatFactor2}/>


    <Html>
    <div style={{ position: 'absolute', top: 200, left:200, color: '#000000',fontSize:"50px" }}>
      Score :{score1}
      </div>
      <div style={{ position: 'absolute', top: 200, left:500, color: '#000000',fontSize:"50px" }}>
      Score2 :{score2}
      </div>
      
      <div >
        
    Total : {score1 + score2}
      </div>
    </Html>
   </Canvas>
   </>
    
  )
}

export default DiceGame

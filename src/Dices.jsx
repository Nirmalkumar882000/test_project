

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Dices(props) {
  const { nodes, materials } = useGLTF('/modal/dice.glb')
  return (
    <group {...props} dispose={null} scale={1}>
      <group position={[0, 0, -0.298]}>
        <group scale={0.244}>
          <mesh geometry={nodes.DadopCube8_DadoColorAgujeros_0.geometry} material={materials.DadoColorAgujeros} />
          <mesh geometry={nodes.DadopCube8_DadoColor_0.geometry} material={materials.DadoColor} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/modal/dice.glb')

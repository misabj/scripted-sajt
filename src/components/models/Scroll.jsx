/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/svitak.glb')

  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.007 
  })

  return (
    <group {...props} dispose={null} ref={modelRef} 
    scale={[0.2,0.2,0.2]} 
    position={[0,0,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['14059_Pirate_Treasure_map_Scroll_v1_L1'].geometry}
        material={materials['14059PirateTreasuremapScroll']}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/svitak.glb')
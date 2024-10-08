/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function Laptop(props) {
  const { nodes, materials } = useGLTF('/models/laptop1.glb')

  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.010
  })

  return (
    <group {...props} dispose={null} ref={modelRef}>
      <group position={[0, 0, -0.325]} scale={2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AMD.geometry}
          material={materials['Logo AMD']}
          position={[-0.636, -0.445, 0.153]}
          scale={0.045}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={materials.F}
          position={[0.612, -0.441, -0.357]}
          scale={0.008}
        />
        <group position={[0.368, -0.441, -0.295]} rotation={[0, -0.747, 0]} scale={0.06}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve_1.geometry}
            material={materials.Merah}
          />
          <mesh castShadow receiveShadow geometry={nodes.Curve_2.geometry} material={materials.F} />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve_3.geometry}
            material={materials.Lightbar}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve018.geometry}
          material={materials['Teks Bawah']}
          position={[-0.653, -0.524, -0.441]}
          rotation={[0, 0, Math.PI]}
          scale={0.105}
        />
        <group
          position={[0.765, -0.447, -0.486]}
          rotation={[-0.175, 0, 0]}
          scale={[0.435, 0.668, 0.435]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials['Metal 1']}
            position={[-3.381, 0.111, 0.016]}
            scale={[1.035, 0.68, 1]}
          />
          <group
            position={[-1.76, 0.892, -0.001]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1, 1, 0.651]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001_1.geometry}
              material={materials.Layar}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001_2.geometry}
              material={materials.Touchpad}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001_3.geometry}
              material={materials['Metal 1']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001_4.geometry}
              material={materials.Logo}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001_5.geometry}
              material={materials['Web Cam']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text053.geometry}
            material={materials['Logo Text']}
            position={[-3.042, 0.158, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.057, 0.057, 0.037]}
          />
        </group>
        <group position={[0, -0.446, -0.009]} scale={0.435}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_1.geometry}
            material={materials['Metal 1']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_2.geometry}
            material={materials.Touchpad}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_3.geometry}
            material={materials['Metal 2']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_4.geometry}
            material={materials.Lightbar}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.Keyboard}
          position={[-0.476, -0.441, -0.019]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials.Keyboard}
          position={[-0.512, -0.441, -0.092]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials.Keyboard}
          position={[-0.531, -0.441, -0.164]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials.Keyboard}
          position={[-0.642, -0.441, -0.237]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials.Keyboard}
          position={[-0.642, -0.441, -0.164]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials.Keyboard}
          position={[-0.642, -0.441, -0.091]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials.Keyboard}
          position={[-0.596, -0.441, -0.019]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials.Keyboard}
          position={[-0.642, -0.441, 0.055]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials.Keyboard}
          position={[-0.549, -0.441, 0.055]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials.Keyboard}
          position={[-0.328, -0.441, 0.055]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials.Keyboard}
          position={[0.044, -0.441, 0.055]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials.Keyboard}
          position={[0.119, -0.441, 0.055]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014.geometry}
          material={materials.Keyboard}
          position={[0.343, -0.441, -0.091]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015.geometry}
          material={materials.Keyboard}
          position={[0.288, -0.441, -0.019]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016.geometry}
          material={materials.Keyboard}
          position={[0.305, -0.441, -0.164]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017.geometry}
          material={materials.Keyboard}
          position={[0.352, -0.441, -0.237]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane018.geometry}
          material={materials.Keyboard}
          position={[-0.642, -0.441, -0.31]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019.geometry}
          material={materials.Keyboard}
          position={[-0.494, -0.441, -0.31]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020.geometry}
          material={materials.Keyboard}
          position={[-0.174, -0.441, -0.31]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021.geometry}
          material={materials.Keyboard}
          position={[0.146, -0.441, -0.31]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane022.geometry}
          material={materials.Keyboard}
          position={[0.381, -0.441, 0.093]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023.geometry}
          material={materials.Keyboard}
          position={[0.303, -0.441, 0.044]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane024.geometry}
          material={materials.Keyboard}
          position={[0.478, -0.441, 0.055]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane025.geometry}
          material={materials.Keyboard}
          position={[0.6, -0.441, 0.055]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026.geometry}
          material={materials.Keyboard}
          position={[0.6, -0.441, -0.019]}
          scale={0.032}
        />
        <group position={[0.6, -0.441, -0.091]} scale={0.032}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane029_1.geometry}
            material={materials.Keyboard}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane029_2.geometry}
            material={materials.Bawah}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028.geometry}
          material={materials.Keyboard}
          position={[0.6, -0.441, -0.164]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane029.geometry}
          material={materials.Keyboard}
          position={[0.6, -0.441, -0.237]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane030.geometry}
          material={materials.Keyboard}
          position={[0.442, -0.441, -0.31]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane031.geometry}
          material={materials.Keyboard}
          position={[0.661, -0.441, -0.237]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane032.geometry}
          material={materials.Keyboard}
          position={[0.661, -0.441, -0.164]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033.geometry}
          material={materials.Keyboard}
          position={[0.661, -0.441, -0.019]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane034.geometry}
          material={materials.Keyboard}
          position={[-0.494, -0.441, -0.372]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane035.geometry}
          material={materials.Keyboard}
          position={[0.612, -0.441, -0.357]}
          scale={0.034}
        />
        <group position={[0, -0.517, -0.003]} rotation={[-Math.PI, 0, 0]} scale={0.435}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane040.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane040_1.geometry}
            material={materials['Metal 1']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane040_2.geometry}
            material={materials.Hole}
          />
        </group>
        <group position={[-0.62, -0.499, 0.44]} scale={0.435}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane041.geometry}
            material={materials['Metal 1']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane041_1.geometry}
            material={materials.Bawah}
          />
        </group>
        <group
          position={[0.872, -0.443, 0.49]}
          rotation={[-Math.PI, 0.684, 0]}
          scale={[0.765, 0.435, 0.001]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane060.geometry}
            material={nodes.Plane060.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane060_1.geometry}
            material={materials.Logo}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RTX.geometry}
          material={materials['Logo RTX']}
          position={[-0.51, -0.445, 0.153]}
          scale={0.045}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials['Logo ROG']}
          position={[-0.423, -0.43, -0.538]}
          rotation={[2.918, 0, Math.PI]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text086.geometry}
          material={materials.Merah}
          position={[0.621, -0.441, -0.387]}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text109.geometry}
          material={materials.Indikator}
          position={[0.148, -0.441, -0.412]}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text141.geometry}
          material={materials['Teks Bawah']}
          position={[0.686, -0.524, -0.468]}
          rotation={[-Math.PI, 0, 0]}
          scale={-0.021}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/laptop1.glb')
import { useRef, useState } from 'react'
import { useGLTF, } from '@react-three/drei';
//import { useFrame } from '@react-three/fiber';

export const Flag = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/flag/model.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0,]} >
        <mesh geometry={nodes.Cube1351.geometry} material={materials['Blue.011']} />
        <mesh geometry={nodes.Cube1351_1.geometry} material={materials['Brown.006']} />
        <mesh geometry={nodes.Cube1351_2.geometry} material={materials['Metal.019']} />
      </group>
    </group>
  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/flag/model.gltf') 
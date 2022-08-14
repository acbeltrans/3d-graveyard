import { useRef, useState, useEffect } from 'react'
import { useGLTF, } from '@react-three/drei';

export const Altar = (props) => {
    const group = useRef();
    const { nodes, animations } = useGLTF("models/altarStone.glb");
  return (
    <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.altarStone.geometry} material={nodes.altarStone.material}>
        </mesh>
    </group>
  )
}

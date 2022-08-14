import { useRef, useState, useEffect } from 'react'
import { useGLTF, } from '@react-three/drei';

export const Candle = (props) => {
    const group = useRef();
    const { nodes, animations } = useGLTF("models/candle.glb");
  return (
    <group ref={group} {...props} dispose={null}>
        <mesh >
            <mesh geometry={nodes.Mesh_candle.geometry} material={nodes.Mesh_candle.material} />
            <mesh geometry={nodes.Mesh_candle_1.geometry} material={nodes.Mesh_candle_1.material} />
        </mesh>
    </group>
  )
}

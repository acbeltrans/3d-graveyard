import { useRef, useState, useEffect } from 'react'
import { useGLTF, } from '@react-three/drei';

export const Coffin = (props) => {
    const group = useRef();
    const { nodes, animations } = useGLTF("models/coffin.glb");
  return (
    <group ref={group} {...props} dispose={null}>
        <mesh >
            <mesh geometry={nodes.Mesh_coffin.geometry} material={nodes.Mesh_coffin.material} />
            <mesh geometry={nodes.Mesh_coffin_1.geometry} material={nodes.Mesh_coffin_1.material} />
            <mesh geometry={nodes.lid.geometry} material={nodes.lid.material} />
        </mesh>
    </group>
  )
}

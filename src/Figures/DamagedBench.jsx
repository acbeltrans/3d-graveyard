import { useRef, useState, useEffect } from 'react'
import { useGLTF, } from '@react-three/drei';

export const DamagedBench = (props) => {
    const group = useRef();
    const { nodes, animations } = useGLTF("models/benchDamaged.glb");
  return (
    <group ref={group} {...props} dispose={null}>
        <mesh >
            <mesh>
                <mesh geometry={nodes['Mesh_benchBroken_%8angles'].geometry} material={nodes['Mesh_benchBroken_%8angles'].material} />
                <mesh geometry={nodes['Mesh_benchBroken_%8angles_1'].geometry} material={nodes['Mesh_benchBroken_%8angles_1'].material} />
            </mesh>
        </mesh>
    </group>
  )
}

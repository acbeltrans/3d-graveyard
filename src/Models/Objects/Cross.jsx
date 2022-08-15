import { useRef } from 'react'
import { useGLTF, } from '@react-three/drei';

export const Cross = (props) => {
    const group = useRef();
    const { nodes } = useGLTF("models/cross.glb");
  return (
    <group ref={group} {...props} dispose={null}>
        <mesh position={nodes.cross.position} scale={nodes.cross.scale}>
            <mesh geometry={nodes.Mesh_cross.geometry} material={nodes.Mesh_cross.material} position={nodes.Mesh_cross.position} scale={nodes.Mesh_cross.scale} />
            <mesh geometry={nodes.Mesh_cross_1.geometry} material={nodes.Mesh_cross_1.material} position={nodes.Mesh_cross_1.position} scale={nodes.Mesh_cross_1.scale} />
        </mesh>
    </group>
  )
}

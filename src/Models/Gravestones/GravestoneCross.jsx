import { useRef } from 'react'
import { useGLTF, } from '@react-three/drei';

export const GravestoneCross = (props) => {
    const group = useRef();
    const { nodes } = useGLTF("models/gravestoneCross.glb");
  return (
    <group ref={group} {...props} dispose={null}>
        <mesh position={nodes.gravestoneCross.position} scale={nodes.gravestoneCross.scale} >
            <mesh geometry={nodes.Mesh_gravestoneCross.geometry} material={nodes.Mesh_gravestoneCross.material} position={nodes.Mesh_gravestoneCross.position} scale={nodes.Mesh_gravestoneCross.scale} />
            <mesh geometry={nodes.Mesh_gravestoneCross_1.geometry} material={nodes.Mesh_gravestoneCross_1.material} position={nodes.Mesh_gravestoneCross_1.position} scale={nodes.Mesh_gravestoneCross_1.scale} />
        </mesh>
    </group>
  )
}
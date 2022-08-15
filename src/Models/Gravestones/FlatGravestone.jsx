import { useRef } from 'react'
import { useGLTF, } from '@react-three/drei';

export const FlatGravestone = (props) => {
    const group = useRef();
    const { nodes } = useGLTF("models/gravestoneFlatOpen.glb");
  return (
    <group ref={group} {...props} dispose={null}>
        <mesh position={nodes.gravestoneFlatOpen.position} scale={nodes.gravestoneFlatOpen.scale} >
            <mesh geometry={nodes.Mesh_gravestoneFlatOpen.geometry} material={nodes.Mesh_gravestoneFlatOpen.material} position={nodes.Mesh_gravestoneFlatOpen.position} scale={nodes.Mesh_gravestoneFlatOpen.scale} />
            <mesh geometry={nodes.Mesh_gravestoneFlatOpen_1.geometry} material={nodes.Mesh_gravestoneFlatOpen_1.material} position={nodes.Mesh_gravestoneFlatOpen_1.position} scale={nodes.Mesh_gravestoneFlatOpen_1.scale} />
            <mesh geometry={nodes.lid.geometry} material={nodes.lid.material} position={nodes.lid.position} scale={nodes.lid.scale} />
        </mesh>
    </group>
  )
}
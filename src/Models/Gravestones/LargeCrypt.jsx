import { useRef } from 'react'
import { useGLTF, } from '@react-three/drei';

export const LargeCrypt = (props) => {
    const group = useRef();
    const { nodes } = useGLTF("models/cryptLarge.glb");
    const roof = useGLTF("models/cryptLargeRoof.glb");
  return (
    <group ref={group} {...props} dispose={null}>
        <mesh position={nodes.cryptLarge.position} scale={nodes.cryptLarge.scale} >
            <mesh geometry={nodes.Mesh_cryptLarge.geometry} material={nodes.Mesh_cryptLarge.material} position={nodes.Mesh_cryptLarge.position} scale={nodes.Mesh_cryptLarge.scale} />
            <mesh geometry={nodes.Mesh_cryptLarge_1.geometry} material={nodes.Mesh_cryptLarge_1.material} position={nodes.Mesh_cryptLarge_1.position} scale={nodes.Mesh_cryptLarge_1.scale} />
            <mesh geometry={nodes.Mesh_cryptLarge_2.geometry} material={nodes.Mesh_cryptLarge_2.material} position={nodes.Mesh_cryptLarge_2.position} scale={nodes.Mesh_cryptLarge_2.scale} />
        </mesh>
        <mesh position={[0,1,0]} scale={roof.nodes.cryptLargeRoof.scale} >
            <mesh geometry={roof.nodes.Mesh_cryptLargeRoof.geometry} material={roof.nodes.Mesh_cryptLargeRoof.material} position={roof.nodes.Mesh_cryptLargeRoof.position} scale={roof.nodes.Mesh_cryptLargeRoof.scale} />
            <mesh geometry={roof.nodes.Mesh_cryptLargeRoof_1.geometry} material={roof.nodes.Mesh_cryptLargeRoof_1.material} position={roof.nodes.Mesh_cryptLargeRoof_1.position} scale={roof.nodes.Mesh_cryptLargeRoof_1.scale} />
        </mesh>
    </group>
  )
}
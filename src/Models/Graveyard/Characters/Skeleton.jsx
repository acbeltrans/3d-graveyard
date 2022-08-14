import { useRef } from 'react'
import { useGLTF, } from '@react-three/drei';

export const Skeleton = (props) => {
    const group = useRef();
    const { nodes } = useGLTF("models/characterSkeleton.glb");
  return (
    <group ref={group} {...props} dispose={null}>
        <mesh position={nodes.characterSkeleton.position} scale={nodes.characterSkeleton.scale}>
            <mesh position={nodes.head.position} scale={nodes.head.scale}>
                <mesh geometry={nodes.Mesh_head.geometry} material={nodes.Mesh_head.material} position={nodes.Mesh_head.position} scale={nodes.Mesh_head.scale} />
                <mesh geometry={nodes.Mesh_head_1.geometry} material={nodes.Mesh_head_1.material} position={nodes.Mesh_head_1.position} scale={nodes.Mesh_head_1.scale}/>
            </mesh>
            <mesh geometry={nodes.armLeft.geometry} material={nodes.armLeft.material} position={nodes.armLeft.position} scale={nodes.armLeft.scale}/>
            <mesh geometry={nodes.armRight.geometry} material={nodes.armRight.material} position={nodes.armRight.position} scale={nodes.armRight.scale} />
            <mesh geometry={nodes.body.geometry} material={nodes.body.material} position={nodes.body.position} scale={nodes.body.scale} />
            <mesh geometry={nodes.legLeft.geometry} material={nodes.legLeft.material} position={nodes.legLeft.position} scale={nodes.legLeft.scale}/>
            <mesh geometry={nodes.legRight.geometry} material={nodes.legRight.material} position={nodes.legRight.position} scale={nodes.legRight.scale}/>
        </mesh>
                
    </group>
  )
}

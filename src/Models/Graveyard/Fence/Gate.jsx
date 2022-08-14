import { useRef} from 'react'
import { useGLTF, } from '@react-three/drei';

export const Gate = (props) => {
    const group = useRef();
    const { nodes } = useGLTF("models/ironFenceBorderGate.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh position={nodes.ironFenceBorderGate.position} scale={nodes.ironFenceBorderGate.scale}>
        <mesh geometry={nodes.Mesh_ironFenceBorderGate.geometry} material={nodes.Mesh_ironFenceBorderGate.material} position={nodes.Mesh_ironFenceBorderGate.position} scale={nodes.Mesh_ironFenceBorderGate.scale}/>
        <mesh geometry={nodes.Mesh_ironFenceBorderGate_1.geometry} material={nodes.Mesh_ironFenceBorderGate_1.material} position={nodes.Mesh_ironFenceBorderGate_1.position} scale={nodes.Mesh_ironFenceBorderGate_1.scale}/>
      </mesh>
    </group>
  )
}

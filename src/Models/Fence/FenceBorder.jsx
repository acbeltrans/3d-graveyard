import { useRef} from 'react'
import { useGLTF, } from '@react-three/drei';

export const FenceBorder = (props) => {
    const group = useRef();
    const { nodes } = useGLTF("models/ironFenceBorderColumn.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh position={nodes.ironFenceBorderColumn.position} scale={nodes.ironFenceBorderColumn.scale}>
        <mesh geometry={nodes.Mesh_ironFenceBorderColumn.geometry} material={nodes.Mesh_ironFenceBorderColumn.material} position={nodes.Mesh_ironFenceBorderColumn.position} scale={nodes.Mesh_ironFenceBorderColumn.scale}/>
        <mesh geometry={nodes.Mesh_ironFenceBorderColumn_1.geometry} material={nodes.Mesh_ironFenceBorderColumn_1.material} position={nodes.Mesh_ironFenceBorderColumn_1.position} scale={nodes.Mesh_ironFenceBorderColumn_1.scale}/>
      </mesh>
    </group>
  )
}

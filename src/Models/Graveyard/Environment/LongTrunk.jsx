import { useRef} from 'react'
import { useGLTF, } from '@react-three/drei';

export const LongTrunk = (props) => {
    const group = useRef();
    const { nodes } = useGLTF("models/trunkLong.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh position={nodes.trunkLong.position} scale={nodes.trunkLong.scale}>
        <mesh geometry={nodes.Mesh_trunkLong.geometry} material={nodes.Mesh_trunkLong.material} position={nodes.Mesh_trunkLong.position} scale={nodes.Mesh_trunkLong.scale}/>
        <mesh geometry={nodes.Mesh_trunkLong_1.geometry} material={nodes.Mesh_trunkLong_1.material} position={nodes.Mesh_trunkLong_1.position} scale={nodes.Mesh_trunkLong_1.scale}/>
      </mesh>
    </group>
  )
}

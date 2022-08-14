import { useRef} from 'react'
import { useGLTF, } from '@react-three/drei';

export const Grass = (props) => {
    const group = useRef();
    const { nodes } = useGLTF("models/ground_grass.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.ground_grass.geometry} material={nodes.ground_grass.material} position={nodes.ground_grass.position} scale={nodes.ground_grass.scale}/>
    </group>
  )
}

import { useRef } from 'react'
import { useGLTF, } from '@react-three/drei';

export const SmallCrypt = (props) => {
    const group = useRef();
    const { nodes } = useGLTF("models/crypt.glb");
  return (
    <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.crypt.geometry} material={nodes.crypt.material} position={nodes.crypt.position} scale={nodes.crypt.scale} />
    </group>
  )
}
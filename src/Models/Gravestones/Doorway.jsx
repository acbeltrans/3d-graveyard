import { useRef } from 'react'
import { useGLTF, } from '@react-three/drei';

export const Doorway = (props) => {
    const group = useRef();
    const { nodes } = useGLTF("models/cryptSmallDoorwayAlternative.glb");
  return (
    <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.cryptSmallDoorwayAlternative.geometry} material={nodes.cryptSmallDoorwayAlternative.material} position={nodes.cryptSmallDoorwayAlternative.position} scale={nodes.cryptSmallDoorwayAlternative.scale} />
    </group>
  )
}

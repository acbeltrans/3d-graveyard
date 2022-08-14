import { useRef } from 'react'
import { useGLTF, } from '@react-three/drei';

export const Candle = (props) => {
    const group = useRef();
    const { nodes } = useGLTF("models/candle.glb");
  return (
    <group ref={group} {...props} dispose={null}>
        <mesh position={nodes.candle.position} scale={nodes.candle.scale} >
            <mesh geometry={nodes.Mesh_candle.geometry} material={nodes.Mesh_candle.material} position={nodes.Mesh_candle.position} scale={nodes.Mesh_candle.scale} />
            <mesh geometry={nodes.Mesh_candle_1.geometry} material={nodes.Mesh_candle_1.material} position={nodes.Mesh_candle_1.position} scale={nodes.Mesh_candle_1.scale} />
        </mesh>
    </group>
  )
}

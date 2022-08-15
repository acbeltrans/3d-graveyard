import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const Road = (props) => {
  const group = useRef()
  const { nodes } = useGLTF('models/road.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.road.geometry}
        material={nodes.road.material}
        position={nodes.road.position}
        scale={nodes.road.scale}
      />
    </group>
  )
}

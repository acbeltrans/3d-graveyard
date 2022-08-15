import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const BrokenGravestone = (props) => {
  const group = useRef()
  const { nodes } = useGLTF('models/gravestoneBroken.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.gravestoneBroken.geometry}
        material={nodes.gravestoneBroken.material}
        position={nodes.gravestoneBroken.position}
        scale={nodes.gravestoneBroken.scale}
      />
    </group>
  )
}

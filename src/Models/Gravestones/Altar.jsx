{
  /* Altar Model */
}
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const Altar = (props) => {
  const group = useRef()
  const { nodes } = useGLTF('models/altarStone.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.altarStone.geometry}
        material={nodes.altarStone.material}
        position={nodes.altarStone.position}
        scale={nodes.altarStone.scale}
      />
    </group>
  )
}

import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const Coffin = (props) => {
  const group = useRef()
  const { nodes } = useGLTF('models/coffin.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh position={nodes.coffin.position} scale={nodes.coffin.scale}>
        <mesh
          geometry={nodes.Mesh_coffin.geometry}
          material={nodes.Mesh_coffin.material}
          position={nodes.Mesh_coffin.position}
          scale={nodes.Mesh_coffin.scale}
        />
        <mesh
          geometry={nodes.Mesh_coffin_1.geometry}
          material={nodes.Mesh_coffin_1.material}
          position={nodes.Mesh_coffin_1.position}
          scale={nodes.Mesh_coffin_1.scale}
        />
        <mesh
          geometry={nodes.lid.geometry}
          material={nodes.lid.material}
          position={nodes.lid.position}
          scale={nodes.lid.scale}
        />
      </mesh>
    </group>
  )
}

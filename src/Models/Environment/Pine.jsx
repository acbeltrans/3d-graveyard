import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const Pine = (props) => {
  const group = useRef()
  const { nodes } = useGLTF('models/pine.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh position={nodes.pine.position} scale={nodes.pine.scale}>
        <mesh
          geometry={nodes.Mesh_pine.geometry}
          material={nodes.Mesh_pine.material}
          position={nodes.Mesh_pine.position}
          scale={nodes.Mesh_pine.scale}
        />
        <mesh
          geometry={nodes.Mesh_pine_1.geometry}
          material={nodes.Mesh_pine_1.material}
          position={nodes.Mesh_pine_1.position}
          scale={nodes.Mesh_pine_1.scale}
        />
        <mesh
          geometry={nodes.Mesh_pine_2.geometry}
          material={nodes.Mesh_pine_2.material}
          position={nodes.Mesh_pine_2.position}
          scale={nodes.Mesh_pine_2.scale}
        />
      </mesh>
    </group>
  )
}

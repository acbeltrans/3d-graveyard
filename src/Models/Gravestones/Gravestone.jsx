import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const Gravestone = (props) => {
  const group = useRef()
  const { nodes } = useGLTF('models/gravestoneBevel.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        position={nodes.gravestoneBevel.position}
        scale={nodes.gravestoneBevel.scale}
      >
        <mesh
          geometry={nodes.Mesh_gravestoneBevel.geometry}
          material={nodes.Mesh_gravestoneBevel.material}
          position={nodes.Mesh_gravestoneBevel.position}
          scale={nodes.Mesh_gravestoneBevel.scale}
        />
        <mesh
          geometry={nodes.Mesh_gravestoneBevel_1.geometry}
          material={nodes.Mesh_gravestoneBevel_1.material}
          position={nodes.Mesh_gravestoneBevel_1.position}
          scale={nodes.Mesh_gravestoneBevel_1.scale}
        />
      </mesh>
    </group>
  )
}

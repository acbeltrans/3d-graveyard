{
  /* Fence Model */
}
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const Fence = (props) => {
  const group = useRef()
  const { nodes } = useGLTF('models/ironFenceBorder.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        position={nodes.ironFenceBorder.position}
        scale={nodes.ironFenceBorder.scale}
      >
        <mesh
          geometry={nodes.Mesh_ironFenceBorder.geometry}
          material={nodes.Mesh_ironFenceBorder.material}
          position={nodes.Mesh_ironFenceBorder.position}
          scale={nodes.Mesh_ironFenceBorder.scale}
        />
        <mesh
          geometry={nodes.Mesh_ironFenceBorder_1.geometry}
          material={nodes.Mesh_ironFenceBorder_1.material}
          position={nodes.Mesh_ironFenceBorder_1.position}
          scale={nodes.Mesh_ironFenceBorder_1.scale}
        />
      </mesh>
    </group>
  )
}

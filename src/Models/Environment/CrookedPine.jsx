import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const CrookedPine = (props) => {
  const group = useRef()
  const { nodes } = useGLTF('models/pineCrooked.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        position={nodes.pineCrooked.position}
        scale={nodes.pineCrooked.scale}
      >
        <mesh
          geometry={nodes.Mesh_pineCrooked.geometry}
          material={nodes.Mesh_pineCrooked.material}
          position={nodes.Mesh_pineCrooked.position}
          scale={nodes.Mesh_pineCrooked.scale}
        />
        <mesh
          geometry={nodes.Mesh_pineCrooked_1.geometry}
          material={nodes.Mesh_pineCrooked_1.material}
          position={nodes.Mesh_pineCrooked_1.position}
          scale={nodes.Mesh_pineCrooked_1.scale}
        />
        <mesh
          geometry={nodes.Mesh_pineCrooked_2.geometry}
          material={nodes.Mesh_pineCrooked_2.material}
          position={nodes.Mesh_pineCrooked_2.position}
          scale={nodes.Mesh_pineCrooked_2.scale}
        />
      </mesh>
    </group>
  )
}

{
  /* Lightpost Model */
}
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const Lightpost = (props) => {
  const group = useRef()
  const { nodes } = useGLTF('models/lightpostAll.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        position={nodes.lightpostAll.position}
        scale={nodes.lightpostAll.scale}
      >
        <mesh
          geometry={nodes.Mesh_lightpostAll.geometry}
          material={nodes.Mesh_lightpostAll.material}
          position={nodes.Mesh_lightpostAll.position}
          scale={nodes.Mesh_lightpostAll.scale}
        />
        <mesh
          geometry={nodes.Mesh_lightpostAll_1.geometry}
          material={nodes.Mesh_lightpostAll_1.material}
          position={nodes.Mesh_lightpostAll_1.position}
          scale={nodes.Mesh_lightpostAll_1.scale}
        />
        <mesh
          geometry={nodes.Mesh_lightpostAll_2.geometry}
          material={nodes.Mesh_lightpostAll_2.material}
          position={nodes.Mesh_lightpostAll_2.position}
          scale={nodes.Mesh_lightpostAll_2.scale}
        />
      </mesh>
    </group>
  )
}

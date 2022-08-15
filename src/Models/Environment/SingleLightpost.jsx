{
  /* Single Lightpost Model */
}
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const SingleLightpost = (props) => {
  const group = useRef()
  const { nodes } = useGLTF('models/lightpostSingle.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        position={nodes.lightpostSingle.position}
        scale={nodes.lightpostSingle.scale}
      >
        <mesh
          geometry={nodes.Mesh_lightpostSingle.geometry}
          material={nodes.Mesh_lightpostSingle.material}
          position={nodes.Mesh_lightpostSingle.position}
          scale={nodes.Mesh_lightpostSingle.scale}
        />
        <mesh
          geometry={nodes.Mesh_lightpostSingle_1.geometry}
          material={nodes.Mesh_lightpostSingle_1.material}
          position={nodes.Mesh_lightpostSingle_1.position}
          scale={nodes.Mesh_lightpostSingle_1.scale}
        />
        <mesh
          geometry={nodes.Mesh_lightpostSingle_2.geometry}
          material={nodes.Mesh_lightpostSingle_2.material}
          position={nodes.Mesh_lightpostSingle_2.position}
          scale={nodes.Mesh_lightpostSingle_2.scale}
        />
      </mesh>
    </group>
  )
}

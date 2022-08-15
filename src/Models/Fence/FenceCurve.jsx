{
  /* Fence Curve Model */
}
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const FenceCurve = (props) => {
  const group = useRef()
  const { nodes } = useGLTF('models/ironFenceBorderCurve.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        position={nodes.ironFenceBorderCurve.position}
        scale={nodes.ironFenceBorderCurve.scale}
      >
        <mesh
          geometry={nodes.Mesh_ironFenceBorderCurve.geometry}
          material={nodes.Mesh_ironFenceBorderCurve.material}
          position={nodes.Mesh_ironFenceBorderCurve.position}
          scale={nodes.Mesh_ironFenceBorderCurve.scale}
        />
        <mesh
          geometry={nodes.Mesh_ironFenceBorderCurve_1.geometry}
          material={nodes.Mesh_ironFenceBorderCurve_1.material}
          position={nodes.Mesh_ironFenceBorderCurve_1.position}
          scale={nodes.Mesh_ironFenceBorderCurve_1.scale}
        />
      </mesh>
    </group>
  )
}

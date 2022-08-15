import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const DamagedBench = (props) => {
  const group = useRef()
  const { nodes } = useGLTF('models/benchDamaged.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        position={nodes.benchDamaged.position}
        scale={nodes.benchDamaged.scale}
      >
        <mesh
          position={nodes['benchBroken_%8angles'].position}
          scale={nodes['benchBroken_%8angles'].scale}
        >
          <mesh
            geometry={nodes['Mesh_benchBroken_%8angles'].geometry}
            material={nodes['Mesh_benchBroken_%8angles'].material}
            position={nodes['Mesh_benchBroken_%8angles'].position}
            scale={nodes['Mesh_benchBroken_%8angles'].scale}
          />
          <mesh
            geometry={nodes['Mesh_benchBroken_%8angles_1'].geometry}
            material={nodes['Mesh_benchBroken_%8angles_1'].material}
            position={nodes['Mesh_benchBroken_%8angles_1'].position}
            scale={nodes['Mesh_benchBroken_%8angles_1'].scale}
          />
        </mesh>
      </mesh>
    </group>
  )
}

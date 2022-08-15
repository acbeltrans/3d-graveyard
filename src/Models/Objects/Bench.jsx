import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const Bench = (props) => {
  const group = useRef()
  const { nodes } = useGLTF('models/bench.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh position={nodes.bench.position} scale={nodes.bench.scale}>
        <mesh
          geometry={nodes.Mesh_bench.geometry}
          material={nodes.Mesh_bench.material}
          position={nodes.Mesh_bench.position}
          scale={nodes.Mesh_bench.scale}
        />
        <mesh
          geometry={nodes.Mesh_bench_1.geometry}
          material={nodes.Mesh_bench_1.material}
          position={nodes.Mesh_bench_1.position}
          scale={nodes.Mesh_bench_1.scale}
        />
      </mesh>
    </group>
  )
}

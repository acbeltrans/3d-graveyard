{
  /* Crypt Model */
}
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const Crypt = (props) => {
  const group = useRef()
  const { nodes } = useGLTF('models/cryptSmall.glb')
  const roof = useGLTF('models/cryptSmallRoof.glb')
  const door = useGLTF('models/cryptSmallDoorway.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh position={nodes.cryptSmall.position} scale={nodes.cryptSmall.scale}>
        <mesh
          geometry={nodes.Mesh_cryptSmall.geometry}
          material={nodes.Mesh_cryptSmall.material}
          position={nodes.Mesh_cryptSmall.position}
          scale={nodes.Mesh_cryptSmall.scale}
        />
        <mesh
          geometry={nodes.Mesh_cryptSmall_1.geometry}
          material={nodes.Mesh_cryptSmall_1.material}
          position={nodes.Mesh_cryptSmall_1.position}
          scale={nodes.Mesh_cryptSmall_1.scale}
        />
        <mesh
          geometry={nodes.Mesh_cryptSmall_2.geometry}
          material={nodes.Mesh_cryptSmall_2.material}
          position={nodes.Mesh_cryptSmall_2.position}
          scale={nodes.Mesh_cryptSmall_2.scale}
        />
      </mesh>
      <mesh position={[0, 1, 0]} scale={roof.nodes.cryptSmallRoof.scale}>
        <mesh
          geometry={roof.nodes.Mesh_cryptSmallRoof.geometry}
          material={roof.nodes.Mesh_cryptSmallRoof.material}
          position={roof.nodes.Mesh_cryptSmallRoof.position}
          scale={roof.nodes.Mesh_cryptSmallRoof.scale}
        />
        <mesh
          geometry={roof.nodes.Mesh_cryptSmallRoof_1.geometry}
          material={roof.nodes.Mesh_cryptSmallRoof_1.material}
          position={roof.nodes.Mesh_cryptSmallRoof_1.position}
          scale={roof.nodes.Mesh_cryptSmallRoof_1.scale}
        />
      </mesh>
      <mesh
        geometry={door.nodes.cryptSmallDoorway.geometry}
        material={door.nodes.cryptSmallDoorway.material}
        position={[0, 0, -0.5]}
        scale={door.nodes.cryptSmallDoorway.scale}
      />
    </group>
  )
}

{
  /* Zombie Model */
}
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const Zombie = (props) => {
  const group = useRef()
  const { nodes } = useGLTF('models/characterZombie.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        position={nodes.characterZombie.position}
        scale={nodes.characterZombie.scale}
      >
        <mesh position={nodes.head.position} scale={nodes.head.scale}>
          <mesh
            geometry={nodes.Mesh_head.geometry}
            material={nodes.Mesh_head.material}
            position={nodes.Mesh_head.position}
            scale={nodes.Mesh_head.scale}
          />
          <mesh
            geometry={nodes.Mesh_head_1.geometry}
            material={nodes.Mesh_head_1.material}
            position={nodes.Mesh_head_1.position}
            scale={nodes.Mesh_head_1.scale}
          />
          <mesh
            geometry={nodes.Mesh_head_2.geometry}
            material={nodes.Mesh_head_2.material}
            position={nodes.Mesh_head_2.position}
            scale={nodes.Mesh_head_2.scale}
          />
          <mesh
            geometry={nodes.Mesh_head_3.geometry}
            material={nodes.Mesh_head_3.material}
            position={nodes.Mesh_head_3.position}
            scale={nodes.Mesh_head_3.scale}
          />
        </mesh>
        <mesh position={nodes.body.position} scale={nodes.body.scale}>
          <mesh
            geometry={nodes.Mesh_body.geometry}
            material={nodes.Mesh_body.material}
            position={nodes.Mesh_body.position}
            scale={nodes.Mesh_body.scale}
          />
          <mesh
            geometry={nodes.Mesh_body_1.geometry}
            material={nodes.Mesh_body_1.material}
            position={nodes.Mesh_body_1.position}
            scale={nodes.Mesh_body_1.scale}
          />
        </mesh>
        <mesh position={nodes.armLeft.position} scale={nodes.armLeft.scale}>
          <mesh
            geometry={nodes.Mesh_armLeft.geometry}
            material={nodes.Mesh_armLeft.material}
            position={nodes.Mesh_armLeft.position}
            scale={nodes.Mesh_armLeft.scale}
          />
          <mesh
            geometry={nodes.Mesh_armLeft_1.geometry}
            material={nodes.Mesh_armLeft_1.material}
            position={nodes.Mesh_armLeft_1.position}
            scale={nodes.Mesh_armLeft_1.scale}
          />
        </mesh>
        <mesh position={nodes.armRight.position} scale={nodes.armRight.scale}>
          <mesh
            geometry={nodes.Mesh_armRight.geometry}
            material={nodes.Mesh_armRight.material}
            position={nodes.Mesh_armRight.position}
            scale={nodes.Mesh_armRight.scale}
          />
          <mesh
            geometry={nodes.Mesh_armRight_1.geometry}
            material={nodes.Mesh_armRight_1.material}
            position={nodes.Mesh_armRight_1.position}
            scale={nodes.Mesh_armRight_1.scale}
          />
        </mesh>
        <mesh position={nodes.legLeft.position} scale={nodes.legLeft.scale}>
          <mesh
            geometry={nodes.Mesh_legLeft.geometry}
            material={nodes.Mesh_legLeft.material}
            position={nodes.Mesh_legLeft.position}
            scale={nodes.Mesh_legLeft.scale}
          />
          <mesh
            geometry={nodes.Mesh_legLeft_1.geometry}
            material={nodes.Mesh_legLeft_1.material}
            position={nodes.Mesh_legLeft_1.position}
            scale={nodes.Mesh_legLeft_1.scale}
          />
        </mesh>
        <mesh position={nodes.legRight.position} scale={nodes.legRight.scale}>
          <mesh
            geometry={nodes.Mesh_legRight.geometry}
            material={nodes.Mesh_legRight.material}
            position={nodes.Mesh_legRight.position}
            scale={nodes.Mesh_legRight.scale}
          />
          <mesh
            geometry={nodes.Mesh_legRight_1.geometry}
            material={nodes.Mesh_legRight_1.material}
            position={nodes.Mesh_legRight_1.position}
            scale={nodes.Mesh_legRight_1.scale}
          />
        </mesh>
      </mesh>
    </group>
  )
}

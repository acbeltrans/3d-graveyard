{
  /* Graveyard */
}
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { Scenery } from './Scenery'

createRoot(document.getElementById('root')).render(
  <div style={{ width: '97.7', height: '97.66vh' }}>
    <Canvas
      camera={{ position: [0, 5, -18], fov: 45 }}
      style={{ background: '#030101' }}
    >
      <Suspense fallback={null}>
        <OrbitControls />
        <Scenery />
      </Suspense>
    </Canvas>
  </div>,
)

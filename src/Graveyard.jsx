import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Scenery } from './Scenery';




createRoot(document.getElementById('root')).render(
  <div style={{ width: '97.6', height: '97.6vh' }}>
  <Canvas
    dpr={[1, 1.5]}
    camera={{ position: [0, 5, -18], fov: 45 }}
    style={{ background: "#171717" }}
  >
    <ambientLight intensity={0} />
    
    
    
    
    <Suspense fallback={null}>
      <OrbitControls />
        <Scenery/>
    </Suspense>
  </Canvas>
  </div>
  ,
)
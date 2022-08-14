import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Scenery } from './Scenery';


createRoot(document.getElementById('root')).render(
  <div style={{ width: '97.6', height: '97.6vh' }}>
  <Canvas
    dpr={[1, 1.5]}
    camera={{ position: [0, 0, 10], fov: 35 }}
  >
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    
    <Suspense fallback={null}>
      <OrbitControls />
      <Environment
            background={true} // Whether to affect scene.background
            files={'../environment/dikhololo_night_1k.hdr'}
            path={'/'}
          />
        <Scenery/>
    </Suspense>
  </Canvas>
  </div>
  ,
)
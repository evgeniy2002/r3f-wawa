import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';
import { Woman } from './components/Woman';
import { Suspense } from 'react';
import { AnimationProvider } from './context';
import { Interface } from './components/Interface';

function App() {
  return (
    <AnimationProvider>
      <div id='App'>
        <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
          <OrbitControls />
          {/* <color attach={'background'} args={['#f0f0f0']} /> */}

          <ambientLight />
          <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
          <group position={[0, -1, 0]}>
            <Suspense fallback={null}>
              <Woman />
            </Suspense>
          </group>

          <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
            <planeGeometry args={[10, 10, 1, 1]} />
            <shadowMaterial transparent opacity={0.2} />
          </mesh>

          <Stats />
        </Canvas>
        <Interface />
      </div>
    </AnimationProvider>
  );
}

export default App;

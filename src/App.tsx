import { Canvas } from '@react-three/fiber';
import { MeshReflectorMaterial, PresentationControls, Stage } from '@react-three/drei';
import { Suspense } from 'react';
import { Chair } from './components/Chair';
import { Config } from './components/Config';
import { ContextProvider } from './context';

function App() {
  return (
    <ContextProvider>
      <div className='wrapper'>
        <Canvas shadows camera={{ position: [0, 2, 4] }}>
          <color attach={'background'} args={['#101010']} />
          <fog attach='fog' args={['#101010', 10, 20]} />
          <ambientLight intensity={3} />
          <PresentationControls
            global={false}
            speed={4}
            cursor={false}
            zoom={1.4}
            rotation={[0, 13, 0]}
            polar={[-0.5, Math.PI / 4]}>
            <Stage intensity={0.5} environment='city' shadows={false} adjustCamera={false}>
              <Suspense fallback={null}>
                <Chair />
              </Suspense>
            </Stage>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
              <planeGeometry args={[170, 170]} />
              <MeshReflectorMaterial
                blur={[0, 0]}
                resolution={256}
                mirror={1}
                mixBlur={0.5}
                mixStrength={10}
                depthScale={1}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color={0x101010}
                metalness={0.5}
              />
            </mesh>
          </PresentationControls>
        </Canvas>
        <Config />
      </div>
    </ContextProvider>
  );
}

export default App;

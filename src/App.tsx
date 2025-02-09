import { Canvas } from '@react-three/fiber';
import { Stats } from '@react-three/drei';
import { Experience } from './components/Experience';

function App() {
  return (
    <div id='App'>
      <Canvas shadows camera={{ position: [-12, 1, 8], fov: 35, near: 1, far: 100 }}>
        <Experience />
        <Stats />
      </Canvas>
    </div>
  );
}

export default App;

import { Canvas } from '@react-three/fiber';
import { Wrapper } from './components/Wrapper';
import { Card } from './components/Card';
import { Stats } from '@react-three/drei';

const cards = [
  {
    title: 'Welcome',
    content:
      'This is a simple website created with React and Three.js. It showcases a 3D model of a building.',
  },
  {
    title: 'About the model',
    content:
      'The model is a simple representation of a building. It is not a realistic model, but it is enough to demonstrate the capabilities of Three.js.',
  },
  {
    title: 'How to use this website',
    content:
      'To navigate the website, you can use the mouse wheel to zoom in and out, and the left mouse button to drag the model. You can also use the right mouse button to open a context menu with more options.',
  },
  {
    title: 'About the author',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

function App() {
  return (
    <>
      <div id='wrapper'>
        <Canvas shadows camera={{ position: [-12, 1, 8], fov: 35, near: 1, far: 100 }}>
          <Wrapper />
          <Stats />
        </Canvas>
      </div>

      {cards.map((item, index) => (
        <Card key={index} title={item.title} content={item.content} />
      ))}
    </>
  );
}

export default App;

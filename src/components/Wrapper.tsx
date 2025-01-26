import { useEffect, useState } from 'react';
import { Tower } from './Model';
import { ScrollGroup } from './controls/ScrollGroup';
import { ContactShadows } from '@react-three/drei';

interface TowerProps {
  color: string;
  windowTint: string;
}

const tower: TowerProps[] = [
  { color: 'hsl(0, 100%, 50%)', windowTint: 'hsl(240, 100%, 50%)' },
  { color: 'hsl(120, 100%, 50%)', windowTint: 'hsl(60, 100%, 50%)' },
  { color: 'hsl(240, 100%, 50%)', windowTint: 'hsl(0, 100%, 50%)' },
  { color: 'hsl(60, 100%, 50%)', windowTint: 'hsl(120, 100%, 50%)' },
];

export const Wrapper = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    // const { scrollY } = e.currentTarget as Window;
    const scrollPosition = window.scrollY;
    setScroll(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // const spotLightRef = useRef<THREE.SpotLight>(null);
  // const pointLightRef = useRef<THREE.PointLight>(null);

  // useHelper(spotLightRef as React.MutableRefObject<THREE.Object3D>, THREE.SpotLightHelper);
  // useHelper(pointLightRef as React.MutableRefObject<THREE.Object3D>, THREE.PointLightHelper);

  return (
    <>
      <ScrollGroup scrollPosition={scroll}>
        <ambientLight intensity={3} />

        <ContactShadows opacity={1} scale={15} blur={5} far={100} position={[0, -0.001, 0]} />
      </ScrollGroup>

      <ScrollGroup scrollPosition={scroll} rotationSpeed={2}>
        {tower.map((item, index) => (
          <Tower
            key={index}
            color={item.color}
            windowTint={item.windowTint}
            position={[0, index * 2, 0]}
            rotation={[0, Math.PI * index * 0.1, 0]}
          />
        ))}
      </ScrollGroup>
    </>
  );
};

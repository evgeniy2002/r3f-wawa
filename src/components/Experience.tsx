import { OrbitControls } from '@react-three/drei';
import React from 'react';

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

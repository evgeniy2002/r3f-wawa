import { Euler, Vector3 } from '@react-three/fiber';
import React from 'react';
// import * as THREE from 'three';

interface BoxProps {
  position: Vector3;
  rotation: Euler;
}

export const Box: React.FC<BoxProps> = (props) => {
  return (
    <>
      <mesh {...props}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial roughness={0.6} metalness={0.3} color={'red'} />
      </mesh>
    </>
  );
};

import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';

import * as THREE from 'three';

interface ScrollbarGroupProps {
  scrollPosition: number;
  children: React.ReactNode;
  rotationSpeed?: number;
}

const lerp = (a: number, b: number, t: number) => {
  return THREE.MathUtils.lerp(a, b, t);
};

export const ScrollGroup: React.FC<ScrollbarGroupProps> = ({
  scrollPosition,
  children,
  rotationSpeed,
}) => {
  const scrollGroupRef = useRef<THREE.Group>(null);

  const { size } = useThree();

  useFrame(() => {
    if (!scrollGroupRef.current) {
      return;
    }

    /* 
      Используется для линейной интерполяции между двумя значениями
      В данном контексте применяется для сглаживания перемещения, чтобы движения были более плавными
    */
    scrollGroupRef.current.position.y = lerp(
      scrollGroupRef.current.position.y,
      -0.8 - (scrollPosition / size.height) * 2,
      0.065 /* Позволяет контролировать скорость, с который объект будет двигаться к новой позиции
      Чем меньше это значение, тем медленнее и плавнее будет движение.
      */,
    );

    if (rotationSpeed) {
      scrollGroupRef.current.rotation.y = lerp(
        scrollGroupRef.current.rotation.y,
        -(scrollPosition / size.height) * rotationSpeed,
        0.085,
      );
    }
  });

  return (
    <group ref={scrollGroupRef} position={[0, 0, 0]}>
      {children}
    </group>
  );
};

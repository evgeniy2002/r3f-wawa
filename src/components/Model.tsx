import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { GroupProps } from '@react-three/fiber';
import * as THREE from 'three';

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh;
    Cylinder_1: THREE.Mesh;
    Cylinder_2: THREE.Mesh;
  };
  materials: {
    Floor: THREE.MeshStandardMaterial;
    Glass: THREE.MeshPhysicalMaterial;
    Metal: THREE.MeshStandardMaterial;
  };
};

interface TowerProps {
  color: string;
  windowTint: string;
}

export const Tower: React.FC<GroupProps & TowerProps> = ({ color, windowTint, ...props }) => {
  const { nodes } = useGLTF('/models/InfinityTower.gltf') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        // material={materials.Floor}
      >
        <meshStandardMaterial
          roughness={0.6}
          metalness={0.3}
          color={color}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_1.geometry}
        // material={materials.Glass}
      >
        <meshPhongMaterial transparent opacity={0.5} color={windowTint} side={THREE.DoubleSide} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_2.geometry}
        // material={materials.Metal}
      >
        <meshStandardMaterial color={'#888'} roughness={0.4} metalness={0.8} />
      </mesh>
    </group>
  );
};

useGLTF.preload('/InfinityTower.gltf');

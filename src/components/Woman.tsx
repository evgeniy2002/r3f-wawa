import React, { useEffect } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { Group, Object3DEventMap } from 'three';
import { useAnimationContext } from '../context';
import * as THREE from 'three';

export const Woman = () => {
  const { setNames, animationIndex } = useAnimationContext();
  const group = React.useRef<Group<Object3DEventMap>>(null);

  const { nodes, materials, animations } = useGLTF('./models/woman.gltf');
  const { actions, names } = useAnimations(animations, group);

  // const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  // const { nodes, materials } = useGraph(clone) as unknown as GLTFResult;

  useEffect(() => {
    setNames(names);
  }, []);

  useEffect(() => {
    actions[names[animationIndex]]?.reset().fadeIn(0.5).play();

    return () => {
      actions[names[animationIndex]]?.fadeOut(0.5);
    };
  }, [animationIndex, actions, names]);

  return (
    <group ref={group} dispose={null}>
      <group name='Scene'>
        <group name='Armature' rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <group name='SM_Chr_Developer_Female_02'>
            <skinnedMesh
              castShadow
              name='Mesh019'
              geometry={(nodes.Mesh019 as THREE.SkinnedMesh).geometry}
              material={materials.Glasses}
              skeleton={(nodes.Mesh019 as THREE.SkinnedMesh).skeleton}
            />
            <skinnedMesh
              castShadow
              name='Mesh019_1'
              geometry={(nodes.Mesh019_1 as THREE.SkinnedMesh).geometry}
              material={materials.Eyes}
              skeleton={(nodes.Mesh019_1 as THREE.SkinnedMesh).skeleton}
            />
            <skinnedMesh
              castShadow
              name='Mesh019_2'
              geometry={(nodes.Mesh019_2 as THREE.SkinnedMesh).geometry}
              material={materials.Hair}
              skeleton={(nodes.Mesh019_2 as THREE.SkinnedMesh).skeleton}
            />
            <skinnedMesh
              castShadow
              name='Mesh019_3'
              geometry={(nodes.Mesh019_3 as THREE.SkinnedMesh).geometry}
              material={materials.Skin}
              skeleton={(nodes.Mesh019_3 as THREE.SkinnedMesh).skeleton}
            />
            <skinnedMesh
              castShadow
              name='Mesh019_4'
              geometry={(nodes.Mesh019_4 as THREE.SkinnedMesh).geometry}
              material={materials.Mouth}
              skeleton={(nodes.Mesh019_4 as THREE.SkinnedMesh).skeleton}
            />
            <skinnedMesh
              castShadow
              name='Mesh019_5'
              geometry={(nodes.Mesh019_5 as THREE.SkinnedMesh).geometry}
              material={materials.Shirt}
              skeleton={(nodes.Mesh019_5 as THREE.SkinnedMesh).skeleton}
            />
            <skinnedMesh
              castShadow
              name='Mesh019_6'
              geometry={(nodes.Mesh019_6 as THREE.SkinnedMesh).geometry}
              material={materials.Pants}
              skeleton={(nodes.Mesh019_6 as THREE.SkinnedMesh).skeleton}
            />
            <skinnedMesh
              castShadow
              name='Mesh019_7'
              geometry={(nodes.Mesh019_7 as THREE.SkinnedMesh).geometry}
              material={materials.Shoes}
              skeleton={(nodes.Mesh019_7 as THREE.SkinnedMesh).skeleton}
            />
            <skinnedMesh
              castShadow
              name='Mesh019_8'
              geometry={(nodes.Mesh019_8 as THREE.SkinnedMesh).geometry}
              material={materials.Sole}
              skeleton={(nodes.Mesh019_8 as THREE.SkinnedMesh).skeleton}
            />
            <skinnedMesh
              castShadow
              name='Mesh019_9'
              geometry={(nodes.Mesh019_9 as THREE.SkinnedMesh).geometry}
              material={materials.Laces}
              skeleton={(nodes.Mesh019_9 as THREE.SkinnedMesh).skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('./models/woman.gltf');

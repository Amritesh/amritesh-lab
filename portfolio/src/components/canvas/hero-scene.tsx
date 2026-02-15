"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function StarField({ count = 2000 }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = THREE.MathUtils.randFloatSpread(50);
      const y = THREE.MathUtils.randFloatSpread(50);
      const z = THREE.MathUtils.randFloatSpread(50);
      const scale = Math.random();
      const speed = 0.5 + Math.random(); // Speed for twinkling
      const t = Math.random() * 100; // Time offset
      temp.push({ x, y, z, scale, speed, t });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    // Animate stars
    particles.forEach((particle, i) => {
      const { x, y, z, scale, speed, t } = particle;
      
      // "Popping" / Twinkling effect: sine wave for smooth fading
      const time = state.clock.elapsedTime;
      const s = scale * (Math.sin(t + time * speed) * 0.5 + 0.5); 
      
      dummy.position.set(x, y, z);
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    
    mesh.current.instanceMatrix.needsUpdate = true;
    mesh.current.rotation.y += 0.0005; // Very slow rotation
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.05, 0]} />
      <meshBasicMaterial color="#ffffff" toneMapped={false} />
    </instancedMesh>
  );
}

function Scene() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
            <color attach="background" args={['#020617']} />
            
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <StarField count={1500} />
            
            {/* @ts-ignore */}
            <EffectComposer disableNormalPass>
                <Bloom luminanceThreshold={0.1} mipmapBlur intensity={1.5} radius={0.5} />
            </EffectComposer>
        </>
    )
}

export function HeroScene() {
  return (
    <div className="w-full h-full absolute inset-0 -z-10">
      <Canvas 
        dpr={[1, 2]} 
        gl={{ antialias: false, toneMapping: THREE.ReinhardToneMapping, toneMappingExposure: 1.5 }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

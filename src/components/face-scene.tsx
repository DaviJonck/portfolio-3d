"use client";

import { Suspense } from "react";
import { Canvas, type ThreeElements } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

function OfficerModel(props: ThreeElements["group"]) {
  const { scene } = useGLTF("/officer.glb");

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/officer.glb");

export function FaceScene() {
  return (
    <div className="relative h-64 w-full md:h-80 lg:h-[22rem]">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-transparent to-sky-500/10 blur-3xl" />
      <Canvas
        className="!absolute inset-0"
        camera={{ position: [0, 0, 3.4], fov: 45 }}
        dpr={[1, 2]}
        shadows
      >
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.25} />
        <directionalLight
          position={[2, 3, 4]}
          intensity={1.2}
          castShadow
          color={"#f97316"}
        />
        <directionalLight
          position={[-3, -2, -4]}
          intensity={0.7}
          color={"#22c55e"}
        />
        <Suspense fallback={null}>
          <OfficerModel position={[0, -1, 0]} scale={1.4} />

          {/* sombra no "chão" para dar profundidade */}
          <mesh position={[0, -1.4, 0]} receiveShadow rotation-x={-Math.PI / 2}>
            <circleGeometry args={[2.4, 64]} />
            <meshStandardMaterial color="#000000" opacity={0.8} transparent />
          </mesh>

          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2 + 0.25}
          minPolarAngle={0.5}
        />
      </Canvas>
    </div>
  );
}

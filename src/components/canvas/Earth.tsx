import { Suspense, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";



const Earth = memo(() => {
  const { scene } = useGLTF("/planet/scene.gltf", true);
  return <primitive object={scene} scale={2.5} position={[0, 0, 0]} />;
});

const EarthCanvas = () => {

  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: false }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.8}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;

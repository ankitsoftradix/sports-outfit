import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Scene = () => {
  return (
    <Canvas
      camera={{
        position: [0, 2, 5],
      }}
    >
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
      <OrbitControls />
      {/* <Grid position={[0, -0.01, 0]} args={[15, 15]} /> */}
    </Canvas>
  );
};

export default Scene;

import { Environment, Grid } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";

const Scene = () => {
  return (
    <Canvas
      camera={{
        position: [0, 1, 2],
      }}
    >
      <Model />

      <Grid position={[0, -0.01, 0]} args={[15, 15]} />
      <Environment preset="city" />
    </Canvas>
  );
};

export default Scene;

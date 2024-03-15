import { Environment, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Circle } from "rc-progress";
import { Suspense } from "react";
import Model from "./Model";

const Scene = () => {
  const { progress } = useProgress();

  const Loader = () => {
    return (
      <div className="modelLoader">
        <div className="innerWrap">
          <Circle percent={progress} strokeWidth={4} strokeColor="#1434A4" />
          <span className="percentage">{Math.round(progress)}%</span>
        </div>
      </div>
    );
  };

  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        camera={{
          position: [0, 1, 2],
        }}
      >
        <Model />

        {/* <Grid position={[0, -0.01, 0]} args={[15, 15]} /> */}
        <Environment preset="city" />
      </Canvas>
    </Suspense>
  );
};

export default Scene;

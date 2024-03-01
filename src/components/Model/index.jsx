import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = (props) => {
  const { nodes, materials } = useGLTF("./models/t-shirt.glb");
  return (
    <Suspense>
      <ambientLight intensity={3} />
      <directionalLight intensity={2} />
      <group {...props} dispose={null} position={[0, -4, 0]} scale={0.7}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_2.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_3.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.material_0}
          />
        </group>
      </group>
    </Suspense>
  );
};

export default Model;

import { useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef } from "react";
import { Color } from "three";
import { useBearStore } from "../../store";

const Model = (props) => {
  const tieRef = useRef();
  const shirtRef = useRef();
  const palletsRef = useRef();
  const { nodes, materials } = useGLTF("./models/t-shirt.glb");

  const tieMaterial = useMemo(() => {
    return materials.material_0.clone();
  }, [materials]);
  const shirtMaterial = useMemo(() => {
    return materials.material_0.clone();
  }, [materials]);

  const colorPickerList = useBearStore((state) => state.colorPickerList);

  useEffect(() => {
    const shirtColor = colorPickerList[0].color;
    const tieColor = colorPickerList[1].color;
    const palletsColor = colorPickerList[2].color;
    tieRef.current.material.color = new Color(tieColor);
    shirtRef.current.material.color = new Color(shirtColor);
    palletsRef.current.material.color = new Color(palletsColor);
  }, [colorPickerList]);

  return (
    <Suspense>
      <ambientLight intensity={3} />
      <directionalLight />
      <group {...props} dispose={null} position={[0, -4, 0]} scale={0.7}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            ref={palletsRef}
            geometry={nodes.Object_2.geometry}
            material={materials.material_0}
          />
          <mesh
            ref={shirtRef}
            geometry={nodes.Object_3.geometry}
            material={shirtMaterial}
          />
          <mesh
            ref={tieRef}
            geometry={nodes.Object_4.geometry}
            material={tieMaterial}
          />
        </group>
      </group>
    </Suspense>
  );
};

useGLTF.preload("./models/t-shirt.glb");

export default Model;

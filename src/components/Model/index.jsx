import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef } from "react";
import { Color } from "three";
import { useColorStore, useLogoStore } from "../../store";

const Model = (props) => {
  const tieRef = useRef();
  const shirtRef = useRef();
  const palletsRef = useRef();
  const { nodes, materials } = useGLTF("./models/t-shirt.glb");
  const image = useLogoStore((state) => state?.logo || "");
  const imageTexture = useTexture(image || "./textures/2.png");

  const tieMaterial = useMemo(() => {
    return materials.material_0.clone();
  }, [materials]);
  const shirtMaterial = useMemo(() => {
    return materials.material_0.clone();
  }, [materials]);

  const colorPickerList = useColorStore((state) => state.colorPickerList);

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
      <ambientLight />
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
            material-aoMapIntensity={1}
            dispose={null}
          >
            {image && (
              <Decal
                scale={0.7}
                debug={false}
                position={[0, -0.4, 6.05]}
                rotation={[1.5, 0, 0]}
                map={imageTexture}
              />
            )}
          </mesh>

          <mesh
            ref={tieRef}
            geometry={nodes.Object_4.geometry}
            material={tieMaterial}
          >
            <meshStandardMaterial />
          </mesh>
        </group>
      </group>
    </Suspense>
  );
};

useGLTF.preload("./models/t-shirt.glb");

export default Model;

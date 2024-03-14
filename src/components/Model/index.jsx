import { Decal, OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Color } from "three";
import { useColorStore, useLogoStore } from "../../store";
import { useDrag } from "react-use-gesture";

const Model = (props) => {
  const tieRef = useRef();
  const shirtRef = useRef();
  const palletsRef = useRef();
  const orbitRef = useRef();

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

  // const [position, setPosition] = useState([0, -0.4, 6.05]);
  const [position, setPosition] = useState([0, -0.4, 6.05]);
  const [rotation, setRotation] = useState([1.5, 0, 0]);

  const bind = useDrag(
    ({ offset: [x, y], down }) => {
      orbitRef.current.enabled = !down;

      const xPos =
        x * 0.005 > -0.8 && x * 0.005 < 0.8 ? x * 0.005 : position[0];
      const zPos =
        6.05 - y * 0.005 < 6.8 && 6.05 - y * 0.005 > 4.8
          ? 6.05 - y * 0.005
          : position[2];

      const finalPosition = [xPos, position[1], zPos];
      const rotationPosition = [rotation[0], xPos, rotation[2]];

      setRotation(rotationPosition);
      setPosition(finalPosition);
    },
    { pointerEvents: true }
  );

  return (
    <Suspense>
      <ambientLight />
      <OrbitControls
        ref={orbitRef}
        // minPolarAngle={0.8}
        // maxPolarAngle={1.3}
        // enableZoom={false}
      />
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
                {...bind()}
                scale={[0.7, 0.7, 1.4]}
                // debug={true}
                position={position}
                rotation={rotation}
                map={imageTexture}
                origin={[0, 0, 0]}
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

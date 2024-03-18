import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { DoubleSide } from "three";

const DressModel = (props) => {
  const { nodes, materials } = useGLTF("./models/dress.glb");

  // useref hoooks for selected materials
  const Left_Side_Sleeve_Ref = useRef();
  const Right_Side_Sleeve_Ref = useRef();
  const Back_Bodice_Ref = useRef();
  const Front_Bodice_Ref = useRef();
  const Front_Collar_Ref = useRef();
  const Back_Collar_Ref = useRef();
  const Right_Armhole_Ref = useRef();
  const Left_Armhole_Ref = useRef();

  useEffect(() => {
    Left_Side_Sleeve_Ref.current.material.side = DoubleSide;
    Right_Side_Sleeve_Ref.current.material.side = DoubleSide;
    Back_Bodice_Ref.current.material.side = DoubleSide;
    Front_Bodice_Ref.current.material.side = DoubleSide;
    Front_Collar_Ref.current.material.side = DoubleSide;
    Back_Collar_Ref.current.material.side = DoubleSide;
    Right_Armhole_Ref.current.material.side = DoubleSide;
    Left_Armhole_Ref.current.material.side = DoubleSide;
  }, []);

  return (
    <>
      <ambientLight />
      <OrbitControls minPolarAngle={0.8} maxPolarAngle={1.8} />
      <group {...props} dispose={null}>
        <mesh
          ref={Left_Side_Sleeve_Ref}
          geometry={nodes.pCylinder1.geometry}
          material={materials["Dress_1:Left_Side_Sleeve"]}
          scale={0.394}
        />
        <mesh
          ref={Right_Side_Sleeve_Ref}
          geometry={nodes.pCylinder2.geometry}
          material={materials["Dress_1:Right_Side_Sleeve"]}
          scale={0.394}
        />
        <group position={[0, -10.848, 0.036]} scale={0.091}>
          <mesh
            ref={Back_Bodice_Ref}
            geometry={nodes.Dress_1Group6254_1.geometry}
            material={materials["Dress_1:Back_Bodice"]}
          />
          <mesh
            ref={Front_Bodice_Ref}
            geometry={nodes.Dress_1Group6254_2.geometry}
            material={materials["Dress_1:Front_Bodice"]}
          />
          <mesh
            ref={Front_Collar_Ref}
            geometry={nodes.Dress_1Group6254_3.geometry}
            material={materials["Dress_1:Front_Collar"]}
          />
          <mesh
            ref={Back_Collar_Ref}
            geometry={nodes.Dress_1Group6254_4.geometry}
            material={materials["Dress_1:Back_Collar"]}
          />
          <mesh
            ref={Right_Armhole_Ref}
            geometry={nodes.Dress_1Group6254_5.geometry}
            material={materials["Dress_1:Right_Armhole"]}
          />
          <mesh
            ref={Left_Armhole_Ref}
            geometry={nodes.Dress_1Group6254_6.geometry}
            material={materials["Dress_1:Left_Armhole"]}
          />
        </group>
      </group>
    </>
  );
};

export default DressModel;

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 src/public/ship/premium2.gltf 
Author: Wholock (https://sketchfab.com/wholock)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/star-trek-dsc-enterprise-98cdebaa7fae4752bcaa5a35453d224c
Title: Star Trek - DSC Enterprise
*/

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Model(props) {
  const { nodes, materials } = useLoader(
    GLTFLoader,
    "/src/public/ship/shuttle3/premium.gltf"
  );
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <group {...props} dispose={null}>
      <group
        position={[2, 1, -5]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={1.24}
      >
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.material_1}
        />
      </group>
    </group>
  );
}

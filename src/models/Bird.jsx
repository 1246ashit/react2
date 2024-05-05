
import React from "react";

import birdScene from'../assets/3d/low-poly_seagull_with_animation__rigged.glb';
import { useGLTF } from "@react-three/drei";

const Bird = () => {
   const {scene,animations}=useGLTF(birdScene)
    return (
        <mesh  position={[-3,2,1]} scale={0.01}>
            <primitive object={scene}/>
        </mesh>
    )
}

export default Bird;




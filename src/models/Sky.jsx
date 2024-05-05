import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/free_-_skybox_anime_sky.glb";

const Sky = ({ isRotating }) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();
    useFrame((_, delta) => {
        
        skyRef.current.rotation.y += 0.02 * delta
        
    })
    return (
        <mesh ref={skyRef} scale={0.1}>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky;




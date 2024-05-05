
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import birdScene from '../assets/3d/low-poly_seagull_with_animation__rigged.glb';
import { useFrame } from "@react-three/fiber";
import { Clock } from "three";

const Bird = () => {
    const birdRef = useRef();
    const { scene, animations } = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef);

    useFrame(({ clock, camera }) => {
        // Update the Y position to simulate bird-like motion using a sine wave
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
    

        // Check if the bird reached a certain endpoint relative to the camera
        if (birdRef.current.position.x > camera.position.x + 10) {
          // Change direction to backward and rotate the bird 180 degrees on the y-axis
          birdRef.current.rotation.y = 0;
        } else if (birdRef.current.position.x < camera.position.x - 10) {
          // Change direction to forward and reset the bird's rotation
          birdRef.current.rotation.y = -Math.PI;
        }
    
        // Update the X and Z positions based on the direction
        if (birdRef.current.rotation.y === -Math.PI) {
          // Moving forward
          birdRef.current.position.x += 0.01;
          birdRef.current.position.z -= 0.01;
        } else {
          // Moving backward
          birdRef.current.position.x -= 0.01;
          birdRef.current.position.z += 0.01;
        }
      });
    

    useEffect(() => {
        console.log(animations)
        actions['ArmatureAction'].play();
    }, [actions])
    return (
        <mesh position={[-5, 2, 1]} scale={0.1} ref={birdRef}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird;




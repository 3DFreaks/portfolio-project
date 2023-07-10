import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


export const CameraController = () => {
  const { camera, gl } = useThree();
  let controls = new OrbitControls(camera, gl.domElement);

  useFrame(()=> {
    controls.update()
    gl.setSize(window.innerWidth, window.innerHeight)
  })

  useEffect(() => {
    controls.autoRotate = true;
    controls.autoRotateSpeed = 3;
    controls.minDistance = 3;
    controls.maxDistance = 10;

    return () => {
      controls.dispose();
    };
  });
  
  return null;
};
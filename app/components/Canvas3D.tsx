import { Canvas } from "@react-three/fiber";
import { Box } from "./Box";
import { FC } from "react";
import { CameraController } from "../controllers/CameraController";
import { GltfModel } from "./GltfModel";
import { ModelType } from "../types";

export const Canvas3D: FC = (): JSX.Element => {
  return <Canvas className='absolute w-full z-0'>
    <CameraController />
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <GltfModel name='example' type={ModelType.Gltf}/>
  </Canvas>
}


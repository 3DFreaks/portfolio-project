import React, { useEffect } from "react";
import { Mesh, Vector3 } from "three";
import { IModelProperties, ModelType } from "../types";
import { useGLTF } from "@react-three/drei";

let identityVector = new Vector3(1, 1, 1);
let zeroVector = new Vector3(0, 0, 0);

const config: IModelProperties = {
  initialScale: identityVector,
  initialPosition: zeroVector,
  initialRotation: zeroVector,
  castShadow: true,
  receiveShadow: true,
  envMapIntensity: 20
}

const setScale = (model: any, initialScale: Vector3) => {
    model.scene.scale.set(
        initialScale.x,
        initialScale.y,
        initialScale.z);
}

const setPosition = (model: any, initialPosition: Vector3) => {
    model.scene.position.set(
        initialPosition.x,
        initialPosition.y,
        initialPosition.z);
}

const setRotation = (model: any, initialRotation: Vector3) => {
    model.scene.rotation.set(
        initialRotation.x,
        initialRotation.y,
        initialRotation.z);
}

const configureMesh = (model: any, props: IModelProperties) => {
    model.scene.traverse((object: {
        castShadow: boolean;
        receiveShadow: boolean;
        material: { envMapIntensity: number; };
    }) => {
        if (object instanceof Mesh) {
            object.castShadow = props.castShadow;
            object.receiveShadow = props.receiveShadow;
            object.material.envMapIntensity = props.envMapIntensity;
        }
    });
}

export function LoadGltfModel(name: string, modelType: ModelType) : React.JSX.Element {
    if(!(modelType === ModelType.Gltf || modelType === ModelType.Glb)){
      throw new Error('Wrong type passed')
    }

    let extension = modelType == ModelType.Gltf ? 'gltf' : 'glb'

    let path = `./models/${name}/scene.${extension}`
    const gltf = useGLTF(path);

    useEffect(() => {
        try {
            setScale(gltf, config.initialScale)
            setPosition(gltf, config.initialPosition);
            setRotation(gltf, config.initialRotation);

            configureMesh(gltf, config);
        } catch (error) {
            console.log(error);
        }
    }, [gltf]);

    return <primitive object={gltf.scene} />
};

export function LoadObjModel(name: string, modelType: ModelType) : React.JSX.Element  {
  throw new Error("Function not implemented yet.");
}

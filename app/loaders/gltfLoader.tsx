import React, { useEffect } from "react";
import { Mesh, Vector3 } from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export interface ILoadModelConfig {
    path: string;
    initialScale: Vector3;
    initialPosition: Vector3;
    initialRotation: Vector3;
    castShadow: boolean;
    receiveShadow: boolean;
    envMapIntensity: number;
}

const setScale = (gltf: GLTF, config: ILoadModelConfig) => {
    gltf.scene.scale.set(
        config.initialScale.x,
        config.initialScale.y,
        config.initialScale.z);
}

const setPosition = (gltf: GLTF, config: ILoadModelConfig) => {
    gltf.scene.position.set(
        config.initialPosition.x,
        config.initialPosition.y,
        config.initialPosition.z);
}

const setRotation = (gltf: GLTF, config: ILoadModelConfig) => {
    gltf.scene.rotation.set(
        config.initialRotation.x,
        config.initialRotation.y,
        config.initialRotation.z);
}

const configureMesh = (gltf: GLTF, config: ILoadModelConfig) => {
    gltf.scene.traverse((object) => {
        if (object instanceof Mesh) {
            object.castShadow = config.castShadow;
            object.receiveShadow = config.receiveShadow;
            object.material.envMapIntensity = config.envMapIntensity;
        }
    });
}

export function LoadModel(config: ILoadModelConfig) {
    const gltf = useGLTF(config.path);

    useEffect(() => {
        try {
            setScale(gltf, config)
            setPosition(gltf, config);
            setRotation(gltf, config);

            configureMesh(gltf, config);
        } catch (error) {
            console.log(error);
        }
    }, [gltf]);

    return <primitive object={gltf.scene} />
};
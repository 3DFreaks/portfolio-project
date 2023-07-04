import React, { useEffect } from "react";
import { Mesh } from "three";
import { ILoadModelProperties } from "../types";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

const setScale = (model: any, props: ILoadModelProperties) => {
    model.scene.scale.set(
        props.initialScale.x,
        props.initialScale.y,
        props.initialScale.z);
}

const setPosition = (model: any, props: ILoadModelProperties) => {
    model.scene.position.set(
        props.initialPosition.x,
        props.initialPosition.y,
        props.initialPosition.z);
}

const setRotation = (model: any, props: ILoadModelProperties) => {
    model.scene.rotation.set(
        props.initialRotation.x,
        props.initialRotation.y,
        props.initialRotation.z);
}

const configureMesh = (model: any, props: ILoadModelProperties) => {
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

export function LoadModel(props: ILoadModelProperties) {
    const gltf = useGLTF(props.path);

    const model = useLoader(
        props.loaderType,
        props.path
    )

    useEffect(() => {
        try {
            setScale(model, props)
            setPosition(model, props);
            setRotation(model, props);

            configureMesh(model, props);
        } catch (error) {
            console.log(error);
        }
    }, [gltf]);

    return <primitive object={model.scene} />
};
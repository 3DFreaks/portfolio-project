import React from "react";
import { ILoadModelConfig, LoadModel } from '../loaders/gltfLoader'
import { Vector3 } from "three";

export function Example(): React.JSX.Element {
    let identityVector = new Vector3(1, 1, 1);
    let zeroVector = new Vector3(0, 0, 0);

    const config: ILoadModelConfig = {
        path: `./models/${Example.name.toLowerCase()}/scene.gltf`,
        initialScale: identityVector,
        initialPosition: zeroVector,
        initialRotation: zeroVector,
        castShadow: true,
        receiveShadow: true,
        envMapIntensity: 20
    }

    return (
        LoadModel(config)
    );
}


import React from "react";
import { LoadGltfModel } from '../loaders/genericModelLoader'
import { ILoadModelProperties, ModelType } from "../types";

export function GltfModel(props : ILoadModelProperties): React.JSX.Element {
    return (
        LoadGltfModel(props.name, props.type)
    );
}


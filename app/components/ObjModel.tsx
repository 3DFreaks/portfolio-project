import React from "react";
import { LoadObjModel } from '../loaders/genericModelLoader'
import { ILoadModelProperties, ModelType } from "../types";

export function ObjModel(props: ILoadModelProperties): React.JSX.Element {
    return (
        LoadObjModel(props.name, ModelType.Obj)
    );
}


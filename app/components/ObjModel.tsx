import React from "react";
import { LoadObjModel } from '../loaders/genericModelLoader'
import { ModelType } from "../types";

export function ObjModel(name: string, type: ModelType): React.JSX.Element {
    return (
        LoadObjModel(name, type)
    );
}


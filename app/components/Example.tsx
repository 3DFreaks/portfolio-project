import React from "react";
import { LoadModel } from '../loaders/genericModelLoader'
import { ILoadModelProperties } from "../types";


export function Example(props: ILoadModelProperties): React.JSX.Element {
    return (
        LoadModel(props)
    );
}


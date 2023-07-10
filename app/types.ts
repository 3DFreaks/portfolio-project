import { LoaderProto } from '@react-three/fiber'
import THREE, { Vector3 } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export interface IRotationController {
  startRotating(): void
  stopRotating(): void
  changeDirection(): void
}

export enum ModelType { Gltf = 'gltf', Glb = 'glb', Obj='obj' }

export interface ISceneProperties {
  scene: THREE.Scene
  light: THREE.Light
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  orbitControls: OrbitControls
  sceneMeshes: THREE.Object3D[]
}

export interface ILoadModelProperties {
  name: string,
  type?: ModelType,
}

export interface IModelProperties {
  initialScale: Vector3;
  initialPosition: Vector3;
  initialRotation: Vector3;
  castShadow: boolean;
  receiveShadow: boolean;
  envMapIntensity: number;
}

// PROPS
export interface IButtonProps {
  onClick: Function
}
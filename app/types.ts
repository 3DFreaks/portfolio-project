import THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export interface IRotationController{
  startRotating() : void
  stopRotating() : void
  changeDirection() : void
}

export interface ISceneProperties {
  scene: THREE.Scene
  light: THREE.Light
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  orbitControls: OrbitControls
  sceneMeshes: THREE.Object3D[]
}

// PROPS
export interface IButtonProps {
  onClick: Function
}
'use client'
import React, { useRef, useState } from 'react'
import { Mesh } from 'three'

export function Box(props: any) {

  const meshRef = useRef<Mesh>()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  return (

    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
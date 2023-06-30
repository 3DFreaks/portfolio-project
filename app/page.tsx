'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Box } from './Box'

export default function Home() {

  const style = {
    width: '100%',
    height: '100%'
  };
  return (
    <main className="absolute w-full h-full">
        <Canvas className='absolute w-full h-full'>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box props={[1,1,1]}></Box>
        </Canvas>
    </main>
  )
}

"use client"

import { Canvas, useThree } from "@react-three/fiber"
import Model from "./Model"
import { Suspense } from "react"
import { useProgress, Html, ScrollControls, Text} from "@react-three/drei"


function Loader() {
  const { progress, active } = useProgress()

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.8} pages={3}>
          <Model />
          {/* Add Text Below the Model */}
          <Text
            position={[0, -1.5, 0]} // Adjust position to place it below the model
            fontSize={0.3} // Adjust the size of the text
            font
            color="white" // Set the color of the text
            anchorX="center" // Center the text horizontally
            anchorY="top" // Align text to top
          >
            Hello My BOSS
          </Text>        
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}

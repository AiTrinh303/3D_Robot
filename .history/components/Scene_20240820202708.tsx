"use client"

import { Canvas, useThree } from "@react-three/fiber"
import Model from "./Model"
import { Suspense } from "react"
import { useProgress, Html, ScrollControls, Text} from "@react-three/drei"
import { useSpring, animated } from "@react-spring/three"

function Loader() {
  const { progress, active } = useProgress()

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {
  const { progress } = useProgress()

  // Define the animation for text
  const { position, color } = useSpring({
    position: [0, -1.5, 0], // Final position of the text
    color: progress < 100 ? "red" : "white", // Change color based on load progress
    from: { position: [0, -3, 0], color: "red" }, // Initial position and color
    config: { tension: 120, friction: 14 }, // Customize animation physics
  })
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.8} pages={3}>

          {/* Use the animated text */}
          <animated.group position={position}>
            <Text fontSize={0.5} color={color} anchorX="center" anchorY="top">
              Hello My BOSS
            </Text>
          </animated.group>     
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}

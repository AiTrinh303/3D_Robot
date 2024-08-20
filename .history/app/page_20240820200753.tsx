import dynamic from "next/dynamic"
import Scene from "@/components/Scene"

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false })

export default function Home() {
  return (
    <main className="h-full">
      <Scene />
    </main>
  )
}

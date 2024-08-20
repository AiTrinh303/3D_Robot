import dynamic from "next/dynamic"
import Sce

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false })

export default function Home() {
  return (
    <main className="h-full">
      <Scene />
    </main>
  )
}

import dynamic from "next/dynamic"


const Scene = dynamic(() => import("@/components/Scene"), { ssr: false })

export default function Home() {
  return (
    <main className="h-full">
      <Scene />
      <h1>Hello my BOss</h1>
    </main>
  )
}

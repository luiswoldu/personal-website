import Navigation from "./components/Navigation"
import Introduction from "./components/Introduction"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex flex-1 items-center">
        <Introduction />
      </main>
    </div>
  )
}
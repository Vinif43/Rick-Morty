import About from './components/Home/About'
import Welcome from './components/Home/Welcome'

export default function Home() {
  return (
    <main className="bg-stone-900 text-white">
      <Welcome />
      <About />
    </main>
  )
}

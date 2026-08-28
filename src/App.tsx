import { LandingPage } from './components/LandingPage.tsx'
import { Navbar } from './components/Navbar.tsx'

function App() {
  return (
    <div className="min-h-svh bg-slate-50 text-slate-900">
      <Navbar />
      <LandingPage />
    </div>
  )
}

export default App

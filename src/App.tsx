import { Outlet } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"

function App() {

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] align-middle">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  )
}

export default App

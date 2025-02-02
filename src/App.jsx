import { Outlet } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {


  return (
    <>

      <div className="h-16 mb-2">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-155px)]">
        <Outlet />
      </div>

      <Footer></Footer>

    </>
  )
}

export default App

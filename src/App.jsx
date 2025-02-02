import { Outlet } from "react-router"
import Home from "./components/Home"
import Navbar from "./components/Navbar"


function App() {
  

  return (
    <>
      <Navbar />
      <Outlet />
     
    </>
  )
}

export default App

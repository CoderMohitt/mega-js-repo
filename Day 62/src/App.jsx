import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Navbar from "./component/Navbar"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"


function App() {

  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App

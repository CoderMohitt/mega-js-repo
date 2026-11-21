import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./component/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./component/DashboardHome";
import Profile from "./component/Profile";
import DashboardLayout from "./component/DashboardLayout";
import MainLayout from "./component/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="profile" element={<Profile />} />
          </Route>

        </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

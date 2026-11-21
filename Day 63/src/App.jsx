import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Navbar from "./component/Navbar";
import DashboardLayout from "./Layout/DashboardLayout";
import Login from "./pages/Login";
import MainLayout from "./Layout/MainLayout";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>

          {/* <Route path="/products/:id/number/:a" element={<ProductDetail />} /> */}

          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>

        </Route>

          <Route path="/login" element={<Login />} />

      </Routes>
    </>
  );
}

export default App;

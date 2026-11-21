import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto p-6">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;

import React from "react";
import { NavLink, Outlet } from "react-router";

function DashboardLayout() {
  return (
    <div className="flex gap-6">
      <aside className="w-48 space-y-1">
        <NavLink to="/dashboard" >
          Overview
        </NavLink>
        <NavLink to="/dashboard/profile">
          Profile
        </NavLink>
      </aside>

      <section className="flex-1">
        <Outlet /> {/* matching child route renders here */}
      </section>
    </div>
  );
}

export default DashboardLayout;

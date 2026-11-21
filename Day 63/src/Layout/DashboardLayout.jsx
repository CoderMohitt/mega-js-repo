import React from 'react'
import { Outlet } from 'react-router'

function DashboardLayout() {
  return (
    <div>
      <aside>
        this is only for dashboard sidebar
      </aside>

      <Outlet />
    </div>
  )
}

export default DashboardLayout
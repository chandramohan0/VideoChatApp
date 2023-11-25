import React from 'react'
import useAuth from '../hooks/useAuth'

function Dashboard() {
 useAuth();
  return (
    <div>
      DashBoard
    </div>
  )
}

export default Dashboard

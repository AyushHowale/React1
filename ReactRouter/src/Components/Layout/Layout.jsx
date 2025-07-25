import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/header'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout

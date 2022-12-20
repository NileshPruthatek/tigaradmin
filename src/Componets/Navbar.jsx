import React from 'react'
import '../Componets/navbar.css'
const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <>
    <nav className="navbar1 px-8 h-14  bg-white flex items-center border-b-2 border-lightgray-500 sm:w-full">
    <div className="nav_icon block text-2xl text-lightgray-500 md:inline-block, md:hidden" onClick={() => openSidebar()}>
      <i className="fa fa-bars" aria-hidden="true"></i>
    </div>
    
   

  </nav>
    </>
  )
}

export default Navbar
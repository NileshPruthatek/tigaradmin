import React from 'react'
import '../Componets/sidebar.css'
import logo from '../assets/images/NEW TIGER LOGO-08.png';
export const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
  
  <div className={sidebarOpen ? " sidebar_responsive " : ""} id="sidebar">
    <i
  onClick={() => closeSidebar()}
     className="fa fa-times lg:hidden   text-white  ml-40  mt-6 sm:inline  "
          id="sidebarIcon" 
          aria-hidden="true"
        ></i> 
      <div className="sidebar__title " onClick={() => closeSidebar()}>
        <div className="flex items-center ">
          <img src={logo} alt="logo" className=" h-24 w-full object-cover md:h-full md:w-48" />
           
        </div>
  

  
  </div>
  <div className='text-white text-xl my-4 ,my-1.5  p-2.5 font-bold'>
  <div className="text-white p-2.5 my-1.5  rounded-sm ">
          <i className=""></i>
          <a href="#" className=" font-bold no-underline">Dashboard</a>
        </div>

        <div className="text-white p-2.5 my-1.5  rounded-sm text-lg">
          <i className="fa fa-home mr-1 sm:mr-2" aria-hidden="true"></i> 
          <a href="/">Home</a>
        </div>
        <div className="text-white p-2.5 my-1.5  rounded-sm text-lg">
        <i class="fas fa-analytics mr-1 sm:mr-2"></i>
          <a href="#">My Products</a>
        </div>

        <div className="text-white p-2.5 my-1.5  rounded-sm text-lg">
        <i class="fad fa-analytics mr-1 sm:mr-2"></i>
          <a href="#">Add Products</a>
        </div>
        <div className="text-white p-2.5 my-1.5  rounded-sm text-lg">
        <i class="fas fa-user  mr-1 sm:mr-2"></i>
          <a href="#">View State</a>
        </div>
        <div className="text-white p-2.5 my-1.5  rounded-sm text-lg">
        <i class="fab fa-product-hunt mr-1 sm:mr-2"></i>
          <a href="/newproducts">Shop Cart</a>
        </div>

        <div className="text-white p-2.5 my-1.5  rounded-sm text-lg">
        <i class="far fa-flag mr-1 sm:mr-2"></i>
          <a href="#">Payment</a>
        </div>
        <div className="text-white p-2.5 my-1.5  rounded-sm text-lg">
        <i class="far fa-flag mr-1 sm:mr-2"></i>
          <a href="/login">Setting</a>
        </div>

  </div>
  </div>

  

  )
}

export default Sidebar
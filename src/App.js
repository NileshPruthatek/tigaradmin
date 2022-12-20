
import React ,{ useState } from "react";
import './index.css';

import Navbar from './Componets/Navbar';
import Sidebar from './Componets/Sidebar';
import Add_Products from "./Pages/Add_Products";

function App() {

  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };

  return (
    <div className="container1">
      <Navbar   sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      <Add_Products/>
      <Sidebar  sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
      
    </div>
  );
}

export default App;

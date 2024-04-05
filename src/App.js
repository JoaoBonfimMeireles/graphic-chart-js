import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css'

import Drawer from './Components/Drawer/Drawer';
import Navbar from './Components/Navbar/Navbar';
import RoutesComponent from './RoutesComponent';
import Home from './Components/Pages/Home/Index';

function App() {

  const [isDrawer, setIsDrawer] = useState(false);

  const handleClickDrawer = () => {
    setIsDrawer((prevIsDrawer) => !prevIsDrawer)
    console.log(isDrawer)
  }

  return (
    <div>
      <BrowserRouter>
      <Navbar handleClickDrawer={handleClickDrawer} />
        <div className="flex justify-between items-top fixed w-screen h-screen">
          {isDrawer && <Drawer />}
          <div className={`w-full flex items-center justify-center`}>
            <RoutesComponent />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

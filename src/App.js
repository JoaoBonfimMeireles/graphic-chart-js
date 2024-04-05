import React, { useState } from 'react';
import './App.css'

import Drawer from './Components/Drawer/Drawer';
import Navbar from './Components/Navbar/Navbar';
import RoutesComponent from './routes';

function App() {

  const [isDrawer, setIsDrawer] = useState(false);

  const handleClickDrawer = () => {
    setIsDrawer((prevIsDrawer) => !prevIsDrawer)
    console.log(isDrawer)
  }

  return (
    <div>
      <Navbar handleClickDrawer={handleClickDrawer} />
      <div className="flex justify-between items-top fixed w-screen h-screen">
        {isDrawer && <Drawer />}
        <div className={`w-full flex items-center justify-center`}>
          <RoutesComponent />
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css'

import Drawer from './Components/Drawer/Drawer';
import Navbar from './Components/Navbar/Navbar';
import TableOne from './Components/Pages/TablesComponents/TableOne/TableOne';


function App() {

  const [isDrawer, setIsDrawer] = useState(false);

  const handleClickDrawer = () => {
    setIsDrawer((prevIsDrawer) => !prevIsDrawer)
    console.log(isDrawer)
  }

  return (
    <div>
      <Navbar handleClickDrawer={handleClickDrawer} />
      <div className="flex justify-between items-top fixed w-screen h-screen mr-[-765px]">
        {isDrawer ? <Drawer /> : ""}
        <div className={`w-full flex items-center justify-center`}>
          <TableOne />
        </div>
      </div>
    </div>
  );
}

export default App;

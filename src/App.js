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
      <div className="flex justify-center items-center fixed">
        {isDrawer ? <Drawer /> : ""}
        <div className={`artboard artboard-horizontal phone-4 relative top-[50px] left-[20%]`}>
          <TableOne />
        </div>
      </div>
    </div>
  );
}

export default App;

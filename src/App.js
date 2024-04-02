import React, { useState } from 'react';
import './App.css'

import Drawer from './Components/Drawer/Drawer';
import Navbar from './Components/Navbar/Navbar';


function App() {

  const [isDrawer, setIsDrawer] = useState(false);
  
    const handleClickDrawer = () => {
        setIsDrawer((prevIsDrawer) => !prevIsDrawer)
        console.log(isDrawer)
    }

  return (
    <div>
      <Navbar handleClickDrawer={handleClickDrawer}/>
      {isDrawer? <Drawer /> : ""}
    </div>
  );
}

export default App;

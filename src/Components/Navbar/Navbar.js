import React, { useState } from 'react';

import Calender from "../Calender/Calender";

function Navbar({handleClickDrawer}) {

    const [isChecked, setIsChecked] = useState(false);


    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked)
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={handleClickDrawer}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-end">
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="checkbox mx-6"
                        />
                        {isChecked ?
                            <Calender /> :
                            <span>
                                Abrir calendário
                            </span>}
                    </label>
                </div>

            </div>
        </div>
    )
}

export default Navbar;
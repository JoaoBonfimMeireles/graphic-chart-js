import React, { useState } from 'react';

import Calender from "../Calender/Calender";
import { Link, useLocation } from 'react-router-dom';

function Navbar({ handleClickDrawer }) {
    const location = useLocation().pathname;
    const homeIsLocation = location !== "/"
    console.log(location.pathname);

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked)
    }

    return (
        <div className="navbar bg-base-100 bg-blue-400 text-blue-950 h-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={handleClickDrawer}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                </div>
            </div>
            <div className="navbar-center">
                <Link to="/">
                    <img className="max-w-20" src="https://institucional.amil.com.br/sites/g/files/wrvpjl431/files/amil.png" />
                </Link>
            </div>
            <div className="navbar-end">
                <div className="form-control">
                    <label className="label cursor-pointer">
                        {homeIsLocation ?
                            <>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    className="checkbox mx-6 border-blue-950"
                                />
                                {isChecked ? <Calender /> : <h1 className="text-xl"> Abrir calendário</h1>}
                            </>
                            : null}
                    </label>
                </div>

            </div>
        </div>
    )
}

export default Navbar;
import React from 'react';
import './Navbar.css';
import menu from '../Assets/menu.png';
import logo from '../Assets/logo.png';


const Navbar = () => {
    return (
        <div className='nav-left'>
            <img className='' src={menu} alt='image'></img>
            <img className='' src={logo} alt='image'></img>
            <div className='nav-middle'>
                <div className='nav-right'>
                </div>
            </div>
        </div>
    )
}




export default Navbar;


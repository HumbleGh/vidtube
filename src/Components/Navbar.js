import React from 'react';
import './Navbar.css';
import menu from '../Assets/menu.png';
import logo from '../Assets/logo.png';
import upload from '../Assets/upload.png';
import more from '../Assets/more.png';
import notification from '../Assets/notification.png';
import Jack from '../Assets/Jack.png';



const Navbar = () => {
    return (
        <span className="flex w-100 bg-blue-300 justify center">
                    <img className="flex justify-center -mr-2" src={menu} alt='image'></img>
                    <img className="flex " src={logo} alt='image'></img>  
                    <img className="" src={upload} alt='image'></img>
                    <img className="" src={more} alt='image'></img>
                    <img className="" src={notification} alt='image'></img>
                    <img className="" src={Jack} alt='image'></img>                     
        </span>
    )
};




export default Navbar;


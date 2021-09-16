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
        <div class="flex-div"> 
             <div className='nav-left'>
                <img className='' src={menu} alt='image'></img>
                <img className='' src={logo} alt='image'></img>
             </div>   
                <div 
                className='nav-middle'>
                </div>
                    <div className='nav-right'>
                    <img className='' src={upload} alt='image'></img>
                    <img className='' src={more} alt='image'></img>
                    <img className='' src={notification} alt='image'></img>
                    <img className='' src={Jack} alt='image'></img>                   
                    </div>
        </div>
    )
};




export default Navbar;


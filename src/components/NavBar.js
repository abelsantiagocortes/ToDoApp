import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return(  <nav className="nav wrapper blue darken-3">
        <div className="container">
            <a className="" className="brand-logo">React Routes</a>
            <ul className="right">
                <li><NavLink to="/Home">Home</NavLink></li>
                <li><NavLink to="/ListToDo">To Do List</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
            </ul>
        </div>
    </nav>)
  

}

export default NavBar
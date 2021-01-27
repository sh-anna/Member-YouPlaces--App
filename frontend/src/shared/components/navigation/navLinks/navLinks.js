import React from 'react';
import { NavLink } from 'react-router-dom';
import './navLinks.css';

const NavLinks = props =>  {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>All USERS</NavLink>
        </li>
        <li>
            <NavLink to="/my-places">My PLACES</NavLink>
        </li>
        <li>
            <NavLink to="/places/new">ADD NEW PLACE</NavLink>
        </li>
        <li>
            <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
    </ul>
};

export default NavLinks;
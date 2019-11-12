import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
  return (
    <nav className={s.navbar}>
        <ul className={s.navbar_nav}>
        <li><NavLink className={s.navbar_link} to="/dialogs" activeClassName={s.active}>Profile</NavLink></li>
        <li><NavLink className={s.navbar_link} to="/content" activeClassName={s.active}>Messages</NavLink></li>
        <li><a className={s.navbar_link} href="#s">News</a></li>
        <li><a className={s.navbar_link} href="#s">Music</a></li>
        <li><a className={s.navbar_link} href="#s">Settings</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;

import React from "react"
import s from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (<nav className={s.sidebar}>
        <div className={s.item}>
            <NavLink to="/content" className = { navData => navData.isActive ? s.activeLink : s.item}>Games</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" className = { navData => navData.isActive ? s.activeLink : s.item}>Messages</NavLink>
        </div>
        <div className={s.item}>
        <NavLink to="/dialogs" className = { navData => navData.isActive ? s.activeLink : s.item}>third</NavLink>
        </div>
    </nav>)

}

export default Navbar
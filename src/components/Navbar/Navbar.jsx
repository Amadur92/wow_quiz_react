import React from "react"
import s from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    let elements = [
        {link:"/content", link_text:"Games"},
        {link:"/dialogs", link_text:"Messages"},
        {link:"/new-table", link_text:"New Table"},
]
    let navbar = elements.map(
        element => {
            return (<div className={s.item}>
            <NavLink to={element.link} className = { navData => navData.isActive ? s.activeLink : s.item}>{element.link_text}</NavLink>
            </div>)
            })

    return (<nav className={s.sidebar}>
        {navbar}       
    </nav>)
}

export default Navbar
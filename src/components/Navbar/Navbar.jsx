import React from "react"
import s from "./Navbar.module.css"

const Navbar = () => {
    return (<nav className={s.sidebar}>
        <div>
            <a href="/content">Games</a>
        </div>
        <div>
            <a href="/dialogs">Messages</a>
        </div>
        <div>
        <a href="/dialogs">third</a>
        </div>
    </nav>)

}

export default Navbar
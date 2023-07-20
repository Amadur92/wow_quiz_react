import React from "react"
import s from "./Navbar.module.css"

const Navbar = () => {
    return (<nav className={s.sidebar}>
        <div>
            <ul>Games</ul>
        </div>
        <div>
            <ul>Messages</ul>
        </div>
        <div>
            <ul>three</ul>
        </div>
    </nav>)

}

export default Navbar
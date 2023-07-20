import React from "react"
import s from "./Content.module.css"
import Post from "./Post.jsx"


const Content = () => {

    return (<div className={s.content}>
        <img src='https://wowquiz.ru/images/obl.jpeg' alt='logo' />
        Hello asshole
        bla bla
        <Post name='game 1' likes='15'/>
        <Post name='game 2' likes='20'/>
    </div>
    )
}

export default Content
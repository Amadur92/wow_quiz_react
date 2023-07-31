import React from "react"
import s from "./../Dialogs.module.css"
import { NavLink } from "react-router-dom"


const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={s.dialog+ " "+ s.active_dialog}>
        <img src='https://cdn0.iconfinder.com/data/icons/unigrid-flat-human-vol-2/90/011_101_anonymous_anonym_hacker_vendetta_user_human_avatar-512.png' alt="avatar" />
        <NavLink to={path} className={s.author}>
        {props.author_name}
        </NavLink>

        <p className={s.message}>{props.message_text}</p>
        </div>
    )
}

export default DialogItem
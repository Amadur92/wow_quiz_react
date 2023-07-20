import React from "react"
import s from "./Dialogs.module.css"

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
        <img src='https://cdn0.iconfinder.com/data/icons/unigrid-flat-human-vol-2/90/011_101_anonymous_anonym_hacker_vendetta_user_human_avatar-512.png' alt="avatar" />
        <h1>{props.author}</h1>

        <p>{props.text}</p>
        </div>
    )
}
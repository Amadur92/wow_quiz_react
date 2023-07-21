import React from "react"
import s from "./Dialogs.module.css"


const AllDialogs = (props) => {
    return (
        <div className={s.AllDialogs}>
        <div className={s.dialogs}>
            <DialogPreview author_name='mike' message_text='hello world bla bla bla'/>
            <DialogPreview author_name='john' message_text='second message'/>
            <DialogPreview author_name='pete' message_text='are you goind to quiz'/>
        </div>
       <div className={s.active_dialog}>

       </div>
       </div>
    )
}

const DialogPreview = (props) => {
    return (
        <div className={s.dialog}>
        <img src='https://cdn0.iconfinder.com/data/icons/unigrid-flat-human-vol-2/90/011_101_anonymous_anonym_hacker_vendetta_user_human_avatar-512.png' alt="avatar" />
        <a className={s.author}>{props.author_name}</a>

        <p className={s.message}>{props.message_text}</p>
        </div>
    )
}

export default AllDialogs
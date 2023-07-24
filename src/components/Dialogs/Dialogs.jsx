import React from "react"
import s from "./Dialogs.module.css"
import { NavLink } from "react-router-dom"


const AllDialogs = (props) => {
    let dialogs_data = [
        {id:'1', author_name:'mike', message_text:'blah blah blah'},
        {id:'2', author_name:'john', message_text:'second message'},
        {id:'3', author_name:'pete', message_text:'are you going to quiz?'},
        {id:'3', author_name:'pete', message_text:'are you going to quiz?'},
        {id:'3', author_name:'pete', message_text:'are you going to quiz?'},
        {id:'3', author_name:'pete', message_text:'are you going to quiz?'},
        {id:'3', author_name:'pete', message_text:'are you going to quiz?'},
    ]
    let data = dialogs_data.map(dialog => 
    <DialogPreview 
    id={dialog.id} 
    author_name={dialog.author_name} 
    message_text={dialog.message_text}/>)
        
    return (
        
        <div className={s.AllDialogs}>
        <div className={s.dialogs}>

        <a>{data}</a>
          </div>
       </div>
    )
}

const DialogPreview = (props) => {
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

const DialogFullView = (props) => {
    return (
        <div className={s.dialog+ " "+ s.active_dialog}>

        </div>
    )
}

export default AllDialogs
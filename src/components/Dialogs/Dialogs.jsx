import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"

const AllDialogs = (props) => {
    
    
    let data = props.dialogs_data.map(dialog => 
    <DialogItem
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



const DialogFullView = (props) => {
    return (
        <div className={s.dialog+ " "+ s.active_dialog}>

        </div>
    )
}

export default AllDialogs
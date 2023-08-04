import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import { updateMessageTextActionCreator, sendMessageActionCreator} from "../../redux/DialogsPageReducer.js"


const AllDialogs = (props) => {
    
    let newMessageElement = React.createRef()
    let data = props.dialogs_data.dialogs.map(dialog => 
    <DialogItem
    id={dialog.id} 
    author_name={dialog.author_name} 
    message_text={dialog.message_text}/>)
        let updateMessageText = () => {
            let text = newMessageElement.current.value;
            props.dispatch(updateMessageTextActionCreator(text))
        }
let sendMessage = () => {
    props.dispatch(sendMessageActionCreator())
}
    return (
        
        <div className={s.AllDialogs}>
        <div className={s.dialogs}>

        <a>{data}</a>
          </div>
          <div className={s.textarea}>
          <textarea onChange={updateMessageText} ref= {newMessageElement} defaultValue={props.defaultMessageArea}/>
          <button text='send message' onClick={sendMessage}/>
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
import React from "react"
import s from "./Dialogs.module.css"


const Dialogs = (props) => {

    let newMessageElement = React.createRef()

    let updateMessageText = () => {
        let text = newMessageElement.current.value;
        props.updateMessageText(text)
    }
    let sendMessage = () => {
        props.sendMessage()
    }
    return (

        <div className={s.AllDialogs}>
            <div className={s.dialogs}>

                <a>{props.data}</a>
            </div>
            <div className={s.textarea}>
                <textarea onChange={updateMessageText} ref={newMessageElement} defaultValue={props.defaultMessageArea} />
                
                <button className={s.sendmessage} text='send message' onClick={sendMessage}>SendMessage</button>
            </div>
        </div>
    )
}



const DialogFullView = (props) => {
    return (
        <div className={s.dialog + " " + s.active_dialog}>

        </div>
    )
}

export default Dialogs
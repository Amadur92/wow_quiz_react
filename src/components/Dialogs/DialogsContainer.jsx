import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import { updateMessageTextActionCreator, sendMessageActionCreator} from "../../redux/DialogsPageReducer.js"
import Dialogs from "./Dialogs"
import storeContext from "../../StoreContext/StoreContext.js";

const DialogsContainer = () => {

    return (
        <storeContext.Consumer>
            {
            (store) => {
                let state = store.getState().dialogsReducer

                let data = state.dialogs.map(dialog =>
                    <DialogItem
                        id={dialog.id}
                        author_name={dialog.author_name}
                        message_text={dialog.message_text}/>)
                let updateMessageText = (text) => {

                    store.dispatch(updateMessageTextActionCreator(text))
                }
                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator())
                }
                return <Dialogs
                    updateMessageText = {updateMessageText}
                    sendMessage = {sendMessage}
                    data = {data}
                />
            }
        }

        </storeContext.Consumer>)

}



const DialogFullView = (props) => {
    return (

        <div className={s.dialog+ " "+ s.active_dialog}>

        </div>


    )
}

export default DialogsContainer
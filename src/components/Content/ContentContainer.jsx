import React from "react"
import Content from './Content.jsx'
import { addPostActionCreator, updatePostTextActionCreator } from "../../redux/ContentPageReducer.js"
import storeContext from "../../StoreContext/StoreContext.js";

const ContentContainer = (props) => {

    return (
<storeContext.Consumer>
    {
    store => {
        let state = store.getState().contentReducer

        let newGameAdd = () => {
            store.dispatch(addPostActionCreator())

        }
        let updatePostText = (text) => {

            store.dispatch(updatePostTextActionCreator(text))
        }
        return (<Content
        updatePostText={updatePostText}
        newGameAdd={newGameAdd}
        posts={state.posts}
        defaultTextArea={state.defaultTextArea}
    />)}
}

</storeContext.Consumer>)
}

export default ContentContainer
import contentReducer from "./ContentPageReducer"
import dialogsReducer from "./DialogsPageReducer"
import tableReducer from "./TablePageReducer"

let store = {
  _state: {
    table_data:
    {
      gameName: "game1",
      roundCount: 9,
      teamCount: 1,
      result: [{
        teamName: 'team 1',
        wowRounds: [undefined, undefined],
        gameResult: Array(9).fill(0),
        sum: 0
      }],
    },
    dialogs_data: {
      dialogs: [
        { id: '1', author_name: 'mike', message_text: 'blah blah blah' },
        { id: '2', author_name: 'john', message_text: 'second message' },
        { id: '3', author_name: 'pete', message_text: 'are you going to quiz?' },
        { id: '4', author_name: 'pete', message_text: 'are you going to quiz?' },
        { id: '5', author_name: 'pete', message_text: 'are you going to quiz?' },
        { id: '6', author_name: 'pete', message_text: 'are you going to quiz?' },
        { id: '7', author_name: 'pete', message_text: 'are you going to quiz?' },
      ], newMessageText: '',
      
    },

    content_data: {
      posts: [
        { id: '1', name: "game 1", likes: '15' },
        { id: '2', name: "game 2", likes: '5' },
        { id: '3', name: "game 3", likes: '125' },
        { id: '4', name: "game 4", likes: '1125' },
      ],
      defaultTextArea: "blablaBla",
      
    }


  },
  rerenderEntireTree() {

  },
  subscribe (observer) { //pattern observer
    this.rerenderEntireTree = observer
  },
  getState() {
    return this._state
  },
  _callSubscriber () {
    //this.rerenderEntireTree(this._state)
  },

  

  dispatch(action) {

    this._state.dialogs_data = dialogsReducer(this._state.dialogs_data, action)
    this._state.content_data = contentReducer(this._state.content_data, action)
    this._state.table_data = tableReducer(this._state.table_data, action)
    this.rerenderEntireTree() 
  }
}


export const addPostActionCreator = () => {
  return {
    type: "ADD-POST",
  }
}
export const sendMessageActionCreator = () => {
  return {
    type: "SEND-MESSAGE-TEXT",
  }
}

export const updateMessageTextActionCreator = (text) => {
  return {
    type: 'UPDATE-MESSAGE-TEXT',
    text: text,
  }
}

export const updatePostTextActionCreator = (text) => {
  return {
    type: 'UPDATE-POST-TEXT',
    text: text,
  }
}



export default store
window.store = store


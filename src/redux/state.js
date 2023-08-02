
let store = {
  _state: {
    table_data: 
      {
gameName: "game1",
roundCount: 9,
teamCount: 1,
result: [{teamName: 'team 1',
wowRounds: [undefined, undefined],
gameResult: Array(9).fill({value:0}),
sum: 0},]
      },
    dialogs_data: [
      { id: '1', author_name: 'mike', message_text: 'blah blah blah' },
      { id: '2', author_name: 'john', message_text: 'second message' },
      { id: '3', author_name: 'pete', message_text: 'are you going to quiz?' },
      { id: '4', author_name: 'pete', message_text: 'are you going to quiz?' },
      { id: '5', author_name: 'pete', message_text: 'are you going to quiz?' },
      { id: '6', author_name: 'pete', message_text: 'are you going to quiz?' },
      { id: '7', author_name: 'pete', message_text: 'are you going to quiz?' },
    ],

    posts: [
      { id: '1', name: "game 1", likes: '15' },
      { id: '2', name: "game 2", likes: '5' },
      { id: '3', name: "game 3", likes: '125' },
      { id: '4', name: "game 4", likes: '1125' },
    ],
    newMessageText:'',

    defaultTextArea: "blablaBla",
  },
  rerenderEntireTree() {

  },
  rerender(observer) { //pattern observer
    this.rerenderEntireTree = observer
  },
  getState() {
    return this._state
  },

  dispatch(action) {

    switch (action.type) {
      case "ADD-POST": {
        let newGame = {
          id: "5",
          name: this._state.defaultTextArea,
          likes: '0',
        }
        //console.log(newGame)
        this._state.posts.push(newGame)
        this.rerenderEntireTree(this._state)
        break
      }
      case "UPDATE-POST-TEXT": {
        this._state.defaultTextArea = action.text
        this.rerenderEntireTree(this._state)
        break
      }
      case "UPDATE-MESSAGE-TEXT": {
        this._state.newMessageText = action.text
        this.rerenderEntireTree(this._state)
        break
      }
      case "ADD-NEW-TEAM":{
        let newTeam = {
          teamName: '',
          wowRounds: [undefined, undefined],
          gameResult:['0' * this._state.table_data.roundCount],
          sum: 0
        }
        this._state.table_data.result.push(newTeam)
        this.rerenderEntireTree(this._state)
        break
      }
      case "SEND-MESSAGE-TEXT": {
        let newMessage = {
          id: "14",
          message_text: this._state.newMessageText,
          author_name: 'Mike',
        }
        this._state.dialogs_data.push(newMessage)
        this.rerenderEntireTree(this._state)
        break
      }
      default : {
        alert('wrong case')
      }
    }

  },
  
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


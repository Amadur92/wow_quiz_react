
let initialState = {
  dialogs: [
    { id: '1', author_name: 'mike', message_text: 'blah blah blah' },
    { id: '2', author_name: 'john', message_text: 'second message' },
    { id: '3', author_name: 'pete', message_text: 'are you going to quiz?' },
    { id: '4', author_name: 'pete', message_text: 'are you going to quiz?' },
    { id: '5', author_name: 'pete', message_text: 'are you going to quiz?' },
    { id: '6', author_name: 'pete', message_text: 'are you going to quiz?' },
    { id: '7', author_name: 'pete', message_text: 'are you going to quiz?' },
  ], newMessageText: '',
  
}

const dialogsReducer = (state=initialState, action) => {
  console.log(state)
    switch (action.type) {
        
        case "UPDATE-MESSAGE-TEXT": {
         state.newMessageText = action.text
          break
        }

        case "SEND-MESSAGE-TEXT": {
          let newMessage = {
            id: "14",
            message_text: state.newMessageText,
            author_name: 'Mike',
          }
          state.dialogs.push(newMessage)
          break
        }
        default: {
          
        }
      }

  
    
    return state
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

export default dialogsReducer
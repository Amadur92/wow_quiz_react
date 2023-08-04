let initialState = {
    posts: [
      { id: '1', name: "game 1", likes: '15' },
      { id: '2', name: "game 2", likes: '5' },
      { id: '3', name: "game 3", likes: '125' },
      { id: '4', name: "game 4", likes: '1125' },
    ],
    defaultTextArea: "blablaBla",
    
  }

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-POST": {
          let newGame = {
            id: "5",
            name: state.defaultTextArea,
            likes: '0',
          }
          //console.l   og(newGame)
         state.posts.push(newGame)
          break
        }
        case "UPDATE-POST-TEXT": {
        console.log(action.text)
          state.defaultTextArea = action.text
          break
        }

        default : {
          
        }
      }
    
    return state
}

export const addPostActionCreator = () => {
    return {
      type: "ADD-POST",
    }
  }
  export const updatePostTextActionCreator = (text) => {
    return {
      type: 'UPDATE-POST-TEXT',
      text: text,
    }}
export default contentReducer
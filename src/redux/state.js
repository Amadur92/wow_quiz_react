let rerenderEntireTree = () => {}

let state ={
 dialogs_data : [
    {id:'1', author_name:'mike', message_text:'blah blah blah'},
    {id:'2', author_name:'john', message_text:'second message'},
    {id:'3', author_name:'pete', message_text:'are you going to quiz?'},
    {id:'4', author_name:'pete', message_text:'are you going to quiz?'},
    {id:'5', author_name:'pete', message_text:'are you going to quiz?'},
    {id:'6', author_name:'pete', message_text:'are you going to quiz?'},
    {id:'7', author_name:'pete', message_text:'are you going to quiz?'},
  ],
  
  posts : [
    {id: '1', name:"game 1", likes:'15'},
    {id: '2',name:"game 2", likes:'5'},
    {id: '3',name:"game 3", likes:'125'},
    {id: '4',name:"game 4", likes:'1125'},
  ],
defaultTextArea : "blablaBla"}


export let addGame = () => {
    let newGame = {
        id: "5",
        name: state.defaultTextArea,
        likes: '0',
    }
    state.posts.push(newGame)
    rerenderEntireTree(state)
}

export let updatePostText = (text) => {
  state.defaultTextArea = text
  rerenderEntireTree(state)
}

export const rerender = (observer) => { //pattern observer
  rerenderEntireTree = observer
}

export default state


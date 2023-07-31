import React from "react"
import Post from "./Post/Post.jsx"


const Content = (props) => {
    console.log(props)
    let newPostElement = React.createRef()
    let newGameAdd = () => {
        let text = newPostElement.current.value;
        props.addGame(text)
        newPostElement.current.value =''
    }
    let all_posts = props.posts.map(
        post => <Post name={post.name} likes={post.likes}/>
    )
    return (<div>
        <img src='https://wowquiz.ru/images/obl.jpeg' alt='logo' />
        <div>
            <textarea ref= {newPostElement}></textarea>
        </div>
        <button onClick={newGameAdd}>add game</button>
        Hello asshole
        bla bla
        {all_posts}
    </div>
    )
}

export default Content
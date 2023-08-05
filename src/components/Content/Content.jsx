import React from "react"
import Post from "./Post/Post.jsx"
import s from "./Content.module.css"






const Content = (props) => {
    console.log(props)

    let newPostElement = React.createRef()

    let newGameAdd = () => {
        newPostElement.current.value = ''
        props.newGameAdd()
    }
    let all_posts = props.posts.map(
        post => <Post name={post.name} likes={post.likes} />
    )
    let updatePostText = () => {
        let text = newPostElement.current.value;
        props.updatePostText(text)
    }

    return (<div >
        <img src='https://wowquiz.ru/images/obl.jpeg' alt='logo' />
        <div className={s.textarea}>
            <textarea onChange={updatePostText} ref={newPostElement} defaultValue={props.defaultTextArea} />
        </div>
        <button onClick={newGameAdd}>add game</button>
        Hello asshole
        bla bla
        {all_posts}
    </div>
    )
}

export default Content
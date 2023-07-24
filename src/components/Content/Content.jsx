import React from "react"

import Post from "./Post.jsx"


const Content = () => {
    let posts = [
        {name:"game 1", likes:'15'},
        {name:"game 2", likes:'5'},
        {name:"game 3", likes:'125'},
        {name:"game 4", likes:'1125'},
    ]
    let all_posts = posts.map(
        post => <Post name={post.name} likes={post.likes}/>
    )
    return (<div>
        <img src='https://wowquiz.ru/images/obl.jpeg' alt='logo' />
        Hello asshole
        bla bla
        {all_posts}
    </div>
    )
}

export default Content
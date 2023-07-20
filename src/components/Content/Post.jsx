import React from "react"
import "./Post.module.css"

const Post = (props) => {
    return (<div>
        <img src='https://yt3.ggpht.com/ytc/AOPolaTgpi3z3jrCrQQdVZezCFIKwzkPrL7_jagDtsvLEA=s48-c-k-c0x00ffffff-no-rj' alt='logo'/>
        {props.name}
        <div>
        <span>Like </span>{props.likes}
        </div>
    </div>)

}

export default Post
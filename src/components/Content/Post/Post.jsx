import React from "react"
import s from "./Post.module.css"


const Post = (props) => {
    
    return (<div className={s.post}>
        <img src='https://yt3.ggpht.com/ytc/AOPolaTgpi3z3jrCrQQdVZezCFIKwzkPrL7_jagDtsvLEA=s48-c-k-c0x00ffffff-no-rj' alt='logo'/>
        <h3>{props.name}</h3>
        <div>
        <span>Like </span>{props.likes}
        </div>
    </div>)

}

export default Post
import React from "react";
import {withRouter} from "react-router";

const PostList=(props)=>{


    let{post}=props
    return(
        <div>
            userId:  {post.userId}-- Id: {post.id}-- title: {post.title}--{post.body} <hr/>
            <button onClick={()=> {props.history.push({pathname:`/posts/${post.id}`})}} >post comment</button>
        </div>
    )

}
export default withRouter(PostList)

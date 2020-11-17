import React from 'react'
import {withRouter} from "react-router";


const CommentList=(props)=>{

    let{postId,id,name,email,body}=props.comment
    return(
        <div>

            postId: {postId}---id:{id}--{name}--Email:{email}-- body:{body}

        </div>
    )





}
export default withRouter(CommentList)

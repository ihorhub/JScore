import React, {useEffect, useState} from 'react'
import {SpiService} from "../../service/spiService";
import CommentList from "./commentsList";


const Comments=()=>{
    const _apiComment=new SpiService()
    const[comments,setComment]=useState([])
    useEffect(()=>{
        _apiComment.getComments().then(value => setComment(value))
    })
    return(
        <div>
            {comments.map(value => (<CommentList comment={value} key={value.id}/>

            ))}
        </div>
    )
}
export default Comments

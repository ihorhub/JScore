import React, {useEffect, useState} from 'react'
import {SpiService} from "../../service/spiService";
import CommentList from "./commentsList";


const Comments=()=>{
    const _apiComment=new SpiService()
    const[comments,setComment]=useState([])
 let isSubscriber=true
    useEffect(()=>{
        _apiComment.getComments().then(value => {if (isSubscriber) {setComment(value)}})
        return ()=>{isSubscriber=false}
    })
    return(
        <div>
            {comments.map(value => (<CommentList comment={value} key={value.id}/>

            ))}
        </div>
    )
}
export default Comments

import React, {useEffect, useState} from 'react'
import {SpiService} from "../../service/spiService";

const PostIdComment =(props)=>{
    const _apiPostId=new SpiService()
    let [postId,setPostId]=useState([])
    useEffect(()=>{
        const id=props.match.params.id
        _apiPostId.getPostId(id).then(value => setPostId(value))
    })
    return(

        <div>
            {postId && (postId.map(item=>(<div key={item.id}>
                PostId-{item.postId}- {item.id}---name-{item.name} -
                {item.email}-
                {item.body} <hr/></div>)))}
                <hr/>
        </div>
    )


}

export default PostIdComment

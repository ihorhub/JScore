import {SpiService} from "../../service/spiService";
import React, {useEffect, useState} from "react";
import PostList from "./postList";


const Posts=()=>{

    const _apiPost= new SpiService()
    const [posts,setPosts]=useState([])
    let isSubscriber=true
    useEffect(()=>{ _apiPost.getPosts().then(posts => {if (isSubscriber){setPosts(posts)}})
    return( )=>{isSubscriber=false} })
    return(
        <div>
            {posts.map(post=>(<PostList  post={post} key={post}/>))}
        </div>
    )
}
export default Posts

import {SpiService} from "../../service/spiService";
import React, {useEffect, useState} from "react";
import PostList from "./postList";


const Posts=()=>{

    const _apiPost= new SpiService()
    const [posts,setPosts]=useState([])
    useEffect(()=>{ _apiPost.getPosts().then(posts => setPosts(posts))})
    return(
        <div>
            {posts.map(post=>(<PostList  post={post} key={post}/>))}
        </div>
    )
}
export default Posts

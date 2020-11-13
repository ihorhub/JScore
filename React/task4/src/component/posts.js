import React, {Component} from 'react';
import {ApiService} from "../service/apiService";
import PostList from "./postList";

class Posts extends Component {
    state={posts:[]}
    _apiPost=new ApiService()

    componentDidMount() {
        this._apiPost.getPosts().then(value => this.setState({posts:value}))
    }

    render() {
        let {posts}=this.state


        return (
            <div>
                {posts.map(value => (<PostList post={value} key={value.id}/>))}
            </div>
        );
    }
}

export default Posts;

import React, {Component} from 'react';
import {ApiServis} from "../../service/ApiServis";
import PostList from "./postList";

class Posts extends Component {
    api=new ApiServis()
    state={posts:[]}
    async componentDidMount(){
        this.setState({posts:await this.api.getPosts()})
    }
    render() {
        return (
            <div>
                {
                    this.state.posts.map(value => (<PostList post={value} key={value.id}/>))
                }
            </div>
        );
    }
}

export default Posts;

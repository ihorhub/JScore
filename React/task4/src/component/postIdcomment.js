import React, {Component} from 'react';
import {ApiService} from "../service/apiService";

class PostIdcomment extends Component {
    state={post:[]}
    _apiPost=new ApiService()
    componentDidMount() {
        const id=this.props.match.params.id
        this._apiPost.getPostId(id).then(value => this.setState({post:value}))
    }

    render() {
        let{post}=this.state
        return (
            <div>
                {post && (post.map(item=>(<div key={item.id}>
                        PostId-{item.postId}- {item.id}---name-{item.name} -
                        {item.email}-
                    {item.body}</div>)))}
            </div>
        );
    }
}

export default PostIdcomment;

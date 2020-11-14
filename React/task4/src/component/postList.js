import React, {Component} from 'react';
import {withRouter} from "react-router";

class PostList extends Component {
    render() {
        let {userId,id,title,body}=this.props.post
        console.log(this.props.post)
        return (
            <div>
                <div>
                   userId:  {userId}-- Id: {id}-- title: {title}--{body} <hr/>
                   <button onClick={ ()=>{this.postComent(id)}}> comment of post</button>
                </div>
            </div>
        );
    }

    postComent=(id)=> {
        this.props.history.push({pathname:`/posts/${id}`})

    }
}

export default withRouter(PostList);

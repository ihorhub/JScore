import React, {Component} from 'react';
import {ApiService} from "../service/apiService";
import CommentList from "./commentList";

class Comments extends Component {
    _apiComment=new ApiService()
    state={comments:[]}
    componentDidMount() {this._apiComment.getComments().then(value => this.setState({comments:value}))
    }

    render() {
        let {comments}=this.state
        return (
            <div>
                {comments.map(value => (<CommentList comment={value} key={value.id}/>))}
            </div>
        );
    }
}

export default Comments;

import React, {Component} from 'react';
import {ApiServis} from "../../service/ApiServis";
import CommentList from "./commentList";

class Comments extends Component {
    apicoment=new ApiServis()
    state={comments:[]}
    async componentDidMount(){
        this.setState({comments:await this.apicoment.getComments()})
    }
    render() {
        return (
            <div>
                {this.state.comments.map(value => (<CommentList comment={value} key={value.id}/>))}
            </div>
        );
    }
}

export default Comments;

import React, {Component} from 'react';

class CommentList extends Component {
    render() {
        let {postId,id,name,email,body}=this.props.comment
        return (
            <div>
               postId: {postId}---id:{id}--{name}--Email:{email}-- body:{body}
                <hr/>
            </div>
        );
    }
}

export default CommentList;

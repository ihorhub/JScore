import React, {Component} from 'react';

class PostList extends Component {
    render() {
        let {userId,id,title,body}=this.props.post
        return (
            <div>
                <div>
                   userId:  {userId}-- Id: {id}-- title: {title}--{body} <hr/>
                </div>
            </div>
        );
    }
}

export default PostList;

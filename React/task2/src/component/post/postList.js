import React, {Component} from 'react';

class PostList extends Component {
    render() {
        let {id,title,body}=this.props.post
        return (
            <div>
                {id}-{title}-{body}
            </div>
        );
    }
}

export default PostList;


import React, {Component} from 'react';

class CommentList extends Component {
    render() {
        let {id,name,email,body}=this.props.comment
        return (
            <div>
                {id}-{name}-{email}-{body}
            </div>
        );
    }
}

export default CommentList;

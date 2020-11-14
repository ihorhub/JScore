import React, {Component} from 'react';

class UserIdList extends Component {
    render() {
        let {userId}=this.props
        return (
            <div>
                {userId.id}--
                {userId.name}--
                {userId.username}--
                {userId.email}-
            </div>
        );
    }
}

export default UserIdList;

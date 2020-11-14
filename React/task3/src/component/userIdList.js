import React, {Component} from 'react';

class UserIdList extends Component {
    render() {
        let {id, name,username,email}=this.props.userId
        return (
            <div>
                {id}--
                {name}--
                {username}--
                {email}-
            </div>
        );
    }
}

export default UserIdList;

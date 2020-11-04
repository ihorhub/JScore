import React, {Component} from 'react';

class UserList extends Component {
    render() {
        let {id, name,username,email}=this.props.user
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

export default UserList;

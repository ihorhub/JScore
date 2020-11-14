import React, {Component} from 'react';
import {Switch, withRouter} from "react-router";

class UserList extends Component {

    render() {
        let {id, name, username, email} = this.props.user
        console.log(this.props.user)

        return (
            <div>
                <p> {id}-- </p>
                <p> name: {name}--</p>
                <p> user name: {username}--</p>
                <p> Email: {email}-</p>
                <button onClick={() => { this.userPosts(id) }}> user post  </button>
                <hr/>

            </div>
        );

    }

    userPosts = (id) => {
        this.props.history.push({pathname: `/users/${id}`})
    }
}

export default withRouter(UserList);

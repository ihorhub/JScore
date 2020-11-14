import React, {Component} from 'react';
import {ApiService} from "../service/apiService";
import UserList from "./userList";


class Users extends Component {
    _apiUser=new ApiService()
    state={users:[]}
    componentDidMount() {this._apiUser.getUsers().then(value => this.setState({users:value}))

    }

    render() {
        let {users}=this.state;
        // let {match:{path}}=this.props
        return (
            <div>
                {users.map(user=>(<UserList user={user} key={user.id}/>))}



            </div>

        );
    }
}

export default Users;

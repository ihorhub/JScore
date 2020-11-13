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
        return (
            <div>
                {users.map(value =>(<UserList user={value} key={value.id}/>

                ) )}
            </div>

        );
    }
}

export default Users;

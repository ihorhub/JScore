import React, {Component} from 'react';
import {ApiService} from "../service/ApiService";
import UserList from "./userList";
import UserId from "./userId";

class Users extends Component {

    state={users:[],username:[],id:'', name:'' }
    _apiUser=new ApiService()
    componentDidMount() {
     this._apiUser.getUsers().then(value => this.setState({users:value}))
    }

    render() {

        let{username}=this.state

        return (
            <div>
                <form onSubmit={this.onFormSubmit}>

                    <input type="text" placeholder={'search name'} value={this.state.name} onChange={this.nameSearch}/>
                    <button>search</button>
                </form>

                { username.map(value =>(<UserList user={value} key={value.id}/>))}

            </div>
        );
    }


    onFormSubmit=(e)=> {e.preventDefault()
    }


    nameSearch=(even)=> {
        const users=this.state.users
        const res = users.filter(value => value.name.toLowerCase().includes(even.target.value.toLowerCase()));
        this.setState({username: res})
             console.log(res)
            console.log(this.state.username)

    }
}

export default Users;

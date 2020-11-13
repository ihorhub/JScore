import React, {Component} from 'react';
import {ApiService} from "../service/ApiService";
import UserList from "./userList";

class Users extends Component {
    apiUser=new ApiService()
    state={users:[],userId:[],username:[],id:'', name:'' }
    async componentDidMount() {
        this.setState({users:await this.apiUser.getUsers()})
    }

    render() {

        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="number" value={this.state.id} onChange={this.idSearch}/>
                    <input type="text" value={this.state.name} onChange={this.nameSearch}/>
                    <button>search</button>
                </form>
                { }
            </div>
        );
    }

    idSearch=(ev)=> {
        this.setState({id:ev.target.value})
       console.log(ev)

        const user=this.state.users.filter(item=>{ return item.id===+ev.target.value})

        console.log(user)
    this.setState({userId:user})
        console.log(this.state.users)
        console.log(this.state.userId)

    }
    onFormSubmit=(e)=> {e.preventDefault()
        {this.state.userId.map(value =>(<UserList user={value} key={value.id}/>))}
        {this.state.username.map(value =>(<UserList user={value} key={value.id}/>))}
    }
    nameSearch=(even)=> {
        this.setState({name:even.target.value})
        console.log(this.state.name)

        const username=
            this.state.users.filter((data) => {
                return data.name.toLowerCase().search(even.target.value.toLowerCase()!==-1)
            });console.log(username)
this.setState({username:username})
       // this.state.users.filter(item=> { return item.name===even.target.value})
       // const username= this.state.users.find(value => { return value.name===even.target.value })
console.log(username)
console.log(this.state.users)

    }
}

export default Users;

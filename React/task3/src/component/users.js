import React, {Component} from 'react';
import {ApiService} from "../service/ApiService";
import UserList from "./userList";

class Users extends Component {
    apiUser=new ApiService()
    state={users:[],userId:[],id:'', name:'' }
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
        //console.log(ev)

        const userId=this.state.users.filter(item=>{ return item.id===+ev.target.value})

        console.log(userId)
    this.setState({userId:this.userId})
        console.log(this.state.userId)
        console.log(userId)
    }
    onFormSubmit=(e)=> {e.preventDefault()
        this.userId.map(value =>(<UserList user={value} key={value.id}/>))
    }
    nameSearch=(even)=> {
        this.setState({name:even.target.value})
        console.log(this.state.name)

        const username=
            this.state.users.filter(data => {
                return data.name.toLowerCase()===even.target.value.toLowerCase();
            });

       // this.state.users.filter(item=> { return item.name===even.target.value})
       // const username= this.state.users.find(value => { return value.name===even.target.value })
console.log(username)

    }
}

export default Users;

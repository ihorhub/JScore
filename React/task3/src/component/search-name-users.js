import React, {Component} from 'react';
import {ApiService} from "../service/ApiService";
import NameUserList from "./name-userList";
import SearchIdUser from "./search-id user";

class SearchNameUsers extends Component {

    state={users:[],username:[]}
    _apiUser=new ApiService()
    componentDidMount() {
     this._apiUser.getUsers().then(value => this.setState({users:value}))
    }

    render() {

        let{username}=this.state

        return (
            <div>
                <form onSubmit={this.onFormSubmit}>

                    <input type="text" placeholder={'search name'}  onChange={this.nameSearch}/>

                </form>

                { username&&(username.map(value =>(<NameUserList user={value} key={value.id}/>)))}

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

export default SearchNameUsers;

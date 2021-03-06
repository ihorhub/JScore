import React, {Component} from 'react';
import {ApiService} from "../service/ApiService";
import UserIdList from "./userIdList";

class SearchIdUser extends Component {
    state={user:[]}
    _apiUserId=new ApiService()


    render() {
        let{user}=this.state
        return (

            <div>
                <form onSubmit={this.onFormSub}>
                   <input type='number' min={1} max={10} placeholder={'enter id'} onChange={this.searchUserId} />

                </form>
                { user &&(user.map(value =>(<UserIdList userId={value} key={value.id}/>)))}
            </div>
        );
    }

    onFormSub=(e)=> {e.preventDefault()

    }

    searchUserId =(ev)=> {
        this._apiUserId.getUserById(ev.target.value).then(value => {this.setState({user:value})})



    }

}

export default SearchIdUser;

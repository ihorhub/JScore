import React, {Component} from 'react';
import {withRouter} from "react-router";

class UserList extends Component {
    render() {
        let{id, name,username,email}=this.props.user
        console.log(this.props.user)

        return (
            <div>
                <p> {id}-- </p>
                <p> name: {name}--</p>
                <p> user name: {username}--</p>
                <p> Email: {email}-</p>
                  <button onClick={() =>this.goToPost(id) } >user posts</button>

                <hr/>
            </div>
        );
    }

    goToPost=(id)=> {
        this.props.history.push({pathname:`/posts?userId=/${id}`})
        {console.log(this.props.history)}
    }

}

export default withRouter(UserList) ;

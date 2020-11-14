import React, {Component} from 'react';
import {ApiService} from "../service/apiService";

class UserIdPost extends Component {
    state={user:[]}
    _apiUserId=new ApiService()
componentDidMount() {
    const id=this.props.match.params.id;
    this._apiUserId.getUserId(id).then(user => this.setState({user}))
    console.log(this.state.user)
}

    render() {
        let{user}=this.state

        return (
            <div>
                {   user.map(item=>(
                            <p>{item.id}</p>,
                            <p>{item.userId}</p>,
                            <p>{item.title}</p>,
                        <p>{item.body}</p>

                    ))}
            </div>
        );
    }
}

export default UserIdPost;

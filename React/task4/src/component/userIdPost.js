import React, {Component} from 'react';
import {ApiService} from "../service/apiService";
import {withRouter} from "react-router";

class UserIdPost extends Component {
    state={user:[]}
    _apiUserId=new ApiService()
componentDidMount() {
    const id=this.props.match.params.id;
    this._apiUserId.getUserId(id).then(value => value.json()).then(value => this.setState({user:value}))

}

    render() {
        let{user}=this.state

        return (
            <div>
                { user && (user.map(item=>( <div key={item.id}>
                            {item.id}-- user-
                            {item.userId}--
                            {item.title}
                        {item.body}
                    </div>
                    )))}
            </div>
        );
    }
}

export default UserIdPost;

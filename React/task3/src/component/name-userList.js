import React, {Component} from 'react';

class NameUserList extends Component {
    render() {
        let {id, name,username}=this.props.user
        return (

            <div>

                {id}--
                {name}--
                {username}--

            </div>
        );
    }


}

export default NameUserList;

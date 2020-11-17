import React from 'react'
import {withRouter} from "react-router";



const UserList=(props)=>{


let{user}=props
    return(
        <div>
            <p> {user.id}-- </p>
            <p> name: {user.name}--</p>
            <p> user name: {user.username}--</p>
            <p> Email: {user.email}-</p>
            <button onClick={()=> {props.history.push({pathname:`/users/${user.id}`})}} >user post</button>
        </div>
    )

}
export default withRouter(UserList)

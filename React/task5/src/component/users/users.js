import React, {useEffect, useState} from 'react'
import {SpiService} from "../../service/spiService";
import UserList from "./userList";




 const Users=()=>{

const _apiUser= new SpiService()
     const [users,setUsers]=useState([])
     useEffect(()=>{ _apiUser.getUsers().then(users => setUsers(users))})
    return(
        <div>
            {users.map(user=>(<UserList  user={user} key={user}/>))}
        </div>
    )
}
export default Users

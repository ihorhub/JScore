import React, {useEffect, useState} from 'react'
import {SpiService} from "../../service/spiService";
import UserList from "./userList";




 const Users=()=>{

const _apiUser= new SpiService()
     const [users,setUsers]=useState([])



     useEffect(()=>{
         let isSubscribeb= true;
         _apiUser.getUsers().then(users =>{if (isSubscribeb){ setUsers(users)}})

         return ()=>{isSubscribeb=false}})
    return(
        <div>
            {users.map(user=>(<UserList  user={user} key={user}/>))}
        </div>
    )
}
export default Users

import React, {useEffect, useState} from 'react'
import {SpiService} from "../../service/spiService";


const UserIdPost=(props)=>{
  const  _apiId=new SpiService()

    let[userId,setUserId]=useState([])
    useEffect(()=>{
        const id=props.match.params.id
        _apiId.getUserId(id).then(value => {setUserId(value)})
    })
    return(
<div >
    {userId.map(item=>(<div key={item.id}>
            {item.id}-- user-
            {item.userId}--
            {item.title}
            {item.body}
            <hr/>
        </div>)


        )}
</div>
    )
}
export default UserIdPost

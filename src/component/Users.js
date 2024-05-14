import React from 'react'
import User from './User'

const Users = (props) => {
  return (
    props.users.map((user)=>{
      return  <article className='User'>  
      <User user={user} key={user.id} deleteUser={props.deleteuser}/>
  </article>
    })
    
  )
}

export default Users

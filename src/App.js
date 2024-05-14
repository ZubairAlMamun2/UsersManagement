import React, { useState } from 'react'
import Users from './component/Users'
import Newuser from './component/newuser'

const App = () => {
  const[users,setUsers]=useState([
    {id:1,name:"Zubair"},
  {id:2,name:"Al Mamun"},
  ])
  const handeleteUser=(id)=>{
    const filteruser=users.filter(user =>user.id!==id)
    setUsers(filteruser)
  }
  return (
    <div>
      <Newuser /> 
      <section className='Users'>
      
      <Users users={users} deleteuser={handeleteUser}/>
    </section>
    </div>
  )
}

export default App
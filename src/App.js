import React, { useState } from 'react'
import Users from './component/Users'

const App = () => {
  const[users,setUsers]=useState([
    {id:1,name:"Zubair"},
  {id:2,name:"Al Mamun"},
  ])
  return (
    <section className='Users'>
      <Users users={users}/>
    </section>
  )
}

export default App
import React, { useState } from 'react'

const Newuser = () => {
    const[username,setUsername]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newUser=[{
            id:new Date().getTime().toString(),username: username
        }]
        console.log(newUser)
        setUsername("");
    }
    const handleChange=(e)=>{
        setUsername(e.target.value)
    }
    
  return (
    <div>
        <h2>User Registration</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' name='username' placeholder='Enter your name' value={username}
            onChange={handleChange}/>
            <button type='submit' >Add User</button>
        </form>
        
    </div>
  )
}

export default Newuser
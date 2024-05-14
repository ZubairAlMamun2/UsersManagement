import React from 'react'

const User = (props) => {

   const handleDelete=(id)=>{
    props.deleteUser(id)
    }

   const {id,name}=props.user
  return (
    <div>
        <h2>{id}</h2>
        <p>{name}</p>
        <button onClick={()=>{
            handleDelete(id)
        }}>Delete</button>
    </div>
  )
}

export default User
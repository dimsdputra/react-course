import React from 'react'
import User  from "./User";

const ListArray = () => {
    const users = [
        {name : "Dimas", age: 21},
        {name : "Tegar", age: 10}
    ]
  return (
    <div>
        {users.map((user) => {
            return <User name={user.name} age={user.age}/>
        })}
    </div>
  )
}

export default ListArray

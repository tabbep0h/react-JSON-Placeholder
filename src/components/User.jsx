import React from 'react'

function User({ id, name, phone, username }) {
  return (
    <div>
        <h1> {name}    </h1>
        <p>  {phone}   </p>
        <p>  {username}</p><hr></hr>
    </div>
  )
}

export default User
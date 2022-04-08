import React from 'react'

export default function Personal(props) {
  return (
    <div>
        <input placeholder='First Name' name='fname' onChange={props.hello}></input><br></br>
        <input placeholder='Last Name' name='lname' onChange={props.hello}></input><br></br>
        <input placeholder='Title' name='title' onChange={props.hello}></input><br></br>
    </div>
  )
}

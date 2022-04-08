import React from 'react'
import Personal from './Personal'

export default function InputContainer(props) {
  return (
    <div>
      <h1>Input</h1>
      <Personal hello={props.hello} />
    </div>
  )
}

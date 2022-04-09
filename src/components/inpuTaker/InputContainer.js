import React from 'react'
import Personal from './Personal'

export default function InputContainer(props) {
  return (
    <div className="main-page page-center">
      <Personal hello={props.hello} />
    </div>
  )
}

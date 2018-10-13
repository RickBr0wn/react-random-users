import React from 'react'

const log = i => console.log(i)

const Name = props => {
  const name = props
  return (
    <div className="name">
      {`${name.name.first} ${name.name.last}`}
    </div>
  )
}

export default Name

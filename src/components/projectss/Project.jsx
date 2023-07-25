import React from 'react'
import Card from '../cards/Card.jsx'
import data from '../cards/data.js'
const Project = () => {
  return (
    <div>
        {

            data.map((item) => {
                return <Card key={item.id} {...item} />
            })
        }
    </div>
  )
}

export default Project
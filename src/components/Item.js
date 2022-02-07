import React from 'react'
import { Link } from 'react-router-dom'
export default function Item({ image, name, id, glass }) {
  return (
    <article className='item'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='item-footer'>
        <h3>{name}</h3>
        <h6 className='subTitle'>{glass}</h6>        
        <Link to={`/item/${id}`} className='btn btn-primary btn-details'>
          More Details
        </Link>
      </div>
    </article>
  )
}

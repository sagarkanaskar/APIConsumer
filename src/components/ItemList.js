import React from 'react'
import Item from './Item'
import Loading from './Loading'
import { useGlobalContext } from '../context'

export default function ItemList() {
  const { items, loading } = useGlobalContext()
  if (loading) {
    return <Loading/>
  }
  if (items.length < 1) {
    return (
      <h2 className='section-title'>
        No items found....!!!
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>items</h2>
      <div className='items-center'>
        {items.map((item) => {
          return <Item key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

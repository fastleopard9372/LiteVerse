import React from 'react'
import types from '@/types'
import '@/styles/item.css';
const Item = (data: types.Item_data) => {
  return (
    <div className='item space-x-1'>
      <div className='sub-item1'>
        <p>1</p>
      </div>
      <div className='sub-item2'>
        <img src={data.avatar}></img>
        <div className='item-statue'></div>
      </div>
      <div className='sub-item3'>
        <p className='text1'>{data.title}</p>
        <p className='text2 space-x-1'>
          <span>Floor price:</span>
          <img src="/item/domond.svg"></img>
          <span>{data.price}</span>
        </p>
      </div>
      <div className='sub-item4'>
        <p className='text1 green'>+{data.percent}%</p>
        <p className='text2 space-x-1'>
          <img src="/item/domond.svg"></img>
          <span>{data.count}</span>
        </p>
      </div>
    </div>
  )
}

export default Item
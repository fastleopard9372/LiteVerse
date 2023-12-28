import React from 'react'
import types from '@/types'
import '@/styles/card4.css';

const Card3 = (data: types.Card4_data) => {
  return (
    <div className='card4'>
      <div className='card-container'>
        <div className="card-body p-0" style={{ background: data.color }}>
          <div className='card-img'>
            <div className='left-img'><img src={data.left_img}></img></div>
            <div className='center-img' ><img src={data.center_img}></img></div>
            <div className='right-img'><img src={data.right_img}></img></div>
          </div>
        </div>
        <div className="card-info">
          <p className='card-title'>{data.title}</p>
        </div>
      </div>
    </div>
  )
}

export default Card3
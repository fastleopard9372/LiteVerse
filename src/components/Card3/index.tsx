import React from 'react'
import types from '@/types'
import '@/styles/card3.css';

const Card3 = (data: types.Card3_data) => {
  return (

    <div className='card3'>
      <div className='text-center'>
        <div className="avatar">
          <div className="w-16 h-16 rounded">
            <img src={data.url} alt="url" />
          </div>
        </div>

      </div>
      <a href={data.link}>
        <div className="text-2xl text-center font-semibold mt-8  max-sm:text-xl">{data.title}</div>
      </a>
      <div className='text-sm text-center text-neutral-400 mt-3 px-2'>{data.content}</div>
    </div>
  )
}

export default Card3
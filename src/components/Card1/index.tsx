import React from 'react'
import types from '@/types'
import '@/styles/card1.css';
const Card1 = (data: types.Card1_data) => {
  return (
    <div className='m-2'>
      <div className='card1'>
        <div className='card-container'>
          <div className="card-body">
            <div className='card-img'>
              <img src={data.background} className='w-full' />
              <div className='card-like flex justify-center'>
                <h3 className='mr-2'>{data.like}</h3>
                <img src='/card1/like.svg' />
              </div>
              <div className='card-time'>
                <span>
                  {data.time}
                </span>
              </div>
            </div>
          </div>
          <div className="card-info">
            <h3 className='card-title'>{data.title}</h3>
            <div className='card-follow flex justify-start items-center'>
              <div className='avatar-group -space-x-3 rtl:space-x-reverse'>
                {
                  data.avatar.filter((value, index) => (index < 5)).map((v, i) => {
                    return (
                      <div className="avatar" key={i}>
                        <div className="w-5 h-5">
                          <img src={v.path} />
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <h3 className='text-sm pl-1'>{data.avatar.length > 20 ? "20+" : data.avatar.length} People Place Bit</h3>
            </div>
            <div className='card-user flex justify-between mt-3 mb-3'>
              <p className='card-username'>Owned By {data.name}</p>
              <div className='card-mark flex'>
                <img src='/card1/Group.svg'></img>
                <h3>{data.value}ETH</h3>
              </div>
            </div>
          </div>
          <hr />
          <div className='card-action flex justify-between mt-3'>
            <h3 className='card-history'>View History</h3>
            <div className='card-button'>
              <button type='button' style={{ padding: '0px 10px !important' }} className='btn btn-primary btn-outline border btn-sm px-2'>
                <img src="/card1/arrow-1.png" className='border-2 border-gray-light rounded-full p-0.5' />
                <p className='pt-1 pl-2 text-gray-light'>Place Bid</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card1
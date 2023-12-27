import React from 'react'
import types from '@/types'
const Wallet_card = (data: types.Wallet_connect) => {
  return (
    <div className='p-2 w-1/4 pb-6 '>
      <div className="card bg-neutral shadow-xl cursor-pointer hover:opacity-95 hover:-translate-y-2 hover:animate-spin">
        <div className="card-body flex justify-center items-center p-5">
          <div className="avatar">
            <div className="w-20 rounded-full">
              <img src={data.url} />
            </div>
          </div>
          <p className='text-primary text-xl font-bold pt-5 p-2'>{data.title}</p>
          <p className='text-neutral-400 text-base break-words pt-2 pb-2 text-center'>{data.content}</p>
        </div>
      </div>
    </div>
  )
}

export default Wallet_card
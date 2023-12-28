import React from 'react'
import types from '@/types';
import { FaCheck } from "react-icons/fa";
const MiniAvatar = (data: types.MiniAvatar_data) => {
  const { kind, title, url, state, _id } = data;
  return (
    <div className='flex flex-col py-3 space-y-[10px] font-medium text-lg'>
      <p className='text-primary'>{kind}</p>
      <div className='text-lg flex space-x-2'>
        <div className='avatar w-20 h-20 relative'>
          <img src={url} className='w-full' />
          <div className='badge-primary rounded-badge bottom-1 right-1 absolute z-50 p-[1px]'>
            {state === 'check' ? < FaCheck /> : <></>}
          </div>
        </div>
        <p className='flex items-center'>
          {title}
        </p>
      </div>
    </div >
  )
}

export default MiniAvatar
import React from 'react'
import types from '@/types';
const MiniText = (data: types.MiniText_data) => {
  const { kind, title, content, _id } = data;
  return (
    <div className='border-2 border-primary rounded-lg p-2 space-y-[10px] text-center font-medium text-lg'>
      <p className='text-primary pb-2'>{kind}</p>
      <p className='text-xl'>{title}</p>
      <p className='opacity-50'>{content}</p>
    </div>
  )
}

export default MiniText
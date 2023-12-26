import React from 'react'
import types from '@/types'
// import '@/styles/card2.css';
const Card2 = (data: types.Card2_data) => {
  return (
    <div className='m-2'>
      <div className='card bg-neutral cursor-pointer border border-primary' >
        <div className='card-body p-4'>
          <div className='card-img'>
            <img src={data.background}></img>
          </div>

          <div className="text-center card-info flex justify-center flex-col">
            <div className="avatar mx-auto" style={{ marginTop: '-30px' }}>
              <div className="w-14 h-14 rounded">
                <img src={data.avatar} alt="url" />
              </div>
            </div>
            <p className=' p-2 text-lg'>{data.name}</p>
            <div className='card-by space-x-2 text-sm '>
              <span className='by text-neutral-400'>by</span>
              <span className='text-primary'>{data.by}</span>
            </div>
            <p className='card-content mt-4 text-neutral-400 text-sm'>
              {data.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card2

// < div className = 'm-2' >
//   <div className='card2'>
//     <div className='card-container'>
//       <div className="card-body p-0">
//         <div className='card-img'>
//           <img src={data.background}></img>
//         </div>
//       </div>
//       <div className="card-info">
//         <img className='card-avatar' src={data.avatar}></img>
//         <p className='card-username'>{data.name}</p>
//         <div className='card-by space-x-2'>
//           <span className='by'>by</span>
//           <span className='by-2'>{data.by}</span>
//         </div>
//         <p className='card-content mt-4'>
//           {data.content}
//         </p>
//       </div>
//     </div>
//   </div>
//   </ >
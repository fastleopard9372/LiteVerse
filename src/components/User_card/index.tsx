
import types from '@/types'
const User_card = (data: types.User_data) => {
  return (
    <div className="card bg-neutral shadow-xl">
      <div className="card-body flex justify-center items-center text-center pt-10 pb-10 p-5 max-lg:flex-row max-lg:justify-around">
        <div className="avatar ">
          <div className="w-full rounded-full ring ring-primary ">
            <img src={data.avatar} />
          </div>
        </div>
        <div className='flex justify-center items-center text-center flex-col'>
          <p className='text-2xl font-semibold pt-5'>{data.name}</p>
          <p className='text-lg text-secondary pt-5 pb-2 break-all'>{data.email}</p>
          <div className='flex flex-row justify-between w-full space-x-2 flex-wrap'>
            <p className='text-neutral-400 text-lg pb-2 text-left text-ellipsis overflow-hidden'>{data.link}</p>
            <button type='button' className='btn btn-accent btn-sm' style={{ padding: '0px 10px !important' }}>Copy</button>
          </div>
          <p className='text-2xl font-semibold pt-5 pb-2 '>{data.followers} followers</p>
          <button type='button' className='btn btn-primary btn-sm'>Follow</button>
        </div>
      </div>
    </div>
  )
}

export default User_card
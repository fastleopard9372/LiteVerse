"use client";
import React, { useState, MouseEvent } from 'react'
import types from '@/types'
import classNames from 'classnames'
import User_card from '@/components/User_card';
import Card1 from '@/components/Card1';
const user_card: types.User_data = {
  _id: '1',
  avatar: '/profile/Ellipse 2.png',
  email: "fastled@gmail.com",
  followers: 550,
  link: 'djswofjlk2df23',
  name: 'Comeli alice'

}
const Profile = () => {
  const [btn, setBtn] = useState<string | null>('sale');
  const selClass = classNames({
    'btn': true,
    'btn-sm': true,
    'btn-primary': true,
    'border-primary-content': true
  });
  const unSelClass = classNames({
    'btn': true,
    'btn-sm': true,
    'text-gray': true,
    'btn-neutral': true
  });
  const card1_data: types.Card1_data[] = [{
    _id: "1",
    background: "/card1/back1.png",
    like: 25,
    time: "129 : 12: 32 : 34",
    title: "TrapMonkie 3D",
    avatar: [
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" }],
    name: "Fuliani",
    value: 76.4
  }, {
    _id: "1",
    background: "/card1/back2.png",
    like: 25,
    time: "129 : 12: 32 : 34",
    title: "TrapMonkie 3D",
    avatar: [
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" }],
    name: "Fuliani",
    value: 76.4
  }, {
    _id: "1",
    background: "/card1/back3.png",
    like: 25,
    time: "129 : 12: 32 : 34",
    title: "TrapMonkie 3D",
    avatar: [
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" },
      { _id: "1", path: "/card1/woman.png" }],
    name: "Fuliani",
    value: 76.4
  }]
  const handleChange = (e: MouseEvent): void => {
    setBtn(e.currentTarget.getAttribute('name'));
  };

  return (
    <div className='section'>
      <div className='card px-0'>
        <div className='card-body px-0'>
          <div className=' pt-10 grid-cols-1 gap-6'>
            <div className='grid grid-cols-4 gap-8'>
              <div className='col-span-1 max-lg:col-span-4'>
                <User_card {...user_card} />
              </div>
              <div className='flex flex-col justify-between items-start col-span-3 max-lg:col-span-4'>
                <div className="grid grid-cols-1 gap-5 h-10">
                  <div className='flex space-x-5'>
                    <button type="button" name='sale' className={btn === 'sale' ? selClass : unSelClass} onClick={handleChange}>On Sale</button>
                    <button type="button" name='created' className={btn === 'created' ? selClass : unSelClass} onClick={handleChange}>Created</button>
                    <button type="button" name='linked' className={btn === 'linked' ? selClass : unSelClass} onClick={handleChange}>Linked</button>
                  </div>
                </div>
                <div className='grid grid-cols-12 gap-5'>
                  <div className='col-span-7 grid grid-cols-2 gap-5 max-sm:col-span-12'>
                    <div className='col-span-1 text-left'>
                      <img src='/profile/Rectangle 53.png' className='w-height w-full'></img>
                    </div>
                    <div className='col-span-1'>
                      <img src='/profile/Rectangle 54.png' className='w-height  w-full'></img>
                    </div>
                  </div>
                  <div className='col-span-5 overflow-y-hidden max-sm:col-span-12'>
                    <p className='text-primary text-xl pb-2'>INFO</p>
                    <p className='text-neutral-400 text-base leading-tight break-words'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                  </div>
                </div>
                <div className='grid relative max-lg:mt-5'>
                  <img src='/profile/Rectangle 52.png' className='w-full' />
                  <div className='absolute w-full h-full flex flex-row justify-center items-center top-0 left-0 space-x-5'>
                    <button type='button' className='btn btn-primary'>Explorer</button>
                    <button type='button' className='btn btn-outline'>Create</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-4 py-24 max-lg:grid-cols-2  max-md:grid-cols-1' style={{ margin: '-8px' }}>
              {card1_data.map((value, index) => (
                <Card1 {...value} key={index} />
              ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

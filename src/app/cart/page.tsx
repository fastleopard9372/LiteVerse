"use client";
import React, { useState, MouseEvent } from 'react'
import types from '@/types'
import Description from '@/components/Description';
import { FaShareAlt } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { MiniAvatar_data, MiniText_data } from "@/types";
import '@/styles/globals.css';
import MiniText from '@/components/MiniCard/miniText';
import MiniAvatar from '@/components/MiniCard/miniAvatar';

const avatar_data: MiniAvatar_data[] = [
  { _id: '1', kind: 'Owner', state: 'check', title: 'Stacy Long', url: '/cart/avatar1.png' },
  { _id: '2', kind: 'Creator', state: 'check', title: 'Monica Lucas', url: '/cart/avatar2.png' },
  { _id: '3', kind: 'Collections', state: 'check', title: 'AnimeSailorClub', url: '/cart/avatar1.png' }
]

const text_data: MiniText_data[] = [
  { _id: '1', kind: 'Background', title: 'Yellowish Sky', content: '85% have this trait' },
  { _id: '2', kind: 'Cloths', title: 'Yellowish Sky', content: '85% have this trait' },
  { _id: '3', kind: 'Neack', title: 'Yellowish Sky', content: '85% have this trait' },
  { _id: '4', kind: 'Body', title: 'Yellowish Sky', content: '85% have this trait' },
  { _id: '5', kind: 'Neack', title: 'Yellowish Sky', content: '85% have this trait' },
  { _id: '6', kind: 'Body', title: 'Yellowish Sky', content: '85% have this trait' }
]


const Cart = () => {
  return (
    <div className='section pb-20' style={{ fontFamily: 'Josefin Sans' }}>
      <div className='card'>
        <div className='card-body max-md:p-4'>
          <div className=' pt-10 grid grid-cols-2 gap-5 pb-2'>
            <button type='button' className='btn btn-primary btn-sm top-0.5 col-span-2 w-32'>Back to home</button>
            <div className="grid grid-cols-12 gap-10 py-3 col-span-2 max-md:gap-2">
              <div className='col-span-6 max-xl:col-span-5 max-md:col-span-12'>
                <img src='./cart/cart-image.png' className='w-full max-md:w-80 max-sm:w-60' />
              </div>
              <div className='col-span-6 max-xl:col-span-7 max-md:col-span-12 flex flex-col space-y-14  max-xl:space-y-4 font-medium'>
                <div className='grid grid-cols-1 gap-3'>
                  <div className='text-[20px] space-x-3'>
                    <span className='opacity-50'>Auctions ends in:</span>
                    <span>12d 1h 29m 45s</span>
                  </div>
                  <div className='text-5xl text-primary max-xl:text-4xl max-lg:text-3xl'>Creative ProductName</div>
                  <div className='flex space-x-3 description  max-sm:space-x-2'>
                    <span>1 of 1</span>
                    <button type='button' className='btn btn-neutral btn-sm'>
                      <FaImage />Art
                    </button>
                    <button type='button' className='btn btn-neutral btn-sm '>
                      &nbsp;&nbsp;&nbsp;250
                    </button>
                    <button type='button' className='btn btn-neutral btn-sm'>
                      <span className='text-primary'><FaHeart /></span>Art
                    </button>
                    <div className='grow'></div>

                    <div className='grid grid-cols-2 gap-3 max-sm:gap-1'>
                      <button className='btn btn-circle btn-outline border-primary bg-neutral-950 btn-sm'>
                        <FaShareAlt />
                      </button>
                      <button className='btn btn-circle btn-outline border-primary bg-neutral-950 btn-sm'>
                        <FaEllipsisH />
                      </button>
                    </div>
                  </div>
                </div>
                <div className='pl-8 max-xl:pl-2 max-xl:pt-4'>
                  <Description />
                </div>
                <div className='opacity-50'>
                  <p className='text-lg'>Minimum bid</p>
                  <div className='text-xl'>
                    <span>2.4000</span>
                    <span className='opacity-50'> ETH/ $4769.88</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-12 gap-10 max-sm:gap-2'>
            <div className='col-span-6 gap-y-8 gap-10 grid grid-cols-2  pt-14 max-lg:col-span-7 max-md:col-span-12 max-sm:grid-cols-1'>
              {text_data.map((value, index) => (
                <MiniText {...value} key={index} />
              ))}
              <div className='col-span-2 flex space-x-6 pt-5 max-sm:col-span-1 max-sm:m-auto'>
                <button className='btn btn-primary btn-sm'><span className='px-10 pt-1 max-lg:px-5'>Buy Now</span></button>
                <button className='btn btn-neutral btn-sm'><span className='px-10  pt-1 max-lg:px-5'>Place a Bid</span></button>
              </div>
            </div>
            <div className='col-span-6 flex flex-col  space-y-4 pb-14 max-lg:col-span-5 max-md:col-span-12'>
              {avatar_data.map((value, index) => (<>
                <MiniAvatar {...value} key={index} />
                {index !== avatar_data.length - 1 && <div className='divider opacity-90' style={{ marginTop: '0px' }}></div >}
              </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Cart

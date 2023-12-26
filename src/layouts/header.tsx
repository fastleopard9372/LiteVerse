"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { HtmlContext } from 'next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints';
const navigation = [
  { name: 'Explorer', href: '/', active: 'false' },
  { name: 'State', href: '/state', active: '' },
  { name: 'Creators', href: '/creators', active: '' },
  { name: 'Contact', href: '/contact', active: '' },
]

const Header = () => {
  const [selectIndex, setSelectIndex] = useState(0);
  const handleClick = (e: number) => {
    setSelectIndex(e);
  }
  return (
    <div className='header w-full flex items-center'>
      <div className="container mx-auto w-full flex justify-between items-center">
        <div className="flex justify-start">
          <Link href='/' onClick={() => handleClick(0)}>
            <div className='logo'>
              <div className='logo_image'></div>
              <p className='logo_name'>Logo Name</p>
            </div>
          </Link>
          <div className='search-part flex justify-end items-center' >
            <div className='ml-5 mr-5 form-control flex justify-around items-center'>
              <Image
                src="/search.svg"
                alt="search"
                width={20}
                height={20}
                priority
              />
              <input type="text" className='search' placeholder='Search items, collections, and accounts'>

              </input>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className='link'>
            <ul className='flex'>
              {navigation.map((v, i) => {
                return (
                  <li key={i} className={`${i === selectIndex ? "active" : ""}`} >
                    <Link href={v.href} onClick={() => handleClick(i)}>{v.name}</Link>
                  </li>
                )
              })
              }
            </ul>
          </div>
          <div className='user-avatar flex justify-end '>
            <div className='avatar-img'>
              <svg width="154" height="62" viewBox="0 0 154 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <circle cx="31" cy="31" r="30" stroke="#404BE3" stroke-width="2" />
                  <path d="M30.5 33.6875C35.9346 33.6875 40.3438 29.2783 40.3438 23.8438C40.3438 18.4092 35.9346 14 30.5 14C25.0654 14 20.6562 18.4092 20.6562 23.8438C20.6562 29.2783 25.0654 33.6875 30.5 33.6875ZM39.25 35.875H35.4834C33.9658 36.5723 32.2773 36.9688 30.5 36.9688C28.7227 36.9688 27.041 36.5723 25.5166 35.875H21.75C16.917 35.875 13 39.792 13 44.625V45.7188C13 47.5303 14.4697 49 16.2812 49H44.7188C46.5303 49 48 47.5303 48 45.7188V44.625C48 39.792 44.083 35.875 39.25 35.875Z" fill="#404BE3" />
                </g>
                <g opacity="0.4">
                  <circle cx="123" cy="31" r="30" stroke="#404BE3" stroke-width="2" />
                </g>
                <path opacity="0.4" d="M136.527 22.5625H110.469C109.864 22.5625 109.375 22.073 109.375 21.4688C109.375 20.8645 109.864 20.375 110.469 20.375H136.719C137.323 20.375 137.812 19.8855 137.812 19.2812C137.812 17.469 136.343 16 134.531 16H109.375C106.958 16 105 17.9585 105 20.375V42.25C105 44.6665 106.958 46.625 109.375 46.625H136.527C138.443 46.625 140 45.1532 140 43.3438V25.8438C140 24.0343 138.443 22.5625 136.527 22.5625ZM133.438 36.7812C132.23 36.7812 131.25 35.8017 131.25 34.5938C131.25 33.3858 132.23 32.4062 133.438 32.4062C134.645 32.4062 135.625 33.3858 135.625 34.5938C135.625 35.8017 134.645 36.7812 133.438 36.7812Z" fill="#404BE3" />
              </svg>
            </div>
            <div className='avatar-img'></div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header
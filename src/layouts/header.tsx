'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
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
  const router = useRouter()
  const handleClick = (e: number) => {
    setSelectIndex(e);
  }
  const handleUserClick = (e: string) => {
    if (e === 'user') {

    } else if (e === 'wallet') {
      router.push('/wallet_connect')
    }
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
          <div className='user-avatar flex justify-end space-x-6'>
            <div className='avatar-img cursor-pointer hover:opacity-90 hover:outline-primary' onClick={() => handleUserClick('user')}>
              <img src='/avatar-icon.png'></img>
            </div>
            <div className='avatar-img cursor-pointer hover:opacity-90' onClick={() => handleUserClick('wallet')}>
              <img src='/wallet-icon.svg' />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header
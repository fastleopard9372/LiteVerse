'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { HtmlContext } from 'next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints';
const navigation = [
  { name: 'Explorer', href: '/', active: 'false' },
  { name: 'State', href: '#', active: '' },
  { name: 'Creators', href: '/creators', active: '' },
  { name: 'Contact', href: '#', active: '' },
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
    // <div className="navbar bg-base-100">
    //   <div className="flex-none">
    //     <button className="btn btn-square btn-ghost" style={{ padding: '0px' }}>
    //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    //     </button>
    //   </div>
    //   <div className="flex-1">
    //     <a className="btn btn-ghost text-xl">daisyUI</a>
    //   </div>
    //   <div className="flex-none">
    //     <button className="btn btn-square btn-ghost" style={{ padding: '0px' }}>
    //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    //     </button>
    //   </div>
    // </div>
    <div className='header w-full flex items-center navbar'>
      <div className="container mx-auto w-full flex justify-between items-center">
        <div className="flex justify-start">
          <Link href='/' onClick={() => handleClick(0)}>
            <div className='logo'>
              <div className='logo_image'></div>
              <p className='logo_name'>Logo Name</p>
            </div>
          </Link>
          <div className='search-part flex justify-end items-center md:w-auto' >
            <div className='ml-5 mr-5 form-control flex justify-around items-center'>
              <Image
                src="/search.svg"
                alt="search"
                width={20}
                height={20}
                priority
              />
              <input type="text" className='search' placeholder='Search items, collections, and accounts' />
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
            {/* <div className='avatar-img cursor-pointer hover:opacity-90 hover:outline-primary' onClick={() => handleUserClick('user')}>
              <img src='/avatar-icon.png'></img>
            </div> */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-16 rounded-full">
                  <img src='/avatar-icon.png'></img>
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-neutral rounded-box w-52">
                <li>
                  <Link className="justify-between" href='/profile'>
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={1} role="button" className="btn btn-ghost btn-circle avatar">
                <div className='w-16 rounded-full cursor-pointer hover:opacity-90' onClick={() => handleUserClick('wallet')}>
                  <img alt='2' src='/wallet-icon.svg' className='w-full' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
}

export default Header
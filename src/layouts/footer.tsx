import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
interface _link_data {
  url: string,
  name: string,
}
interface link_data {
  title: string,
  data: _link_data[]
}

const Footer = () => {
  const data: link_data[] = [{
    title: 'Marketplace',
    data: [{
      url: '/', name: 'All NFTs'
    }, {
      url: '/', name: 'Art'
    }, {
      url: '/', name: 'Collectibles'
    }, {
      url: '/', name: 'Domain Names'
    }, {
      url: '/', name: 'Music'
    }, {
      url: '/', name: 'Photography'
    }, {
      url: '/', name: 'Sports'
    }, {
      url: '/', name: 'Trading Cards'
    }, {
      url: '/', name: 'Utility'
    }, {
      url: '/', name: 'Virtual Worlds'
    }]
  }, {
    title: 'My Account',
    data: [{
      url: '/', name: 'Profile'
    }, {
      url: '/', name: 'Favorites'
    }, {
      url: '/', name: 'Watchlist'
    }, {
      url: '/', name: 'Settings'
    }]
  }, {
    title: 'Resources',
    data: [{
      url: '/', name: 'Help Center'
    }, {
      url: '/', name: 'Platform Status'
    }, {
      url: '/', name: 'Gas-Free Marketplace'
    }, {
      url: '/', name: 'Taxes'
    }, {
      url: '/', name: 'Blog'
    }, {
      url: '/', name: 'Docs'
    }, {
      url: '/', name: 'Newsletter'
    }]
  }, {
    title: 'Company',
    data: [{
      url: '/', name: 'About'
    }, {
      url: '/', name: 'Careers'
    }, {
      url: '/', name: 'Ventures'
    }, {
      url: '/', name: 'Grants'
    }]
  }]
  return (
    <>
      <div className='mfooter section1 flex justify-center items-center'>
        <div className='mfooter-top'>
        </div>
        <div className='back'>
        </div>
        <div className='section front flex flex-col items-center'>
          <div className='top flex justify-between w-full'>
            <div className="flex flex-col justify-start">
              <h3 className='mfooter-title'>
                Stay in the loop
              </h3>
              <span className='mfooter-content'>Join our mailing list to stay in the loop with our newest feature releases,NFT drops, and tips and tricks for navigating OpenSea.</span>
              <div className='mfooter-action flex space-x-4'>
                <input type="text" className='subscribe' placeholder='Your email address' />
                <button type="button" className="btn btn-primary">Sign up</button>
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <h3 className='mfooter-title-1'>Join the community</h3>
              <div className='flex space-x-4'>
                <img src="link-icon.svg" />
                <img src="link-icon.svg" />
                <img src="link-icon.svg" />
                <img src="link-icon.svg" />
                <img src="link-icon.svg" />
                <img src="link-icon.svg" />
              </div>
            </div>
          </div>
          <hr />
          <div className='link flex justify-between w-full'>
            <div className='flex justify-start flex-col' style={{ width: "300px" }}>
              <div className='logo_image'></div>
              <h3>Company Name</h3>
              <span>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</span>
            </div>
            {
              data.map((value, index) => (
                <div className='flex justify-start flex-col flex-grow-1' key={index}>
                  <h4>{value.title}</h4>
                  {value.data.map((_value, _index) => (
                    <a href={_value.url} key={_index}>{_value.name}</a>
                  ))}
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className='bottom-banner w-full'>
        <div className='section flex justify-between items-center space-x-4'>
          <span > @Copywrite by ShopnilSagor 2022</span>
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
        </div>
      </div>
    </>
  );
}

export default Footer
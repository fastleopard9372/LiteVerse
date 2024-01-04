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
  const now = new Date();
  const data: link_data[] = [{
    title: 'Marketplace',
    data: [{
      url: '/', name: 'All Ordinals'
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
    },
    //   {
    //   url: '/', name: 'Grants'
    // }
    ]
  }]
  return (
    <>
      <div className='mfooter section1 flex justify-center items-center pb-10'>
        <div className='mfooter-top'>
        </div>
        <div className='back'>
        </div>
        <div className='section front flex flex-col items-center z-50'>
          <div className='top flex justify-between w-full flex-col lg:flex-row'>
            <div className="flex flex-col justify-start w-full">
              <h3 className='mfooter-title'>
                Stay in the know
              </h3>
              <span className='mfooter-content'>Join our mailing list to stay in the know with our newest feature releases, Ordinal drops, and tips and tricks for navigating LiteVerse.</span>
              <div className='mfooter-action flex space-x-4'>
                <input type="text" className='subscribe' placeholder='Your email address' />
                <button type="button" className="btn btn-primary">Subscribe</button>
              </div>
            </div>
            <div className="flex flex-col justify-start w-full">
              <h3 className='mfooter-title-1 lg:text-right'>Join the community</h3>
              <div className='flex flex-start'>
                <div className='grow max-lg:grow-0'></div>
                <a href="https://twitter.com/theliteverse" target="Twitter/X" rel="noopener noreferrer">
                  <img src="twitterx-50.png" className='pr-4'/>
                </a>
                <a href="https://www.instagram.com/theliteverse/" target="Instagram" rel="noopener noreferrer">
                  <img src="instagram-48.png" className='pr-4'/>
                </a>
                <a href="https://www.youtube.com/@liteversenftmarketplace2327" target="Youtube" rel="noopener noreferrer">
                  <img src="youtube-48.png" className='pr-4'/>
                </a>
                <a href="https://www.reddit.com/user/LiteVerse/" target="Reddit" rel="noopener noreferrer">
                  <img src="reddit-48.png" className='pr-4'/>
                </a>
                <a href="https://discord.com/invite/Ffs5fTuCf7" target="Discord" rel="noopener noreferrer">
                  <img src="discord-48.png" className='pr-4'/>
                </a>
                <a href="https://www.linkedin.com/company/theliteverse" target="Linkedin" rel="noopener noreferrer">
                  <img src="linkedin-48.png"/>
                </a>
                <a href="https://www.crunchbase.com/organization/liteverse" target="Crunchbase" rel="noopener noreferrer">
                  <img src="info-50.png"/>
                </a>
                <a href="https://www.etsy.com/shop/LiteVerse" target="Etsy" rel="noopener noreferrer">
                  <img src="etsy-48.png"/>
                </a>
                  <div className='grow-0 max-lg:grow'></div>
              </div>
            </div>
          </div>
          <hr/>
          <div className='link flex justify-between w-full lg:space-x-10 max-lg:flex-col max-lg:space-x-3'>
            <div className='flex justify-start flex-col w-1/3 max-lg:w-full'>
              <div className='flex flex-col max-lg:flex-row  max-lg : space-x-6  max-lg:pb-5'>
                <div className='logo_image mr-7'></div>
                <h3>LiteVerse</h3>
              </div>
              <span>The world’s first and largest Litecoin digital marketplace for crypto collectibles and Ordinals. Buy, sell, and discover exclusive digital items.</span>
            </div>
            <div className='w-2/3 max-lg:w-full flex space-x-4 max-sm:space-x-0 max-lg:pt-8 max-sm:flex-col max-sm:ml-0'>
              {
                data.map((value, index) => (
                  <div className='flex flex-col w-1/4  max-sm:w-full max-sm:pt-4' key={index}>
                    <h4 >{value.title}</h4>
                    <div className='flex flex-col max-sm:flex-row max-sm: flex-wrap'>
                      {value.data.map((_value, _index) => (
                        <a href={_value.url} key={_index} className='max-sm:ml-4'>{_value.name}</a>
                      ))}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-banner w-full'>
        <div className='section flex justify-between items-center space-x-4'>
          <span > Copyright © LiteVerse 2022-{now.getFullYear()}</span>
          <a href={"Privacy.pdf"}>Privacy Policy</a>
          <a href={"TermsAndServices.pdf"}>Terms of Service</a>
        </div>
      </div>
    </>
  );
}

export default Footer
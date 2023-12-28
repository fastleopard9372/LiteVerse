import React from 'react'
import types from '@/types'
import Card3 from '@/components/Card3'
import Card2 from '@/components/Card2'
const data1: types.Card3_data[] = [{
  _id: '1',
  url: '/partner/image 7.png',
  link: '#',
  content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
  title: 'Generate Revenue'
}, {
  _id: '2',
  url: '/partner/image 8.png',
  link: '#',
  content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
  title: 'Reach Millions'
}, {
  _id: '3',
  url: '/partner/image 9.png',
  link: '#',
  content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
  title: 'Spend Less'
}, {
  _id: '4',
  url: '/partner/image 10.png',
  link: '#',
  content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
  title: 'Gas-free Marketplace'
}, {
  _id: '5',
  url: '/partner/image 11.png',
  link: '#',
  content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
  title: 'Robust Features'
}, {
  _id: '6',
  url: '/partner/image 12.png',
  link: '#',
  content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
  title: 'Breadth of Categories'
}]

const data2: types.Card2_data[] = [{
  _id: '1',
  content: 'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
  avatar: '/partner/Ellipse 14.svg',
  background: '/partner/card-back (1).png',
  by: ' PROOF_COLLECTIVE',
  name: 'Moonbirds',
}, {
  _id: '2',
  content: 'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
  avatar: '/partner/Ellipse 14.svg',
  background: '/partner/card-back (12).png',
  by: ' PROOF_COLLECTIVE',
  name: 'Moonbirds',
}, {
  _id: '3',
  content: 'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
  avatar: '/partner/Ellipse 14.svg',
  background: '/partner/card-back (11).png',
  by: ' PROOF_COLLECTIVE',
  name: 'Moonbirds',
}, {
  _id: '4',
  content: 'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
  avatar: '/partner/Ellipse 14.svg',
  background: '/partner/card-back (10).png',
  by: ' PROOF_COLLECTIVE',
  name: 'Moonbirds',
}, {
  _id: '5',
  content: 'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
  avatar: '/partner/Ellipse 14.svg',
  background: '/partner/card-back (9).png',
  by: ' PROOF_COLLECTIVE',
  name: 'Moonbirds',
}, {
  _id: '6',
  content: 'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
  avatar: '/partner/Ellipse 14.svg',
  background: '/partner/card-back (8).png',
  by: ' PROOF_COLLECTIVE',
  name: 'Moonbirds',
}, {
  _id: '7',
  content: 'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
  avatar: '/partner/Ellipse 14.svg',
  background: '/partner/card-back (7).png',
  by: ' PROOF_COLLECTIVE',
  name: 'Moonbirds',
}, {
  _id: '8',
  content: 'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
  avatar: '/partner/Ellipse 14.svg',
  background: '/partner/card-back (6).png',
  by: ' PROOF_COLLECTIVE',
  name: 'Moonbirds',
}, {
  _id: '9',
  content: 'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
  avatar: '/partner/Ellipse 14.svg',
  background: '/partner/card-back (5).png',
  by: ' PROOF_COLLECTIVE',
  name: 'Moonbirds',
}, {
  _id: '10',
  content: 'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
  avatar: '/partner/Ellipse 14.svg',
  background: '/partner/card-back (4).png',
  by: ' PROOF_COLLECTIVE',
  name: 'Moonbirds',
}, {
  _id: '11',
  content: 'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
  avatar: '/partner/Ellipse 14.svg',
  background: '/partner/card-back (3).png',
  by: ' PROOF_COLLECTIVE',
  name: 'Moonbirds',
}, {
  _id: '12',
  content: 'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
  avatar: '/partner/Ellipse 14.svg',
  background: '/partner/card-back (2).png',
  by: ' PROOF_COLLECTIVE',
  name: 'Moonbirds',
}]
const Partner = () => {
  return (
    <div className='section  pt-16 pb-20 '>
      <div className="grid grid-cols-2 gap-5">
        <div className='flex justify-center flex-col'>
          <div className='text-5xl font-bold pb-3 max-xl:text-4xl max-[1439px]:text-4xl max-[1259px]:text-3xl'>
            <span className='text-primary'>Welcome</span>
            <span>&nbsp;to the world’s</span>
          </div>
          <p className='text-4xl pb-8 max-xl:text-3xl max-[1439px]:text-3xl  max-[1259px]:text-2xl'>largest NFT marketplace.</p>
          <div className='text-sm pb-2 text-neutral-500'>At OpenSea, we're excited about a brand new type of digital good often referred to as a non-fungible token, or NFT. NFTs have exciting new properties: they’re unique, provably scarce, liquid, and usable across multiple applications.</div>
          <div className='text-sm  text-neutral-500'>We’re proud to be the first and largest marketplace for user-owned digital goods, with everything you need to buy and sell them in one place. Learn more about us.&nbsp;&nbsp;<span className='cursor-pointer; text-primary opacity-90'>Learn more about us</span></div>
        </div>
        <div>
          <img src='image 6.png' />
        </div>
      </div>
      <div className='flex justify-center mt-16'>
        <div className='w-3/5 text-center'>
          <h3 className='text-5xl  font-bold pb-3 max-xl:text-4xl max-[1439px]:text-4xl max-[1259px]:text-3xl'>
            Why partner with OpenSea
          </h3>
          <p className='text-sm p-20 pb-2 text-neutral-500 pt-7'>At OpenSea, we're excited about a brand new type of digital good often referred to as a non-fungible token, or NFT. NFTs have exciting new properties: they’re unique, provably scarce, liquid, and usable across multiple applications.</p>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-x-6 gap-y-14 pt-20'>
        {data1.map((value, index) => (
          <Card3 {...value} key={index} />
        ))}
      </div>

      <div className='flex justify-center mt-16'>
        <div className='w-3/5 text-center'>
          <h3 className='text-5xl  font-bold pb-3 max-xl:text-4xl max-[1439px]:text-4xl max-[1259px]:text-3xl'>
            Who has partnered with us
          </h3>
          <p className='text-sm p-20 pb-2 text-neutral-500 pt-7'>We’ve collaborated with high-profile organizations and celebrities and generated millions of dollars in revenue in the process.</p>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-x-6 gap-y-14 pt-20'>
        {data2.map((value, index) => (
          <Card2 {...value} key={index} />
        ))}
      </div>

    </div>
  )
}

export default Partner
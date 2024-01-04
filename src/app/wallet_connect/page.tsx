import React from 'react'
import Wallet_card from '@/components/Wallet_card'
import types from '@/types'

const wc_data: types.Wallet_connect[] = [
//     {
//   _id: "0",
//   link: "#",
//   url: '/wallet_connect/connect-leather.svg',
//   title: "Leather",
//   content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
// },
  {
  _id: "1",
  link: "#",
  url: '/wallet_connect/connect-lite.png',
  title: "Litescribe",
  content: "Litescribe Wallet is a Litecoin non-custodial wallet browser extension, specifically for Litecoin Ordinals."
},
//   {
//   _id: "2",
//   link: "#",
//   url: '/wallet_connect/connect-phantom.png',
//   title: "Phantom",
//   content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
// }, {
//   _id: "3",
//   link: "#",
//   url: '/wallet_connect/connect-unisat.png',
//   title: "Unisat",
//   content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
// }, {
//   _id: "4",
//   link: "#",
//   url: '/wallet_connect/connect-xverse.png',
//   title: "Xverse",
//   content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
// }
]
const Connect_wallet = () => {
  return (
    <div className='section pt-20 pb-20'>
      <div className='flex justify-center items-center flex-wrap space-x-7'>
        {
          wc_data.map((value, index) => (
            <Wallet_card {...value} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Connect_wallet
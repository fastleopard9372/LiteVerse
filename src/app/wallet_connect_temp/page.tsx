import React from 'react'
import Wallet_card from '@/components/Wallet_card'
import types from "@/types";
const wc_data: types.Wallet_connect[] = [{
  _id: "0",
  link: "link",
  url: '/wallet_connect/image 5.png',
  title: "MetaMask",
  content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
}, {
  _id: "1",
  link: "link",
  url: '/wallet_connect/image 5 (1).png',
  title: "CoinBase",
  content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
}, {
  _id: "2",
  link: "link",
  url: '/wallet_connect/image 5 (2).png',
  title: "Formatic",
  content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
}, {
  _id: "3",
  link: "link",
  url: '/wallet_connect/image 5 (3).png',
  title: "Autherun",
  content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
}, {
  _id: "4",
  link: "link",
  url: '/wallet_connect/image 5 (4).png',
  title: "Wallet Connect",
  content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
}, {
  _id: "5",
  link: "link",
  url: '/wallet_connect/image 5 (5).png',
  title: "Bit Ski ",
  content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
}, {
  _id: "6",
  link: "link",
  url: '/wallet_connect/image 5 (6).png',
  title: "Torus",
  content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
}]
const Connect_wallet = () => {
  return (
    <div className='section pt-20 pb-20'>
      <div className='flex justify-center items-center flex-wrap'>
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
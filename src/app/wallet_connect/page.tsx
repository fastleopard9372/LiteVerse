import React from 'react'
import Wallet_card from '@/components/Wallet_card'
import type, { Wallet_connect } from "@/types";
const wc_data: Wallet_connect[] = [{
  _id: "0",
  link: "#",
  url: '/wallet_connect/image 5.png',
  title: "MetaMask",
  content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
}, {
  _id: "1",
  link: "#",
  url: '/wallet_connect/image 5 (1).png',
  title: "CoinBase",
  content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
}, {
  _id: "2",
  link: "#",
  url: '/wallet_connect/image 5 (2).png',
  title: "Formatic",
  content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
}, {
  _id: "3",
  link: "#",
  url: '/wallet_connect/image 5 (3).png',
  title: "Autherun",
  content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
}, {
  _id: "4",
  link: "#",
  url: '/wallet_connect/image 5 (4).png',
  title: "Wallet Connect",
  content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
}, {
  _id: "5",
  link: "#",
  url: '/wallet_connect/image 5 (5).png',
  title: "Bit Ski ",
  content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
}, {
  _id: "6",
  link: "#",
  url: '/wallet_connect/image 5 (6).png',
  title: "Torus",
  content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
}]
const Connect_wallet = (data: type.Wallet_connect) => {
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
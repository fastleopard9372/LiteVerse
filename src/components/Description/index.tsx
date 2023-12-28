import React, { useState } from 'react'

const Description = () => {
  const [innerBtn, setInerBtn] = useState<string>('details');
  const handleInnerClick = (name: string) => {
    setInerBtn(name);
  }
  return (
    <>
      <div className='flex justify-between items-center gap-4'>
        <button className={`btn btn-sm ${innerBtn === 'details' ? 'btn-primary' : 'btn-outline'}`} onClick={() => handleInnerClick('detail')}>Details</button>
        <button className={`btn btn-sm ${innerBtn === 'bids' ? 'btn-primary' : 'btn-outline'}`} onClick={() => handleInnerClick('bids')}>Bids</button>
        <button className={`btn btn-sm ${innerBtn === 'history' ? 'btn-primary' : 'btn-outline'}`} onClick={() => handleInnerClick('history')}>History</button>
        <div className='grow'></div>
        <select className="select select-bordered select-sm">
          <option>Recent Active</option>
          <option>Recent Active</option>
          <option>Recent Active</option>
          <option>Recent Active</option>
        </select>
      </div>
      <div className="divider"></div>
      <div className='opacity-50 text-[16px] font-extralight'>
        Hey guys! New exploration about NFT Marketplace Web Design, this time I'm inspired by one of my favorite NFT website called Company
        Name (with crypto payment)! What do you think?
      </div>
    </>
  )
}

export default Description
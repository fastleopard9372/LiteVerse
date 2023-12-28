"use client";
import React, { useState } from 'react'
const Contact = () => {
  return (
    <div className='section  pt-20 pb-20 '>
      <div className=' p-8 bg-neutral rounded-xl' >
        <div className='grid grid-cols-2 gap-4'>
          <div className='rounded-lg'>
            <img src='Rectangle 49.png' className='w-full' />
          </div>
          <div className='bg-base-100 rounded-lg flex items-center justify-center'>
            <div className='grid grid-cols-2 p-5  gap-x-5 gap-9'>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input type="text" placeholder="Enter Name" className="input input-bordered w-full" />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input type="text" placeholder="Enter Email" className="input input-bordered w-full" />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Subject</span>
                </div>
                <select className="select select-bordered w-full">
                  <option>NFT Items</option>
                  <option>NFT Items</option>
                </select>
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Country</span>
                </div>
                <select className="select select-bordered w-full">
                  <option>USA</option>
                  <option>Canada</option>
                  <option>Brazil</option>
                </select>
              </label>
              <label className="form-control w-full col-span-2">
                <div className="label">
                  <span className="label-text">Item Title</span>
                </div>
                <textarea className="textarea textarea-bordered x-full" placeholder="Request for your message..."></textarea>
              </label>
              <button type='button' className='btn btn-primary'>Submit Request</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Contact
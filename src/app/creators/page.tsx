"use client";
import React, { useState } from 'react'
import { useS3Upload } from "next-s3-upload";
const Creators = () => {
  let { uploadToS3 } = useS3Upload();

  let handleFileChange = async (event: any) => {
    let file = event.target.files[0];
    let { url } = await uploadToS3(file);

    console.log("Successfully uploaded to S3!", url);
  };

  return (
    <div className='section p-5'>
      <div className='base-100'>
        <div className="card w-full bg-neutral shadow-xl mt-8 mb-8 px-0">
          <div className="card-body px-0">
            <div className='grid grid-cols-3 gap-8'>
              <div className='col-span-1 flex flex-col justify-between'>
                <p className='text-xl font-bold text-primary mb-2'>Upload Item File</p>
                <p className='text-base mb-5'>Drag or choose your file to upload</p>
                <div className='bg-base-100 border-stone-400 rounded-md border p-3 flex justify-center items-center'>
                  <div className='cursor-pointer p-5' >
                    <img src='cloud.png' />
                    <p className='text-center'>Choose a File</p>
                    <input type="file" className="hidden file-input file-input-bordered file-input-primary w-full max-w-xs" />
                    <p className='text-gray text-sm text-center'>PNG,GIF,WEBP,MP4 or MP3.<br />
                      MAX 200 Mb</p>
                  </div>

                </div>
                <div className=' flex justify-end items-start flex-col  h-full'>
                  <p className='h-full'></p>
                  <p className='text-xl font-bold text-primary mb-2 flex-grow'>Notes:</p>
                  <p className='text-base mb-2'>Service fee : 1.5%</p>
                  <p className='text-base mb-2'>You will receive : 15.00 ETH $45000</p>
                </div>
              </div>
              <div className='card col-span-2  bg-base-100'>
                <div className="card-body">
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Item Title</span>
                    </div>
                    <input type="text" placeholder="e.g “Company Name Art”" className="input input-bordered w-full" />
                  </label>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Description</span>
                    </div>
                    <textarea className="textarea textarea-bordered x-full" placeholder="e.g “Company Name Design Gallery is”"></textarea>
                  </label>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Prices</span>
                    </div>
                    {/* <input type="number" placeholder="0.00ETH" className="input input-bordered w-full" /> */}

                    <select className="select select-bordered w-full">
                      <option>0.00ETH</option>
                      <option>0.01ETH</option>
                    </select>
                  </label>
                  <div className='grid grid-cols-2 gap-8'>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Royality</span>
                      </div>
                      <input type="text" placeholder="e.g “10%”" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Size</span>
                      </div>
                      <input type="text" placeholder="e.g “size”" className="input input-bordered w-full" />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className='card col-span-2  bg-base-100 mt-5'>
              <div className="flex-row card-body space-x-3">
                <button type="button" className='btn btn-primary'>Cancel</button>
                <button type="button" className='btn btn-outline'>Preview</button>
                <div className='flex-grow'></div>
                <button type="button" className='btn btn-primary'>Create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Creators
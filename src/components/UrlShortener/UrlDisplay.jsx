import React from 'react'
import { deleteIcon } from '../../assets';

const UrlDisplay = ({ url, onCopy, handleDelete }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(url)
    onCopy();
  };

  return (
    <div className=" mt-8 md:mt-11 flex-col flex gap-4">
      <div className="flex flex-col md:flex-row gap-4 px-4 py-3 items-center bg-background/90 lg:justify-between rounded-xl text-center md:text-left ">
        <p className="text-base text-textColor break-words w-full hover:underline">
          {url}
          something
        </p>
        <button className="bg-textColor text-white font-medium text-lg px-4 py-2 rounded-xl w-full sm:w-auto hover:bg-[#133445]"
        onClick={handleCopy}
        >
          Copy
        </button>
      </div>
      {/* <div className='mt-5 '>
        <button 
        className='bg-white/90 p-3 rounded-xl flex gap-2'
        onClick={handleDelete}
        >
        <img src={deleteIcon} className='w-5 inline-block' alt="delete icon" /> 
        <p className='text-sm text-textColor'>Delete history</p>
        </button>
      </div> */}
   </div>
  )
}

export default UrlDisplay

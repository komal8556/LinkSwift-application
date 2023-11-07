import React from 'react'

const UrlDisplay = ({ url, onCopy }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(url)
    onCopy();
  };

  return (
    <div className=" mt-8 md:mt-11 flex-col flex gap-4">
      <div className="flex flex-col md:flex-row gap-4 px-4 py-3 items-center bg-background/90 lg:justify-between rounded-xl text-center md:text-left ">
        <p className="text-base text-textColor break-words w-full hover:underline">
          {url}
        </p>
        <button className="bg-textColor text-white font-medium text-lg px-4 py-2 rounded-xl w-full sm:w-auto hover:bg-[#133445]"
        onClick={handleCopy}
        >
          Copy
        </button>
      </div>
      
   </div>
  )
}

export default UrlDisplay

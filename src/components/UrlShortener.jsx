import React from 'react'

const ShortenUrlList = () => {
  return (
    <div className='mt-8 md:mt-11  flex flex-col gap-4'>
      <div className='flex flex-col md:flex-row gap-4 px-4 py-4 items-center bg-background/90 lg:justify-between rounded-xl text-center md:text-left'>
        <p className='text-base text-textColor break-words w-full hover:underline'>https://myColorSpacev9y8t9q84ytq8ytew8yet.com</p>
        <button className='bg-textColor text-white font-medium text-lg px-4 py-2 rounded-xl w-full sm:w-auto hover:bg-[#133445]'>Copy</button>
      </div>
      <div className='flex flex-col md:flex-row gap-4 px-4 py-4 items-center bg-background/90 lg:justify-between rounded-xl text-center md:text-left'>
        <p className='text-base text-textColor break-words w-full hover:underline'>https://myColorSpacev9y8t9q84ytq8ytewadfknhkldfnahalksdnhkl/asdh8yet.com</p>
        <button className='bg-textColor text-white font-medium text-lg px-4 py-2 rounded-xl w-full sm:w-auto hover:bg-[#133445] '>Copy</button>
      </div>
      <div className='flex flex-col md:flex-row gap-4 px-4 py-4 items-center bg-background/90 lg:justify-between rounded-xl text-center md:text-left '>
        <p className='text-base text-textColor break-words w-full hover:underline'>https://myColorSpacev9y8t9q84ytq8ytew8yet.com</p>
        <button className='bg-textColor text-white font-medium text-lg px-4 py-2 rounded-xl w-full sm:w-auto hover:bg-[#133445]'>Copy</button>
      </div>
    </div>
  )
}

const UrlShortener = () => {
  return (
    <section className='py-20 '>
      <form action="#" className='mx-auto  bg-textColor p-6 md:p-8 max-w-[62rem] rounded-2xl'>
        <div className="flex flex-col gap-4 md:flex-row md:gap-3  md:justify-between">

          <input type="text" className='bg-background text-textColor font-Poppins w-full rounded-xl outline-none max-w-[49rem] px-6 py-4' placeholder='Enter your Url...' />
          <button className='bg-accent text-white font-semibold text-xl px-6 py-4 rounded-xl'>Shorten</button>
        </div>
        <ShortenUrlList/>
      </form>
    </section>
  )
}

export default UrlShortener


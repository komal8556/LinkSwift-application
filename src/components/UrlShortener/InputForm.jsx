import React, { useState } from 'react'

const InputForm = ({ onhandleSubmit }) => {
  const [url, setUrl] = React.useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setUrl(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    setErrorMessage('')

    if (!url) {
      // console.log("url is empty")
      let emptyMessage = "Url is empty"
      setErrorMessage(emptyMessage)
      return;
    }

    const urlRegex = /^(ftp|https?):\/\/[^ "]+$/;
    const isUrlValid = urlRegex.test(url);

    if (!isUrlValid) {
      // console.log("url is invalid")
      let inValidMessage = "Url is invalid"
      setErrorMessage(inValidMessage)
      return;
    }
      
    const formattedUrl = /^(https?|ftp):\/\//i.test(url) ? url : `http://${url}`;
    onhandleSubmit(formattedUrl);
    setUrl("")
  }

  return (
       <form
        onSubmit={onSubmit}
        className=""
        noValidate
      >
        <div className="flex flex-col gap-4 md:flex-row md:gap-3  md:justify-between">
          <input
            type="text"
            className="bg-background text-textColor font-Poppins w-full rounded-xl outline-none max-w-[49rem] px-6 py-4"
            placeholder="Enter your Url..."
            value={url}
            onChange={handleChange}
            id='url'
          />
          <button className="bg-accent text-white font-semibold text-xl px-6 py-4 rounded-xl hover:bg-[#b3125a]"
          type='submit'
          >
            Shorten
          </button>
        </div>
        {<p className='text-red-500 mt-3 text-base'>{errorMessage}</p>}
      
      </form>
  )
}

export default InputForm

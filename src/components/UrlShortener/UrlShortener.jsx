import React, { useContext, useEffect, useState } from "react";
import InputForm from './InputForm'
import UrlDisplay from "./UrlDisplay";
import axios from "axios";
import UrlContext from "../../context/UrlContext";

const UrlShortener = () => {
  const {link, setLink} = useContext(UrlContext)
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (url) => {
    const accessToken = '4f2f838e306b997cd0be153fb7951e988503f2f1';
    const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

    const formattedUrl = /^(https?|ftp):\/\//i.test(url) ? url : `http://${url}`;

    try {
      const response = await axios.post(
        apiUrl,
        { long_url: formattedUrl },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const shortenedUrl = response.data.id;
      setShortUrl(shortenedUrl);
      // console.log(shortenedUrl);
      setLink(shortUrl)

      setLoading(false)

    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false)
    }

  };

  // console.log(link)
  
  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false);
    }, 3000)
  };

  const handleDelete = () => {
    console.log("delete button is clicked")
  }

  return (
    <section className="py-20 ">
     <div className="mx-auto  bg-textColor p-6 md:p-8 max-w-[62rem] rounded-2xl">
        <InputForm onhandleSubmit={handleSubmit} />
        {loading && 
          <div className='text-center mt-8 md:mt-11'>
            <h4 className='text-white text-2xl'>Loading...</h4>
          </div>
        }
        {error && 
          <div className='text-center mt-8 md:mt-11'>
            <h4 className='text-white text-2xl'>Something went wronge {": ("}</h4>
          </div>
        } 
        {shortUrl && 
        <UrlDisplay url={shortUrl} onCopy={handleCopy} onDelete={handleDelete} />
        }
     </div>
    </section>
  );
};

export default UrlShortener;

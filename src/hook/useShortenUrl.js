import axios from "axios";
import { useState, useEffect } from "react";

function useShortenUrl(urlPath, token){
   const [shortUrl, setShortUrl] = useState('');
   const [error, setError] = useState(false)
   const [loading, setLoading] = useState(false)
   
    useEffect(() => {
       ;(
        async () => {
            const accesToken = token;
            const apiUrl = urlPath;
            const formattedUrl = /^(https?|ftp):\/\//i.test(url) ? url : `http://${url}`;
            try {
                setLoading(true)
                setError(false)
                const response = await axios.post(
                    apiUrl,
                    { long_url: formattedUrl },
                    {
                        headers: {
                            Authorization: `Bearer ${accesToken}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
                const shortenedUrl = response.data.link;
                setShortUrl(shortenedUrl);
                setLoading(false)

            } catch (error) {
                setError(true)
                console.log(error)
                setLoading(false)
            }
        }
       )();
    }, []);

    return [shortUrl, error, loading]

}

export default useShortenUrl
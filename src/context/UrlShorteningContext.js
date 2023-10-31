import { useContext, createContext } from "react";

export const UrlShorteningContext = createContext({
    shortenUrls: [
        {
            id: 1,
            url: "https/shorten.com",
            copied: false
        }
    ],
    shortenUrl: (url) => {},
    copyUrl: (url, copied) => {}
});

export const useUrlShortener = () => {
    return useContext(UrlShorteningContext);
};

export const UrlShortenerProvider = UrlShortenerProvider.Provider
import React, { useState, useEffect } from 'react';
import UrlList from './url-list';

// {
//   "hashid": "9yPAle",
//   "url": "https://www.buratovich.com/",
//   "created_at": "2020-06-23T03:39:28.525192Z"
// }

function Shortener() {
  const [url, setUrl] = useState('');
  const [urlList, setUrlList] = useState([]);
  const [isError, setIsError] = useState(false);

  // The empty array in the second parameter of useEffect will cause it will be called only once: afeter the first render
  useEffect(() => {
    let data = sessionStorage.getItem('urlList');
    if (data) {
      setUrlList(JSON.parse(data));
    }
  }, []);

  const handleShortenerClick = (e) => {
    e.preventDefault();

    if (url !== '') {
      fetch('https://rel.ink/api/links/', {
        method: 'POST',
        body: JSON.stringify({ url: url }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((res) => {
          const data = [
            ...urlList,
            { url: url, shortenedUrl: `https://rel.ink/${res.hashid}` },
          ];
          setUrlList(data);
          if (isError) {
            setIsError(false);
          }
          setUrl('');
          updateSessionData(data);
        })
        .catch((error) => console.error('Error:', error));
    } else {
      setIsError(true);
    }
  };

  const updateSessionData = (data) => {
    sessionStorage.setItem('urlList', JSON.stringify(data));
  };

  return (
    <section className="shortener">
      <div className="background"></div>
      <form action="" className={`layout-m ${isError ? 'error' : ''}`}>
        <div className="link-input">
          <input
            type="text"
            onChange={(e) => setUrl(e.target.value)}
            value={url || ''}
            placeholder="Shorten a link here..."
          />
          <span className="error-msg">Please add a link</span>
        </div>
        <input
          type="submit"
          value="Shorten It!"
          className="btn-square"
          onClick={handleShortenerClick}
        />
      </form>
      <UrlList urls={urlList} />
    </section>
  );
}

export default Shortener;

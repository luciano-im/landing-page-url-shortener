import React, { useState, useEffect } from 'react';
import UrlList from './url-list';

function Shortener() {
  const [url, setUrl] = useState('');
  const [urlList, setUrlList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('Please add a link');

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
        .then((res) => {
          if (res.status < 200 || res.status >= 300) {
            throw new Error("URL couldn't be shortened");
          }
          return res.json();
        })
        .then((res) => {
          let data = [
            ...urlList,
            { url: url, shortenedUrl: `https://rel.ink/${res.hashid}` },
          ];
          setUrlList(data);
          setUrl('');
          updateSessionData(data);
          if (isError) {
            setIsError(false);
          }
        })
        .catch((error) => {
          setIsError(true);
          setErrorMsg(error.message);
        });
    } else {
      setIsError(true);
      setErrorMsg('Please add a link');
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
          <span className="error-msg">{errorMsg}</span>
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

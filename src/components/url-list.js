import React from 'react';
import Url from './url';

function UrlList(props) {
  const { urls } = props;

  return (
    <div className="links layout-m">
      {urls.map((url) => (
        <Url
          url={url.url}
          shortened={url.shortenedUrl}
          key={url.shortenedUrl}
        />
      ))}
    </div>
  );
}

export default UrlList;

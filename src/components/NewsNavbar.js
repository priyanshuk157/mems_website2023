import React from 'react';
import './NewsNavbar.css'; 

const NewsNavbar = ({ news }) => {
  return (
    <div className="news-navbar">
      <div className="news-scroll">{news}</div> {/* Use news-scroll class */}
    </div>
  );
};

export default NewsNavbar;

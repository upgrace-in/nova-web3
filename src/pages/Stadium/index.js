import React from "react";
import Head from 'next/head';


const Stadium = () => {

  return (
    <div className="stadium">
      {/* 6N6V6MLlVC2Bd7oe1wZKVgaYOXsFxGwxJ4pQ9W6CuXIY3UmS8JGvRynqzJvS */}
      

      <img id="stadium_pc" src="/media/images/stadium.jpg" alt="stadium" />
      <img id="stadium_mob" style={{ display: 'none' }} src="/media/images/stadium-mob.jpg" alt="stadium" />
      <div className="content">
        <h1 className="head_2">STADIUM</h1>
        <iframe id="footballFrame" src="/football.html" title="W3Schools Free Online Web Tutorials"></iframe>
      </div>
    </div>
  );
};

export default Stadium;

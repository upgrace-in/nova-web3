import React, { useEffect } from "react";
// import Image from "next/image";

export default function Footer2() {

  return (
    <div className="footer-2">
      <div className="left" />
      <div className="left-2">
        <div className="img">
          <img src="/media/images/football.png" alt="football" />
        </div>
        <div className="img">
          <img src="/media/images/baseball.png" alt="baseball" />
        </div>
        <div className="img">
          <img src="/media/images/egames.png" alt="egames" />
        </div>
        <div className="img">
          <img src="/media/images/soccer.png" alt="soccer" />
        </div>
        <div className="img">
          <img src="/media/images/tennis.png" alt="tennis" />
        </div>
      </div>
      <div className="right">
        <i className="fa-brands fa-discord"></i>
        <div className="icon">
          {/* <Image src="/media/images/opensea.png" alt="opensea" layout="fill" objectFit="contain" /> */}
        </div>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
    </div>
  );
}

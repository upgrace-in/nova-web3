import React, { useEffect } from "react";
// import Image from "next/image";

export default function Footer() {

  return (
    <div className="footer">
      <div className="left">
        <div className="bars">
          <div className="stats">
            <p>
              LIVE SPORTS SCORES / 03.05.2022 / 15:34 (UTC + 01:00) // CHAMPIONS LEAGUE / SEMIFINALS / LIVERPOOL VS.
              REAL MA
            </p>
          </div>
          <div className="categories">
            <div className="category black">FOOTBALL</div>
            <div className="category blue">BASKETBALL</div>
            <div className="category yellow">TENNIS</div>
            <div className="category pink">NFL</div>
            <div className="category orange">F1</div>
            <div className="category green">E-SPORTS</div>
          </div>
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

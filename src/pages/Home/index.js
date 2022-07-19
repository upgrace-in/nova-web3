import React, { useEffect, useState } from "react";
import { secondsToDhms } from "../../functions/conversion";
import Footer from "../../layout/Footer";
import Script from 'next/script';
import HomeFrame from './HomeFrame'
import Head from 'next/head'

export default function Home() {
  const [timer, settimer] = useState(5733243);

  const [showDiv, setshowDiv] = useState(false)

  function closeThis() {
    console.log(showDiv)
    setshowDiv(old => !old)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      settimer(timer - 1);
    }, 1000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  useEffect(() => {
    var countDownDate = new Date("Sep 16, 2022 00:00:00").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    settimer((days*86400)+(hours*3600)+(minutes*60)+seconds);
  }, [])

  console.log(secondsToDhms(timer));

  return (
    <div className="home">
      <Script
        src="https://code.jquery.com/jquery-3.6.0.js"
        onLoad={() => console.log("jQuery is Loaded...")}
      />
      <Script
        src="https://unpkg.com/web3@latest/dist/web3.min.js"
        onLoad={() => console.log("WEB3.js is Loaded...")}
      />
      <Script
        src="https://unpkg.com/web3modal"
        onLoad={() => console.log("WEB3Modal is Loaded...")}
      />

      <Script
        src="https://unpkg.com/@walletconnect/web3-provider"
        onLoad={() => console.log("WEB3Provider is Loaded...")}
      />
      <Script
        src="/js/main.js"
        strategy="lazyOnload"
        onLoad={() => console.log("main.js is Loaded...")}
      />
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.1/css/all.min.css" integrity="sha512-ioRJH7yXnyX+7fXTQEKPULWkMn3CqMcapK0NNtCN8q//sW7ZeVFcbMJ9RvX99TwDg6P8rAH2IqUSt2TLab4Xmw==" referrerpolicy="no-referrer" />
      </Head>
      <img className="graphics" src="/media/images/graphics1.png" alt="graphics" />
      <div className="band">
        <h1 className="home_txt_hide">A NEW WAY OF EXPERIENCING SPORTS, ESPORTS AND GAMING</h1>
        <h1 className="home_txt" style={{ display: 'none', textAlign: 'center' }}>A NEW WAY OF EXPERIENCING SPORTS,<br /> ESPORTS AND GAMING</h1>
      </div>
      <div className="timer">
        {/* <div className="time">
          <h1>01</h1>
          <p>MONTHS</p>
        </div> */}
        <div className="time">
          <h1>{secondsToDhms(timer).dDisplay}</h1>
          <p>{secondsToDhms(timer).dText}</p>
        </div>
        <div className="time">
          <h1>{secondsToDhms(timer).hDisplay}</h1>
          <p>{secondsToDhms(timer).hText}</p>
        </div>
        <div className="time">
          <h1>{secondsToDhms(timer).mDisplay}</h1>
          <p>{secondsToDhms(timer).mText}</p>
        </div>
        <div className="time">
          <h1>{secondsToDhms(timer).sDisplay}</h1>
          <p>{secondsToDhms(timer).sText}</p>
        </div>
      </div>
      <div className="actions">
        {/* <div className="btn">
          <i className="fa-solid fa-star"></i>
          <p className="text-center">JOIN THE TEAM</p>
        </div> */}
        <div className="btn" onClick={() => closeThis()}>
          <p className="text-center">Watch The Video</p>
        </div>
        <div id="cownnect_btn" className="connect_btn btn btn2">
          <p className="text-center">Connect Wallet</p>
        </div>

        <div id="mint_box" style={{ display: 'none' }}>
          <div className="row" style={{ display: 'flex' }}>
            <div id="decrease_btn" className="btn btn3">
              <p className="text-center">-</p>
            </div>
            <div className="btn btn3">
              <p id="mint_count" className="text-center">1</p>
            </div>
            <div id="increase_btn" className="btn btn3">
              <p className="text-center">+</p>
            </div>
          </div>
          <div id="mint_btn" className="btn btn2">
            <p className="text-center">Mint</p>
          </div>
        </div>

        <HomeFrame handleClick={() => closeThis} showDiv={showDiv} />

      </div>
      {/* <Footer /> */}
    </div>
  );
}

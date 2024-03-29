import React, { useEffect, useState } from "react";
import { secondsToDhms } from "../../functions/conversion";
import Footer from "../../layout/Footer";
import Script from 'next/script';
import HomeFrame from './HomeFrame'
import Head from 'next/head'

export default function Home() {

  const [showDiv, setshowDiv] = useState(false)

  function closeThis() {
    console.log(showDiv)
    setshowDiv(old => !old)
  }

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
      
      <div className="actions">
        <div className="btn" onClick={() => closeThis()}>
          <p className="text-center">Watch The Video</p>
        </div>
        <div id="connect_btn" className="connect_btn btn btn2">
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

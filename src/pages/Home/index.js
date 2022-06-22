import React, { useEffect, useState } from "react";
import { secondsToDhms } from "../../functions/conversion";
import Footer from "../../layout/Footer";
import Script from 'next/script';

export default function Home() {
  const [timer, settimer] = useState(10000000);

  useEffect(() => {
    const interval = setInterval(() => {
      settimer(timer - 1);
    }, 1000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

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
        src="/js/mint.js"
        strategy="lazyOnload"
        onLoad={() => console.log("main.js is Loaded...")}
      />
      <img className="graphics" src="/media/images/graphics1.png" alt="graphics" />
      <div className="band">
        <h1>A NEW WAY OF EXPERIENCING SPORTS, ESPORTS AND GAMING</h1>
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
        <div className="btn">
          <i className="fa-solid fa-star"></i>
          <p className="text-center">JOIN THE TEAM</p>
        </div>
        <div className="connect_btn btn btn2">
          <p className="text-center">Connect Wallet</p>
        </div>

        <div id="mint_box" style={{display:'none'}}>
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


      </div>
      {/* <Footer /> */}
    </div>
  );
}

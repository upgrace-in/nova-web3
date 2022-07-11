import React, { useState } from "react";
import PopupNfans from "../../components/popup/PopupNfans";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Nfans() {
  const [popup, setpopup] = useState(false);

  console.log(data);
  return (
    // <div className="nfans">
    //   <div className="left">
    //     <h1 className="title">NFANS</h1>
    //     <h2>/ / 10000</h2>

    //     <div className="filter-container">
    //       <h3>FILTER</h3>
    //       <div className="list">
    //         <p>Novaland</p>
    //         <p>Sport</p>
    //         <p>Head</p>
    //         <p className="item-active">Eyes</p>
    //         <p>Nose</p>
    //         <p>Ears</p>
    //         <p>Mouth</p>
    //         <p>Style</p>
    //         <p>Accessories</p>
    //       </div>
    //       <div className="list2">
    //         <p className="item-active">Millhouse Eyes</p>
    //         <p>Unibrow Eyes</p>
    //         <p>Shades</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="right">
    //     <div className="filters">
    //       <div className="filter">
    //         <p>Millhouse Eyes</p>
    //         <i className="fa-solid fa-xmark"></i>
    //       </div>
    //       <div className="filter">
    //         <p>Football</p>
    //         <i className="fa-solid fa-xmark"></i>
    //       </div>
    //     </div>

    //     <div className="gallery">
    //       {data.map((item) => (
    //         <div key={item} className="img" onClick={() => setpopup(true)}>
    //           <img src="/media/gifs/reveal.gif" alt="nft" />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   {/* <Footer /> */}
    //   {popup && <PopupNfans setpopup={setpopup} />}
    // </div>

    <div className="iframe" style={{ paddingTop: "7.5rem", paddingBottom: "5rem" }}>
      <iframe
        style={{ height: "calc(99vh - 12rem)" }}
        src="https://testnets.opensea.io/collection/nova-fan-team-club-v2?embed=true"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

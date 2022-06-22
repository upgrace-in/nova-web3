import React from "react";

export default function PopupNfans(props) {
  const { setpopup } = props;
  return (
    <div className="popup-nfans">
      <div className="bg-popup" />

      <div className="popup-container">
        <div className="cross" onClick={() => setpopup(false)}>
          <i className="fa-solid fa-xmark"></i>
        </div>

        <div className="popup-left">
          <div className="img">
            <img src="/media/gifs/reveal.gif" alt="nft" />
          </div>
        </div>
        <div className="popup-right">
          <h1>NFAN #1</h1>
          <p>
            <span>Novaland:</span>Millihouse eyes
          </p>
          <p>
            <span>Sports:</span>Millihouse eyes
          </p>
          <p>
            <span>Head:</span>Millihouse eyes
          </p>
          <p>
            <span>Eyes:</span>Millihouse eyes
          </p>
          <p>
            <span>Nose:</span>Millihouse eyes
          </p>
          <p>
            <span>Ears:</span>Millihouse eyes
          </p>
          <p>
            <span>Mouth:</span>Millihouse eyes
          </p>
          <p>
            <span>Style:</span>Millihouse eyes
          </p>
          <p>
            <span>Accessories:</span>Millihouse eyes
          </p>
          <div className="icon">
            <img src="/media/images/opensea2.png" alt="opensea icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

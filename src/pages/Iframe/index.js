import React from "react";

const Iframe = () => {
  return (
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
};

export default Iframe;

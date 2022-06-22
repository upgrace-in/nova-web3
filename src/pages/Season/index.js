import React, { useState, useEffect } from "react";

const Season = () => {
  const [screenMob, setscreenMob] = useState(null);

  useEffect(() => {
    typeof window !== "undefined" && window.screen.width < 640 ? setscreenMob(true) : setscreenMob(false);
  }, []);
  return (
    <div className="season">
      <img src={!screenMob ? "/media/images/season.jpg" : "/media/images/season-mob.jpg"} alt="season" />
      <div className="content">
        <h1>SEASON</h1>
        <h3>2022</h3>
        <p>
          Here you will go head-to-head with other Nfans, find all the competitions, games, and activities of the
          season. Be sure to check in with your NFANs to see to which of these they can grant you access to:
        </p>
        <p className="bold">Bronze status: If you have 1 or 2 NFANS you can have access</p>
        <p>-All NFTC league tournaments</p>
        <p>-All Pro tournaments</p>
        <p className="mb-1">-Public sale to Master tournament NFTs</p>
        <p className="bold">Silver status: If you have 3 or 4 NFANS you can access</p>
        <p>-All NFTC league tournaments</p>
        <p>-All Pro tournaments</p>
        <p className="mb-1">-Whitelist to Master tournament NFTs</p>
        <p className="bold">Gold status: 5 NFANS or more</p>
        <p>-All NFTC league tournaments</p>
        <p>-All Pro tournaments</p>
        <p>-Whitelist for Master tournament NFTs</p>
        <p>-Whitelist for all future projects</p>
        <p>-Special discounts on our high frequency shop (HFS)</p>
        <p>-Secret access to a special tournament for Gold Members only (hahaha gold members)</p>
      </div>
    </div>
  );
};

export default Season;

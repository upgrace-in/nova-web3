import React from "react";

const Stadium = () => {

  return (
    <div className="stadium">
      <img id="stadium_pc" src="/media/images/stadium.jpg" alt="stadium" />
      <img id="stadium_mob" style={{display:'none'}} src="/media/images/stadium-mob.jpg" alt="stadium" />
      <div className="content">
        <h1>STADIUM</h1>

        <div id="wg-api-football-games"
          data-host="v3.football.api-sports.io"
          data-key="c9f354620f2d6a831ea11cc8a32cde4c"
          data-date=""
          data-league=""
          data-season=""
          data-theme="dark"
          data-refresh="15"
          data-show-toolbar="true"
          data-show-errors="false"
          data-show-logos="false"
          data-modal-game="true"
          data-modal-standings="true"
          data-modal-show-logos="true"
          style={{overflow: 'auto', height: '200px'}}
          >
        </div>
        <script type="module" src="https://widgets.api-sports.io/2.0.3/widgets.js"/>
      </div>
    </div>
  );
};

export default Stadium;

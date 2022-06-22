import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Stadium = () => {
  const [screenMob, setscreenMob] = useState(null);
  const { score } = useSelector((state) => state.score);

  console.log(score);

  useEffect(() => {
    typeof window !== "undefined" && window.screen.width < 640 ? setscreenMob(true) : setscreenMob(false);
  }, []);

  return (
    <div className="stadium">
      <img src={!screenMob ? "/media/images/stadium.jpg" : "/media/images/stadium-mob.jpg"} alt="stadium" />
      <div className="content">
        <h1>STADIUM</h1>
        <p>
          Welcome to the interdimensional ANBIJU Stadium. We gather here to get euphoria, to watch the scores and to see
          who´s on top. You will be able to see as the stadium fills with NFANs as we are downloaded to our avatars.
          Once the telepathic sensory translation (or minting) starts we will be visible to you with 7-dimensional
          technology and metaverse quantum mechanics.
        </p>
        {score ? (
          <div className="bars">
            <div className="stats">
              <p>
                LIVE SPORTS SCORES / {score[0].event_date} {"// "}
                {score.map((item, i) => (
                  <span key={i}>
                    {item.league_name} / {item.event_away_team} VS. {item.event_home_team} {"// "}
                  </span>
                ))}
              </p>
            </div>
            <div className="categories">
              {score.map((item, i) => (
                <div key={i} className="category">
                  {`(${item.league_name} ${item.country_name})`} {item.event_away_team} VS. {item.event_home_team}{" "}
                  {"->"} {item.event_final_result}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bars">
            <div className="stats">
              <p style={{ textAlign: "center" }}>Loading Score...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stadium;

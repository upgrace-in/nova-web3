import React from "react";

const Team = () => {
  return (
    <div className="team">
      <img src="/media/images/team.png" alt="team" />
      <div className="content">
        <h1>Team</h1>
        <p>
          Welcome to the interdimensional ANBIJU Team. We gather here to get euphoria, to watch the scores and to see
          who´s on top. You will be able to see as the Team fills with NFANs as we are downloaded to our avatars. Once
          the telepathic sensory translation (or minting) starts we will be visible to you with 7-dimensional technology
          and metaverse quantum mechanics.

          <div id="teamNames" style={{display: "none"}}>
            <br />
            <p>Andres Navia, AKA:</p>
            <h2>The Goose with</h2>
            <h2>the golden eggs</h2>
            <br/>
            <p>William Cordoba, AKA:</p>
            <h2>Bilomasflow</h2>
            <br />
            <p>J. Gaviria, AKA:</p>
            <h2>Ayahuasca trip</h2>
          </div>
        </p>
      </div>
      <div className="name1 hd-mb">
        <p>William Cordoba, AKA:</p>
        <h1>Bilomasflow</h1>
      </div>
      <div className="name2 hd-mb">
        <p>J. Gaviria, AKA:</p>
        <h1>Ayahuasca trip</h1>
      </div>
      <div className="name3 hd-mb">
        <p>Andres Navia, AKA:</p>
        <h1>The Goose with</h1>
        <h1>the golden eggs</h1>
      </div>
    </div >
  );
};

export default Team;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm only interested in the <span className="purple">exceptional. </span>
            You've figured I'm gently proud? My name is <span className="purple"> Dele Bliss Paago</span>
            <br /> I'm the Business Development Manager at an Environmental Engineering company focused on
            oil spill cleanup and remediation, procurement, waste management and high-tech solutions.  
            <br />
            When I'm not corralling clients and partners into the latest strategy guaranteed to make us both money
            you'll find me writing or coding, two creative activities I deeply enjoy. When I get bored I travel, or flirt (each human is a fine universe, eh?),
            read history or stumble into debates on +234 politics (Nigeria is God's favourite comedy channel). 
            <br />
            <br />
            Apart from these, and the fine accompaniment of french wines and ogoni palm-wine, I dabble in:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games or Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Curating Eclectic Music Playlists
            </li>
            <li className="about-activity">
              <ImPointRight /> Eating Gourmet (In Gokana, Dele means "Eat Good". Interpret that as "Commissioner of Enjoyment")
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            My Life Philosophy? "Life No Hard!" If you follow principles and know when to dump them{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink=<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FcYChcBwfWUbQ3CDnTjWjnz%2FVitruvianSys%3Fnode-id%3D20964-9688%26starting-point-node-id%3D20964%253A9688%26mode%3Ddesign%26t%3DtQpBSBaHHsg199ih-1" allowfullscreen></iframe>
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ReadyBooks"
              description="ReadyBooks, built with TypeScript in the React.js framework, takes 
              inspiration from popular book applications such as npr.org. It is built 
              for users who want new books to read from the most recent New York Times Best Sellers lists."
              ghLink="https://github.com/captainpaago/readybooks"
              demoLink="https://readybooks.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ChanceCentral"
              description="Opportunity Board crafted with Next js , MongoDB , Tailwind css , Redux toolkit. Users can find or post Jobs, Scholarships, Fellowships and Auctions on this application with timely prompts delivered to their inbox"
              ghLink="https://github.com/captainpaago/ChanceCentral"
              demoLink="https://chance-central.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AsoRace"
              description="Text-based game on Nigerian politics along the lines of www.nationstates.net. 
              Users acquire boys, reputation and money to work alongside allies, godfathers, unions and traditional institutions in a bid for the national presidency"
              ghLink="https://github.com/captainpaago/AsoRace"
              demoLink="https://www.aso-race.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="CareSync"
              description="Medical records accessible from anywhere."
              ghLink="https://github.com/CaptainPaago/CareSync"
              demoLink="https://care-sync-v1.vercel.app/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

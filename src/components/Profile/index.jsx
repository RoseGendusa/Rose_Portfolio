import React, { useEffect, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import me from "../../assets/me.jpeg";

import Tech from "../LottieAnimations/Tech";
export default function Profile() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Full Stack Developer"];
  const period = 100;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(period);
    }
  };

  const handleContact = () => {
    console.log("Contact Me!");
  };
  return (
    <section className="main-banner" id="home">
      <Container className="main-banner-container">
        <Row className="align-items-center">
          <Col className="main-banner-col" xs={12} sm={12} md={6} xl={7}>
            <a
              href="https://github.com/gulfidanozturk"
              target="_blank"
              className="main-banner-github"
            >
              <p>Github</p>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <div className="main-banner-profile">
              <div className="profile-image">
                <img src={me}></img>
              </div>
              <div className="profile-title">
                <h1>
                  Gul<strong>{".is()"}</strong>
                </h1>
                <span
                  className="main-banner-text-anim"
                  dataPeriod="1000"
                  data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                >
                  <span className="main-banner-current-text"style={{ color: '#fff '}}>{text}</span>
                </span>
              </div>
            </div>
            
            <p>
            Experienced full-stack software developer who has three years of professional exposure to modern Python MVC frameworks. 
            Skilled in front-end technologies such as React.js and Next.js and back-end technologies such as Django and PostgreSQL.
            Proficient in implementing database interactions and utilizing ORMs for simplified data access and manipulation.
            Adept at integrating REST APIs into applications, encompassing both third-party services and custom APIs, 
            and ensuring program optimization. Recognized for excellent communication skills and a collaborative mindset,
            seeking a team that values innovation, accountability, and impactful contributions. Highly organized, detail-oriented, 
            and dedicated to delivering high-quality work.

            </p>
            <div className="main-banner-connect">
              <a
                href="https://www.linkedin.com/in/g%C3%BCl-fidan-%C3%B6zt%C3%BCrk/"
                target="_blank"
              >
                <button onClick={() => handleContact()}>
                  Let's Connect!
                  <FontAwesomeIcon icon={faLinkedin} />
                </button>
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} xl={5}>
         
            <Tech />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

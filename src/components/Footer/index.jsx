import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import resume from "../../assets/resume/Rose_Resume.pdf"
import EndFooter from "../LottieAnimations/EndFooter.jsx";
export default function Footer() {
  return (
    <footer className="footer-section ">
      <Container className="footer-container">
        <Row className="footer-body">
          <Col className="navbarr-brand" sm={12}>
            <p>Let's connect and discuss your project ideas! 
            <br /> I'm available for freelance opportunities, collaborations, and new challenges.
            <br /> Feel free to reach out to me for any inquiries or to hire my services.
            <br /> I'm excited to hear from you!
</p>          </Col>
          <Col className="text-center text-sm-end" sm={12}>
            <span className="navbar-social">
              <div className="navbar-social-icons">
                <a
                  href={resume}
                  download="Gul_Ozturk_Resume"
                  link-title="Download My Resume"
                >
                  <FontAwesomeIcon icon={faFileDownload} />
                </a>
                <a href="https://www.linkedin.com/in/g%C3%BCl-fidan-%C3%B6zt%C3%BCrk/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/gulfidanozturk" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </span>
          </Col>
        </Row>
       
          
        
      </Container>
    </footer>
  );
}

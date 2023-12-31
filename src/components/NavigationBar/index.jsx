import React, { useEffect, useRef, useState } from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import resume from "../../assets/resume/Rose_Resume.pdf";

const NavigationBar = ({ currentPage, setCurrentPage }) => {
  const [scroll, setScroll] = useState(false);

  const handleContact = () => {
    console.log("Contact Me!");
  };

  const handlePageUpdate = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const onScrollEvent = () => {
      window.scrollY > 20 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", onScrollEvent);
    return () => {
      window.removeEventListener("scroll", onScrollEvent);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`${scroll ? " scroll" : ""}`}>
      <Container>
        <Navbar.Brand href="#home">
          <FontAwesomeIcon icon={faCode} />
          <span>Rose(Gulfidan.Ozturk)</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className="navbar-links">
              <Nav.Link
                className={`navbar-link ${
                  currentPage === "Home" ? "active" : ""
                }`}
                href="#home"
                onClick={() => handlePageUpdate("Home")}
                datacustomattribute="Home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={`navbar-link ${
                  currentPage === "Skills" ? "active" : ""
                }`}
                href="#skills"
                onClick={() => handlePageUpdate("Skills")}
                datacustomattribute="Skills"
              >
                Skills
              </Nav.Link>
              <Nav.Link
                className={`navbar-link ${
                  currentPage === "Projects" ? "active" : ""
                }`}
                href="#projects"
                onClick={() => handlePageUpdate("Projects")}
                datacustomattribute="Projects"
              >
                Projects
              </Nav.Link>
            </div>
            <span className="navbar-social">
              <div className="navbar-social-icons">
                <a
                  href={resume}
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
            <div className="navbar-contact">
              <a href="mailto:gulfidanozturk34@gmail.com">
                <button
                  className="navbar-contact-me"
                  onClick={() => handleContact()}
                >
                  <span>Contact Me!</span>
                </button>
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

import { ReactComponent as Quotation } from "./icons/quotation.svg";

import { ReactComponent as Twitter } from "./icons/twitter.svg";
// import WhatsAppSharePage from "../WhatsAppSharePage";
import { ReactComponent as Whatsapp } from "./icons/whatsapp.svg";
import Error from "../LottieAnimations/Error";
export default function InfoSec() {
  return (
    <section className="main-banner-caro" id="about">
      <Container className="main-banner-containerx">
        <Row className="align-items-center">
          <Col className="main-banner-col" xs={12} sm={12} md={6} xl={7}>
            <header>
              <div className="top-strip" />
            </header>
            <div className="containerlx">
              <div className="quotation-box ">
                <Quotation />
                <div className="quote">
                  <p>
                    While the code may crash and the page may break,
                    perseverance is key in the realm of software development.
                    Keep pushing forward and continue to code
                  </p>
                  <span>- ChatGPT.</span>
                </div>
              </div>
            </div>
            <div className="bottom-strip" />
          </Col>
          <Col xs={12} sm={12} md={6} xl={5}>
            <Error />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

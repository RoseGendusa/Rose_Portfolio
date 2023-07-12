import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import museum from "../../assets/projects/museumapp.jpg";
import loginpage from "../../assets/projects/loginpage.jpg";
import portfolio from "../../assets/projects/portfolio.jpg";
import horoscope from "../../assets/projects/horoscope.jpg";
import ProductCard from "./ProjectCard";
export default function Projects() {
  const projects = [
    {
      title: "gulfidanozturk.com",
      description: (<p> E-commerce inventory management application. <br /> React.js, Next.js, Python Django, HTML/SASS <br /> React Hooks, Redux.js, Axios </p>),
      img: loginpage,
      url: "https://gulfidanozturk.com/react-stockapp/",
    },
    {
      title: "gulfidanozturk.com",
      description: (<p> Portfolio Page <br /> JS, HTML/CSS </p>),
      img: portfolio,
      url: "https://gulfidanozturk.com/",
    },
    {
      title: "React Rose Museum App",
      description: (<p> React Museum App <br /> React.js, React Awesome Slider, React Color Circle<br /> React Router </p>),
      img: museum,
      url: "https://react-museumapp.netlify.app/",
    },
    {
      title: "Horoscope Wiki",
      description: (<p> Horoscope <br /> React.js, HTML/SASS, React Hooks, Axios </p>),
      img: horoscope,
      url: "https://github.com/gulfidanozturk/React_Horoscope_App/blob/main/README.md",
    },
  ];
  return (
    <section className="projects-section">
      <Container className="projects-container">
        <Row>
          <Col>
            <h2> Projects </h2>
          </Col>
        </Row>
        <Row className="projects-row">
          {projects.map((project, index) => {
            return (
              <ProductCard {...project} index={index} />
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

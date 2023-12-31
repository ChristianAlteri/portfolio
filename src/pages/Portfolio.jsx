// import "./Pages.css";
import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./Portfolio.css";

function Portfolio(props) {
  console.log(props);

  return (
    <Container fluid>
      <Row>
        {props.projects.map((project) => (
          <Col
            key={project.id}
            xs={12}
            sm={12}
            md={6}
            lg={4}
            >
            <Card className="white-Rounded-Card">
              <a href={project.url}>
                <Card.Img src={project.image} alt='screenshot of the application'  />
              </a>
              <div className="text-container">
                <Card.Title className="card-title">{project.title}</Card.Title>
                <Card.Text className="card-text">{project.about}</Card.Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;

import React, { useEffect } from "react";
import { Container, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const About = () => {
    
    useEffect(() => {
            document.title = "About";
        }, []);
  return (
    <Container className="mt-5">
      <Card>
        <CardBody>
          <CardTitle tag="h1" className="text-center">
            About Us
          </CardTitle>
          <CardText className="text-center mt-3">
            Welcome to Learn Code with Durgesh! We are passionate about providing high-quality
            education in coding and software development. Our goal is to help aspiring developers
            master backend technologies like Spring Boot and frontend technologies like ReactJS.
          </CardText>
          <CardText className="text-center mt-3">
            Join us on this journey to enhance your coding skills and build innovative applications
            with the latest tools and technologies.
          </CardText>
          <div className="text-center">
            <Button color="primary" outline href="https://www.example.com" target="_blank">
              Learn More
            </Button>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};

export default About;

import React, { useEffect } from "react";
import { Container, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const Home = () => {
        useEffect(() => {
                document.title = "Home";
            }, []);

  return (
    <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f8f9fa" }}>
      <Container className="text-center">
        <Card style={{ padding: "2rem", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
          <CardBody>
            <CardTitle tag="h1" className="mb-4">Learn Code with Durgesh</CardTitle>
            <CardText className="mb-4">
              This application is developed by Learncode with Durgesh for learning purposes.
              The backend is powered by Spring Boot, and the frontend is built with ReactJS.
            </CardText>
            <Button color="primary" outline size="lg">Start Using</Button>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default Home;

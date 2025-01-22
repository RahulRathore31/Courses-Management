import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify'; 
import { Container, Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from "reactstrap";

const Contact = () => {
useEffect(() => {
        document.title = "Contact";
    }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handler for form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handler for form reset
  const btnHandle = () => {
    toast.success("Success", {
        position: "bottom-center",
        autoClose: 2000, // Adjust autoClose to a smaller duration
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
      
};
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    console.log(formData);
    handleReset(); // Reset form after submission
  };

  return (
    <Container className="mt-5">
      <Card>
        <CardBody>
          <CardTitle tag="h1" className="text-center">
            Contact Us
          </CardTitle>
          <CardText className="text-center mt-3">
            Have questions or need help? Feel free to reach out to us by filling out the form below!
          </CardText>
          <Form className="mt-4" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                id="message"
                placeholder="Enter your message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              />
            </FormGroup>
            <div className="text-center">
              <Button color="primary" outline className="mt-3" type="submit" onClick={btnHandle}>
                Submit
              </Button>
              <Button color="secondary" outline className="mt-3 ml-3" style={{marginLeft: "10px"}} type="button" onClick={handleReset}>
                Reset
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Contact;

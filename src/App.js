import './App.css';
import { Col, Container, Row } from 'reactstrap';  
import { ToastContainer, toast } from 'react-toastify'; 
import Header from './Component/Header';
import Menu from './Component/Menu';
import Home from './Component/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Course from './Component/Course';
import AllCourses from './Component/AllCourses';
import AddCourse from './Component/AddCourse';
import About from './Component/About';
import Contact from './Component/Contact';


function App() {
    const btnHandle = () => {
        toast.success("Success", { position: "bottom-center" });
    };

    return (    
        <div>
        <Router>
          <ToastContainer />
          <Container>
            <Header />
            <Row>
              <Col md={4}>
                <Menu />
              </Col>
              <Col md={8}>
                <Routes>
                  <Route path="/" Component={Home} exact/>
                  <Route path="/add-courses" Component={AddCourse} exact/>
                  <Route path="/view-courses" Component={AllCourses} exact/>
                  <Route path="/about" Component={About} exact/>
                  <Route path="/contact" Component={Contact} exact/>
                </Routes>
              </Col>
            </Row>
          </Container>
        </Router>
      </div>
    );
}

export default App;
{/*
            <Home></Home>
             <AllCourses />
             <AddCourse />
            
            <h1>This is a Bootstrap component</h1>
            <Button color="warning" outline onClick={btnHandle}>
                First React Button
            </Button> 
            
            const btnHandle = () => {
        toast.success("Success", { position: "bottom-center" });
    };
            */}
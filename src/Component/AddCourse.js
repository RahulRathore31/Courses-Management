import React, { Fragment, useEffect, useState } from "react";
import { data } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
const AddCourse=()=>
{
    useEffect(() => {
            document.title = "Add Courses";
        }, []);

        const [course, setCourse] = useState({});
        // Form Handler 
        const handleForm=(e)=>{
            console.log(course);
            postDataToServer(course);
            e.preventDefault();
        };

        // Creating function to post data on server
        const postDataToServer=(data)=>{
            axios.post(`${base_url}/Courses`,data).then(
                (response)=>{
                    console.log(response);
                    console.log("Success");
                    toast.success("Course Added Successfully")

             },
                (error)=>{
                    console.log(error);
                    console.log("error");
                    toast.error("Erro ! Something went wrong");
                }
            )
        };

        
    return(
    <Fragment>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="userId">CourseId</Label>
                    <Input type="text" placeholder="Enter courseId" name="id" id="userId"
                    onChange={
                        (e)=>{
                            setCourse({...course,id:e.target.value})
                        }
                    }
                    />
                    
                 </FormGroup>
                 <FormGroup>
                    <Label for="title">Course Title</Label>
                    <Input type="text" placeholder="Enter title here" id="title"
                    onChange={(e)=>{
                        setCourse({...course, title: e.target.value})
                    }}
                    />
                 </FormGroup>
                 <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input type="textarea" placeholder="Enter description here" id="description" style={{height : 200}} 
                    onChange={(e)=>{
                        setCourse({...course,description:e.target.value})
                    }}
                    />
                 </FormGroup>
                 <Container className="text-center">
                    <Button type="submit" color="success" outline >Add Course</Button>
                    <Button type="reset" color="warning" outline style={{marginLeft: "10px"}}
                    >Clear</Button>
                 </Container>
            </Form>

    </Fragment>
    );
};
export default AddCourse;
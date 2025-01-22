import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses =()=>
{
 useEffect(() => {
            document.title = "All Courses";
        }, []);

    const [courses, setCourses] = useState([]);
    // Function to update course in UI
    const updateCourses = (courseId, updatedCourse) => {
        setCourses(
          courses.map((course) =>
            course.id === courseId ? { ...course, ...updatedCourse } : course
          )
        );
      };
   
    // Function to call the server and fetch courses
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/Courses`)
    .then((response) => {
        // For success
        console.log(response.data);
        toast.success("Courses had been loaded.",
            {
                position:"bottom-center"
            });
        setCourses(response.data);
      },
      (error) => {
        // For error
        console.error(error);
        toast.error("Something went wrong.",{
            position:"bottom-center"});
      });
  };
  

  // Fetch courses when the component loads
  useEffect(() => {
    getAllCoursesFromServer(); 
}, []);

   

    return (
            <div className="text-center">
                <h1 >List of All Courses as follows</h1>
                <p>List of Courses are as follows</p>
                {courses.length>0 ? 
                courses.map((item) => 
                <Course key={item.id} course={item} update={updateCourses} />)
                    : "No Courses"
                }

            </div>
    );
}
export default Allcourses;



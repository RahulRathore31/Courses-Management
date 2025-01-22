import axios from "axios";
import React, { useState } from "react";
import base_url from "../api/bootapi";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Container,
  Button,
} from "reactstrap";
import { toast } from "react-toastify";

const Course = ({ course, update }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedCourse, setUpdatedCourse] = useState(course);

  const deleteCourse = (id) => {
    axios
      .delete(`${base_url}/Courses/${id}`)
      .then((response) => {
        toast.success("Course deleted successfully!", { position: "bottom-center" });
        update(id, null);
      })
      .catch((error) => {
        toast.error("Failed to delete course. Server error.", { position: "bottom-center" });
      });
  };

  const handleUpdate = () => {
    axios
      .put(`${base_url}/Courses/${updatedCourse.id}`, updatedCourse)
      .then((response) => {
        toast.success("Course updated successfully!", { position: "bottom-center" });
        setIsEditing(false);
        update(updatedCourse.id, updatedCourse);
      })
      .catch((error) => {
        toast.error("Failed to update course.", { position: "bottom-center" });
      });
  };

  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle>
          <strong>{isEditing ? "Edit Course" : updatedCourse.title}</strong>
        </CardSubtitle>
        {isEditing ? (
          <>
            <input
              type="text"
              value={updatedCourse.title}
              onChange={(e) => setUpdatedCourse({ ...updatedCourse, title: e.target.value })}
            />
            <textarea
              value={updatedCourse.description}
              onChange={(e) => setUpdatedCourse({ ...updatedCourse, description: e.target.value })}
            />
          </>
        ) : (
          <CardText>{updatedCourse.description}</CardText>
        )}
        <Container className="text-center">
          {isEditing ? (
            <Button color="success" onClick={handleUpdate}>
              Save Changes
            </Button>
          ) : (
            <Button color="warning" onClick={() => setIsEditing(true)}>
              Update
            </Button>
          )}
          <Button
            color="danger"
            style={{ marginLeft: "10px" }}
            onClick={() => deleteCourse(course.id)}
          >
            Delete
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;

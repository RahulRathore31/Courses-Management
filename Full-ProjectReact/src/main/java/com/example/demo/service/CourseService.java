package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Course;

public interface CourseService {
 public List<Course> getAllCources();
 public Course getCourse(long id);
 public Course saveCourse(Course course);
 public Course updateCourse(Course course);
 public String deleteCourse(long id);
 
}

package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Course;
import com.example.demo.service.CourseServiceImpl;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {
	
	@Autowired
	CourseServiceImpl courseServiceImpl;
	@GetMapping("/Courses")
	public List<Course> getAllCourses()
	{
		return this.courseServiceImpl.getAllCources();
		
	}
	@GetMapping("/Courses/{id}")
	public Course getCourse(@PathVariable long id) {
		return this.courseServiceImpl.getCourse(id);
		
	}
	@PostMapping("/Courses")
	public Course saveCourse(@RequestBody Course cource) {
		return this.courseServiceImpl.saveCourse(cource);
		
	}
	@PutMapping("/Courses/{id}")
	public Course updateCourse(@RequestBody Course cource) {
		return this.courseServiceImpl.updateCourse(cource);
	}
	@DeleteMapping("/Courses/{id}")
	public String deleteCourse(@PathVariable long id) {
		return this.courseServiceImpl.deleteCourse(id);
	}
}

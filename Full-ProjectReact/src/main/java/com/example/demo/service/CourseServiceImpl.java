package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Course;
import com.example.demo.repository.CourseRepository;
@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	CourseRepository courseRepository;
	
	@Override
	public List<Course> getAllCources() {
		 
		return courseRepository.findAll();
	}

	@Override
	public Course getCourse(long id) {
		 
		return courseRepository.findById(id).orElse(null);
	}

	@Override
	public Course saveCourse(Course course) {
		 
		return courseRepository.save(course);
	}

	@Override
	public Course updateCourse(Course course) {
		 
		return courseRepository.save(course);
	}

	@Override
	public String deleteCourse(long id) {
		 if(courseRepository.existsById(id)) {
			 courseRepository.deleteById(id);
			 return "Id deleted";
		 }
		return "Id not found";
	}

}

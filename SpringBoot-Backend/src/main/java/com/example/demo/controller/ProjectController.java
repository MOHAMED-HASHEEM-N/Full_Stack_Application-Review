package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Project;
import com.example.demo.repository.ProjectRepository;

@RequestMapping("/api/v1")
@CrossOrigin("*")

@RestController
public class ProjectController {
	
	@Autowired
	private ProjectRepository eRepo;
	
	@GetMapping("/movies")
	public List<Project> getAllEmployees() {
		return eRepo.findAll();
	}
	
	@GetMapping("/movies/{id}")
	public Project getEmployeeById(@PathVariable Integer id) {
		return eRepo.findById(id).get();
	}
	
	@PostMapping("/movies")
	public Project saveEmployeeDetails(@RequestBody Project movie) {
		return eRepo.save(movie);
	}
	
	@PutMapping("/movies")
	public Project updateEmployee(@RequestBody Project movie) {
		return eRepo.save(movie);
	}
	
	@DeleteMapping("/movies/{id}")
	public ResponseEntity<HttpStatus> deleteEmployeeById(@PathVariable Integer id) {
		eRepo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}


}
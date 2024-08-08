package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Trainer;
import com.example.demo.service.TrainerService;

@RestController
@RequestMapping("/api/auth/login/emp")
public class TrainerController {

     private static final Logger logger = LoggerFactory.getLogger(TrainerController.class);

    @Autowired
    private TrainerService employeeService;

    @PostMapping
    public Trainer createEmployee(@RequestBody Trainer employee) {
        logger.info("Creating employee: {}", employee);
        return employeeService.saveEmployee(employee);
    }

    @GetMapping
    public List<Trainer> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Trainer> getEmployeeById(@PathVariable Long id) {
        Optional<Trainer> employee = employeeService.getEmployeeById(id);
        return employee.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // @PostMapping
    // public Employee createEmployee(@RequestBody Employee employee) {
    //     return employeeService.saveEmployee(employee);  
    // }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
    }
}

package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Trainer;
import com.example.demo.repository.TrainerRepository;

@Service
public class TrainerService {
    @Autowired
    private TrainerRepository employeeRepository;

    public List<Trainer> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Optional<Trainer> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    public Trainer saveEmployee(Trainer employee) {
        return employeeRepository.save(employee);
    }

    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}

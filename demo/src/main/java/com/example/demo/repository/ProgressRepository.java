package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Progress;

@Repository
public interface ProgressRepository extends JpaRepository<Progress, Long> {
    // Additional query methods can be defined here if needed
}

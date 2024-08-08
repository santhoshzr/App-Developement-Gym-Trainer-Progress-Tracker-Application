package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Progress;
import com.example.demo.service.ProgressService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/progresses")
public class ProgressController {
    @Autowired
    private ProgressService progressService;

    @GetMapping
    public List<Progress> getAllProgresses() {
        return progressService.getAllProgresses();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Progress> getProgressById(@PathVariable Long id) {
        Optional<Progress> progress = progressService.getProgressById(id);
        if (progress.isPresent()) {
            return ResponseEntity.ok(progress.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Progress createProgress(@RequestBody Progress progress) {
        return progressService.createProgress(progress);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Progress> updateProgress(@PathVariable Long id, @RequestBody Progress progressDetails) {
        try {
            Progress updatedProgress = progressService.updateProgress(id, progressDetails);
            return ResponseEntity.ok(updatedProgress);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProgress(@PathVariable Long id) {
        try {
            progressService.deleteProgress(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}

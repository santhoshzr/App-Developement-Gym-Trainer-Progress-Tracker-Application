package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Progress;
import com.example.demo.repository.ProgressRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProgressService {
    @Autowired
    private ProgressRepository progressRepository;

    public List<Progress> getAllProgresses() {
        return progressRepository.findAll();
    }

    public Optional<Progress> getProgressById(Long id) {
        return progressRepository.findById(id);
    }

    public Progress createProgress(Progress progress) {
        return progressRepository.save(progress);
    }

    public Progress updateProgress(Long id, Progress progressDetails) {
        Progress progress = progressRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Progress not found"));
        progress.setExercise(progressDetails.getExercise());
        progress.setSet(progressDetails.getSet());
        progress.setRep(progressDetails.getRep());
        progress.setWeight(progressDetails.getWeight());
        progress.setHeight(progressDetails.getHeight());
        return progressRepository.save(progress);
    }

    public void deleteProgress(Long id) {
        Progress progress = progressRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Progress not found"));
        progressRepository.delete(progress);
    }
}

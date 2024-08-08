package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Schedule;
import com.example.demo.repository.ScheduleRepository;

public interface ScheduleService {
    List<Schedule> getAllSchedules();
    Schedule getScheduleById(Long id);
    Schedule saveSchedule(Schedule schedule);
    Schedule updateSchedule(Long id, Schedule scheduleDetails);
    void deleteSchedule(Long id);
}

@Service
class ScheduleServiceImpl implements ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Override
    public List<Schedule> getAllSchedules() {
        return scheduleRepository.findAll();
    }

    @Override
    public Schedule getScheduleById(Long id) {
        Optional<Schedule> optionalSchedule = scheduleRepository.findById(id);
        if (optionalSchedule.isPresent()) {
            return optionalSchedule.get();
        } else {
            throw new RuntimeException("Schedule not found with id " + id);
        }
    }

    @Override
    public Schedule saveSchedule(Schedule schedule) {
        return scheduleRepository.save(schedule);
    }

    @Override
    public Schedule updateSchedule(Long id, Schedule scheduleDetails) {
        Schedule schedule = getScheduleById(id);
        schedule.setDay(scheduleDetails.getDay());
        schedule.setShift(scheduleDetails.getShift());
        schedule.setTrainer(scheduleDetails.getTrainer());
        return scheduleRepository.save(schedule);
    }

    @Override
    public void deleteSchedule(Long id) {
        Schedule schedule = getScheduleById(id);
        if (schedule != null) {
            scheduleRepository.delete(schedule);
        } else {
            throw new RuntimeException("Schedule not found with id " + id);
        }
    }
}

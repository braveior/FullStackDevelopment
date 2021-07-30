package com.braveior.api.service;

import com.braveior.api.model.TaskItem;
import com.braveior.api.repository.TaskRepository;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;

    public List<TaskItem> readTasks() {
        return taskRepository.findAll();
    }
}

package com.braveior.api.controller;

import com.braveior.api.model.TaskItem;
import com.braveior.api.service.TaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RestController
@RequestMapping(value = "/api/task")
@RequiredArgsConstructor
public class TaskController {
    private final TaskService taskService;

    @GetMapping("/tasks")
    public ResponseEntity<List<TaskItem>> readTasks() {
            return ResponseEntity.ok(taskService.readTasks());

    }
}

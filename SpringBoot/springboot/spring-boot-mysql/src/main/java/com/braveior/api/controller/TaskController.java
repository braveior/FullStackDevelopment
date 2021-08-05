package com.braveior.api.controller;
import com.braveior.api.model.TaskItem;
import com.braveior.api.repository.TaskRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import lombok.RequiredArgsConstructor;
import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class TaskController {
    private final TaskRepository taskRepository;

    @RequestMapping(value = "/api/task/tasks", method = RequestMethod.GET)
    public ResponseEntity<List<TaskItem>> readTasks() {
           // return ResponseEntity.ok(taskService.readTasks());
        return ResponseEntity.ok(taskRepository.findAll());

    }
    @RequestMapping(value = "/api/task/add", method = RequestMethod.POST)
    public void addTask(@RequestBody TaskItem taskItem) {
        taskRepository.save(taskItem);

    }
}

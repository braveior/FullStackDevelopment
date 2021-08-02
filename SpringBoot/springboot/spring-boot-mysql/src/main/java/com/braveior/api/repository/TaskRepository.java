package com.braveior.api.repository;
import com.braveior.api.model.TaskItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<TaskItem, Integer> {

}

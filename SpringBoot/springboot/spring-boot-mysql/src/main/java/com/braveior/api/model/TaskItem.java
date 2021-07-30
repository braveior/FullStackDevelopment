package com.braveior.api.model;

import java.util.Set;
import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "taskitem")
public class TaskItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int TaskItemId;
    private String TaskName;
}

package com.vamshi.inutask.controller;

import com.vamshi.inutask.dto.ToDo_AppDTO;
import com.vamshi.inutask.exceptions.NoIdfound;
import com.vamshi.inutask.service.ToDo_Service;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todo")
public class ToDo_Controller {

    private final ToDo_Service toDoService;

    public ToDo_Controller(ToDo_Service toDoService) {
        this.toDoService = toDoService;
    }

    @PostMapping("/create")
    public ResponseEntity<ToDo_AppDTO> createTask(@RequestBody ToDo_AppDTO toDoAppDTO) {
        return ResponseEntity.ok(toDoService.myPosts(toDoAppDTO));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ToDo_AppDTO> getTaskById(@PathVariable String id) {
        try {
            return ResponseEntity.ok(toDoService.findById(id));
        } catch (NoIdfound e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<ToDo_AppDTO>> getAllTasks() {
        return ResponseEntity.ok(toDoService.getAllTasks());
    }

    @GetMapping("/status/{id}")
    public ResponseEntity<ToDo_AppDTO> getTaskStatus(@PathVariable String id) {
        try {
            return ResponseEntity.ok(toDoService.tskStatus(id));
        } catch (NoIdfound e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteTask(@PathVariable String id) {
        try {
            return ResponseEntity.ok(toDoService.deleteTask(id));
        } catch (NoIdfound e) {
            return ResponseEntity.notFound().build();
        }
    }
}

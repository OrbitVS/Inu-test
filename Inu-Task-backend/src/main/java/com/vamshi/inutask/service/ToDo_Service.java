package com.vamshi.inutask.service;

import com.vamshi.inutask.dto.ToDo_AppDTO;
import com.vamshi.inutask.exceptions.NoIdfound;
import com.vamshi.inutask.mapper.ToDo_Mapper;
import com.vamshi.inutask.model.Status;
import com.vamshi.inutask.model.ToDo_App;
import com.vamshi.inutask.model.ToDoRepo;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ToDo_Service {

    private final ToDoRepo toDoRepo;
    private final ToDo_Mapper toDoMapper;

    public ToDo_Service(ToDoRepo toDoRepo, ToDo_Mapper toDoMapper) {
        this.toDoRepo = toDoRepo;
        this.toDoMapper = toDoMapper;
    }

    public ToDo_AppDTO myPosts(ToDo_AppDTO toDoAppDTO) {
        ToDo_App td = toDoMapper.toEntity(toDoAppDTO); // Use Mapper
        td.setDateTime(LocalDateTime.now());
        td = toDoRepo.save(td);
        return toDoMapper.toDto(td);
    }

    public ToDo_AppDTO findById(String id) throws NoIdfound {
        ToDo_App toDoApp = toDoRepo.findById(id)
                .orElseThrow(() -> new NoIdfound("Task not found for ID: " + id));
        return toDoMapper.toDto(toDoApp);
    }

    public List<ToDo_AppDTO> getAllTasks() {
        List<ToDo_App> tasks = toDoRepo.findAll();
        return tasks.stream()
                .map(toDoMapper::toDto) // Convert to DTO
                .collect(Collectors.toList());
    }

    public ToDo_AppDTO tskStatus(String taskId) throws NoIdfound {
        ToDo_App toDoApp = toDoRepo.findById(taskId)
                .orElseThrow(() -> new NoIdfound("Task not found for ID: " + taskId));

        ToDo_AppDTO toDoAppDTO = toDoMapper.toDto(toDoApp);

        if (toDoAppDTO.getStatus() == Status.completed) {
            return toDoAppDTO;
        }

        toDoAppDTO.setStatus(Status.pending);
        return toDoAppDTO;
    }

    public String deleteTask(String id) throws NoIdfound {
        ToDo_App toDoApp = toDoRepo.findById(id)
                .orElseThrow(() -> new NoIdfound("Task not found for ID: " + id));

        toDoRepo.delete(toDoApp);
        return "Task with ID: " + id + " has been deleted successfully.";
    }
}

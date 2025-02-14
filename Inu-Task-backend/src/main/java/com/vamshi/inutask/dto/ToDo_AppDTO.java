package com.vamshi.inutask.dto;

import com.vamshi.inutask.model.Status;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jdk.jfr.Timestamp;

import java.time.LocalDateTime;

public class ToDo_AppDTO {

    @NotBlank
     @Size(min = 2, max = 15)
    private String title;
    @NotBlank
            @Size(min = 2, max = 50)
    private String description;
    @Timestamp
    private LocalDateTime dateTime;
    private Status status;

    public ToDo_AppDTO() {
    }

    public ToDo_AppDTO(String title, String description, LocalDateTime dateTime,Status status) {
        this.title = title;
        this.description = description;
        this.dateTime = dateTime;
        this.status = status;
    }

    public String getId() {
        return title;
    }

    public void setId(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}

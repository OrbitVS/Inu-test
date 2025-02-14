package com.vamshi.inutask.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDateTime;
@Entity
@Table(name = "todo")
public class ToDo_App {
    @Id
  private  String title;
  private  String description;
   private LocalDateTime dateTime;
   private Status status;


    public ToDo_App() {
    }

    public ToDo_App(String title, String description, LocalDateTime dateTime,Status status) {
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

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String toString() {
        return "ToDo_App{" +
                "id='" +title + '\'' +
                ", description='" + description + '\'' +
                ", dateTime=" + dateTime +
                ", status=" + status +
                '}';
    }
}
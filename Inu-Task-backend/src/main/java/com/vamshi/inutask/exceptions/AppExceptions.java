package com.vamshi.inutask.exceptions;

import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class AppExceptions {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> exceptions(MethodArgumentNotValidException ex) {
        Map<String, String> maps = new HashMap<>();

        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            maps.put(fieldName, errorMessage);
        });

        return maps;

    }
}

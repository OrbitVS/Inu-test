package com.vamshi.inutask.mapper;

import com.vamshi.inutask.dto.ToDo_AppDTO;
import com.vamshi.inutask.model.ToDo_App;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class ToDo_Mapper {
    private final ModelMapper modelMapperInj;

    public ToDo_Mapper(ModelMapper modelMapperInj) {
        this.modelMapperInj = modelMapperInj;
    }

    public ToDo_AppDTO toDto(ToDo_App toDoApp) {
        return modelMapperInj.map(toDoApp, ToDo_AppDTO.class);
    }

    public ToDo_App toEntity(ToDo_AppDTO toDoAppDTO) {
        return modelMapperInj.map(toDoAppDTO, ToDo_App.class);
    }
}

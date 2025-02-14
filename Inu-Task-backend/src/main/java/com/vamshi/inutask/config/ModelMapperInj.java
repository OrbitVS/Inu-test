package com.vamshi.inutask.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperInj {
    @Bean
    public ModelMapper getModelMapper() {
        return new ModelMapper();
    }
}

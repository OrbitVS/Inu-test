package com.vamshi.inutask.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;

import javax.sql.DataSource;

@Configuration
@EnableJpaRepositories(
        basePackages = "com.vamshi.inutask.model",
        entityManagerFactoryRef = "entityManagerFactoryToDo",
        transactionManagerRef = "transactionManagerToDo"
)
public class InuToDoConfig {

    @Primary
    @Bean(name = "toDoDataSource")
    @ConfigurationProperties(prefix = "spring.todo-app.datasource")
    public DataSource toDoDataSource() {
        return DataSourceBuilder.create().build();
    }

    @Primary
    @Bean(name = "entityManagerFactoryToDo")
    public LocalContainerEntityManagerFactoryBean entityManagerFactoryToDo(
            EntityManagerFactoryBuilder builder,
            @Qualifier("toDoDataSource") DataSource dataSource) {
        return builder
                .dataSource(dataSource)
                .packages("com.vamshi.inutask.model")
                .persistenceUnit("ToDo_App")
                .build();
    }

    @Primary
    @Bean(name = "transactionManagerToDo")
    public PlatformTransactionManager transactionManagerToDo(
            @Qualifier("entityManagerFactoryToDo") LocalContainerEntityManagerFactoryBean entityManagerFactory) {
        return new JpaTransactionManager(entityManagerFactory.getObject());
    }
}

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
        basePackages = "com.vamshi.inutask.loginmodel",
        entityManagerFactoryRef = "entityMangerFactoryLogin",
        transactionManagerRef = "transactionManagerLogin"

)
public class Inu_Login {

        @Primary
        @Bean(name = "LoginDataSource")
        @ConfigurationProperties(prefix = "spring.loginval.datasource")
        public DataSource loginDataSource() {

            return DataSourceBuilder.create().build();
        }

        @Primary
        @Bean(name = "entityManagerFactoryLogin")
        public LocalContainerEntityManagerFactoryBean entityManagerFactoryLogin(
                EntityManagerFactoryBuilder builder,
                @Qualifier("LoginDataSource") DataSource dataSource) {
            return builder
                    .dataSource(dataSource)
                    .packages("com.vamshi.inutask.loginmodel") // Package containing Wallet entity
                    .persistenceUnit("LoginVal")
                    .build();
        }

        @Primary
        @Bean(name = "transactionManagerLogin")
        public PlatformTransactionManager transactionManagerLogin(
                @Qualifier("entityManagerFactoryLogin") LocalContainerEntityManagerFactoryBean entityManagerFactory) {
            return new JpaTransactionManager(entityManagerFactory.getObject());
        }
    }



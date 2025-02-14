package com.vamshi.inutask.loginmodel;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepo extends JpaRepository<LoginVal,String> {
    LoginVal findByUsername(String username);

}

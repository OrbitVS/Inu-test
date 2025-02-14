package com.vamshi.inutask.service;

import com.vamshi.inutask.loginmodel.LoginRepo;
import com.vamshi.inutask.loginmodel.LoginVal;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;

@Service
public class LoginService implements UserDetailsService {
    private LoginRepo loginRepo;

    public LoginService(LoginRepo loginRepo) {
        this.loginRepo = loginRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        LoginVal loginVal = loginRepo.findByUsername(username);
        if (loginVal == null) {
            throw new UsernameNotFoundException(username);
        }
        return new org.springframework.security.core.userdetails.User(
                loginVal.getUsername(), loginVal.getPassword(),
                getAuthorities(String.valueOf(loginVal.getRole())));


    }

    public Collection<? extends GrantedAuthority> getAuthorities(String role) {
        if (!role.startsWith("ROLE_")) {
            role = "ROLE_" + role;
        }
        return Collections.singletonList(new SimpleGrantedAuthority(role));
    }
}

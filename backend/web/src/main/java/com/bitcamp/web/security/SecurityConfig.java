package com.bitcamp.web.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;

import lombok.extern.java.Log;

/**
 * SecurityConfig
 */
@Log
@EnableWebMvcSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        log.info("Security Config ....");
        http
            .authorizeRequests()
                .antMatchers("/customer/**").permitAll()
                .antMatchers("/employee/**").hasRole("MANAGER");
        http.formLogin();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception{
        log.info("build Auth global.......");

        auth.inMemoryAuthentication().
            withUser("manager").
            password("1"). //패스워드는 암호화 적용 안함
            roles("MANAGER");
    }
}
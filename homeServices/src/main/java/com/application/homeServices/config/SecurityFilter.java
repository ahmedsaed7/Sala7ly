package com.application.homeServices.config;


import com.application.homeServices.dto.Role;
import com.application.homeServices.jwt.JwtAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityFilter {


    @Autowired
    private AuthenticationProvider authenticationProvider;

    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrfConfig -> csrfConfig.disable())
                .sessionManagement(sessionMangConfig -> sessionMangConfig.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                .authorizeHttpRequests(authConfig -> {
                    authConfig.requestMatchers(HttpMethod.POST, "/auth/**").permitAll();
                    authConfig.requestMatchers(HttpMethod.GET, "/auth/**").permitAll();
                    authConfig.requestMatchers("/error").permitAll();
                    authConfig.requestMatchers(HttpMethod.GET, "/customer/**").hasAuthority(Role.USER.name());
                    authConfig.requestMatchers(HttpMethod.POST, "/customer/**").hasAuthority(Role.USER.name());
                    authConfig.requestMatchers(HttpMethod.GET, "/worker/**").hasAuthority(Role.WORKER.name());
                    authConfig.requestMatchers(HttpMethod.POST, "/worker/**").hasAuthority(Role.WORKER.name());

                    authConfig.requestMatchers(HttpMethod.GET, "/profile/**").hasAnyAuthority(Role.USER.name(), Role.WORKER.name());
                    authConfig.requestMatchers(HttpMethod.POST, "/profile/**").hasAnyAuthority(Role.USER.name(), Role.WORKER.name());
                    authConfig.anyRequest().denyAll();
                });

        return http.build();
    }
}
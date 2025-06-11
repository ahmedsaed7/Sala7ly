package com.application.homeServices.jwt;
import com.application.homeServices.models.User;
import com.application.homeServices.repository.UserRepo;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Arrays;
import java.util.Optional;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtService;

    @Autowired
    private UserRepo userRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            // Extract JWT from the cookies
            String jwt = jwtService.extractJwtFromCookie(request);

            // If JWT is missing, skip the authentication process
            if (jwt == null) {
                filterChain.doFilter(request, response);
                return;
            }

            // Extract username/email from the JWT
            String username = jwtService.extractEmail(jwt);

            // If the username is valid, set the authentication in the security context
            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                Optional<User> user = userRepository.findByEmail(username);

                if (user.isPresent()) {
                    if (!user.get().isActive()) {
                        filterChain.doFilter(request, response);
                    }

                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                            username, null, user.get().getAuthorities()
                    );

                    SecurityContextHolder.getContext().setAuthentication(authToken);
                }
            }

            // Continue with the filter chain
            filterChain.doFilter(request, response);

        } catch (IOException ex) {
            // Handle inactive account exception
            response.setStatus(HttpServletResponse.SC_FORBIDDEN); // 403 Forbidden
//            response.getWriter().write("Account is not active. Please activate your account.");
            response.getWriter().flush();
        }

    }
}
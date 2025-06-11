package com.application.homeServices.service;

import com.application.homeServices.dto.Role;
import com.application.homeServices.dto.UserResponse;
import com.application.homeServices.jwt.JwtUtil;
import com.application.homeServices.models.CustomerProfile;
import com.application.homeServices.models.User;
import com.application.homeServices.repository.CustomerProfileRepo;
import com.application.homeServices.repository.UserRepo;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.Random;

@Service
public class AuthService {

    @Autowired
    private UserRepo userRepository;

    @Autowired
    private CustomerProfileRepo customerProfileRepo;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private JavaMailSender javaMailSender;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public ResponseEntity<?> signup(User user, HttpServletResponse response) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setActive(false);
        User user1=userRepository.save(user);
        System.out.println("eeeeeeeeeeeeeeeeeeee"+user1.getId());
        String token = jwtUtil.generateToken(user.getEmail(), user.getRole().name());
        setJwtCookie(response, token);
        if(user.getRole()==Role.USER) {
            customerProfileRepo.save(new CustomerProfile(user1.getId()," "));
        }
         User user2=userRepository.findByEmail(user.getEmail()).get();
         return new ResponseEntity<>(new UserResponse(user2.getId(),user2.getEmail()), HttpStatus.OK);
    }

    public ResponseEntity<?> login(String email, String password, HttpServletResponse response) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent() && passwordEncoder.matches(password, user.get().getPassword())) {
            String token = jwtUtil.generateToken(email, user.get().getRole().name());
            setJwtCookie(response, token);

            User user1=userRepository.findByEmail(email).get();
            return new ResponseEntity<>(new UserResponse(user1.getId(),user1.getEmail()), HttpStatus.OK);
        }
        throw new RuntimeException("Invalid credentials");
    }

    private void setJwtCookie(HttpServletResponse response, String token) {
        Cookie cookie = new Cookie("jwt_token", token);
        cookie.setHttpOnly(true);
        cookie.setSecure(true); // Set this to true in production when using HTTPS
        cookie.setPath("/");
        cookie.setMaxAge(24 * 60 * 60); // 1 day expiration
        response.addCookie(cookie);
    }

    public void sendActiveCode(String email){
        Random random=new Random();
        User user=userRepository.findByEmail(email).get();
        int code =random.nextInt(100000);
        user.setActiveCode(code);
        userRepository.save(user);
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("nassarabdelhamed556@gmail.com");
        message.setTo(email);
        message.setSubject("Active Code");
        message.setText(" your Active Code : "+code);
        javaMailSender.send(message);
    }

    public void active(Integer code, String email) {
        Optional<User> userOptional = userRepository.findByEmail(email);

        // Check if user is present
        if (userOptional.isEmpty()) {
            throw new NoSuchElementException("No user found with the provided email: " + email);
        }

        User user = userOptional.get();

        // Compare activation code
        if (code.equals(user.getActiveCode())) {
            user.setActive(true);
            userRepository.save(user);
        } else {
            throw new IllegalArgumentException("Invalid activation code provided for email: " + email);
        }
    }

    public List<User> all() {
        return userRepository.findAll();
    }
}
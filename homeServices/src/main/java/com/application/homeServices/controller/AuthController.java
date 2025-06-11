package com.application.homeServices.controller;

import com.application.homeServices.dto.ActivationRequest;
import com.application.homeServices.models.User;
import com.application.homeServices.service.AuthService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.Map;


@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;


    @Autowired
    private JavaMailSender javaMailSender;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user, HttpServletResponse response) {
        return authService.signup(user, response);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user, HttpServletResponse response) {
        return authService.login(user.getEmail(), user.getPassword(), response);
    }

    @GetMapping("/all")
    public ResponseEntity<?>all() {
        return new ResponseEntity<>(authService.all(), HttpStatus.OK);
    }

    @PostMapping("/mail")
    public ResponseEntity<?> mail(@RequestBody Map<String, String> request) {
        String email = request.get("email").trim(); // Extract email from the JSON object


        try {
            authService.sendActiveCode(email);
            return new ResponseEntity<>("Mail sent", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to send email: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/active")
    public  ResponseEntity<?> active(@RequestBody ActivationRequest req){
        try {
            authService.active(req.getCode(),req.getEmail());
            return new ResponseEntity<>("Activation completed successfully",HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>("Failed to Active Account " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
package com.application.homeServices.controller;


import com.application.homeServices.dto.Customerdata;
import com.application.homeServices.models.CustomerProfile;
import com.application.homeServices.service.CustomerProfileServices;
import com.application.homeServices.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/profile")
public class ProfileController {

    @Autowired
    private ImageService imageService;

    @Autowired
    private CustomerProfileServices customerProfileServices;
    @PostMapping("/image/upload/{userId}")
    public ResponseEntity<String> uploadImage(@PathVariable Long userId, @RequestParam("file") MultipartFile file) {
        try {
            imageService.saveImage(userId, file);
            return ResponseEntity.ok("Image uploaded successfully!");
        } catch (IOException e) {
            return ResponseEntity.badRequest().body("Failed to upload image: " + e.getMessage());
        }
    }
    @GetMapping("/image/{userId}")
    public ResponseEntity<Resource> getImage(@PathVariable Long userId) {
        try {
            Resource resource = imageService.getImage(userId);
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG) // or MediaType.IMAGE_PNG depending on your image type
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"")
                    .body(resource);
        } catch (IOException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
    @GetMapping("/{userId}")
    public ResponseEntity<?> profile(@PathVariable Long userId) {
       Customerdata profile = customerProfileServices.profile(userId);
        return ResponseEntity.ok(profile);
    }
}

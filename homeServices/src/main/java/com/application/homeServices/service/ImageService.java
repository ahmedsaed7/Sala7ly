package com.application.homeServices.service;

import com.application.homeServices.models.User;
import com.application.homeServices.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

@Service
public class ImageService {

    @Autowired
    private UserRepo userRepo;
    private final String UPLOAD_DIR = "src/main/resources/static/images/";

    public void saveImage(Long userId, MultipartFile file) throws IOException {
        Optional<User> userOptional = userRepo.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();

            File directory = new File(UPLOAD_DIR);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            // Save file
            String fileName = userId + "_" + file.getOriginalFilename();
            Path filePath = Paths.get(UPLOAD_DIR + fileName);
            Files.write(filePath, file.getBytes());

            // Update user's image path
            user.setImagePath("/images/" + fileName);
            userRepo.save(user);
        }
    }

    public Resource getImage(Long userId) throws IOException {
        Optional<User> userOptional = userRepo.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            String imagePath = user.getImagePath() != null ? user.getImagePath() : "/images/default.jpg";
            Path path = Paths.get(UPLOAD_DIR).resolve(imagePath.replace("/images/", ""));
            Resource resource = new UrlResource(path.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new IOException("Could not read the file!");
            }
        }
        throw new IOException("User not found!");
    }
}
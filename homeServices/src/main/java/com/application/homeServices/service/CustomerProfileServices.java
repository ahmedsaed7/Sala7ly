package com.application.homeServices.service;


import com.application.homeServices.dto.Customerdata;
import com.application.homeServices.dto.Role;
import com.application.homeServices.models.CustomerProfile;
import com.application.homeServices.models.User;
import com.application.homeServices.repository.CustomerProfileRepo;
import com.application.homeServices.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerProfileServices {

    @Autowired
    CustomerProfileRepo customerProfileRepo;
    @Autowired
    UserRepo userRepo;

    public Customerdata profile(Long id){
        User user= userRepo.findById(id).get();
        if(user.getRole()== Role.USER){
            CustomerProfile customerProfile=customerProfileRepo.findByUserId(id).get();
            return new Customerdata(user.getId(), user.getEmail(), customerProfile.getName());
        }
        else {
            throw new RuntimeException();
        }
    }
}

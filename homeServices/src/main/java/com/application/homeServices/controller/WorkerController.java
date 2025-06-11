package com.application.homeServices.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/worker")
public class WorkerController {

    @GetMapping("/worker-data")
    public String workerData() {
        return "This data is only accessible to Workers.";
    }
}
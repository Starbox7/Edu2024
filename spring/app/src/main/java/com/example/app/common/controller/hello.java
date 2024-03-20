package com.example.app.common.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class hello {
     @GetMapping("/showme")
    public List<String> hello() {
        return Arrays.asList("redux toolkit", "mui material", "jwt", "auth");
    }
}








package com.stage.api.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SPAController {
    @GetMapping(value = "/modele/{path:[^\\.]*}")
    public String forward(){
        return "forward:/";
    }
}

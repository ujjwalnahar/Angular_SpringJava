package net.javaguides.springboot.controller;


import net.javaguides.springboot.model.Greeting;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("*")
@RestController
@RequestMapping("")
public class SpringController {
    @GetMapping("/greeting")
    public Greeting getGreeting(){
        return new Greeting("Hello World from Spring Java");
    }
}

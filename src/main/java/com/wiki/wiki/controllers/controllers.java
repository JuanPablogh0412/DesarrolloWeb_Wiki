package com.wiki.wiki.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/controladores")
public class controllers {
    @GetMapping("requerimientos")
    public ModelAndView requerimientos() {
        return new ModelAndView("requerimientos");
    }
    @GetMapping("contactenos")
    public ModelAndView contactenos() {
        return new ModelAndView("contactenos");
    }
}

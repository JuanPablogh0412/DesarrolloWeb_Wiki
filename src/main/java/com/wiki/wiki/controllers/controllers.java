package com.wiki.wiki.controllers;

import com.wiki.wiki.models.*;
import com.wiki.wiki.repositories.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/controladores")
public class controllers {

    @Autowired
    private ContactoRepository contactoRepository;

    @GetMapping("/")
    public String portada(){
        return "Portada";
    }

    @GetMapping("/Descripcion")
    public String descripcion() {
        return "Descripcion";
    }
    

    @GetMapping("/requerimientos")
    public ModelAndView requerimientos() {
        return new ModelAndView("requerimientos");
    }
    @GetMapping("/arquitectura")
    public ModelAndView arquitectura() {
        return new ModelAndView("arquitectura");
    }

    @GetMapping("/contactenos")
    public ModelAndView contactenos(@RequestParam(required = false) String exito) {
        ModelAndView modelAndView = new ModelAndView("contactenos");
        modelAndView.addObject("contacto", new Contacto());
        if (exito != null) {
            modelAndView.addObject("mensajeExito", "¡Gracias por contactarnos!");
        }
        return modelAndView;
    }

    @PostMapping("/contactenos")
    public ModelAndView procesarContactenos(Contacto contacto) {
        contactoRepository.save(contacto);
        return new ModelAndView("redirect:/controladores/contactenos?exito");
    }
}
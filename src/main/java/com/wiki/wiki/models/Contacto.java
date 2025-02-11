package com.wiki.wiki.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Contacto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombres;
    private String apellidos;
    private String correo;
    private Integer semestre;
    private String descripcion;
}
package com.damianck.pl.xbike.controllers;

import com.damianck.pl.xbike.models.Bike;
import com.damianck.pl.xbike.repositories.BikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/bikes")
public class BikeController {

    @Autowired
    private BikeRepository bikeRepository;

    @RequestMapping
    public List<Bike> getBikes() {
        return bikeRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Bike bike) {
        bikeRepository.save(bike);
    }

    @GetMapping("/{id}")
    public Bike getBike(@PathVariable Long id) {
        return bikeRepository.findById(id).orElse(null);
    }
}

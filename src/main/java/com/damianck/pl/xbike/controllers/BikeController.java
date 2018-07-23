package com.damianck.pl.xbike.controllers;

import com.damianck.pl.xbike.models.Bike;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/bikes")
public class BikeController {

    @RequestMapping
    public List<Bike> getBikes() {
        List<Bike> bikes = new ArrayList<>();
        return bikes;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Bike bike) {

    }

    @GetMapping("/{id")
    public Bike getBike(@PathVariable Long id) {
        return new Bike();
    }
}

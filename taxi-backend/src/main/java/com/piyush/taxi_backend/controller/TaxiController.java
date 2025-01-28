package com.piyush.taxi_backend.controller;

import com.piyush.taxi_backend.model.TaxiFormData;
import com.piyush.taxi_backend.service.TaxiService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TaxiController {

    public TaxiService taxiService;

    public TaxiController(TaxiService taxiService) {
        this.taxiService = taxiService;
    }

    @PostMapping("/create/taxi")
    public TaxiFormData registerTaxi(@RequestBody TaxiFormData taxiFormData) {

        return taxiService.createTaxi(taxiFormData);
    }

    @GetMapping("/all/taxi")
    public Iterable<TaxiFormData> getAllTaxis() {

        return taxiService.getAllTaxi();
    }

    @DeleteMapping("/delete/taxi/{id}")
    public void deleteTaxi(@PathVariable Long id) {
        taxiService.deleteTaxi(id);
    }
}

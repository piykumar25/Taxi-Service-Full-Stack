package com.piyush.taxi_backend.controller;

import com.piyush.taxi_backend.model.TaxiFormData;
import com.piyush.taxi_backend.service.TaxiService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
}

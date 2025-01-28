package com.piyush.taxi_backend.service;

import com.piyush.taxi_backend.model.TaxiFormData;

import java.util.List;

public interface TaxiService {

    TaxiFormData createTaxi(TaxiFormData formData);

    List<TaxiFormData> getAllTaxi();

    void deleteTaxi(Long id);
}

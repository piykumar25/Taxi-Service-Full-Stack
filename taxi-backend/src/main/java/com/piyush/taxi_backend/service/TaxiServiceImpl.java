package com.piyush.taxi_backend.service;

import com.piyush.taxi_backend.model.TaxiFormData;
import com.piyush.taxi_backend.repository.TaxiRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaxiServiceImpl implements TaxiService {

    TaxiRepository taxiRepository;

    public TaxiServiceImpl(TaxiRepository taxiRepository) {
        this.taxiRepository = taxiRepository;
    }

    @Override
    public TaxiFormData createTaxi(TaxiFormData formData) {
        return taxiRepository.save(formData);
    }

    @Override
    public List<TaxiFormData> getAllTaxi() {
        return taxiRepository.findAll();
    }

    @Override
    public void deleteTaxi(Long id) {
        taxiRepository.deleteById(id);
    }
}

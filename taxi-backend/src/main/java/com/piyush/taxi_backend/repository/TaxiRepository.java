package com.piyush.taxi_backend.repository;

import com.piyush.taxi_backend.model.TaxiFormData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaxiRepository extends JpaRepository<TaxiFormData, Long> {
}

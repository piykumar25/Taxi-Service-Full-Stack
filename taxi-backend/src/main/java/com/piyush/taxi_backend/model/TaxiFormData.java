package com.piyush.taxi_backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TaxiFormData {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("id")
    private Long id;

    @JsonProperty("taxiNumber")
    private String taxiNumber;

    @JsonProperty("ownerName")
    private String ownerName;

    @JsonProperty("address")
    private String address;

    @JsonProperty("mobileNumber")
    private String mobileNumber;

    @JsonProperty("brandName")
    private String brandName;
}
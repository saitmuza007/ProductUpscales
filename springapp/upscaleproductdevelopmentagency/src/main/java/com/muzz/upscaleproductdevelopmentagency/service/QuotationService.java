package com.muzz.upscaleproductdevelopmentagency.service;

import com.muzz.upscaleproductdevelopmentagency.model.Quotation;

import java.util.List;

public interface QuotationService {
    Quotation saveQuotation(Quotation quotation);


    void deleteQuotation(Long id);

    List<Quotation> findAllQuotation();
}

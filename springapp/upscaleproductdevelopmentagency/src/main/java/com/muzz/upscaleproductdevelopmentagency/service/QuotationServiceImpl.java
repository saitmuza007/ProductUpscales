package com.muzz.upscaleproductdevelopmentagency.service;

import com.muzz.upscaleproductdevelopmentagency.model.Quotation;
import com.muzz.upscaleproductdevelopmentagency.repository.QuotationReposiory;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class QuotationServiceImpl implements QuotationService {
    private final QuotationReposiory quotationReposiory;

    public QuotationServiceImpl(QuotationReposiory quotationReposiory) {
        this.quotationReposiory = quotationReposiory;
    }
    @Override
    public Quotation saveQuotation(Quotation quotation)
    {
        quotation.setCreateTime(LocalDateTime.now());

        return quotationReposiory.save(quotation);
    }

    @Override
    public void deleteQuotation(Long id)
    {

        quotationReposiory.deleteById(id);
    }

    @Override
    public List<Quotation> findAllQuotation()
    {

        return quotationReposiory.findAll();
    }
}

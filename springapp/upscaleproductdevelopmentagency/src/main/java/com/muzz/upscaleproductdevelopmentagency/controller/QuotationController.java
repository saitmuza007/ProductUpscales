package com.muzz.upscaleproductdevelopmentagency.controller;
import com.muzz.upscaleproductdevelopmentagency.model.Quotation;
import com.muzz.upscaleproductdevelopmentagency.service.QuotationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/quotation")//pre-path
public class QuotationController
{
    @Autowired
    private QuotationService quotationService;

    @PostMapping //api/quotation
    public ResponseEntity<?> saveQuotation(@RequestBody Quotation quotation)
    {
        return new ResponseEntity<>(quotationService.saveQuotation(quotation), HttpStatus.CREATED);
    }


    @GetMapping
    public ResponseEntity<?> getAllQuotation()
    {
        return new ResponseEntity<>(quotationService.findAllQuotation(), HttpStatus.OK);
    }

}

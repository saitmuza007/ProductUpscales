package com.muzz.upscaleproductdevelopmentagency.service;

import com.muzz.upscaleproductdevelopmentagency.model.Product;


import java.util.List;


public interface ProductService
{
    Product saveProduct(Product product);

    void deleteProduct(Long id);

    List<Product> findAllProducts();
}

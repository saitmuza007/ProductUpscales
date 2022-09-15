package com.muzz.upscaleproductdevelopmentagency.service;

import com.muzz.upscaleproductdevelopmentagency.model.Purchase;
import com.muzz.upscaleproductdevelopmentagency.repository.projection.PurchaseItem;

import java.util.List;


public interface PurchaseService
{
    Purchase savePurchase(Purchase purchase);

    List<PurchaseItem> findPurchaseItemsOfUser(Long userId);

}

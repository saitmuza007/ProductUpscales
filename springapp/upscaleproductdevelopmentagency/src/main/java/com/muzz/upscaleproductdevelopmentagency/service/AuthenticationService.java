package com.muzz.upscaleproductdevelopmentagency.service;

import com.muzz.upscaleproductdevelopmentagency.model.User;



public interface AuthenticationService
{
    User signInAndReturnJWT(User signInRequest);
}

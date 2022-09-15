package com.muzz.upscaleproductdevelopmentagency.controller;

import com.muzz.upscaleproductdevelopmentagency.model.Role;
import com.muzz.upscaleproductdevelopmentagency.security.UserPrinciple;
import com.muzz.upscaleproductdevelopmentagency.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController

@RequestMapping("api/user")//pre-path
public class UserController
{
    @Autowired
    private UserService userService;


    @PutMapping("change/{role}")//api/user/change/{role}
    public ResponseEntity<?> changeRole(@AuthenticationPrincipal UserPrinciple userPrinciple, @PathVariable Role role)
    {
        userService.changeRole(role, userPrinciple.getUsername());

        return ResponseEntity.ok(true);
    }

}

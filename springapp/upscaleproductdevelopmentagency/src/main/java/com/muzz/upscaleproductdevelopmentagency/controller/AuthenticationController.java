package com.muzz.upscaleproductdevelopmentagency.controller;

import com.muzz.upscaleproductdevelopmentagency.model.User;
import com.muzz.upscaleproductdevelopmentagency.repository.UserRepository;
import com.muzz.upscaleproductdevelopmentagency.service.AuthenticationService;
import com.muzz.upscaleproductdevelopmentagency.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/authentication")//pre-path
public class AuthenticationController
{
    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("sign-up")//api/authentication/sign-up
    public ResponseEntity<?> signUp(@RequestBody User user)
    {
        if (userService.findByUsername(user.getUsername()).isPresent())
        {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);
    }

    @PostMapping("sign-in")//api/authentication/sign-in
    public ResponseEntity<?> signIn(@RequestBody User user)
    {
        return new ResponseEntity<>(authenticationService.signInAndReturnJWT(user), HttpStatus.OK);
    }

    @GetMapping //api/authentication
    public ResponseEntity<?> getAllUsers()
    {

        return new ResponseEntity<>(userService.findAllUsers(), HttpStatus.OK);
    }

    @DeleteMapping("{id}") //api/product/{productId}
    public ResponseEntity<?> deleteUser(@PathVariable Long id)
    {
        userService.deleteUser(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(()->new RuntimeException("Expired"));
        return  ResponseEntity.ok(user);
    }
}

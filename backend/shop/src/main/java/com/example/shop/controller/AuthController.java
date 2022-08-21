package com.example.shop.controller;

import com.example.shop.dto.UserDto;
import com.example.shop.security.JwtTokenMachine;
import com.example.shop.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private AuthenticationManager authenticationManager;
    private JwtTokenMachine jwtTokenMachine;
    private AuthService authService;
    private PasswordEncoder passwordEncoder;


    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserDto userDto) {

        if(authService.findByUserName(userDto.getUserName()) != null) {
            return new ResponseEntity<>("Username already in use", HttpStatus.BAD_REQUEST);
        }
        if(authService.findByEmail(userDto.getEmail()) != null) {
            return new ResponseEntity<>("Email already in use", HttpStatus.BAD_REQUEST);
        }
        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        authService.register(userDto);
        return new ResponseEntity<>("User successfully created", HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserDto userDto){
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDto.getUserName(), userDto.getPassword());
        Authentication auth;
        try {
            auth = authenticationManager.authenticate(authToken);
        }catch (Exception e){
            return new ResponseEntity<>("Username or Password is wrong", HttpStatus.UNAUTHORIZED);
        }
        SecurityContextHolder.getContext().setAuthentication(auth);
        String jwtToken = jwtTokenMachine.generateJwtToken(auth);
        return new ResponseEntity<>(jwtToken, HttpStatus.OK);
    }

}

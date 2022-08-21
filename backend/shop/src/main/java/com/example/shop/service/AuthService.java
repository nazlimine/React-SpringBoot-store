package com.example.shop.service;

import com.example.shop.dto.UserDto;
import com.example.shop.model.User;
import com.example.shop.repository.UserRepository;
import com.example.shop.security.JwtAuthDetails;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthService implements UserDetailsService {
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUserName(username);
        return JwtAuthDetails.create(modelMapper.map(user, UserDto.class));
    }

    public UserDto register(UserDto userDto){
        User user = modelMapper.map(userDto, User.class);
        return modelMapper.map(userRepository.insert(user), UserDto.class);
    }

    public User findByUserName(String userName){
        return userRepository.findByUserName(userName);
    }

    public User findByEmail(String email){
        return userRepository.findByEmail(email);
    }
}

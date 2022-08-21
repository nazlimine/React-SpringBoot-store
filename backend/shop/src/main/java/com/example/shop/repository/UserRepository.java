package com.example.shop.repository;

import com.example.shop.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    User findByUserName(String userName);
    User findByEmail(String email);
}

package com.example.shop.repository;

import com.example.shop.model.Category;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;


public interface CategoryRepository extends MongoRepository<Category, String> {

    Optional<Category> findCategoryByName(String name);
}

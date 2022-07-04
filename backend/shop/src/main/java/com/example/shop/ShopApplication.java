package com.example.shop;

import com.example.shop.model.Category;
import com.example.shop.repository.CategoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ShopApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShopApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(CategoryRepository categoryRepository){
		return  args -> {
			Category category = new Category("Women");
			categoryRepository.insert(category);
		};
	}

}

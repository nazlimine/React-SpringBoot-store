package com.example.shop.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Item {
    @Id
    public String id;
    public String name;
    public Long price;
    public String photo;
    public Integer stock;

    public Item() {
    }

    public Item(String id, String name, Long price, String photo, Integer stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.photo = photo;
        this.stock = stock;
    }

    public Item(String name, Long price, String photo, Integer stock) {
        this.name = name;
        this.price = price;
        this.photo = photo;
        this.stock = stock;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }
}

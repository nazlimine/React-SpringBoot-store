package com.example.shop.model;

import com.example.shop.model.Item;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Data
@Document
public class SubCategory {
    @Id
    private String id;
    private String name;
    private List<Item> itemList;

    public SubCategory() {
    }

    public SubCategory(String id, String name, List<Item> itemList) {
        this.id = id;
        this.name = name;
        this.itemList = itemList;
    }

    public SubCategory(String name, List<Item> itemList) {
        this.name = name;
        this.itemList = itemList;
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

    public List<Item> getItemList() {
        return itemList;
    }

    public void setItemList(List<Item> itemList) {
        this.itemList = itemList;
    }
}

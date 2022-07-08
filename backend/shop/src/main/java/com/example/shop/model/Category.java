package com.example.shop.model;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Data
@Document(collection = "categories")
public class Category {
    @Id
    private String id;
    private String name;
    private String categoryId;
    private List<Integer> subcategoryIds;

    public Category(){}
    public Category(String id, String name,String categoryId,List<Integer> subcategoryIds) {
        this.id = id;
        this.name = name;
        this.categoryId= categoryId;
        this.subcategoryIds= subcategoryIds;
    }

    public Category(String name) {
        this.name = name;
    }

    public void setId(String id) {
        this.id = id;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getId() {
        return id;
    }
    public String getName() {
        return name;
    }
}

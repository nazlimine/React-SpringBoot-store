package com.example.shop.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;

@Data
@NoArgsConstructor
public class User {
    @Id
    private String id;
    @NonNull
    @Indexed(unique = true)
    private String userName;
    @NonNull
    @Indexed(unique = true)
    private String email;
    @NonNull
    private String password;

}

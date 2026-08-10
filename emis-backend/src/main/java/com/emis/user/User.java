package com.emis.user;

import com.emis.common.BaseEntity;

import jakarta.persistence.AttributeOverride;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "users")
@NoArgsConstructor
@AttributeOverride(name = "Id" , column = @Column(name = "user_id"))
public class User extends BaseEntity {

    @Column(name = "email" , unique = true , length = 60 , nullable = false)
    private String email;

    @Column(name = "password", length = 100 , nullable = false)
    private String password;

    @Column(name = "mobile_no", length = 10 , unique = true)
    private String mobileNo;

    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private UserRole role;
}

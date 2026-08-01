package com.emis.accountant;

import com.emis.common.BaseEntity;
import org.springframework.stereotype.Service;

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
public class Accountant extends BaseEntity {

    @Column(name = "first_name", nullable = false, length = 30)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 30)
    private String lastName;

    @Column(name = "email" , unique = true , length = 60 , nullable = false)
    private String email;

    @Column(name = "password", length = 100 , nullable = false)
    private String password;

    @Column(name = "mobile_no", length = 10)
    private String mobileNo;

}
